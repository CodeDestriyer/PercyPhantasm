import { SectionTitle } from "./Principle";

const quotes = [
  {
    text: "Невиданное изобретение! За единый вечер обратил все свои фильмы в блистательные миниатюры.",
    by: "г-н А. Люмьер",
    where: "Париж, 12 мая",
  },
  {
    text: "Аппарат работает без устали, как хорошо смазанный механизм часовщика.",
    by: "м-сс Э. Майбридж",
    where: "Лондон, 14 мая",
  },
  {
    text: "Рекомендую всем собратьям по синематографическому ремеслу.",
    by: "г-н Т. Эдисон",
    where: "Нью-Йорк, 17 мая",
  },
];

export function Testimony() {
  return (
    <section id="testimony" className="border-t-2 border-ink bg-cream/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <SectionTitle kicker="Часть третья" title="Свидетельства публики" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-10">
          {quotes.map((q) => (
            <figure key={q.by} className="bg-paper border-2 border-ink p-5 sm:p-6">
              <blockquote className="font-display italic text-lg leading-snug">
                <span className="text-3xl mr-1 align-top">“</span>
                {q.text}
                <span className="text-3xl ml-1 align-bottom">”</span>
              </blockquote>
              <figcaption className="mt-5 rule-thin pt-3 text-sm">
                <div className="font-semibold">{q.by}</div>
                <div className="smallcaps text-xs text-ink/60">{q.where}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
