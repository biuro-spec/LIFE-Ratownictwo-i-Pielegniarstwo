import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Users, FileCheck, BadgeCheck, ChevronRight, Phone, Mail, AlertTriangle, Heart, Stethoscope, GraduationCap, Music, Trophy, TreePine, Building2, Film, Bike, Clock, MapPin, Star, Tent } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const ZabezpieczeniaMedyczne = () => {
  useSEO({
    title: "Zabezpieczenie Medyczne Imprez Racib\órz i \Śl\ąsk \u2013 Podmiot Leczniczy | LIFE-Ratownictwo",
    description: "Profesjonalne zabezpieczenie medyczne imprez masowych i niemasowych na \Śl\ąsku. Podmiot leczniczy, 3 ambulanse, ratownicy medyczni PRM. Pomagamy w formalno\ściach. Tel. 602 622 840."
  });

  const eventTypes = [
    {
      icon: <Music size={24} />,
      title: "Imprezy masowe artystyczno-rozrywkowe",
      text: "Koncerty, festiwale muzyczne, widowiska plenerowe z udzia\łem powy\żej 500 os\ób w budynkach lub 1000 os\ób na otwartym terenie. Pe\łne zabezpieczenie zgodne z tabel\ą minimalnych si\ł i \środk\ów \u2014 zespo\ły wyjazdowe, patrole, punkt pomocy medycznej.",
    },
    {
      icon: <Trophy size={24} />,
      title: "Imprezy masowe sportowe",
      text: "Zawody sportowe, maratony, turnieje z udzia\łem powy\żej 300 os\ób w budynkach lub 1000 os\ób na stadionie lub terenie otwartym. Do\świadczenie w zabezpieczaniu zar\ówno zawodnik\ów jak i widowni.",
    },
    {
      icon: <TreePine size={24} />,
      title: "Festyny, do\żynki i imprezy lokalne",
      text: "Imprezy niemasowe \u2014 festyny gminne, do\żynki, pikniki so\łeckie, jarmarki i inne lokalne wydarzenia. Na \życzenie rozstawiamy namiot ratowniczy z pokazowym szkoleniem z pierwszej pomocy \u2014 dodatkowa atrakcja dla uczestnik\ów.",
    },
    {
      icon: <Heart size={24} />,
      title: "Pikniki rodzinne i eventy plenerowe",
      text: "Imprezy dla rodzin z dzie\ćmi \u2014 szczeg\ólnie popularna jest tu opcja namiotu ratowniczego z interaktywnymi pokazami pierwszej pomocy. Dzieci i rodzice ucz\ą si\ę razem, a ratownicy medyczni s\ą do dyspozycji przez ca\ły czas trwania imprezy.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Eventy firmowe i targi",
      text: "Konferencje, targi, dni otwarte, eventy integracyjne. Dyskretna, profesjonalna obecno\ś\ć s\łu\żb medycznych, kt\óra buduje zaufanie uczestnik\ów i minimalizuje ryzyko dla organizatora.",
    },
    {
      icon: <Bike size={24} />,
      title: "Zawody sportowe i biegi masowe",
      text: "Biegi uliczne, zawody kolarskie, turnieje pi\łkarskie, zawody p\ływackie. Zabezpieczenie zar\ówno uczestnik\ów zawod\ów jak i publiczno\ści \u2014 z uwzgl\ędnieniem specyfiki danej dyscypliny sportowej.",
    },
    {
      icon: <Film size={24} />,
      title: "Produkcje filmowe i telewizyjne",
      text: "Zabezpieczenie planu zdj\ęciowego wymagane przez ubezpieczycieli przy scenach kaskaderskich i zdj\ęciach plenerowych.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Kontakt i wst\ępna wycena",
      text: "Zadzwo\ń lub napisz. Powiedz nam kiedy, gdzie i jaka impreza. Tego samego dnia odpowiadamy z wst\ępn\ą wycen\ą i informacj\ą o wymaganych formalno\ściach.",
    },
    {
      num: "02",
      title: "Plan zabezpieczenia i formalno\ści",
      text: "Przygotowujemy plan zabezpieczenia medycznego i pomagamy w z\ło\żeniu wniosku do dysponenta ZRM. Pilnujemy termin\ów \u2014 Ty skupiasz si\ę na organizacji imprezy.",
    },
    {
      num: "03",
      title: "Zabezpieczenie imprezy",
      text: "W dniu imprezy stawiamy si\ę punktualnie z ambulansem, sprz\ętem i zespo\łem. Koordynujemy \ł\ączno\ś\ć mi\ędzy ambulansem, patrolami i punktem pomocy. Na \życzenie rozstawiamy namiot z pokazami pierwszej pomocy.",
    },
    {
      num: "04",
      title: "Dokumentacja poimprezowa",
      text: "Po imprezie wystawiamy pe\łn\ą dokumentacj\ę medyczn\ą wymagan\ą przez przepisy \u2014 raporty z interwencji i ewidencj\ę udzielonych \świadcze\ń.",
    },
  ];

  return (
    <ServiceLayout
      title="Zabezpieczenie"
      titleAccent="Medyczne Imprez"
      subtitle="Organizujesz imprez\ę i potrzebujesz zabezpieczenia medycznego? Jako licencjonowany podmiot leczniczy z trzema ambulansami i zespo\łem ratownik\ów medycznych zapewniamy pe\łne, zgodne z prawem zabezpieczenie \u2014 od ma\łego festynu po du\ż\ą imprez\ę masow\ą."
      bgImage="/assets/images/Life-Ratownictwo-Medyczne-i-Pielegniarstwo.jpg"
      tiles={[
        { value: "100+", label: "Zabezpieczonych", sub: "imprez i wydarze\ń" },
        { value: "PRM", label: "Ratownicy medyczni", sub: "na ka\żdym evencie" },
        { value: "3", label: "Ambulanse", sub: "w gotowo\ści" },
        { value: "Podmiot", label: "Leczniczy", sub: "pe\łna legalno\ś\ć" },
      ]}
    >
      {/* === SEKCJA: Prawo wymaga podmiotu leczniczego === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Wa\żne &mdash; podstawa prawna</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-6">Zabezpieczenie medyczne imprezy masowej &mdash; prawo wymaga podmiotu leczniczego</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          To nie jest kwestia wyboru &mdash; to wym&oacute;g prawa. Zgodnie z <strong>Ustaw\ą o bezpiecze\ństwie imprez masowych</strong> z dnia 20 marca 2009 r. oraz <strong>Rozporz\ądzeniem Ministra Zdrowia z dnia 6 lutego 2012 r.</strong> w sprawie minimalnych wymaga\ń dotycz\ących zabezpieczenia pod wzgl\ędem medycznym imprezy masowej, pe\łne zabezpieczenie medyczne &mdash; obejmuj\ące udzielanie \świadcze\ń zdrowotnych &mdash; mo\że realizowa\ć wy\ł\ącznie <strong>podmiot leczniczy</strong>.
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Ministerstwo Zdrowia potwierdzi\ło to wprost w pi\śmie z dnia 8 lutego 2017 r. (sygn. SOR.450.6.2.2017.MS): organizator imprezy masowej ma obowi\ązek powierzy\ć zabezpieczenie medyczne podmiotowi leczniczemu deleguj\ącemu osoby wykonuj\ące zaw\ód medyczny.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          <strong>LIFE-Ratownictwo Medyczne i Piel\ęgniarstwo Sp. z o.o.</strong> jest podmiotem leczniczym wpisanym do rejestru Ministra Zdrowia (KRS 0000920762). Wybieraj\ąc nas, masz pewno\ś\ć pe\łnej zgodno\ści z przepisami &mdash; bez ryzyka prawnego dla organizatora.
        </p>

        {/* Ramka ostrzegawcza */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 mb-12 flex gap-4">
          <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-bold text-navy-blue mb-2">Uwaga dla organizator&oacute;w</h4>
            <p className="text-gray-600 leading-relaxed text-sm">
              Firmy ochroniarskie, stowarzyszenia czy osoby po kursie KPP nieb\ęd\ące podmiotem leczniczym mog\ą legalnie wystawić jedynie patrole ratownicze. <strong>Nie mog\ą udziela\ć \świadcze\ń zdrowotnych</strong> ani wystawi\ć dokumentacji wymaganej przez dysponenta ZRM. Jako organizator ponosisz za to pe\łn\ą odpowiedzialno\ś\ć prawn\ą.
            </p>
          </div>
        </div>
      </motion.div>

      {/* === SEKCJA: Oferta dopasowana === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Oferta</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-4">Zabezpieczenie dopasowane do wielko\ści i charakteru imprezy</h2>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Nie stosujemy jednego schematu dla wszystkich &mdash; ka\żda impreza jest inna i wymaga innego podej\ścia. Dobieramy sk\ład zespo\łu i \środki do rzeczywistych potrzeb, zawsze w zgodzie z obowi\ązuj\ącymi przepisami.
        </p>
      </motion.div>

      {/* Imprezy masowe */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-navy-blue text-white rounded-3xl p-8 md:p-10 mb-8">
        <h3 className="text-2xl font-extrabold mb-4">Imprezy masowe &mdash; pe\łne zabezpieczenie zgodne z Rozp. MZ</h3>
        <p className="text-white/70 mb-6 leading-relaxed">
          Na imprezach masowych (powy\żej 1000 uczestnik\ów na otwartym terenie lub 500 w budynku) realizujemy pe\łne zabezpieczenie medyczne zgodne z Rozporz\ądzeniem Ministra Zdrowia z dnia 6 lutego 2012 r.:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Ambulans na miejscu z obsad\ą ratownik\ów medycznych w pe\łnej gotowo\ści do interwencji i transportu",
            "Punkt pomocy medycznej \u2014 stacjonarne stanowisko wyposa\żone w produkty lecznicze i sprz\ęt ratowniczy",
            "Patrole ratownicze przemieszczaj\ące si\ę po terenie imprezy z torbami ratunkowymi i \ł\ączno\ści\ą bezprzewodow\ą",
            "Dla imprez powy\żej 10 000 uczestnik\ów \u2014 koordynator medyczny spe\łniaj\ący wymogi ustawowe",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-white/90">
              <ShieldCheck size={18} className="text-primary-red shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-white/60 text-sm">Personel: ratownicy medyczni i piel\ęgniarki z pe\łnymi uprawnieniami do wykonywania medycznych czynno\ści ratunkowych.</p>
      </motion.div>

      {/* Imprezy mniejsze */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#f4f7f6] rounded-3xl p-8 md:p-10 mb-8 border-2 border-white">
        <h3 className="text-2xl font-extrabold text-navy-blue mb-4">Imprezy mniejsze &mdash; sk\łady mieszane dopasowane do potrzeb</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Na imprezach niemasowych &mdash; festynach, do\żynkach, zawodach sportowych, eventach firmowych &mdash; stosujemy elastyczne sk\łady mieszane dopasowane do skali i charakteru wydarzenia:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Ratownicy medyczni i/lub piel\ęgniarki jako wykwalifikowany personel medyczny",
            "Ratownicy KPP jako wsparcie patrolowe i przy punkcie pomocy",
            "Ambulans lub wyposa\żona torba ratownicza \u2014 zale\żnie od potrzeb i lokalizacji",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <ShieldCheck size={18} className="text-primary-red shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-500 text-sm">Ratownicy KPP mog\ą legalnie pe\łni\ć funkcj\ę patroli ratowniczych, a obecno\ś\ć ratownika medycznego lub piel\ęgniarki zapewnia w\ła\ściwy poziom \świadcze\ń zdrowotnych.</p>
      </motion.div>

      {/* Małe imprezy */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#f4f7f6] rounded-3xl p-8 md:p-10 mb-8 border-2 border-white">
        <h3 className="text-2xl font-extrabold text-navy-blue mb-4">Ma\łe imprezy &mdash; ratownicy bez ambulansu</h3>
        <p className="text-gray-600 leading-relaxed">
          Na niewielkich imprezach lokalnych, gdzie charakter i liczba uczestnik\ów nie wymaga obecno\ści ambulansu, wysy\łamy jednego lub dw\óch ratownik\ów z wyposa\żeniem ratowniczym. To rozwi\ązanie ekonomiczne, kt\óre nadal zapewnia profesjonaln\ą opiek\ę medyczn\ą i szybk\ą reakcj\ę w razie potrzeby.
        </p>
      </motion.div>

      {/* Opcja wyjątkowa — namiot */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-primary-red/5 border-2 border-primary-red/20 rounded-3xl p-8 md:p-10 mb-16">
        <div className="flex items-start gap-4 mb-4">
          <Tent className="text-primary-red shrink-0 mt-1" size={28} />
          <h3 className="text-2xl font-extrabold text-navy-blue">Wyj\ątkowa opcja &mdash; zabezpieczenie medyczne i szkolenie z pierwszej pomocy w jednym</h3>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Na piknikach rodzinnych, festynach i do\żynkach oferujemy co\ś wyj\ątkowego &mdash; zabezpieczenie medyczne po\ł\ączone z pokazowym szkoleniem z pierwszej pomocy dla uczestnik\ów imprezy. Rozstawiamy namiot ratowniczy w widocznym miejscu, kt\óry pe\łni jednocze\śnie funkcj\ę punktu pomocy medycznej i strefy edukacyjnej.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            "Nauka RKO na fantomie \u2014 ka\żdy mo\że spr\óbowa\ć",
            "Obs\ługa defibrylatora AED \u2014 pokazujemy \że to prostsze ni\ż my\ślisz",
            "Post\ępowanie przy zadławieniu \u2014 popularne w\śr\ód rodzic\ów ma\łych dzieci",
            "Pytania i odpowiedzi z ratownikiem medycznym na \żywo",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-gray-700">
              <Star size={16} className="text-primary-red shrink-0 mt-1" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">
          Dla organizatora to dodatkowa atrakcja imprezy, kt\óra przyci\ąga uczestnik\ów i buduje jej presti\ż. Namiot ratowniczy pe\łni jednocze\śnie funkcj\ę wymaganego przepisami punktu pomocy medycznej &mdash; organizator otrzymuje dwie warto\ści w jednym.
        </p>
      </motion.div>

      {/* === SEKCJA: Nasz personel === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Zesp\ó\ł</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-4">Kto realizuje zabezpieczenie?</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Dysponujemy trzema grupami wykwalifikowanego personelu medycznego, kt\óre dobieramy odpowiednio do charakteru i wymog\ów ka\żdej imprezy.
        </p>
      </motion.div>

      <div className="space-y-6 mb-16">
        {[
          {
            icon: <Stethoscope size={24} />,
            title: "Ratownicy medyczni",
            text: "Zaw\ód medyczny wymagaj\ący uko\ńczenia studi\ów wy\ższych na kierunku ratownictwo medyczne. Uprawnieni do samodzielnego wykonywania medycznych czynno\ści ratunkowych \u2014 podawania lek\ów, zak\ładania wk\łu\ć do\żylnych, intubacji i kierowania zespo\łem ratowniczym. Nasi ratownicy medyczni pracuj\ą na co dzie\ń w Systemie Pa\ństwowego Ratownictwa Medycznego w Raciborzu \u2014 maj\ą za sob\ą setki realnych interwencji.",
          },
          {
            icon: <Heart size={24} />,
            title: "Piel\ęgniarki",
            text: "Personel medyczny z pe\łnymi kwalifikacjami do udzielania \świadcze\ń zdrowotnych. Niezb\ędny element sk\ładu przy zabezpieczeniu punktu pomocy medycznej na imprezach masowych. Nasze piel\ęgniarki posiadaj\ą wieloletnie do\świadczenie kliniczne.",
          },
          {
            icon: <GraduationCap size={24} />,
            title: "Ratownicy KPP",
            text: "Osoby po 66-godzinnym kursie Kwalifikowanej Pierwszej Pomocy z egzaminem pa\ństwowym przed komisj\ą wojewody. Uprawnieni do udzielania kwalifikowanej pierwszej pomocy. Zgodnie z przepisami mog\ą stanowi\ć patrole ratownicze na imprezach masowych oraz realizowa\ć pe\łne zabezpieczenie na imprezach niemasowych.",
          },
        ].map((person, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#f4f7f6] rounded-3xl p-8 border-2 border-white flex gap-6"
          >
            <div className="bg-white p-4 rounded-2xl shadow-sm h-fit text-primary-red shrink-0">{person.icon}</div>
            <div>
              <h3 className="text-xl font-extrabold text-navy-blue mb-2">{person.title}</h3>
              <p className="text-gray-600 leading-relaxed">{person.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === SEKCJA: Co zabezpieczamy === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Rodzaje imprez</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-4">Zabezpieczamy ka\żdy rodzaj imprezy &mdash; od festynu po imprez\ę masow\ą</h2>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Dysponujemy trzema ambulansami i elastycznym zespo\łem, dzi\ęki czemu mo\żemy realizowa\ć kilka zlece\ń jednocze\śnie na terenie ca\łego wojew\ództwa \śl\ąskiego.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {eventTypes.map((event, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#f4f7f6] rounded-3xl p-7 border-2 border-white hover:shadow-lg transition-all"
          >
            <div className="bg-white p-3 rounded-xl shadow-sm w-fit text-primary-red mb-4">{event.icon}</div>
            <h3 className="text-lg font-extrabold text-navy-blue mb-2">{event.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{event.text}</p>
          </motion.div>
        ))}
      </div>

      {/* === SEKCJA: Formalności === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Formalno\ści</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-4">Pomagamy w ca\ło\ści &mdash; od formalno\ści po ostatni uczestnik</h2>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Organizacja imprezy to i tak wystarczaj\ąco du\żo pracy. Dlatego nie zostawiamy Ci\ę sam na sam z formalno\ściami &mdash; przeprowadzimy Ci\ę przez ca\ły proces.
        </p>
      </motion.div>

      <div className="space-y-6 mb-10">
        {[
          {
            icon: <FileCheck size={24} />,
            title: "Plan zabezpieczenia medycznego",
            text: "Przygotowujemy kompletny plan zabezpieczenia medycznego imprezy uwzgl\ędniaj\ący jej charakter, miejsce, liczb\ę uczestnik\ów, czas trwania i specyficzne zagro\żenia. To dokument wymagany przez dysponenta ZRM i organy wydaj\ące zezwolenie na imprez\ę masow\ą.",
          },
          {
            icon: <Phone size={24} />,
            title: "Kontakt z dysponentem ZRM",
            text: "Wniosek o opini\ę dysponenta Zespo\ł\ów Ratownictwa Medycznego nale\ży z\ło\ży\ć co najmniej 44 dni przed imprez\ą masow\ą. Na obszarze wojew\ództwa \śl\ąskiego dysponentem jest Wojew\ódzkie Pogotowie Ratunkowe w Katowicach. Pomagamy w przygotowaniu wniosku i kompletnej dokumentacji.",
          },
          {
            icon: <BadgeCheck size={24} />,
            title: "Dokumentacja poimprezowa",
            text: "Po zako\ńczeniu imprezy wystawiamy pe\łn\ą dokumentacj\ę medyczn\ą \u2014 raporty z interwencji, ewidencj\ę udzielonych \świadcze\ń i inne dokumenty wymagane przepisami.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#f4f7f6] rounded-3xl p-7 border-2 border-white flex gap-6"
          >
            <div className="bg-white p-4 rounded-2xl shadow-sm h-fit text-primary-red shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-lg font-extrabold text-navy-blue mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Terminy */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-navy-blue text-white rounded-3xl p-8 md:p-10 mb-16">
        <h3 className="text-xl font-extrabold mb-6 flex items-center gap-3">
          <Clock size={22} className="text-primary-red" /> Terminy, o kt&oacute;rych musisz wiedzie\ć
        </h3>
        <div className="space-y-4">
          {[
            { days: "44 dni", text: "przed imprez\ą \u2014 z\ło\żenie wniosku o opini\ę dysponenta ZRM" },
            { days: "30 dni", text: "przed imprez\ą \u2014 z\ło\żenie wniosku o zezwolenie na imprez\ę masow\ą do organu gminy" },
            { days: "16 dni", text: "przed imprez\ą \u2014 dysponent ZRM wydaje opini\ę o niezb\ędnych si\łach i \środkach" },
          ].map((t, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="bg-primary-red text-white text-xs font-black px-3 py-1.5 rounded-lg shrink-0 min-w-[70px] text-center">{t.days}</span>
              <span className="text-white/80">{t.text}</span>
            </div>
          ))}
        </div>
        <p className="text-white/60 text-sm mt-6">Skontaktuj si\ę z nami jak najwcze\śniej &mdash; najlepiej 2\u20133 miesi\ące przed planowan\ą dat\ą imprezy.</p>
      </motion.div>

      {/* === SEKCJA: Dlaczego my === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Dlaczego my</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-10">3 ambulanse, podmiot leczniczy, ratownicy medyczni PRM</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {[
          { icon: <BadgeCheck size={24} />, title: "Podmiot leczniczy", text: "Jedyni uprawnieni do pe\łnego, legalnego zabezpieczenia medycznego imprezy masowej. Wpisani do rejestru Ministra Zdrowia \u2014 KRS 0000920762." },
          { icon: <Truck size={24} />, title: "3 w\łasne ambulanse", text: "Trzy w pe\łni wyposa\żone ambulanse spe\łniaj\ące wymogi Rozporz\ądzenia MZ z 2012 r. Mo\żliwo\ś\ć jednoczesnego zabezpieczenia kilku imprez." },
          { icon: <Users size={24} />, title: "Trzy poziomy personelu", text: "Ratownicy medyczni, piel\ęgniarki i ratownicy KPP \u2014 dobieramy sk\ład do faktycznych potrzeb i wymog\ów prawnych ka\żdej imprezy." },
          { icon: <FileCheck size={24} />, title: "Pe\łna obs\ługa formalno\ści", text: "Pomagamy w przygotowaniu planu zabezpieczenia, wniosku do dysponenta ZRM i ca\łej dokumentacji wymaganej przez prawo." },
          { icon: <Tent size={24} />, title: "Co\ś ekstra", text: "Na festynach i piknikach rozstawiamy namiot ratowniczy z pokazowym szkoleniem z pierwszej pomocy \u2014 dodatkowa atrakcja i warto\ś\ć dla organizatora." },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#f4f7f6] rounded-3xl p-7 border-2 border-white"
          >
            <div className="text-primary-red mb-4">{item.icon}</div>
            <h3 className="text-lg font-extrabold text-navy-blue mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* === SEKCJA: Jak działamy === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Wsp\ó\łpraca</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-10">Od kontaktu do realizacji &mdash; jak dzia\łamy?</h2>
      </motion.div>

      <div className="space-y-6 mb-16">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-6 items-start"
          >
            <div className="bg-primary-red text-white text-2xl font-black w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">{step.num}</div>
            <div className="bg-[#f4f7f6] rounded-3xl p-7 border-2 border-white flex-1">
              <h3 className="text-lg font-extrabold text-navy-blue mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === CTA === */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-primary-red rounded-3xl p-10 text-white text-center"
      >
        <h2 className="text-3xl font-black mb-4">Zapytaj o zabezpieczenie swojej imprezy</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Skontaktuj si\ę z nami jak najwcze\śniej &mdash; najlepiej 2\u20133 miesi\ące przed planowan\ą dat\ą imprezy masowej. Na mniejsze imprezy mo\żemy zorganizowa\ć zabezpieczenie w kr\ótszym czasie. Dzia\łamy na terenie Raciborza, Rybnika, Wodzis\ławia \Śl\ąskiego, Jastrz\ębia-Zdroju, Gliwic i ca\łego wojew\ództwa \śl\ąskiego.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:602622840" className="bg-white text-primary-red px-8 py-4 rounded-xl font-black text-lg shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
            <Phone size={20} /> 602 622 840
          </a>
          <a href="mailto:biuro@life-ratownictwo.pl" className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/30 hover:bg-white/30 transition-all flex items-center justify-center gap-2">
            <Mail size={20} /> Napisz do nas
          </a>
        </div>
      </motion.div>

      {/* SEO Footer Text */}
      <div className="mt-16 pt-10 border-t border-gray-200">
        <p className="text-gray-400 text-sm leading-relaxed">
          LIFE-Ratownictwo Medyczne i Piel\ęgniarstwo Sp. z o.o. \świadczy us\ługi zabezpieczenia medycznego imprez masowych i niemasowych na terenie wojew\ództwa \śl\ąskiego &mdash; Racib\órz, Rybnik, Wodzis\ław \Śl\ąski, Jastrz\ębie-Zdr\ój, Gliwice, Katowice i okolice. Podmiot leczniczy wpisany do rejestru MZ &mdash; NIP 6392023251, KRS 0000920762.
        </p>
      </div>

      {/* Cross-sell & Blog links */}
      <div className="mt-12 pt-10 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-navy-blue mb-6">Przeczytaj też na blogu</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <Link to="/blog/zabezpieczenie-medyczne-imprezy-masowej-wymagania-prawne" className="flex items-center gap-3 bg-[#f4f7f6] p-5 rounded-2xl font-semibold text-navy-blue hover:text-primary-red hover:shadow-md transition-all">
            <ChevronRight className="text-primary-red shrink-0" size={18} /> Wymagania prawne imprezy masowej 2026
          </Link>
          <Link to="/blog/ile-kosztuje-zabezpieczenie-medyczne-imprezy" className="flex items-center gap-3 bg-[#f4f7f6] p-5 rounded-2xl font-semibold text-navy-blue hover:text-primary-red hover:shadow-md transition-all">
            <ChevronRight className="text-primary-red shrink-0" size={18} /> Ile kosztuje zabezpieczenie medyczne?
          </Link>
        </div>

        <h3 className="text-2xl font-bold text-navy-blue mb-6">Zobacz też nasze usługi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/transport-medyczny" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Transport medyczny</Link>
          <Link to="/szkolenia-pierwsza-pomoc" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Szkolenia z pierwszej pomocy</Link>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ZabezpieczeniaMedyczne;
