const steps = [
  {
    n: "I",
    title: "Заряженіе ленты",
    body: "Достопочтенный операторъ передаётъ длинную фильму въ пріёмный отсѣкъ аппарата.",
  },
  {
    n: "II",
    title: "Анализъ сценъ",
    body: "Внутренній механизмъ распознаётъ драматическіе моменты, реплики и лики говорящихъ.",
  },
  {
    n: "III",
    title: "Раскрой и склейка",
    body: "Невидимыя ножницы вырѣзаютъ лучшее, прилагая титры съ должнымъ изяществомъ.",
  },
  {
    n: "IV",
    title: "Готовыя миніатюры",
    body: "Изъ выходного лотка являются вертикальные шортсъ-фильмы для электрическихъ сѣтей.",
  },
];

export function Principle() {
  return (
    <section id="principle" className="border-t-2 border-ink bg-cream/30">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <SectionTitle kicker="Часть первая" title="Принципъ дѣйствія" />
        <div className="grid md:grid-cols-4 gap-6 mt-10">
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
    <div className="text-center">
      <p className="smallcaps text-xs text-ink/70">{kicker}</p>
      <h2 className="font-display font-black text-3xl md:text-5xl mt-2 ornament inline-block">
        {title}
      </h2>
    </div>
  );
}
