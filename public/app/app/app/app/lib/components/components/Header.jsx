"use client";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ lang }) {
  const items = {
    pt: ["Início","Serviços","Casos","Equipe","Contactos"],
    en: ["Home","Services","Cases","Team","Contact"],
    fr: ["Accueil","Services","Cas","Équipe","Contact"]
  }[lang];

  const idMap = ["inicio","servicos","casos","equipe","contact"];
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="container py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="2BGREEN" className="w-9 h-9 rounded-xl" />
          <span className="font-semibold">2BGREEN</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {items.map((item, i) => (
            <a key={item} href={`#${idMap[i]}`} className="hover:text-emerald-700">{item}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher current={lang} />
          <a href="#contact" className="hidden sm:inline-block btn btn-primary">
            {lang === "pt" ? "Fale connosco" : lang === "en" ? "Talk to us" : "Parlez-nous"}
          </a>
        </div>
      </div>
    </header>
  );
}
