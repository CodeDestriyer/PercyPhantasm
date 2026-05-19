import logo from "../assets/logo.jpg";

export function Colophon({ onLaunch }: { onLaunch: () => void }) {
  return (
    <section className="border-t-2 border-ink bg-cream/40">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="smallcaps text-xs text-ink/70">Заключительное слово</p>
        <h2 className="font-display font-black text-4xl md:text-5xl mt-2">
          Не угодно ли запустить аппаратъ?
        </h2>
        <p className="mt-4 text-ink/80 max-w-xl mx-auto">
          Достаточно нажать на сію медную кнопку, и Percy Phantasm приступитъ
          къ своему ремеслу.
        </p>
        <div className="mt-7">
          <button onClick={onLaunch} className="btn-engraved !bg-ink !text-paper">
            ☞ Запустить аппаратъ
          </button>
        </div>
      </div>
      <div className="rule-thin" />
      <footer className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs smallcaps">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-8 w-8 object-contain" />
          <span>Percy Phantasm · Anno MMXXVI</span>
        </div>
        <div className="opacity-70">
          Печатано въ типографіи №&nbsp;1, всѣ права заявлены
        </div>
      </footer>
    </section>
  );
}
