import { SectionTitle } from "./Principle";

const plans = [
  {
    name: "Любитель",
    price: "0 ₽",
    sub: "въ мѣсяцъ",
    perks: ["V миніатюръ въ мѣсяцъ", "Стандартные титры", "Поддержка по почтѣ"],
    cta: "Начать безвозмездно",
    featured: false,
  },
  {
    name: "Мастеръ",
    price: "990 ₽",
    sub: "въ мѣсяцъ",
    perks: [
      "C миніатюръ въ мѣсяцъ",
      "Изящные титры и шрифты",
      "Распознаваніе сценъ",
      "Приоритетное содѣйствіе",
    ],
    cta: "Подписаться",
    featured: true,
  },
  {
    name: "Синдикатъ",
    price: "По запросу",
    sub: "для редакцій",
    perks: ["Безъ ограниченій", "Командные кабинеты", "API-сношенія", "Личный мастеръ"],
    cta: "Списаться",
    featured: false,
  },
];

export function Pricing({ onLaunch }: { onLaunch: () => void }) {
  return (
    <section id="pricing" className="border-t-2 border-ink">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <SectionTitle kicker="Часть четвёртая" title="Прейскурантъ" />
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                "border-2 border-ink p-6 flex flex-col " +
                (p.featured ? "bg-ink text-paper" : "bg-paper")
              }
            >
              <div className="smallcaps text-xs opacity-70">{p.name}</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-4xl">{p.price}</span>
                <span className="text-xs opacity-70">{p.sub}</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm flex-1">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span aria-hidden>✦</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={onLaunch}
                className={
                  "btn-engraved mt-6 justify-center " +
                  (p.featured ? "!bg-paper !text-ink" : "")
                }
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
