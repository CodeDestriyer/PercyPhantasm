import logo from "../assets/logo.jpg";

export function Masthead({ onLaunch }: { onLaunch: () => void }) {
  return (
    <header className="border-b-2 border-ink">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-xs smallcaps">
        <span>Anno MMXXVI · Vol. I, No. 1</span>
        <span className="hidden md:inline">Патентъ заявленъ</span>
        <span>Цѣна: безплатно</span>
      </div>
      <div className="rule-thin" />
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center text-center">
        <div className="flex items-center gap-5">
          <img
            src={logo}
            alt="Percy Phantasm"
            className="h-16 w-16 md:h-20 md:w-20 object-contain"
          />
          <h1 className="font-display font-black tracking-tight text-5xl md:text-7xl leading-none">
            Percy&nbsp;Phantasm
          </h1>
        </div>
        <p className="mt-3 italic text-ink/70 text-sm md:text-base">
          The Cinematographer's Cabinet · Кабинетъ Кинооператора
        </p>
      </div>
      <div className="rule-double" />
      <nav className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs smallcaps">
        <a href="#principle" className="hover:underline">Принципъ дѣйствія</a>
        <a href="#features" className="hover:underline">Достоинства</a>
        <a href="#testimony" className="hover:underline">Свидѣтельства</a>
        <a href="#pricing" className="hover:underline">Прейскурантъ</a>
        <button onClick={onLaunch} className="hand-pointer hover:underline">
          Запустить аппаратъ
        </button>
      </nav>
      <div className="rule-thin" />
    </header>
  );
}
