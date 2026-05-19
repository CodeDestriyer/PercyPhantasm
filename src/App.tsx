import { useState } from "react";
import { Masthead } from "./components/Masthead";
import { Hero } from "./components/Hero";
import { Principle } from "./components/Principle";
import { Features } from "./components/Features";
import { Testimony } from "./components/Testimony";
import { Pricing } from "./components/Pricing";
import { Colophon } from "./components/Colophon";

function App() {
  const [launched, setLaunched] = useState(false);
  const onLaunch = () => setLaunched(true);

  if (launched) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="border-2 border-ink p-10 text-center max-w-md">
          <p className="smallcaps text-xs text-ink/70">Аппаратъ запущенъ</p>
          <h1 className="font-display font-black text-3xl mt-3">
            Здѣсь будетъ продуктъ
          </h1>
          <p className="mt-3 text-sm text-ink/80">
            Заглушка: сюда подключимъ интерфейсъ загрузки фильмы и нарѣзки.
          </p>
          <button
            onClick={() => setLaunched(false)}
            className="btn-engraved mt-6"
          >
            ← Назадъ въ кабинетъ
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
      <Features />
      <Testimony />
      <Pricing onLaunch={onLaunch} />
      <Colophon onLaunch={onLaunch} />
    </div>
  );
}

export default App;
