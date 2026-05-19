export function Hero({ onLaunch }: { onLaunch: () => void }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
        <div className="md:col-span-7 order-2 md:order-1">
          <p className="smallcaps text-[11px] sm:text-xs mb-4 ornament inline-block">
            Сенсационный аппарат
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Кинематограф-<span className="italic">резак</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-ink/80 max-w-xl">
            Механический ассистент, обращающий длинные фильмы в карманные
            миниатюры для всеобщего увеселения в электрических сетях.
          </p>
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button onClick={onLaunch} className="btn-engraved justify-center">
              <span>Запустить аппарат</span>
              <span aria-hidden>→</span>
            </button>
            <a href="#principle" className="btn-engraved !bg-ink !text-paper justify-center">
              Как работает
            </a>
          </div>
          <dl className="mt-9 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
            {[
              ["9:16", "Вертикальный формат"],
              ["∞", "Длина ленты"],
              ["~1 мин", "На обработку"],
            ].map(([n, l]) => (
              <div key={l} className="border-t-2 border-ink pt-2">
                <dt className="font-display text-xl sm:text-2xl">{n}</dt>
                <dd className="text-[10px] sm:text-xs smallcaps text-ink/70 mt-1 leading-tight">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="md:col-span-5 order-1 md:order-2">
          <PatentDrawing />
        </div>
      </div>
    </section>
  );
}

function PatentDrawing() {
  return (
    <figure className="border-2 border-ink p-3 sm:p-4 bg-cream/40">
      <div className="border border-ink/40 p-3">
        <svg
          viewBox="0 0 320 360"
          className="w-full h-auto"
          stroke="#1A1613"
          fill="none"
          strokeWidth="1.2"
        >
          <rect x="6" y="6" width="308" height="348" strokeDasharray="2 4" />
          <text x="160" y="26" textAnchor="middle" fontSize="10" fill="#1A1613" fontFamily="JetBrains Mono">
            FIG. I — APPARATUS
          </text>

          <circle cx="100" cy="160" r="46" />
          <circle cx="100" cy="160" r="34" />
          <circle cx="100" cy="160" r="6" fill="#1A1613" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * Math.PI) / 6;
            return (
              <line
                key={i}
                x1={100 + Math.cos(a) * 34}
                y1={160 + Math.sin(a) * 34}
                x2={100 + Math.cos(a) * 46}
                y2={160 + Math.sin(a) * 46}
              />
            );
          })}

          <rect x="160" y="130" width="120" height="60" />
          <rect x="170" y="140" width="60" height="40" />
          <circle cx="252" cy="160" r="10" />
          <line x1="262" y1="160" x2="290" y2="160" />
          <line x1="280" y1="152" x2="290" y2="160" />
          <line x1="280" y1="168" x2="290" y2="160" />

          <path d="M40 250 Q160 220 280 250" />
          <path d="M40 260 Q160 230 280 260" />
          <line x1="80" y1="248" x2="80" y2="262" />
          <line x1="140" y1="240" x2="140" y2="252" />
          <line x1="200" y1="240" x2="200" y2="252" />
          <line x1="260" y1="248" x2="260" y2="262" />

          <text x="100" y="225" textAnchor="middle" fontSize="9" fill="#1A1613" fontFamily="JetBrains Mono">
            а. бобина
          </text>
          <text x="220" y="210" textAnchor="middle" fontSize="9" fill="#1A1613" fontFamily="JetBrains Mono">
            б. анализатор
          </text>
          <text x="160" y="290" textAnchor="middle" fontSize="9" fill="#1A1613" fontFamily="JetBrains Mono">
            в. кинолента
          </text>

          <line x1="20" y1="320" x2="300" y2="320" strokeDasharray="1 3" />
          <text x="160" y="338" textAnchor="middle" fontSize="9" fill="#1A1613" fontFamily="JetBrains Mono" fontStyle="italic">
            scale 1 : 8 · sketched by hand
          </text>
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-[11px] sm:text-xs smallcaps">
        Чертёж № 1 — Общий вид
      </figcaption>
    </figure>
  );
}
