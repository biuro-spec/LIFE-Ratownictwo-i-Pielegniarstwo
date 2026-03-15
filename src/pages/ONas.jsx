import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Microscope, Users, History, CheckCircle2 } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const ONas = () => {
  useSEO({ title: 'O nas', description: 'Poznaj historię Life-Ratownictwo - od założenia w 2012 roku przez Mariusza Cichonia, przez walkę z pandemią, po profesjonalną opiekę medyczną na Śląsku.' });
  const timeline = [
    { year: "2012", title: "Założenie Firmy", desc: "Mariusz Cichoń zakłada Life-Ratownictwo, budując fundamenty profesjonalnej opieki poza-szpitalnej.", icon: <Calendar /> },
    { year: "2015", title: "Mistrzostwa Ratownictwa", desc: "Aktywne zaangażowanie w edukację i podnoszenie standardów ratowniczych na Śląsku.", icon: <Award /> },
    { year: "2020", title: "Walka z Pandemią", desc: "Uruchomienie wymazobusów i punktów Drive-Thru w Raciborzu i Rybniku – realna pomoc w najtrudniejszym czasie.", icon: <Microscope /> },
    { year: "2022", title: "Spółka i Rozwój", desc: "Przekształcenie w Spółkę i rozszerzenie oferty o kompleksową opiekę pielęgniarską.", icon: <Users /> },
  ];

  return (
    <div className="pt-20">
      <section className="bg-navy-blue py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-red/10 border-l border-white/5 skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-primary-red font-black tracking-widest uppercase mb-4 block">Nasze Korzenie</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Poznaj naszą <span className="text-primary-red">Misję</span></h1>
            <p className="text-xl opacity-80 leading-relaxed font-light mb-8 italic">
              "To my dopasowujemy się do pacjenta, a nie pacjent do nas."
            </p>
            <p className="text-lg opacity-70 leading-relaxed mb-10">
              Life-Ratownictwo Medyczne i Pielęgniarstwo Sp. z o.o. to zespół pasjonatów i ekspertów, których liderem jest <strong>Mariusz Cichoń</strong> – czynny ratownik medyczny z raciborskiego pogotowia. Od lat udowadniamy, że pomoc medyczna może być szybka, profesjonalna i pełna empatii.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
                <div className="absolute inset-0 bg-primary-red/20 rounded-[40px] translate-x-4 translate-y-4"></div>
                <img src="/assets/images/IMG_0802.jpg" alt="Zespół Life-Ratownictwo" className="rounded-[40px] shadow-2xl relative z-10 w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
                <History className="text-primary-red w-12 h-12 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-black text-navy-blue mb-4">Kamienie Milowe</h2>
                <p className="text-gray-500 font-medium">Od lokalnego transportu do zaawansowanej logistyki medycznej.</p>
            </div>
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className="w-24 h-24 bg-[#f4f7f6] text-primary-red rounded-full flex items-center justify-center shrink-0 shadow-inner border-2 border-white">
                    {item.icon}
                  </div>
                  <div className={`p-10 bg-[#f4f7f6] rounded-[40px] flex-grow shadow-sm hover:shadow-xl transition-all border-2 border-white ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-primary-red font-black text-3xl mb-2 block">{item.year}</span>
                    <h3 className="text-2xl font-bold text-navy-blue mb-4">{item.title}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f4f7f6]">
        <div className="container mx-auto px-4">
            <div className="bg-navy-blue rounded-[60px] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,43,70,0.3)]">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-red/10 to-transparent"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight">Dlaczego Life-Ratownictwo?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {[
                          "Zespół czynnych ratowników medycznych i pielęgniarek PRM",
                          "Własna, nowoczesna baza logistyczna w Raciborzu",
                          "Doświadczenie w najtrudniejszych warunkach (Pandemia COVID-19)",
                          "Pełne wyposażenie certyfikowanym sprzętem medycznym",
                          "Szybkość działania i elastyczność wobec potrzeb pacjenta",
                          "Transparentność i rzetelność w każdym zleceniu"
                        ].map((text, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <CheckCircle2 className="text-primary-red shrink-0 mt-1" />
                            <p className="text-lg opacity-80 font-medium">{text}</p>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ONas;
