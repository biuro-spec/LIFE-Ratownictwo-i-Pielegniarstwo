import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, CheckCircle2, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const Szkolenia = () => {
  useSEO({ title: 'Szkolenia z Pierwszej Pomocy', description: 'Szkolenia z pierwszej pomocy prowadzone przez aktywnych ratowników medycznych. Kursy dla firm, szkół i osób prywatnych w Raciborzu i na Śląsku.' });
  return (
    <ServiceLayout 
      title="Szkolenia Pierwsza Pomoc"
      subtitle="Uczymy jak ratować życie – profesjonalnie, praktycznie i bez stresu."
      bgImage="/assets/images/Szkolenia-z-pierwszej-pomocy-dla-dzieci.jpg"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-extrabold text-navy-blue mb-6">Praktyczna wiedza od ratowników</h2>
        <p className="text-gray-600 mb-8 leading-relaxed text-xl">
          Prowadzimy szkolenia dla firm, instytucji, szkół oraz osób prywatnych na terenie Raciborza i całego kraju. Szkolenia prowadzą ratownicy medyczni pracujący na co dzień w systemie ratownictwa, co gwarantuje przekazywanie najświeższej wiedzy.
        </p>

        <div className="bg-navy-blue text-white p-10 rounded-[40px] mb-12 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-primary-red">Podczas szkolenia nauczysz się:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Resuscytacji krążeniowo-oddechowej (RKO)",
                "Profesjonalnej obsługi defibrylatora AED",
                "Pomocy osobie nieprzytomnej",
                "Postępowania przy zadławieniach",
                "Zasad działania w nagłych wypadkach"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-primary-red shrink-0" />
                  <span className="font-semibold opacity-90">{item}</span>
                </div>
              ))}
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-navy-blue mb-4">Praktyka ponad wszystko</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                    Duża część naszego szkolenia to ćwiczenia praktyczne na fantomach. Wierzymy, że tylko przez bezpośrednie działanie można przełamać strach przed udzielaniem pomocy i wyrobić w sobie właściwe odruchy.
                </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-[#f4f7f6] p-6 rounded-3xl text-center">
                    <Users className="mx-auto text-primary-red mb-2" />
                    <span className="text-xs font-black text-navy-blue uppercase">Dla Firm</span>
                </div>
                <div className="bg-[#f4f7f6] p-6 rounded-3xl text-center">
                    <GraduationCap className="mx-auto text-primary-red mb-2" />
                    <span className="text-xs font-black text-navy-blue uppercase">Dla Szkół</span>
                </div>
            </div>
        </div>
        {/* Cross-sell & Blog links */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Przeczytaj też na blogu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <Link to="/blog/obowiazek-szkolenia-z-pierwszej-pomocy-w-firmie-prawo" className="flex items-center gap-3 bg-[#f4f7f6] p-5 rounded-2xl font-semibold text-navy-blue hover:text-primary-red hover:shadow-md transition-all">
              <ChevronRight className="text-primary-red shrink-0" size={18} /> Obowiązek szkolenia w firmie — co mówi prawo?
            </Link>
            <Link to="/blog/jak-udzielac-pierwszej-pomocy-kompletny-poradnik" className="flex items-center gap-3 bg-[#f4f7f6] p-5 rounded-2xl font-semibold text-navy-blue hover:text-primary-red hover:shadow-md transition-all">
              <ChevronRight className="text-primary-red shrink-0" size={18} /> Jak udzielać pierwszej pomocy — poradnik
            </Link>
          </div>

          <h3 className="text-2xl font-bold text-navy-blue mb-6">Zobacz też nasze usługi</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/zabezpieczenia-medyczne" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Zabezpieczenia medyczne</Link>
            <Link to="/transport-medyczny" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Transport medyczny</Link>
            <Link to="/uslugi-pielegniarskie" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Usługi pielęgniarskie</Link>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Szkolenia;
