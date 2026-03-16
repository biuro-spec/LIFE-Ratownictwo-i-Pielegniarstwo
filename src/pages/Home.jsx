import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, HeartPulse, ChevronRight, CheckCircle2, Clock, Star, Quote, MapPin, Phone, Mail, Users, FileCheck, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { blogArticles } from '../data/blogArticles';

const Home = () => {
  useSEO({
    title: 'LIFE-Ratownictwo Medyczne | Transport Medyczny Racib\u00F3rz | Zabezpieczenia Imprez',
    description: 'Profesjonalne ratownictwo medyczne, transport sanitarny i medyczny, zabezpieczenia imprez masowych oraz szkolenia z pierwszej pomocy. Dzia\u0142amy od 2012 roku w Raciborzu, Rybniku i na ca\u0142ym \u015Al\u0105sku.'
  });

  const reviews = [
    {
      name: "Maria K.",
      text: "Perfekcyjne podej\u015Bcie do pacjenta i fachowa pomoc. Pan Mariusz to ciep\u0142y, empatyczny cz\u0142owiek. Profesjonalista w swoim fachu \u2014 gor\u0105co polecam!",
      source: "Google",
      category: "Transport medyczny",
    },
    {
      name: "Tomasz P.",
      text: "Pe\u0142ny profesjonalizm. Super podej\u015Bcie do pacjenta. Szczerze polecam t\u0119 firm\u0119 ka\u017Cdemu, kto potrzebuje transportu medycznego na \u015Al\u0105sku.",
      source: "Google",
      category: "Transport sanitarny",
    },
    {
      name: "Anna W.",
      text: "Pan Mariusz by\u0142 z nami podczas najtrudniejszych chwil. Dobre s\u0142owo i otucha s\u0105 r\u00F3wnie wa\u017Cne co pomoc medyczna. Dzi\u0119kujemy z ca\u0142ego serca!",
      source: "Google",
      category: "Opieka piel\u0119gniarska",
    },
    {
      name: "Firma / Zak\u0142ad",
      text: "Przeprowadzili szkolenie z pierwszej pomocy dla naszego zespo\u0142u. Szkolenie by\u0142o praktyczne, anga\u017Cuj\u0105ce i pe\u0142ne inicjatywy. Gor\u0105co polecamy!",
      source: "Google",
      category: "Szkolenia KPP",
    },
    {
      name: "Janusz S.",
      text: "Zabezpieczenie medyczne naszego festiwalu przebieg\u0142o bez zarzutu. Profesjonalna obs\u0142uga, zawsze na miejscu, pe\u0142ne wyposa\u017Cenie. Skorzystamy ponownie!",
      source: "Google",
      category: "Zabezpieczenie imprez",
    },
    {
      name: "Katarzyna R.",
      text: "Terminowo\u015B\u0107, profesjonalizm i serdeczno\u015B\u0107 \u2014 rzadko spotykane po\u0142\u0105czenie. Transport mojej mamy do domu w Katowicach przebiega\u0142 spokojnie i bezpiecznie.",
      source: "Google",
      category: "Transport do domu",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/Life-Ratownictwo-Medyczne-i-Pielegniarstwo.jpg')",
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0.4) 65%, rgba(255,255,255,0.25) 85%, rgba(255,255,255,0.15) 100%)' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-28 sm:pt-32 pb-10 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="bg-primary-red/10 text-primary-red font-bold px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm inline-flex items-center gap-2 mb-4 sm:mb-6">
                <MapPin size={14} />
                Racib&oacute;rz &bull; Rybnik &bull; całe woj. śląskie
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-blue leading-[1.1] mb-4 sm:mb-6">
                Profesjonalne <span className="text-primary-red">Ratownictwo</span> i Transport
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                <strong>LIFE-Ratownictwo Medyczne</strong> &mdash; podmiot leczniczy zajmujący się transportem medycznym i sanitarnym, zabezpieczeniami medycznymi oraz szkoleniami z pierwszej pomocy. Działamy od 2012 roku z pasją i powołaniem na terenie Raciborza, Rybnika i całego wojew&oacute;dztwa śląskiego.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="tel:602622840" className="bg-primary-red text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-primary-red/20 flex items-center justify-center gap-2 hover:bg-[#ba1e17] transition-all hover:scale-105">
                  <Phone size={20} /> Zam&oacute;w transport
                </a>
                <a href="#uslugi" className="bg-navy-blue text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-navy-blue/20 flex items-center justify-center hover:bg-navy-blue-light transition-all hover:scale-105">
                  Nasza Oferta
                </a>
              </div>

              {/* Mobile stats - visible on smaller screens */}
              <div className="grid grid-cols-2 gap-3 mt-8 lg:hidden">
                {[
                  { value: '12+', label: 'Lat doświadczenia' },
                  { value: '24/7', label: 'Dostępność' },
                  { value: '500+', label: 'Transportów rocznie' },
                  { value: '100+', label: 'Zabezpieczonych imprez' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl p-4 text-center shadow-md">
                    <div className="text-2xl font-black text-primary-red">{stat.value}</div>
                    <div className="text-navy-blue font-semibold text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats tiles - desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:grid grid-cols-2 gap-5"
            >
              {[
                { value: '12+', label: 'Lat doświadczenia', sub: 'od 2012 roku' },
                { value: '24/7', label: 'Dostępność', sub: 'transport medyczny' },
                { value: '500+', label: 'Zrealizowanych', sub: 'transportów rocznie' },
                { value: '100+', label: 'Zabezpieczonych', sub: 'imprez i wydarzeń' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm border-2 border-white rounded-3xl p-7 text-center shadow-lg shadow-navy-blue/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="text-3xl font-black text-primary-red mb-1">{stat.value}</div>
                  <div className="text-navy-blue font-bold text-sm">{stat.label}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy-blue py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {[
              "Podmiot leczniczy \u2014 pe\u0142na legalno\u015B\u0107",
              "3 ambulanse \u2014 gotowo\u015B\u0107 na ka\u017Cde wezwanie",
              "Ponad 100 opinii 5\u2605 od pacjent\u00F3w",
              "Transport krajowy i zagraniczny",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <CheckCircle2 size={16} className="text-primary-red shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Nasze usługi</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Kompleksowa opieka medyczna &mdash; tam, gdzie jest potrzebna</h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg">Jako podmiot leczniczy oferujemy pełen zakres usług ratownictwa medycznego i pielęgniarstwa na terenie Śląska i całej Polski.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 - Transport */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#f4f7f6] rounded-3xl border-2 border-white shadow-sm hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="p-8">
                <div className="w-14 h-14 bg-primary-red/10 text-primary-red rounded-2xl flex items-center justify-center mb-6">
                  <Truck size={28} />
                </div>
                <h3 className="text-2xl font-extrabold text-navy-blue mb-4">Transport Medyczny i Sanitarny</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Profesjonalny, bezpieczny transport pacjent&oacute;w ambulansem z wykwalifikowanym personelem medycznym &mdash; ratownikiem lub pielęgniarką. Docieramy do pacjenta o każdej porze dnia i nocy.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Transport do szpitala, poradni, na rehabilitacj\u0119 i badania",
                    "Przew\u00F3z pacjent\u00F3w le\u017C\u0105cych i siedz\u0105cych",
                    "Transport krajowy i zagraniczny",
                    "Wizyty domowe i opieka piel\u0119gniarska",
                    "Dost\u0119pno\u015B\u0107 24/7 \u2014 ca\u0142\u0105 dob\u0119",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/transport-medyczny" className="text-primary-red font-bold flex items-center gap-1 group-hover:gap-3 transition-all">
                  Dowiedz się więcej <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Card 2 - Zabezpieczenia */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f4f7f6] rounded-3xl border-2 border-white shadow-sm hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="p-8">
                <div className="w-14 h-14 bg-primary-red/10 text-primary-red rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-2xl font-extrabold text-navy-blue mb-4">Zabezpieczenie Medyczne Imprez</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Kompleksowe zabezpieczenie medyczne &mdash; od małych wydarzeń po duże imprezy masowe. Jako podmiot leczniczy działamy w pełnej zgodności z rozporządzeniem Ministra Zdrowia z dnia 6 lutego 2012 r.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Imprezy masowe artystyczne i sportowe (500\u201365 000+ os\u00F3b)",
                    "Festyny, pikniki, do\u017Cynki, eventy firmowe",
                    "Ambulans wyjazdowy, patrole piesze, punkt medyczny",
                    "Ratownicy medyczni z uprawnieniami KPP i PRM",
                    "Pe\u0142na dokumentacja i plan zabezpiecze\u0144",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/zabezpieczenia-medyczne" className="text-primary-red font-bold flex items-center gap-1 group-hover:gap-3 transition-all">
                  Dowiedz się więcej <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Card 3 - Szkolenia */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f4f7f6] rounded-3xl border-2 border-white shadow-sm hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="p-8">
                <div className="w-14 h-14 bg-primary-red/10 text-primary-red rounded-2xl flex items-center justify-center mb-6">
                  <HeartPulse size={28} />
                </div>
                <h3 className="text-2xl font-extrabold text-navy-blue mb-4">Szkolenia z Pierwszej Pomocy</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Praktyczne, angażujące szkolenia z pierwszej pomocy prowadzone przez ratownik&oacute;w medycznych z wieloletnim stażem w Systemie Państwowego Ratownictwa Medycznego.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Szkolenia BHP z pierwszej pomocy dla firm",
                    "Kursy dla szk\u00F3\u0142, przedszkoli i uczelni",
                    "Kwalifikowana Pierwsza Pomoc (KPP)",
                    "Szkolenia u klienta lub w naszej siedzibie",
                    "Certyfikaty i za\u015Bwiadczenia uko\u0144czenia",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/szkolenia-pierwsza-pomoc" className="text-primary-red font-bold flex items-center gap-1 group-hover:gap-3 transition-all">
                  Dowiedz się więcej <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-[#f4f7f6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Dlaczego my?</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-8 leading-tight">
                Doświadczenie, kt&oacute;re <span className="text-primary-red">ratuje życie</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Jesteśmy ratownikami medycznymi pracującymi na co dzień w Systemie Państwowego Ratownictwa Medycznego &mdash; ratownictwo to nasza pasja i powołanie, nie tylko praca.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { value: '12+', label: 'Lat na rynku', sub: 'Dzia\u0142amy nieprzerwanie od 2012 roku' },
                  { value: '3', label: 'Ambulanse', sub: 'W pe\u0142ni wyposa\u017Cone i certyfikowane' },
                  { value: '100%', label: 'Legalno\u015B\u0107', sub: 'Podmiot leczniczy \u2014 KRS 0000920762' },
                  { value: '5\u2605', label: '\u015Arednia ocena', sub: 'Ponad 100 opinii pacjent\u00F3w' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl border-2 border-white shadow-sm"
                  >
                    <div className="text-2xl font-black text-primary-red mb-1">{stat.value}</div>
                    <div className="text-navy-blue font-bold text-sm">{stat.label}</div>
                    <div className="text-gray-400 text-xs mt-1">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary-red rounded-3xl translate-x-4 translate-y-4"></div>
              <img
                src="/assets/images/IMG_0802.jpg"
                alt="Zesp&oacute;ł ratownik&oacute;w medycznych"
                loading="lazy"
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Opinie pacjent&oacute;w</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Co m&oacute;wią o nas <span className="text-primary-red">pacjenci?</span></h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-black text-navy-blue">5.0</span>
            </div>
            <p className="text-gray-500 text-lg">Setki zadowolonych pacjent&oacute;w i rodzin, kt&oacute;re nam zaufały &mdash; ich słowa znaczą dla nas najwięcej.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-[#f4f7f6] p-8 rounded-3xl relative border-2 border-white shadow-sm hover:shadow-xl transition-all"
              >
                <Quote className="text-primary-red/15 w-12 h-12 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-navy-blue">{review.name}</div>
                    <div className="text-gray-400 text-xs">{review.category}</div>
                  </div>
                  <span className="text-xs font-bold text-gray-400 bg-white px-3 py-1 rounded-full">{review.source}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal / Podmiot Leczniczy */}
      <section className="py-24 bg-navy-blue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-red/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="bg-white/10 text-white/80 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Zgodność z prawem</span>
            <h2 className="text-3xl md:text-5xl font-black mb-6">Jedyny właściwy wyb&oacute;r dla imprez masowych &mdash; <span className="text-primary-red">podmiot leczniczy</span></h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Zgodnie z Ustawą o bezpieczeństwie imprez masowych z dnia 20 marca 2009 r. oraz Rozporządzeniem Ministra Zdrowia z dnia 6 lutego 2012 r. &mdash; pełne, legalne zabezpieczenie medyczne imprez może świadczyć wyłącznie <strong>podmiot leczniczy</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <BadgeCheck size={28} />,
                title: "Podmiot leczniczy",
                sub: "KRS 0000920762",
                desc: "Jedyni uprawnieni do pe\u0142nego zabezpieczenia medycznego imprez",
              },
              {
                icon: <Truck size={28} />,
                title: "3 ambulanse",
                sub: "Zgodne z Rozp. MZ z 2012 r.",
                desc: "Sprz\u0119t i wyposa\u017Cenie spe\u0142niaj\u0105ce normy PN-EN",
              },
              {
                icon: <FileCheck size={28} />,
                title: "Plan zabezpiecze\u0144",
                sub: "Pe\u0142na dokumentacja",
                desc: "Wymagana do zatwierdzenia \u2014 opinia dysponenta ZRM",
              },
              {
                icon: <Users size={28} />,
                title: "Ratownicy medyczni",
                sub: "Z uprawnieniami PRM",
                desc: "Personel pracuj\u0105cy w Systemie Pa\u0144stwowego Ratownictwa",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="text-primary-red mb-4">{item.icon}</div>
                <h4 className="font-extrabold text-white text-lg mb-1">{item.title}</h4>
                <p className="text-primary-red text-xs font-bold mb-3">{item.sub}</p>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-red text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Potrzebujesz transportu lub zabezpieczenia?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Zadzwoń teraz lub napisz &mdash; odpowiadamy szybko, działamy niezawodnie. Jesteśmy do Twojej dyspozycji 24 godziny na dobę, 7 dni w tygodniu.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:602622840" className="bg-white text-primary-red px-10 py-5 rounded-xl font-black text-xl shadow-xl hover:scale-105 transition-all flex items-center gap-3">
              <Phone size={24} /> 602 622 840
            </a>
            <a href="mailto:biuro@life-ratownictwo.pl" className="bg-white/20 backdrop-blur text-white px-10 py-5 rounded-xl font-bold text-xl border border-white/30 hover:bg-white/30 transition-all flex items-center gap-3">
              <Mail size={24} /> Napisz do nas
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Z naszego <span className="text-primary-red">bloga</span></h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg">Porady od czynnych ratownik&oacute;w medycznych i aktualności ze świata ratownictwa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {blogArticles.slice(0, 3).map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/blog/${article.slug}`} className="group block">
                  <div className="overflow-hidden rounded-3xl shadow-lg mb-5">
                    <img src={article.image} alt={article.title} loading="lazy" className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary-red/10 text-primary-red font-bold text-xs px-3 py-1 rounded-full">{article.category}</span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs"><Clock size={12} /> {article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-navy-blue leading-tight group-hover:text-primary-red transition-colors mb-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{article.excerpt}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 bg-navy-blue text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
              Wszystkie artykuły <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
