import logo from "../assets/logo.jpg";

export function Colophon() {
  return (
    <section className="border-t-2 border-ink bg-cream/40">
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
