const steps = [
  {
    n: "I",
    title: "Заряжение ленты",
    body: "Достопочтенный оператор передаёт длинный ролик в приёмный отсек аппарата.",
  },
  {
    n: "II",
    title: "Анализ сцен",
    body: "Внутренний механизм распознаёт драматические моменты, реплики и лица говорящих.",
  },
  {
    n: "III",
    title: "Раскрой и склейка",
    body: "Невидимые ножницы вырезают лучшее, прилагая титры с должным изяществом.",
  },
  {
    n: "IV",
    title: "Готовые миниатюры",
    body: "Из выходного лотка являются вертикальные шортсы для электрических сетей.",
  },
];

export function Principle() {
  return (
    <section id="principle" className="border-t-2 border-ink bg-cream/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <SectionTitle kicker="Часть первая" title="Принцип действия" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 mt-10">
          {steps.map((s) => (
            <article
              key={s.n}
              className="border-2 border-ink bg-paper p-5 relative"
            >
              <div className="absolute -top-4 left-4 bg-paper px-2 font-display text-2xl">
                Фиг. {s.n}
              </div>
              <h3 className="font-display text-xl mt-2">{s.title}</h3>
              <p className="mt-3 text-sm text-ink/80 leading-relaxed">{s.body}</p>
              <div className="mt-4 rule-thin" />
              <div className="mt-2 text-[10px] smallcaps text-ink/60">
                Sketched by hand
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <div className="text-center px-2">
      <p className="smallcaps text-[11px] sm:text-xs text-ink/70">{kicker}</p>
      <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mt-2 ornament inline-block">
        {title}
      </h2>
    </div>
  );
}
