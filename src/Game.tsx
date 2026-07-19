import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

type GameState = 'menu' | 'playing' | 'over'

const ARENA = 24 // half-size of the square arena
const CRYSTALS = 8
const GAME_TIME = 60 // seconds

export default function Game() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<GameState>('menu')
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(GAME_TIME)
  const [best, setBest] = useState(() => Number(localStorage.getItem('best') ?? 0))

  // refs so the animation loop can read the latest state without re-binding
  const stateRef = useRef<GameState>('menu')
  const startRef = useRef<() => void>(() => {})
  stateRef.current = state

  useEffect(() => {
    const mount = mountRef.current!
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#0b1020')
    scene.fog = new THREE.Fog('#0b1020', 30, 70)

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.shadowMap.enabled = true
    mount.appendChild(renderer.domElement)

    // lights
    const hemi = new THREE.HemisphereLight('#88aaff', '#222244', 0.9)
    scene.add(hemi)
    const sun = new THREE.DirectionalLight('#ffffff', 1.4)
    sun.position.set(20, 40, 20)
    sun.castShadow = true
    sun.shadow.mapSize.set(1024, 1024)
    sun.shadow.camera.left = -40
    sun.shadow.camera.right = 40
    sun.shadow.camera.top = 40
    sun.shadow.camera.bottom = -40
    scene.add(sun)

    // arena floor
    const floor = new THREE.Mesh(
      new THREE.BoxGeometry(ARENA * 2, 1, ARENA * 2),
      new THREE.MeshStandardMaterial({ color: '#1b2340', metalness: 0.2, roughness: 0.8 })
    )
    floor.position.y = -0.5
    floor.receiveShadow = true
    scene.add(floor)

    // glowing grid on top of the floor
    const grid = new THREE.GridHelper(ARENA * 2, 24, '#3355aa', '#26305a')
    grid.position.y = 0.01
    scene.add(grid)

    // player ball
    const player = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshStandardMaterial({ color: '#ff5577', emissive: '#661122', roughness: 0.3, metalness: 0.4 })
    )
    player.position.set(0, 1, 0)
    player.castShadow = true
    scene.add(player)

    // crystals
    const crystalGeo = new THREE.OctahedronGeometry(0.8)
    const crystalMat = new THREE.MeshStandardMaterial({
      color: '#33ffcc', emissive: '#0a5544', roughness: 0.1, metalness: 0.6,
    })
    const crystals: THREE.Mesh[] = []
    function placeCrystal(m: THREE.Mesh) {
      m.position.set(
        (Math.random() * 2 - 1) * (ARENA - 3),
        1.2,
        (Math.random() * 2 - 1) * (ARENA - 3)
      )
    }
    for (let i = 0; i < CRYSTALS; i++) {
      const c = new THREE.Mesh(crystalGeo, crystalMat.clone())
      placeCrystal(c)
      c.castShadow = true
      crystals.push(c)
      scene.add(c)
    }

    // input
    const keys: Record<string, boolean> = {}
    const onDown = (e: KeyboardEvent) => { keys[e.key.toLowerCase()] = true }
    const onUp = (e: KeyboardEvent) => { keys[e.key.toLowerCase()] = false }
    window.addEventListener('keydown', onDown)
    window.addEventListener('keyup', onUp)

    // touch drag for mobile
    let touch: { x: number; y: number } | null = null
    const dragDir = { x: 0, z: 0 }
    const onTS = (e: TouchEvent) => { const t = e.touches[0]; touch = { x: t.clientX, y: t.clientY } }
    const onTM = (e: TouchEvent) => {
      if (!touch) return
      const t = e.touches[0]
      dragDir.x = Math.max(-1, Math.min(1, (t.clientX - touch.x) / 40))
      dragDir.z = Math.max(-1, Math.min(1, (t.clientY - touch.y) / 40))
    }
    const onTE = () => { touch = null; dragDir.x = 0; dragDir.z = 0 }
    renderer.domElement.addEventListener('touchstart', onTS)
    renderer.domElement.addEventListener('touchmove', onTM)
    renderer.domElement.addEventListener('touchend', onTE)

    const velocity = new THREE.Vector3()
    let localScore = 0
    let startTime = 0

    function reset() {
      player.position.set(0, 1, 0)
      velocity.set(0, 0, 0)
      crystals.forEach(placeCrystal)
      localScore = 0
      startTime = performance.now()
      setScore(0)
      setTime(GAME_TIME)
    }

    startRef.current = () => {
      reset()
      setState('playing')
      stateRef.current = 'playing'
    }

    const clock = new THREE.Clock()

    function resize() {
      const w = mount.clientWidth
      const h = mount.clientHeight
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    let raf = 0
    function loop() {
      raf = requestAnimationFrame(loop)
      const dt = Math.min(clock.getDelta(), 0.05)

      // spin crystals always
      crystals.forEach((c) => { c.rotation.y += dt * 2; c.position.y = 1.2 + Math.sin(performance.now() / 400 + c.id) * 0.3 })

      if (stateRef.current === 'playing') {
        const accel = 40
        const dir = new THREE.Vector3()
        if (keys['w'] || keys['arrowup']) dir.z -= 1
        if (keys['s'] || keys['arrowdown']) dir.z += 1
        if (keys['a'] || keys['arrowleft']) dir.x -= 1
        if (keys['d'] || keys['arrowright']) dir.x += 1
        dir.x += dragDir.x
        dir.z += dragDir.z
        if (dir.lengthSq() > 0) dir.normalize()
        velocity.x += dir.x * accel * dt
        velocity.z += dir.z * accel * dt
        velocity.multiplyScalar(0.94) // friction

        player.position.x += velocity.x * dt
        player.position.z += velocity.z * dt

        // rolling rotation
        player.rotation.z -= velocity.x * dt
        player.rotation.x += velocity.z * dt

        // fall off the edge = game over
        if (Math.abs(player.position.x) > ARENA + 2 || Math.abs(player.position.z) > ARENA + 2) {
          endGame()
        }

        // collect crystals
        crystals.forEach((c) => {
          if (player.position.distanceTo(c.position) < 1.8) {
            localScore++
            setScore(localScore)
            placeCrystal(c)
          }
        })

        // timer
        const remaining = GAME_TIME - (performance.now() - startTime) / 1000
        if (remaining <= 0) endGame()
        else setTime(Math.ceil(remaining))
      }

      // camera follows player (third-person)
      const target = new THREE.Vector3(player.position.x, 0, player.position.z)
      camera.position.lerp(
        new THREE.Vector3(player.position.x, 18, player.position.z + 22),
        0.08
      )
      camera.lookAt(target)

      renderer.render(scene, camera)
    }

    function endGame() {
      if (stateRef.current !== 'playing') return
      stateRef.current = 'over'
      setState('over')
      setBest((b) => {
        const nb = Math.max(b, localScore)
        localStorage.setItem('best', String(nb))
        return nb
      })
    }

    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup', onUp)
      window.removeEventListener('resize', resize)
      renderer.domElement.removeEventListener('touchstart', onTS)
      renderer.domElement.removeEventListener('touchmove', onTM)
      renderer.domElement.removeEventListener('touchend', onTE)
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="game-root">
      <div ref={mountRef} className="game-canvas" />

      <div className="hud">
        <div className="hud-item">⬥ {score}</div>
        <div className="hud-item">⏱ {time}</div>
        <div className="hud-item">★ {best}</div>
      </div>

      {state !== 'playing' && (
        <div className="overlay">
          <div className="panel">
            {state === 'menu' ? (
              <>
                <h1>КРИСТАЛЛ&nbsp;РАННЕР</h1>
                <p>Катай шар, собирай кристаллы, не свались с арены.</p>
                <p className="hint">WASD / стрелки · на телефоне — тяни пальцем</p>
              </>
            ) : (
              <>
                <h1>ИГРА ОКОНЧЕНА</h1>
                <p className="big">Собрано: {score}</p>
                <p className="hint">Рекорд: {best}</p>
              </>
            )}
            <button onClick={() => startRef.current()}>
              {state === 'menu' ? 'ИГРАТЬ' : 'ЕЩЁ РАЗ'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
