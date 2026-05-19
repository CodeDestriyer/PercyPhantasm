import { useState } from "react";
import { Masthead } from "./components/Masthead";
import { Hero } from "./components/Hero";
import { Principle } from "./components/Principle";
import { Colophon } from "./components/Colophon";

function App() {
  const [launched, setLaunched] = useState(false);
  const onLaunch = () => setLaunched(true);

  if (launched) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="border-2 border-ink p-8 sm:p-10 text-center max-w-md w-full">
          <p className="smallcaps text-xs text-ink/70">Аппарат запущен</p>
          <h1 className="font-display font-black text-3xl mt-3">
            Здесь будет продукт
          </h1>
          <p className="mt-3 text-sm text-ink/80">
            Заглушка: сюда подключим интерфейс загрузки ролика и нарезки.
          </p>
          <button
            onClick={() => setLaunched(false)}
            className="btn-engraved mt-6"
          >
            ← Назад в кабинет
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen">
      <Masthead onLaunch={onLaunch} />
      <Hero onLaunch={onLaunch} />
      <Principle />
      <Colophon onLaunch={onLaunch} />
    </div>
  );
}

export default App;
