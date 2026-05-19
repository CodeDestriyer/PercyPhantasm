import { SectionTitle } from "./Principle";

const plans = [
  {
    name: "Любитель",
    price: "0 ₽",
    sub: "в месяц",
    perks: ["5 миниатюр в месяц", "Стандартные титры", "Поддержка по почте"],
    cta: "Начать бесплатно",
    featured: false,
  },
  {
    name: "Мастер",
    price: "990 ₽",
    sub: "в месяц",
    perks: [
      "100 миниатюр в месяц",
      "Изящные титры и шрифты",
      "Распознавание сцен",
      "Приоритетное содействие",
    ],
    cta: "Подписаться",
    featured: true,
  },
  {
    name: "Синдикат",
    price: "По запросу",
    sub: "для редакций",
    perks: ["Без ограничений", "Командные кабинеты", "API-сношения", "Личный мастер"],
    cta: "Связаться",
    featured: false,
  },
];

export function Pricing({ onLaunch }: { onLaunch: () => void }) {
  return (
    <section id="pricing" className="border-t-2 border-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <SectionTitle kicker="Часть четвёртая" title="Прейскурант" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-10">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                "border-2 border-ink p-5 sm:p-6 flex flex-col " +
                (p.featured ? "bg-ink text-paper" : "bg-paper")
              }
            >
              <div className="smallcaps text-xs opacity-70">{p.name}</div>
              <div className="mt-2 flex items-baseline gap-2 flex-wrap">
                <span className="font-display text-3xl sm:text-4xl">{p.price}</span>
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
