import logo from "../assets/logo.jpg";

export function Masthead({ onLaunch }: { onLaunch: () => void }) {
  return (
    <header className="border-b-2 border-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between text-[10px] sm:text-xs smallcaps gap-3">
        <span>Anno MMXXVI · Vol. I</span>
        <span className="hidden md:inline">Патент заявлен</span>
        <span>Бесплатно</span>
      </div>
      <div className="rule-thin" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col items-center text-center">
        <img
          src={logo}
          alt="Percy Phantasm"
          className="h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 object-contain"
        />
        <h1 className="mt-4 sm:mt-6 font-display font-black tracking-tight text-[2.5rem] leading-[0.95] sm:text-6xl md:text-7xl">
          Percy&nbsp;Phantasm
        </h1>
        <p className="mt-3 italic text-ink/70 text-sm md:text-base px-2">
          Кабинет кинооператора — нарезает длинные ролики в короткие
        </p>
      </div>
      <div className="rule-double" />
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] sm:text-xs smallcaps">
        <a href="#principle" className="hover:underline">Как работает</a>
        <a href="#features" className="hover:underline">Достоинства</a>
        <a href="#testimony" className="hover:underline">Отзывы</a>
        <a href="#pricing" className="hover:underline">Прейскурант</a>
        <button onClick={onLaunch} className="hand-pointer hover:underline">
          Запустить
        </button>
      </nav>
      <div className="rule-thin" />
    </header>
  );
}
