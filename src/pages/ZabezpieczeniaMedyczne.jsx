import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { motion } from 'framer-motion';
import { Shield, Music, Trophy, Users, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const ZabezpieczeniaMedyczne = () => {
  useSEO({ title: 'Zabezpieczenia Medyczne Imprez', description: 'Profesjonalne zabezpieczenie medyczne imprez i wydarzeń na Śląsku. Karetki, ratownicy medyczni, punkt pomocy medycznej.' });
  return (
    <ServiceLayout 
      title="Ratownictwo Śląsk"
      subtitle="Zapewniamy profesjonalne zabezpieczenie medyczne imprez oraz wydarzeń publicznych zgodnie z przepisami."
      bgImage="/assets/images/Life-Ratownictwo-Medyczne-i-Pielegniarstwo.jpg"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-extrabold text-navy-blue mb-6">Bezpieczeństwo wydarzeń</h2>
        <p className="text-gray-600 mb-8 leading-relaxed text-xl">
          Obecność zespołu ratowniczego zwiększa bezpieczeństwo uczestników oraz pozwala szybko udzielić pomocy w sytuacjach nagłych. Zabezpieczamy wydarzenia sportowe, koncerty czy imprezy miejskie w całym regionie.
        </p>

        <h3 className="text-2xl font-bold text-navy-blue mb-8">Nasze realizacje obejmują:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "Koncerty i wydarzenia kulturalne", icon: <Music className="text-primary-red" /> },
            { title: "Mecze i zawody sportowe", icon: <Trophy className="text-primary-red" /> },
            { title: "Biegi uliczne i maratony", icon: <CheckCircle2 className="text-primary-red" /> },
            { title: "Pikniki rodzinne i firmowe", icon: <Users className="text-primary-red" /> },
            { title: "Imprezy miejne i dożynki", icon: <Shield className="text-primary-red" /> }
          ].map((t, i) => (
            <motion.div 
               key={i} 
               whileHover={{ x: 10 }}
               className="bg-[#f4f7f6] p-6 rounded-2xl flex items-center gap-6 border border-white"
            >
              <div className="bg-white p-4 rounded-xl shadow-sm">{t.icon}</div>
              <span className="font-bold text-navy-blue text-lg">{t.title}</span>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#f4f7f6] p-10 rounded-[40px] border-l-8 border-primary-red">
            <h3 className="text-2xl font-bold text-navy-blue mb-6">Zakres zabezpieczenia</h3>
            <p className="text-gray-600 mb-6 font-medium">
                W zależności od wielkości wydarzenia, nasze zabezpieczenie może obejmować:
            </p>
            <ul className="space-y-4 list-none p-0">
              {[
                "Zespół dyplomowanych ratowników medycznych",
                "Specjalistyczny ambulans ratunkowy z wyposażeniem",
                "Stacjonarny punkt pomocy medycznej",
                "Oznakowane patrole piesze"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-navy-blue">
                  <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
        </div>
        {/* Cross-sell & Blog links */}
        <div className="mt-16 pt-12 border-t border-gray-200">
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
      </div>
    </ServiceLayout>
  );
};

export default ZabezpieczeniaMedyczne;
