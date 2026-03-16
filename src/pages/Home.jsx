import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, HeartPulse, ChevronRight, CheckCircle2, Clock, Star, Quote, MapPin, Phone, Mail, Users, FileCheck, BadgeCheck, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { blogArticles } from '../data/blogArticles';

const ReviewsCarousel = ({ reviews }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const total = reviews.length;

  const next = useCallback(() => setActive(p => (p + 1) % total), [total]);
  const prev = useCallback(() => setActive(p => (p - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  // Show 3 on desktop, 1 on mobile
  const getVisible = () => {
    const items = [];
    for (let offset = -1; offset <= 1; offset++) {
      items.push((active + offset + total) % total);
    }
    return items;
  };
  const visible = getVisible();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
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
          <p className="text-gray-500 text-lg">44 opinie na Google &mdash; wszystkie na 5 gwiazdek.</p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-12 h-12 bg-white rounded-full shadow-lg shadow-navy-blue/10 flex items-center justify-center text-navy-blue hover:bg-primary-red hover:text-white transition-all hover:scale-110"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-12 h-12 bg-white rounded-full shadow-lg shadow-navy-blue/10 flex items-center justify-center text-navy-blue hover:bg-primary-red hover:text-white transition-all hover:scale-110"
          >
            <ChevronRight size={22} />
          </button>

          {/* Cards container */}
          <div className="mx-8 md:mx-14">
            {/* Mobile: single card */}
            <div className="md:hidden">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
                className="bg-[#f4f7f6] p-8 rounded-3xl relative border-2 border-white shadow-sm"
              >
                <Quote className="text-primary-red/15 w-12 h-12 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">&ldquo;{reviews[active].text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-navy-blue">{reviews[active].name}</div>
                    <div className="text-gray-400 text-xs">{reviews[active].category}</div>
                  </div>
                  <span className="text-xs font-bold text-gray-400 bg-white px-3 py-1 rounded-full">{reviews[active].source}</span>
                </div>
              </motion.div>
            </div>

            {/* Desktop: 3 cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {visible.map((idx, pos) => (
                <motion.div
                  key={`${active}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: pos * 0.08 }}
                  className={`bg-[#f4f7f6] p-8 rounded-3xl relative border-2 border-white shadow-sm transition-all ${pos === 1 ? 'scale-105 shadow-xl ring-2 ring-primary-red/10' : 'opacity-80 hover:opacity-100'}`}
                >
                  <Quote className="text-primary-red/15 w-12 h-12 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 relative z-10 line-clamp-4">&ldquo;{reviews[idx].text}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-navy-blue">{reviews[idx].name}</div>
                      <div className="text-gray-400 text-xs">{reviews[idx].category}</div>
                    </div>
                    <span className="text-xs font-bold text-gray-400 bg-white px-3 py-1 rounded-full">{reviews[idx].source}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all ${i === active ? 'w-8 h-3 bg-primary-red' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  useSEO({
    title: 'LIFE-Ratownictwo Medyczne | Transport Medyczny Racib\u00F3rz | Zabezpieczenia Imprez',
    description: 'Profesjonalne ratownictwo medyczne, transport sanitarny i medyczny, zabezpieczenia imprez masowych oraz szkolenia z pierwszej pomocy. Dzia\u0142amy od 2012 roku w Raciborzu, Rybniku i na ca\u0142ym \u015Al\u0105sku.'
  });

  const reviews = [
    {
      name: "AGNIESZKA Kici\u0144ska-Pilz",
      text: "Szkolenie, kt\u00F3re zosta\u0142o przeprowadzone przez Pana Mariusza, uwa\u017Cam za fantastyczne. Profesjonalizm, talent do przekazywania wiedzy w spos\u00F3b przyst\u0119pny, zrozumia\u0142y dla ka\u017Cdego, niezwykle interesuj\u0105cy. To szkolenie, na kt\u00F3rym nie wieje nud\u0105, a czas p\u0142ynie za szybko. Oby wi\u0119cej takich.",
      source: "Google",
      category: "Szkolenia",
    },
    {
      name: "Micha\u0142 Bartela",
      text: "Transportowali\u015Bmy wsp\u00F3lnie moj\u0105 niespe\u0142na 90 letni\u0105 babci\u0119 z dosy\u0107 daleka. Byli\u015Bmy pe\u0142ni strachu jak b\u0119dzie...ale by\u0142o perfekcyjnie i bezproblemowo. Ekipa Life to ludzie pe\u0142ni empatii, u\u015Bmiechu i profesjonalizmu. Polecam z ca\u0142ego serca!",
      source: "Google",
      category: "Transport medyczny",
    },
    {
      name: "Monika Wa\u0142aszek",
      text: "Pe\u0142en profesjonalizm w przeprowadzaniu szkole\u0144, ciekawe wyk\u0142ady podparte wiedz\u0105 praktyczn\u0105. Wida\u0107, \u017Ce s\u0105 to ludzie z pasj\u0105, kt\u00F3rzy kochaj\u0105 swoj\u0105 prac\u0119 :)",
      source: "Google",
      category: "Szkolenia",
    },
    {
      name: "Monika Niedzbala",
      text: "Korzysta\u0142am z transportu mi\u0119dzynarodowego z Life-Ratownictwo Medyczne. Firma profeska. Panowie ratownicy zabezpieczyli dziecko od szpitala, w kt\u00F3rym si\u0119 znajdowali\u015Bmy, a\u017C do samego oddzia\u0142u. Ca\u0142y czas pozostawali w kontakcie z rodzicem.",
      source: "Google",
      category: "Transport mi\u0119dzynarodowy",
    },
    {
      name: "Ewa Kmoch",
      text: "Wida\u0107, \u017Ce ich pasj\u0105 jest praca z lud\u017Ami, kt\u00F3rzy potrzebuj\u0105 pomocy. Swoj\u0105 prac\u0119 wykonuj\u0105 z pe\u0142nym zaanga\u017Cowaniem, po\u015Bwi\u0119ceniem i co wa\u017Cne \u2014 profesjonalnie. S\u0105 przyjazne nastawieni do ludzi. Znaj\u0105 si\u0119 w 100 procentach na tym co robi\u0105.",
      source: "Google",
      category: "Opieka medyczna",
    },
    {
      name: "Katarzyna W\u0142odarczyk",
      text: "Jestem \u015Bwie\u017Co po szkoleniu przeprowadzonym przez Life. Pe\u0142en profesjonalizm; ciekawie, konkretnie i praktycznie przedstawiona tematyka ratownictwa, a do tego w mi\u0142ej atmosferze. Bardzo polecam.",
      source: "Google",
      category: "Szkolenia",
    },
    {
      name: "Wioletta Walter",
      text: "Pan Mariusz, prowadz\u0105cy szkolenie z udzielania pierwszej pomocy, jest osob\u0105 wspaniale przekazuj\u0105c\u0105 zagadnienia. Czas sp\u0119dzony na szkoleniu mija bardzo szybko, a uzyskana wiedza teoretyczna i praktyczna pozostanie na bardzo d\u0142ugo.",
      source: "Google",
      category: "Szkolenia",
    },
    {
      name: "El\u017Cbieta To\u015B",
      text: "To ju\u017C m\u00F3j kolejny kontakt z t\u0105 grup\u0105. Panowie bardzo profesjonalnie przeprowadzili szkolenie z udzielania pierwszej pomocy dzieciom z ZSU Rybnik. Bardzo polecam!",
      source: "Google",
      category: "Szkolenia dzieci",
    },
    {
      name: "Adam Ek",
      text: "Niesamowicie obszerna wiedza, profesjonalizm, a zarazem przyjazny spos\u00F3b bycia Pana Mariusza, to z pewno\u015Bci\u0105 du\u017Ce atuty szkolenia. Pozdrawiam serdecznie.",
      source: "Google",
      category: "Szkolenia",
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

      {/* Reviews Carousel */}
      <ReviewsCarousel reviews={reviews} />

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
