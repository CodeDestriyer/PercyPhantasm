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
    <figure className="border-2 border-ink p-3 sm:p-4 bg-paper">
      <div className="border border-ink/40 p-3">
        <img
          src="/assets/schematic.jpg"
          alt="Схема: рука мастера режет киноленту"
          className="w-full h-auto block"
        />
      </div>
      <figcaption className="mt-3 text-center text-[11px] sm:text-xs smallcaps">
        Чертёж № 1 — Ручной раскрой ленты
      </figcaption>
    </figure>
  );
}
