import logo from "../assets/logo.jpg";

export function Colophon({ onLaunch }: { onLaunch: () => void }) {
  return (
    <section className="border-t-2 border-ink bg-cream/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 text-center">
        <img
          src={logo}
          alt=""
          className="h-24 w-24 sm:h-28 sm:w-28 object-contain mx-auto mb-6"
        />
        <p className="smallcaps text-[11px] sm:text-xs text-ink/70">Заключительное слово</p>
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mt-2">
          Не угодно ли запустить аппарат?
        </h2>
        <p className="mt-4 text-ink/80 max-w-xl mx-auto text-sm sm:text-base">
          Достаточно нажать на сию медную кнопку, и Percy Phantasm приступит
          к своему ремеслу.
        </p>
        <div className="mt-7">
          <button onClick={onLaunch} className="btn-engraved !bg-ink !text-paper">
            ☞ Запустить аппарат
          </button>
        </div>
      </div>
      <div className="rule-thin" />
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-5 sm:py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-[11px] sm:text-xs smallcaps text-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-10 w-10 object-contain" />
          <span>Percy Phantasm · Anno MMXXVI</span>
        </div>
        <div className="opacity-70">
          Печатано в типографии №&nbsp;1, все права заявлены
        </div>
      </footer>
    </section>
  );
}
