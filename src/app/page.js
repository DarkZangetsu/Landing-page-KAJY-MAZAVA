"use client";

import { motion } from "framer-motion";
import { Download, ShieldCheck, Zap, Globe, Smartphone, ArrowRight, CheckCircle2, ChevronRight, BarChart3, Users, Lock, ChevronDown } from "lucide-react";

export default function LandingPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navbar Premium */}
      <header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-800 to-blue-950 flex items-center justify-center shadow-lg shadow-blue-900/20">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tight">KAJY MAZAVA</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors">Fonctionnalités</a>
            <a href="#installation" className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors">Installation</a>
            <a
              href="#download"
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              <Download size={16} />
              <span>Télécharger l'APK</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-[120px] mix-blend-multiply" />
          <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-300/20 blur-[100px] mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-800 text-xs font-bold mb-8 border border-slate-200 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Version 1.0 disponible pour Android
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-6 tracking-tighter">
              La gestion <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-emerald-600">
                sur-mesure
              </span> pour votre association.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Fini les classeurs perdus et les tableaux Excel compliqués. Kajy Mazava centralise vos cotisations, dépenses et membres dans une application mobile ultra-rapide.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-5">
              <a
                href={process.env.NEXT_PUBLIC_APK_URL || "https://drive.google.com/file/d/1r8btxv9EfJDdhbkFLxRNeT0mRA-MGM0O/view?usp=drive_link"}
                download
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-950 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-1"
              >
                <Download size={22} strokeWidth={2.5} />
                <span className="text-lg">Télécharger l'Application</span>
              </a>
              <a href="#features" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-slate-700 hover:bg-slate-100 transition-colors">
                Découvrir
                <ChevronDown size={20} />
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 mt-10 border-t border-slate-200 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-slate-50 bg-slate-200 flex items-center justify-center overflow-hidden z-[${5 - i}]`}>
                    <User size={20} className="text-slate-400" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-slate-600">
                <span className="text-slate-900 font-bold block">Conçu pour les Trésoriers</span>
                Sécurisé, hors-ligne et intuitif.
              </div>
            </motion.div>
          </motion.div>

          {/* Premium Device Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-[340px] mx-auto perspective-1000"
          >
            {/* Ambient shadow behind phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-emerald-400/40 blur-3xl transform scale-90 translate-y-10 rounded-full -z-10" />

            <div className="relative aspect-[19.5/40] w-full rounded-[3rem] border-[12px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden ring-4 ring-slate-800/50">
              {/* Dynamic Island / Notch fake */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-xl z-50 flex justify-center items-end pb-1.5">
                <div className="w-16 h-1.5 bg-slate-800 rounded-full"></div>
              </div>

              {/* Fake App Interface */}
              <div className="w-full h-full bg-slate-50 relative flex flex-col font-sans">
                {/* Header App */}
                <div className="bg-gradient-to-b from-blue-950 to-blue-900 pt-14 pb-8 px-5 rounded-b-[2rem] shadow-lg relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                        <User size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-blue-200 text-[10px] uppercase font-bold tracking-wider">Trésorier</p>
                        <p className="text-white text-sm font-bold w-32 truncate">Fitahiana</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-300 text-xs font-semibold mb-1">Caisse Principale (Ar)</p>
                  <p className="text-white text-4xl font-black tracking-tight">1 245 000</p>

                  {/* Mini actions */}
                  <div className="flex gap-3 mt-6">
                    <div className="flex-1 bg-white/10 rounded-xl py-2 flex justify-center items-center backdrop-blur-md border border-white/10 text-white text-xs font-bold gap-1.5">
                      <Download size={14} /> Recevoir
                    </div>
                    <div className="flex-1 bg-white/10 rounded-xl py-2 flex justify-center items-center backdrop-blur-md border border-white/10 text-white text-xs font-bold gap-1.5">
                      <Zap size={14} /> Dépenser
                    </div>
                  </div>
                </div>

                {/* List App */}
                <div className="flex-1 p-5 overflow-hidden bg-slate-50">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-bold text-slate-800 text-sm">Dernières Actions</p>
                    <p className="text-blue-600 text-[11px] font-bold uppercase tracking-wider">Tout voir</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: "Cotisation Annuelle", subtitle: "Jean Dupont", amount: "+ 15 000", color: "text-emerald-600", bg: "bg-emerald-100", icon: <ArrowDownLeft size={16} className="text-emerald-700" /> },
                      { title: "Achat Fournitures", subtitle: "Dépense matérielle", amount: "- 45 000", color: "text-rose-600", bg: "bg-rose-100", icon: <ArrowUpRight size={16} className="text-rose-700" /> },
                      { title: "Événement Mensuel", subtitle: "Marie Rakoto", amount: "+ 120 000", color: "text-emerald-600", bg: "bg-emerald-100", icon: <ArrowDownLeft size={16} className="text-emerald-700" /> },
                      { title: "Cotisation Annuelle", subtitle: "Lucas R.", amount: "+ 15 000", color: "text-emerald-600", bg: "bg-emerald-100", icon: <ArrowDownLeft size={16} className="text-emerald-700" /> },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3.5 bg-white rounded-2xl shadow-sm border border-slate-100/80">
                        <div className="flex items-center gap-3.5">
                          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${item.bg}`}>
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900">{item.title}</p>
                            <p className="text-[10px] text-slate-500 font-medium mt-0.5">{item.subtitle}</p>
                          </div>
                        </div>
                        <p className={`text-sm font-black tracking-tight ${item.color}`}>{item.amount}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Nav Fake */}
                <div className="absolute bottom-0 w-full h-16 bg-white border-t border-slate-100 flex justify-around items-center px-4">
                  <div className="flex flex-col items-center text-blue-700">
                    <BarChart3 size={20} strokeWidth={2.5} />
                    <span className="text-[9px] font-bold mt-1">Accueil</span>
                  </div>
                  <div className="flex flex-col items-center text-slate-400">
                    <Users size={20} />
                    <span className="text-[9px] font-medium mt-1">Membres</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-700 rounded-full -translate-y-5 flex items-center justify-center shadow-lg shadow-blue-700/30 text-white">
                    <Zap size={20} className="fill-white" />
                  </div>
                  <div className="flex flex-col items-center text-slate-400">
                    <ShieldCheck size={20} />
                    <span className="text-[9px] font-medium mt-1">Sécurité</span>
                  </div>
                  <div className="flex flex-col items-center text-slate-400">
                    <User size={20} />
                    <span className="text-[9px] font-medium mt-1">Profil</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Badge 1 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 top-1/3 bg-white/90 backdrop-blur p-4 rounded-3xl shadow-2xl border border-white/40 flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-inner">
                <Lock size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Architecture</p>
                <p className="text-sm font-black text-slate-900">100% Hors-Ligne</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <section className="border-y border-slate-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10 md:gap-24 opacity-60">
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} className="text-slate-600" />
            <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Données Protégées</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe size={24} className="text-slate-600" />
            <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Synchronisation Cloud</span>
          </div>
          <div className="flex items-center gap-3">
            <Download size={24} className="text-slate-600" />
            <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Exports PDF / Excel</span>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-24 lg:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Pensé pour vous simplifier la vie.</h2>
            <p className="text-slate-600 text-lg">Toutes les fonctionnalités critiques pour assurer la transparence de votre association, sans la complexité habituelle.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Bento Box 1 - Span 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <BarChart3 size={120} strokeWidth={1} />
              </div>
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <BarChart3 size={28} className="text-blue-700" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 relative z-10">Transparence Absolue</h3>
              <p className="text-slate-600 text-lg max-w-md relative z-10">Suivez chaque centime grâce un historique complet, générez des bilans professionnels et exportez les rapports en PDF ou Excel en un clic.</p>
            </motion.div>

            {/* Bento Box 2 - Span 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[2.5rem] p-10 shadow-xl shadow-emerald-600/20 text-white relative overflow-hidden group"
            >
              <div className="absolute bottom-0 right-0 opacity-20 transform translate-x-4 translate-y-4 group-hover:scale-110 transition-transform">
                <Zap size={150} strokeWidth={1} />
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-3">Ultra Rapide</h3>
              <p className="text-emerald-50 text-lg opacity-90">Enregistrez de nouvelles cotisations en quelques secondes. Aucune connexion requise.</p>
            </motion.div>

            {/* Bento Box 3 - Span 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl shadow-slate-200/40"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Users size={28} className="text-purple-700" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Multi-utilisateurs</h3>
              <p className="text-slate-600 text-lg">Gérez les comptes trésoriers et valideurs facilement. Synchronisation assurée dès le retour en ligne.</p>
            </motion.div>

            {/* Bento Box 4 - Span 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 shadow-xl relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/50 to-transparent pointer-events-none" />
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <Globe size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Synchronisation Transparente</h3>
              <p className="text-slate-400 text-lg max-w-lg">Nous fusionnons automatiquement vos données locales avec la base de données centrale dès qu'une connexion à internet est détectée. Jamais de coupure dans votre workflow.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Installation Guide & CTA */}
      <section id="installation" className="py-24 lg:py-32 bg-white border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Démarrez en <br /><span className="text-blue-700">3 étapes simples.</span></h2>
            <p className="text-slate-600 text-xl mb-12">Pour garantir votre sécurité et indépendance, Kajy Mazava est distribué directement via un exécutable APK sécurisé.</p>

            <div className="space-y-10 mb-12">
              {[
                { title: "Téléchargez le fichier APK", desc: "Cliquez sur le bouton ci-dessous pour obtenir la dernière version." },
                { title: "Autorisez l'installation", desc: "Dans vos paramètres Android, permettez temporairement l'installation depuis des sources inconnues." },
                { title: "Gérez votre association", desc: "Lancez Kajy Mazava, entrez, créez vos comptes et c'est parti !" }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 relative">
                  {idx !== 2 && <div className="absolute left-6 top-14 bottom-[-40px] w-0.5 bg-slate-100"></div>}
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center font-black text-lg flex-shrink-0 relative z-10 shadow-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-600 mt-2">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div id="download" className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem] flex flex-col sm:flex-row items-center gap-6 shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                <Download size={28} className="text-white" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-lg font-black text-slate-900">Application Android (APK)</h4>
                <p className="text-slate-500 text-sm mb-4">Version 1.0.0 • Sécurisé • Sans Publicité</p>
                <a
                  href={process.env.NEXT_PUBLIC_APK_URL || "https://drive.google.com/file/d/1r8btxv9EfJDdhbkFLxRNeT0mRA-MGM0O/view?usp=drive_link"}
                  download
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md active:scale-95"
                >
                  Télécharger le fichier
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-10 lg:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10 pb-10 border-b border-slate-800">
                <Smartphone size={40} className="text-emerald-400" />
                <div>
                  <h3 className="text-white font-black text-2xl">Pré-requis Système</h3>
                  <p className="text-slate-400">Ce qu'il vous faut pour démarrer</p>
                </div>
              </div>
              <ul className="space-y-6">
                {[
                  "Smartphone ou Tablette Android (v8.0 ou supérieur).",
                  "Espace de stockage : 30 Mo minimum.",
                  "Aucune connexion permanente requise pour un usage journalier.",
                  "Pas de compte Google nécessaire."
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-300 text-lg">
                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={16} className="text-emerald-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between mb-16 border-b border-slate-800 pb-16">
          <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">KAJY MAZAVA</span>
            </div>
            <p className="text-slate-400 max-w-sm text-center md:text-left">
              L'application complète pour assurer la transparence et la modernité des finances associatives.
            </p>
          </div>

          <div className="flex gap-16 text-center md:text-left">
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Produit</h4>
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-slate-400 hover:text-white transition-colors">Fonctionnalités</a>
                <a href="#installation" className="text-slate-400 hover:text-white transition-colors">Guide d'installation</a>
                <a href="#download" className="text-slate-400 hover:text-white transition-colors">Télécharger l'APK</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Support</h4>
              <div className="flex flex-col space-y-4">
                <a href="mailto:rakotosalamafitahiana@gmail.com" className="text-slate-400 hover:text-white transition-colors">Nous Contacter</a>
                <span className="text-slate-400 flex items-center gap-2 m-auto md:m-0">
                  WhatsApp +261 34 31 720 81
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} Kajy Mazava. Tous droits réservés.</p>
          <p className="mt-4 md:mt-0 opacity-70">Designé pour les Trésoriers.</p>
        </div>
      </footer>
    </div>
  );
}

function ArrowDownLeft({ size, className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="17" y1="7" x2="7" y2="17"></line>
      <polyline points="17 17 7 17 7 7"></polyline>
    </svg>
  )
}

function ArrowUpRight({ size, className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  )
}

function User({ size, color, className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  )
}
