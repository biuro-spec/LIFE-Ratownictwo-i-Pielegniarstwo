import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { motion } from 'framer-motion';
import { Droplets, Home, Stethoscope, HeartPulse, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const Pielegniarstwo = () => {
  useSEO({ title: 'Pielęgniarka do domu Racibórz', description: 'Profesjonalne usługi pielęgniarskie w domu pacjenta. Kroplówki, zastrzyki, pobrania krwi, opatrunki i opieka nad osobami leżącymi w Raciborzu.' });
  return (
    <ServiceLayout 
      title="Pielęgniarka do domu"
      subtitle="Oferujemy profesjonalne usługi pielęgniarskie w zaciszu Twojego domu na terenie Raciborza i okolic."
      bgImage="/assets/images/Uslugi-pielegniarskie.jpg"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-extrabold text-navy-blue mb-6">Pomoc medyczna bez wychodzenia z domu</h2>
        <p className="text-gray-600 mb-8 leading-relaxed text-xl">
          Z wizyt domowych korzystają najczęściej osoby starsze, pacjenci po operacjach oraz osoby z ograniczoną możliwością poruszania się. Dzięki temu pacjent otrzymuje fachową opiekę w przyjaznym, znanym sobie otoczeniu.
        </p>

        <h3 className="text-2xl font-bold text-navy-blue mb-8">Zakres usług pielęgniarskich:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            { title: "Podanie kroplówki", icon: <Droplets /> },
            { title: "Wykonanie zastrzyku", icon: <Stethoscope /> },
            { title: "Pobranie krwi do badań", icon: <CheckCircle2 className="text-green-500" /> },
            { title: "Zmiana opatrunku i leczenie ran", icon: <Home /> },
            { title: "Kontrola stanu zdrowia", icon: <HeartPulse /> },
            { title: "Opieka nad osobą leżącą", icon: <CheckCircle2 className="text-green-500" /> }
          ].map((item, i) => (
            <motion.div 
               key={i} 
               whileHover={{ scale: 1.05 }}
               className="flex items-center gap-6 p-6 bg-[#f4f7f6] rounded-[30px] border-2 border-white shadow-sm"
            >
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-red shadow-sm">
                 {item.icon}
               </div>
               <h4 className="text-lg font-bold text-navy-blue">{item.title}</h4>
            </motion.div>
          ))}
        </div>

        <div className="bg-navy-blue text-white p-12 rounded-[50px] relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-primary-red">Bezpieczeństwo i Komfort</h3>
                <p className="text-xl opacity-90 leading-relaxed font-light italic">
                    "Nasz zespół pielęgniarski posiada wieloletnie doświadczenie ze szpitalnych oddziałów zabiegowych i internistycznych. Gwarantujemy najwyższe standardy higieny i rzetelność w wykonywaniu zleconych zabiegów."
                </p>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-32 translate-y-32"></div>
        </div>
        {/* Cross-sell & Blog links */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Przeczytaj też na blogu</h3>
          <div className="grid grid-cols-1 gap-4 mb-10">
            <Link to="/blog/opieka-pielegniarska-w-domu-kiedy-warto-skorzystac" className="flex items-center gap-3 bg-[#f4f7f6] p-5 rounded-2xl font-semibold text-navy-blue hover:text-primary-red hover:shadow-md transition-all">
              <ChevronRight className="text-primary-red shrink-0" size={18} /> Opieka pielęgniarska w domu — kiedy warto skorzystać?
            </Link>
          </div>

          <h3 className="text-2xl font-bold text-navy-blue mb-6">Zobacz też nasze usługi</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/transport-medyczny" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Transport medyczny</Link>
            <Link to="/zabezpieczenia-medyczne" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Zabezpieczenia medyczne</Link>
            <Link to="/szkolenia-pierwsza-pomoc" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Szkolenia z pierwszej pomocy</Link>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Pielegniarstwo;
