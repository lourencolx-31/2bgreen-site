"use client";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { locales, features, casestudies } from "../lib/translations";

export default function Home({ lang="pt" }) {
  const t = locales[lang];

  return (
    <div className="min-h-screen">
      <Header lang={lang} />

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="container py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="badge">
              <span>●</span> {t.heroBadge}
            </div>
            <h1 className="h1 mt-5">{t.heroTitle}</h1>
            <p className="mt-5 text-slate-600 text-lg md:text-xl">{t.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">{t.ctaPrimary}</a>
              <a href="/onepager.pdf" className="btn btn-outline" target="_blank" rel="noreferrer">{t.ctaSecondary}</a>
            </div>
            <div className="mt-6 text-xs text-slate-500">
              * NDA-friendly: detalhes completos sob acordo de confidencialidade.
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl border shadow-sm overflow-hidden bg-white">
              <div className="w-full h-full grid place-items-center">
                <div className="text-center p-10">
                  <div className="text-6xl">🌍</div>
                  <p className="mt-3 text-sm text-slate-500">Impacto real para países e cidades</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="section border-t bg-white">
        <div className="container">
          <h2 className="h2">{t.servicesTitle}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-3xl border p-6 shadow-sm bg-gradient-to-b from-white to-emerald-50/30"
              >
                <h3 className="text-lg font-semibold">{f.title[lang]}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="casos" className="section bg-emerald-50">
        <div className="container">
          <h2 className="h2">{t.casesTitle}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {casestudies.map((c, i) => (
              <div key={i} className="card">
                <div className="text-xs uppercase tracking-wide text-emerald-700 font-semibold">{c.country}</div>
                <div className="mt-2 font-semibold">{c.title}</div>
                <div className="mt-1 text-sm text-slate-600">{c.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipe" className="section bg-white">
        <div className="container">
          <h2 className="h2">{t.teamTitle}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((n) => (
              <div key={n} className="card">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100" />
                <div className="mt-3 font-semibold">Membro da Equipe {n}</div>
                <div className="text-sm text-slate-600">Especialidade / País</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section bg-gradient-to-t from-emerald-100/40 to-white border-t">
        <div className="container">
          <h2 className="h2">{t.contactTitle}</h2>
          <form action="#" method="POST" className="mt-8 grid md:grid-cols-2 gap-6" onSubmit={(e)=>{e.preventDefault(); alert('Obrigado! Entraremos em contacto em breve.');}}>
            <input className="w-full border rounded-2xl px-4 py-3" placeholder="Nome" name="name" required />
            <input className="w-full border rounded-2xl px-4 py-3" placeholder="Email" type="email" name="email" required />
            <input className="w-full border rounded-2xl px-4 py-3 md:col-span-2" placeholder="Assunto" name="subject" />
            <textarea className="w-full border rounded-2xl px-4 py-3 md:col-span-2" placeholder="Mensagem" rows={5} name="message" />
            <div className="md:col-span-2 flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" name="newsletter" /> {t.newsletterLabel}
              </label>
              <button className="btn btn-primary">{t.contactCTA}</button>
            </div>
          </form>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
