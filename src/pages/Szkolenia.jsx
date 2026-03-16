import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, CheckCircle2, Users, ChevronRight, Phone, Mail, ShieldCheck, Truck, Stethoscope, Baby, Zap, Flame, Bone, Brain, HeartPulse, Activity, Star, Building2, School, BadgeCheck, Clock, MapPin, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const Szkolenia = () => {
  useSEO({
    title: 'Szkolenia z Pierwszej Pomocy Racib\u00F3rz \u2013 Firmy, Szko\u0142y, Przedszkola | LIFE-Ratownictwo',
    description: 'Szkolenia z pierwszej pomocy prowadzone przez ratownik\u00F3w medycznych PRM. Dla firm, szk\u00F3\u0142 i przedszkoli. Przyjezdżamy z karetk\u0105 i namiotem ratowniczym. Fantomy Laerdal QCPR, AED. Tel. 602 622 840.'
  });

  const programItems = [
    {
      icon: <Activity size={24} />,
      title: "Ocena poszkodowanego i wzywanie pomocy",
      text: "Systematyczne podejście do osoby poszkodowanej \u2014 ocena przytomności, oddechu, reakcji na bodźce. Skuteczne wzywanie pomocy pod numer 112 i przekazywanie informacji dyspozytorowi.",
    },
    {
      icon: <Brain size={24} />,
      title: "Osoba przytomna, nieprzytomna, omdlenie \u2014 kluczowe r\u00F3żnice",
      text: "To jeden z najważniejszych element\u00F3w szkolenia. Uczymy rozr\u00F3żniać stany, kt\u00F3re wyglądają podobnie, ale wymagają zupełnie innej reakcji.",
      details: [
        "Osob\u0119 przytomn\u0105 z omdleniem \u2014 wszystkie przyczyny omdleń, mechanizm powstawania, objawy zapowiadaj\u0105ce, w\u0142a\u015Bciwe post\u0119powanie",
        "Osob\u0119 nieprzytomn\u0105 oddychaj\u0105c\u0105 \u2014 pozycja boczna ustalona, monitorowanie, kiedy wzywa\u0107 pomoc",
        "Osob\u0119 nieprzytomn\u0105 nieoddychaj\u0105c\u0105 \u2014 natychmiastowe rozpocz\u0119cie RKO",
        "R\u00F3\u017Cnice mi\u0119dzy omdleniem a utrat\u0105 przytomno\u015Bci \u2014 bo mylenie tych stan\u00F3w mo\u017Ce kosztowa\u0107 \u017Cycie",
      ],
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Zatrzymanie kr\u0105\u017Cenia i resuscytacja (RKO + AED)",
      text: "Rozpoznanie osoby, kt\u00F3ra nie oddycha i nie reaguje. Technika resuscytacji kr\u0105\u017Ceniowo-oddechowej dla dorosłych, dzieci i niemowl\u0105t \u2014 ka\u017Cda grupa wiekowa to osobny fantom i osobne \u0107wiczenia, bo technika, siła uci\u015Bni\u0119\u0107 i g\u0142\u0119boko\u015B\u0107 s\u0105 zupe\u0142nie inne. Obs\u0142uga automatycznego defibrylatora AED \u2014 przyklejanie elektrod, analiza rytmu, wykonanie defibrylacji. Ka\u017Cdy uczestnik \u0107wiczy to osobi\u015Bcie, nie tylko obserwuje.",
    },
    {
      icon: <Heart size={24} />,
      title: "Zawa\u0142 mi\u0119\u015Bnia sercowego",
      text: "Omawiamy mechanizm zawa\u0142u \u2014 co dzieje si\u0119 w naczyniu wie\u0144cowym, dlaczego ka\u017Cda minuta ma znaczenie. Uczymy rozpoznawa\u0107 objawy zawa\u0142u, w tym te nieoczywiste i nietypowe. Wyja\u015Bniamy, co robi\u0105 ratownicy medyczni po przyje\u017Adzie na miejsce i dlaczego szybka reakcja \u015Bwiadka zdarzenia ma kluczowe znaczenie.",
    },
    {
      icon: <Zap size={24} />,
      title: "Padaczka",
      text: "Jak wygl\u0105da napad padaczkowy, jak bezpiecznie zachowa\u0107 si\u0119 podczas napadu i po nim, czego absolutnie nie robi\u0107 oraz kiedy wzywa\u0107 pomoc. Omawiamy r\u00F3\u017Cne rodzaje napad\u00F3w i typowe b\u0142\u0119dy pope\u0142niane przez \u015Bwiadk\u00F3w.",
    },
    {
      icon: <Activity size={24} />,
      title: "\u015Api\u0105czka cukrzycowa i hipoglikemia",
      text: "R\u00F3\u017Cnice mi\u0119dzy hipoglikemi\u0105 a hiperglikemi\u0105 \u2014 objawy, mechanizm, post\u0119powanie. Kiedy poda\u0107 cukier, a kiedy bezwzgl\u0119dnie nie. Jak rozpozna\u0107 stan cukrzycowy u osoby, kt\u00F3ra nie mo\u017Ce nam powiedzie\u0107 co jej dolega.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Zad\u0142awienie",
      text: "Post\u0119powanie przy zad\u0142awieniu u doros\u0142ego, dziecka i niemowl\u0119cia \u2014 bo technika jest zupe\u0142nie inna dla ka\u017Cdej grupy wiekowej. Uderzenia w plecy, uchwyt Heimlicha, post\u0119powanie gdy poszkodowany traci przytomno\u015B\u0107. \u0106wiczenia praktyczne na fantomach i kamizelkach.",
    },
    {
      icon: <Bone size={24} />,
      title: "Urazy, krwawienia i z\u0142amania",
      text: "Tamowanie krwawie\u0144 w tym masywnych z u\u017Cyciem opaski uciskowej (stazy taktycznej). Post\u0119powanie przy z\u0142amaniach i zwichni\u0119ciach. Unieruchamianie i bezpieczny transport poszkodowanego.",
    },
    {
      icon: <Flame size={24} />,
      title: "Oparzenia i odmro\u017Cenia",
      text: "Klasyfikacja i ocena rozleg\u0142o\u015Bci oparze\u0144, prawid\u0142owe post\u0119powanie i najcz\u0119stsze b\u0142\u0119dy. Post\u0119powanie przy odmro\u017Ceniach, wych\u0142odzeniu og\u00F3lnym i przegrzaniu organizmu.",
    },
  ];

  const equipmentItems = [
    {
      title: "Fantom doros\u0142ego \u2014 Laerdal Resusci Anne QCPR Full Body",
      text: "Jeden z najnowocze\u015Bniejszych fantom\u00F3w szkoleniowych na \u015Bwiecie. Technologia QCPR mierzy w czasie rzeczywistym g\u0142\u0119boko\u015B\u0107 i cz\u0119stotliwo\u015B\u0107 uci\u015Bni\u0119\u0107, relaksacj\u0119 klatki piersiowej, obj\u0119to\u015B\u0107 wentylacji i poprawno\u015B\u0107 u\u0142o\u017Cenia r\u0105k. Wyniki widoczne s\u0105 na aplikacji \u2014 instruktor widzi jednocze\u015Bnie wszystkich uczestnik\u00F3w i na bie\u017C\u0105co koryguje b\u0142\u0119dy.",
    },
    {
      title: "Fantom dziecka i niemowl\u0119cia",
      text: "Osobne manekiny dostosowane anatomicznie \u2014 bo RKO u dziecka i niemowl\u0119cia to zupe\u0142nie inna technika, inna si\u0142a uci\u015Bni\u0119\u0107 i inne post\u0119powanie ni\u017C u doros\u0142ego.",
    },
    {
      title: "Defibrylator AED (szkoleniowy)",
      text: "Ka\u017Cdy uczestnik samodzielnie \u0107wiczy obs\u0142ug\u0119 AED \u2014 przyklejanie elektrod, analiz\u0119 rytmu, wykonanie defibrylacji. Urz\u0105dzenie szkoleniowe jest identyczne w obs\u0142udze jak prawdziwy defibrylator.",
    },
    {
      title: "Kamizelki do udra\u017Cniania dr\u00F3g oddechowych",
      text: "Specjalistyczny sprz\u0119t do nauki technik udra\u017Cniania \u2014 odchylenia g\u0142owy, uniesienia \u017Cuchwy i manewr\u00F3w stosowanych przy zad\u0142awieniu i utracie przytomno\u015Bci.",
    },
  ];

  const targetGroups = [
    { icon: <Building2 size={22} />, title: "Firmy i zak\u0142ady pracy", text: "Wype\u0142nienie obowi\u0105zku BHP, za\u015Bwiadczenia dla pracownik\u00F3w, dostosowanie do grafiku zmianowego" },
    { icon: <School size={22} />, title: "Szko\u0142y podstawowe i \u015Brednie", text: "Programy dostosowane do wieku, \u0107wiczenia na fantomach, darmowy przyjazd z karetk\u0105 dla szk\u00F3\u0142" },
    { icon: <Baby size={22} />, title: "Przedszkola", text: "Anga\u017Cuj\u0105ce zaj\u0119cia dla najm\u0142odszych, namiot ratowniczy, zwiedzanie karetki, budowanie nawyku reagowania" },
    { icon: <GraduationCap size={22} />, title: "Uczelnie wy\u017Csze", text: "Zaawansowany program dla student\u00F3w, mo\u017Cliwo\u015B\u0107 organizacji w ramach zaj\u0119\u0107 z BHP" },
    { icon: <Users size={22} />, title: "Urz\u0119dy i instytucje publiczne", text: "Szkolenia dla pracownik\u00F3w administracji i obs\u0142ugi klienta" },
    { icon: <Star size={22} />, title: "Kluby sportowe i stowarzyszenia", text: "Pierwsza pomoc dla trener\u00F3w, zawodnik\u00F3w i wolontariuszy" },
    { icon: <ShieldCheck size={22} />, title: "Organizatorzy imprez", text: "Przeszkolenie personelu obs\u0142ugi jako uzupe\u0142nienie naszej us\u0142ugi zabezpieczenia medycznego" },
  ];

  return (
    <ServiceLayout
      title="Szkolenia z Pierwszej Pomocy"
      subtitle="Ucz si\u0119 od tych, kt\u00F3rzy robi\u0105 to na co dzie\u0144"
      bgImage="/assets/images/Szkolenia-z-pierwszej-pomocy-dla-dzieci.jpg"
    >
      <div className="prose prose-lg max-w-none">

        {/* Hero intro */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <span className="bg-primary-red/10 text-primary-red font-bold px-5 py-2 rounded-full text-sm inline-flex items-center gap-2 mb-6">
            <MapPin size={14} />
            Szkolenia z pierwszej pomocy &bull; Racib&oacute;rz i Śląsk
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-6 !mt-0">
            Szkolenia z Pierwszej Pomocy &mdash; ucz się od tych, kt&oacute;rzy robią to na co dzień
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Nasze szkolenia to znacznie wi\u0119cej ni\u017C resuscytacja na fantomie. Uczymy rozpoznawa\u0107, rozumie\u0107 i reagowa\u0107 \u2014 na zawa\u0142, omdlenie, padaczk\u0119, \u015Bpi\u0105czk\u0119 cukrzycow\u0105 i dziesi\u0105tki innych sytuacji, kt\u00F3re mog\u0105 przydarzy\u0107 si\u0119 w pracy, szkole lub domu. Szkolenia prowadz\u0105 aktywni ratownicy medyczni z Systemu Pa\u0144stwowego Ratownictwa Medycznego w Raciborzu \u2014 ludzie, kt\u00F3rzy wczoraj byli na interwencji.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 not-prose mb-12">
            <a href="tel:602622840" className="bg-primary-red text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-primary-red/20 flex items-center justify-center gap-2 hover:bg-[#ba1e17] transition-all hover:scale-105">
              <Phone size={20} /> Zam&oacute;w szkolenie
            </a>
            <a href="tel:602622840" className="bg-navy-blue text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-navy-blue/20 flex items-center justify-center gap-2 hover:bg-navy-blue-light transition-all hover:scale-105">
              <Phone size={20} /> 602 622 840
            </a>
          </div>
        </motion.div>

        {/* 3 wyróżniki */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-10 text-center">Czym r&oacute;żnimy się od innych?</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-16">
          {[
            {
              icon: <Stethoscope size={32} />,
              title: "Aktywni ratownicy medyczni PRM",
              text: "Szkolenia prowadz\u0105 zawodowi ratownicy medyczni pracuj\u0105cy na co dzie\u0144 w karetce systemu PRM \u2014 nie trenerzy z certyfikatem, lecz ludzie z prawdziwym do\u015Bwiadczeniem z miejsca zdarzenia.",
            },
            {
              icon: <BadgeCheck size={32} />,
              title: "Sprz\u0119t najwy\u017Cszej klasy",
              text: "Fantomy Laerdal Resusci Anne QCPR, manekiny dzieci\u0119ce i niemowl\u0119ce, defibrylator AED, kamizelki do udra\u017Cniania dr\u00F3g oddechowych. Taki sam sprz\u0119t jak w profesjonalnych o\u015Brodkach ratownictwa medycznego.",
            },
            {
              icon: <Truck size={32} />,
              title: "Przyje\u017Cd\u017Camy do Ciebie",
              text: "Dojeżdżamy z pe\u0142nym wyposażeniem do firmy, szko\u0142y lub przedszkola. Dla dzieci rozstawiamy namiot ratowniczy i pokazujemy prawdziw\u0105 karetk\u0119 \u2014 szkolenie, kt\u00F3re zostaje w pami\u0119ci na ca\u0142e \u017Cycie.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="bg-[#f4f7f6] rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 bg-primary-red/10 text-primary-red rounded-2xl flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Program szkolenia */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-4 text-center">Czego uczymy? Znacznie wi\u0119cej ni\u017C RKO</h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            Program naszych szkole\u0144 jest znacznie szerszy ni\u017C standardowe kursy BHP. Omawiamy nie tylko jak reagowa\u0107, ale te\u017C dlaczego \u2014 mechanizmy chor\u00F3b, objawy, r\u00F3\u017Cnice mi\u0119dzy stanami, kt\u00F3re wygl\u0105daj\u0105 podobnie, a wymagaj\u0105 zupe\u0142nie innego post\u0119powania. Ka\u017Cdy temat ko\u0144czy si\u0119 \u0107wiczeniem praktycznym.
          </p>
        </motion.div>

        <div className="space-y-6 not-prose mb-16">
          {programItems.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              variants={fadeUp}
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-red/10 text-primary-red rounded-xl flex items-center justify-center shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-blue mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  {item.details && (
                    <ul className="mt-4 space-y-2">
                      {item.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-600">
                          <CheckCircle2 className="text-primary-red shrink-0 mt-0.5" size={16} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sprzęt szkoleniowy */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="bg-navy-blue text-white p-8 sm:p-12 rounded-[32px] mb-16 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 !mt-0 text-white">Szkolimy na sprz\u0119cie, jakiego u\u017Cywaj\u0105 zawodowcy</h2>
            <p className="text-white/70 text-lg mb-10">
              Na naszych szkoleniach nie ma miejsca na kompromisy. \u0106wiczysz na sprz\u0119cie stosowanym przez profesjonalne o\u015Brodki szkolenia ratownik\u00F3w medycznych \u2014 nie na tanim fantomie bez \u017Cadnego feedbacku.
            </p>
            <div className="space-y-8">
              {equipmentItems.map((eq, i) => (
                <div key={i} className="border-l-4 border-primary-red pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">{eq.title}</h3>
                  <p className="text-white/70 leading-relaxed">{eq.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-white/10 rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-primary-red mb-2">Dlaczego to ma znaczenie?</h4>
              <p className="text-white/70 leading-relaxed">
                Wi\u0119kszo\u015B\u0107 szkole\u0144 BHP odbywa si\u0119 na prostych fantomach bez \u017Cadnej informacji zwrotnej \u2014 uczestnik nie wie, czy uciska za p\u0142ytko, za szybko, czy w z\u0142ym miejscu. My u\u017Cywamy fantom\u00F3w z technologi\u0105 QCPR, kt\u00F3re mierz\u0105 ka\u017Cde uci\u015Bni\u0119cie i ka\u017Cdy oddech. Dzi\u0119ki temu po szkoleniu masz pewno\u015B\u0107, \u017Ce naprawd\u0119 umiesz \u2014 a nie tylko \u201Eby\u0142e\u015B na kursie\u201D.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Oferta dla firm */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-6">Szkolenia z pierwszej pomocy dla firm i zak\u0142ad\u00F3w pracy</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Prawo nak\u0142ada na pracodawc\u00F3w obowi\u0105zek zapewnienia pracownikom wiedzy z zakresu udzielania pierwszej pomocy (art. 209\u00B9 Kodeksu pracy). Nasze szkolenia spe\u0142niaj\u0105 ten wym\u00F3g i s\u0105 dokumentowane imiennym za\u015Bwiadczeniem uko\u0144czenia dla ka\u017Cdego uczestnika.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Dostosowujemy termin do grafiku zmianowego, mo\u017Cemy przeprowadzi\u0107 kilka grup w ci\u0105gu jednego dnia. Przyje\u017Cd\u017Camy z ca\u0142ym sprz\u0119tem \u2014 nie musisz nic przygotowywa\u0107.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-16">
          {[
            { icon: <Clock size={20} />, label: "Czas trwania", value: "4\u20135 godzin" },
            { icon: <MapPin size={20} />, label: "Miejsce", value: "U klienta (dojazd w cenie) lub w naszym o\u015Brodku" },
            { icon: <FileCheck size={20} />, label: "Dokumenty", value: "Imienne za\u015Bwiadczenia uko\u0144czenia szkolenia" },
            { icon: <Users size={20} />, label: "Dla ilu os\u00F3b", value: "Od kilku do kilkudziesi\u0119ciu \u2014 organizujemy kilka grup" },
          ].map((info, i) => (
            <div key={i} className="bg-[#f4f7f6] rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-red/10 text-primary-red rounded-xl flex items-center justify-center shrink-0">
                {info.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-navy-blue uppercase tracking-wide">{info.label}</div>
                <div className="text-gray-600">{info.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Oferta dla szkół i przedszkoli */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-6">Szkolenia dla szk\u00F3\u0142 i przedszkoli &mdash; z karetk\u0105 i namiotem ratowniczym</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Dzieci, kt\u00F3re potrafi\u0105 wezwa\u0107 pomoc i udzieli\u0107 podstawowej pierwszej pomocy, ratuj\u0105 \u017Cycie. Wiemy to z do\u015Bwiadczenia. Dlatego szkolenia dla najm\u0142odszych robimy inaczej ni\u017C dla doros\u0142ych \u2014 anga\u017Cuj\u0105co, praktycznie i niezapomniane.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Gdy jest to mo\u017Cliwe, przyje\u017Cd\u017Camy z prawdziw\u0105 karetk\u0105 i rozstawiamy namiot ratowniczy. Dzieci mog\u0105 wej\u015B\u0107 do ambulansu, zobaczy\u0107 sprz\u0119t ratowniczy od \u015Brodka, dotkn\u0105\u0107 wyposa\u017Cenia i zada\u0107 pytania ratownikowi medycznemu. To do\u015Bwiadczenie, kt\u00F3re zostaje w pami\u0119ci znacznie d\u0142u\u017Cej ni\u017C wyk\u0142ad w klasie.
          </p>
        </motion.div>

        <div className="not-prose mb-8">
          <h3 className="text-xl font-bold text-navy-blue mb-6">Program dostosowany do wieku uczni\u00F3w:</h3>
          <div className="space-y-4">
            {[
              { age: "Przedszkola i klasy I\u2013III", items: "Wzywanie pomocy (numer 112), co m\u00F3wi\u0107 dyspozytorowi, podstawy RKO dostosowane do wieku, post\u0119powanie przy zad\u0142awieniu" },
              { age: "Klasy IV\u2013VIII", items: "Pe\u0142ny program z RKO, AED, zad\u0142awieniem, omdleniem i urazami \u2014 \u0107wiczenia na fantomach" },
              { age: "Szko\u0142y \u015Brednie i uczelnie", items: "Program zbli\u017Cony do doros\u0142ych, w tym stany nag\u0142e, zawa\u0142, padaczka, zaawansowane techniki" },
            ].map((group, i) => (
              <div key={i} className="bg-[#f4f7f6] rounded-2xl p-5 border-l-4 border-primary-red">
                <div className="font-bold text-navy-blue mb-1">{group.age}</div>
                <div className="text-gray-600">{group.items}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="bg-primary-red/5 border-2 border-primary-red/20 rounded-2xl p-6 sm:p-8 mb-8 not-prose">
            <h3 className="text-xl font-bold text-primary-red mb-3">Darmowy przyjazd do dzieci</h3>
            <p className="text-gray-700 leading-relaxed">
              Ka\u017Cda szko\u0142a lub przedszkole, kt\u00F3re zam\u00F3wi u nas szkolenie, otrzymuje w prezencie <strong>bezp\u0142atny 2-godzinny przyjazd ratownika medycznego z karetk\u0105 do dzieci</strong>. Pokazujemy ambulans od \u015Brodka, wyposa\u017Cenie ratownicze, rozstawiamy namiot \u2014 bez dodatkowych koszt\u00F3w.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose mb-16">
          {[
            { icon: <Clock size={20} />, label: "Czas trwania", value: "2\u20134 godziny" },
            { icon: <MapPin size={20} />, label: "Miejsce", value: "W szkole lub przedszkolu" },
            { icon: <FileCheck size={20} />, label: "Dokumenty", value: "Za\u015Bwiadczenia dla uczni\u00F3w i nauczycieli" },
          ].map((info, i) => (
            <div key={i} className="bg-[#f4f7f6] rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-red/10 text-primary-red rounded-xl flex items-center justify-center shrink-0">
                {info.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-navy-blue uppercase tracking-wide">{info.label}</div>
                <div className="text-gray-600">{info.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 kroki */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-10 text-center">Jak zam\u00F3wi\u0107 szkolenie?</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-16">
          {[
            {
              step: "1",
              title: "Zadzwo\u0144 lub napisz",
              text: "Powiedz ile os\u00F3b, jaki rodzaj szkolenia (firma, szko\u0142a, przedszkole) i gdzie ma si\u0119 odby\u0107. Odpowiadamy tego samego dnia.",
            },
            {
              step: "2",
              title: "Wycena i termin",
              text: "Przygotujemy indywidualn\u0105 ofert\u0119 z cen\u0105 i proponowanymi terminami. Dostosowujemy si\u0119 do Twojego harmonogramu.",
            },
            {
              step: "3",
              title: "Szkolenie",
              text: "Przyje\u017Cd\u017Camy z pe\u0142nym sprz\u0119tem \u2014 fantomami, AED, karetk\u0105. Po zako\u0144czeniu wystawiamy za\u015Bwiadczenia dla wszystkich uczestnik\u00F3w.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="relative bg-white border-2 border-gray-100 rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 bg-primary-red text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-5">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Dla kogo */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-10 text-center">Szkolimy firmy, szko\u0142y i instytucje z ca\u0142ego \u015Al\u0105ska</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-16">
          {targetGroups.map((group, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              variants={fadeUp}
              className="bg-[#f4f7f6] rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 bg-primary-red/10 text-primary-red rounded-xl flex items-center justify-center shrink-0">
                {group.icon}
              </div>
              <div>
                <div className="font-bold text-navy-blue mb-1">{group.title}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{group.text}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="bg-navy-blue text-white p-8 sm:p-12 rounded-[32px] mb-16 shadow-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 !mt-0 text-white">Zapytaj o szkolenie dla swojej firmy lub szko\u0142y</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Ch\u0119tnie doradzimy \u2014 jaki rodzaj szkolenia b\u0119dzie najlepszy, ile trwa, ile kosztuje i kiedy mo\u017Cemy przyjecha\u0107. Dzia\u0142amy na terenie Raciborza, Rybnika, Wodzis\u0142awia \u015Al\u0105skiego, Jastrz\u0119bia-Zdroju i ca\u0142ego wojew\u00F3dztwa \u015Bl\u0105skiego.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center not-prose">
              <a href="tel:602622840" className="bg-primary-red text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary-red/30 flex items-center justify-center gap-2 hover:bg-[#ba1e17] transition-all hover:scale-105">
                <Phone size={20} /> 602 622 840
              </a>
              <a href="mailto:biuro@life-ratownictwo.pl" className="bg-white text-navy-blue px-8 py-4 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-all hover:scale-105">
                <Mail size={20} /> Napisz do nas
              </a>
            </div>
          </div>
        </motion.div>

        {/* SEO footer text */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <p className="text-gray-400 text-sm leading-relaxed">
            LIFE-Ratownictwo Medyczne i Piel\u0119gniarstwo Sp. z o.o. prowadzi szkolenia z pierwszej pomocy dla firm, szk\u00F3\u0142 i przedszkoli na terenie Raciborza, Rybnika, Wodzis\u0142awia \u015Al\u0105skiego, Jastrz\u0119bia-Zdroju, Gliwic i ca\u0142ego wojew\u00F3dztwa \u015Bl\u0105skiego. Szkolenia prowadz\u0105 aktywni ratownicy medyczni Systemu Pa\u0144stwowego Ratownictwa Medycznego. Podmiot leczniczy &mdash; NIP 6392023251.
          </p>
        </div>

        {/* Cross-sell & Blog links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Przeczytaj te\u017C na blogu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 not-prose">
            <Link to="/blog/obowiazek-szkolenia-z-pierwszej-pomocy-w-firmie-prawo" className="flex items-center gap-3 bg-[#f4f7f6] p-5 rounded-2xl font-semibold text-navy-blue hover:text-primary-red hover:shadow-md transition-all">
              <ChevronRight className="text-primary-red shrink-0" size={18} /> Obowi\u0105zek szkolenia w firmie &mdash; co m\u00F3wi prawo?
            </Link>
            <Link to="/blog/jak-udzielac-pierwszej-pomocy-kompletny-poradnik" className="flex items-center gap-3 bg-[#f4f7f6] p-5 rounded-2xl font-semibold text-navy-blue hover:text-primary-red hover:shadow-md transition-all">
              <ChevronRight className="text-primary-red shrink-0" size={18} /> Jak udziela\u0107 pierwszej pomocy &mdash; poradnik
            </Link>
          </div>

          <h3 className="text-2xl font-bold text-navy-blue mb-6">Zobacz te\u017C nasze us\u0142ugi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
            <Link to="/zabezpieczenia-medyczne" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Zabezpieczenia medyczne</Link>
            <Link to="/transport-medyczny" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Transport medyczny</Link>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Szkolenia;
