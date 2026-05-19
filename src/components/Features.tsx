import { SectionTitle } from "./Principle";

const features = [
  {
    title: "Распознавание драмы",
    body: "Аппарат безошибочно угадывает моменты наивысшего напряжения действия.",
    icon: "M10 2v6M10 12v6M2 10h6M12 10h6",
  },
  {
    title: "Сохранение лица",
    body: "Говорящий всегда пребывает в центре кадра, как на портрете мастера.",
    icon: "circle",
  },
  {
    title: "Изящные титры",
    body: "Подписи накладываются с типографским вкусом, без грубости и излишеств.",
    icon: "M2 6h16M2 10h12M2 14h16",
  },
  {
    title: "Вертикальный формат",
    body: "Готовые миниатюры соответствуют пропорциям карманных устройств.",
    icon: "rect",
  },
  {
    title: "Многоязычие",
    body: "Распознаёт речь на множестве европейских и заморских наречий.",
    icon: "M3 10h14M10 3v14",
  },
  {
    title: "Скоростной разбор",
    body: "Часовой ролик превращается в дюжину миниатюр за время чашки чаю.",
    icon: "clock",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t-2 border-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <SectionTitle kicker="Часть вторая" title="Достоинства аппарата" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-ink mt-10 border-2 border-ink">
          {features.map((f) => (
            <div key={f.title} className="bg-paper p-5 sm:p-6">
              <FeatureIcon kind={f.icon} />
              <h3 className="font-display text-xl mt-4">{f.title}</h3>
              <p className="mt-2 text-sm text-ink/80 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ kind }: { kind: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className="w-10 h-10"
      stroke="#1A1613"
      strokeWidth="1"
      fill="none"
    >
      <rect x="0.5" y="0.5" width="19" height="19" />
      {kind === "circle" && (
        <>
          <circle cx="10" cy="10" r="5" />
          <circle cx="10" cy="10" r="1.5" fill="#1A1613" />
        </>
      )}
      {kind === "rect" && (
        <>
          <rect x="7" y="4" width="6" height="12" />
          <circle cx="10" cy="14" r="0.8" fill="#1A1613" />
        </>
      )}
      {kind === "clock" && (
        <>
          <circle cx="10" cy="10" r="6" />
          <line x1="10" y1="10" x2="10" y2="6" />
          <line x1="10" y1="10" x2="13" y2="11" />
        </>
      )}
      {kind.startsWith("M") && <path d={kind} />}
    </svg>
  );
}
