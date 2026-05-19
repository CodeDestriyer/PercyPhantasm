import { SectionTitle } from "./Principle";

const quotes = [
  {
    text: "Невиданное изобрѣтеніе! За единый вечеръ обратилъ всѣ свои фильмы въ блистательныя миніатюры.",
    by: "г-нъ А. Лумьеръ",
    where: "Парижъ, мая 12-го",
  },
  {
    text: "Аппаратъ работаетъ безъ устали, какъ хорошо смазанный механизмъ часовщика.",
    by: "м-ссъ Э. Мьюбриджъ",
    where: "Лондонъ, мая 14-го",
  },
  {
    text: "Рекомендую всѣмъ собратьямъ по ремеслу синематографическому.",
    by: "г-нъ Т. Эдисонъ",
    where: "Нью-Іоркъ, мая 17-го",
  },
];

export function Testimony() {
  return (
    <section id="testimony" className="border-t-2 border-ink bg-cream/30">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <SectionTitle kicker="Часть третья" title="Свидѣтельства публики" />
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {quotes.map((q) => (
            <figure key={q.by} className="bg-paper border-2 border-ink p-6">
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
