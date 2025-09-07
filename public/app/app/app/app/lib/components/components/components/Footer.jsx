export default function Footer({ lang }) {
  const text = {
    pt: "© 2025 2BGREEN. Todos os direitos reservados.",
    en: "© 2025 2BGREEN. All rights reserved.",
    fr: "© 2025 2BGREEN. Tous droits réservés."
  }[lang];

  return (
    <footer className="border-t bg-white">
      <div className="container py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>{text}</div>
        <div className="flex items-center gap-4">
          <a href={`/${lang}/privacy`} className="hover:text-emerald-700">Privacy</a>
          <a href={`/${lang}/terms`} className="hover:text-emerald-700">Terms</a>
          <a href="mailto:contact@2bgreen.org" className="hover:text-emerald-700">contact@2bgreen.org</a>
        </div>
      </div>
    </footer>
  );
}
