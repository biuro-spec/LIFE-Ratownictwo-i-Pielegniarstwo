import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const ServiceLayout = ({ title, subtitle, bgImage, children }) => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[450px] flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(15, 43, 70, 0.9), rgba(15, 43, 70, 0.7)), url(${bgImage})`,
          }}
        />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 container mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            {children}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 bg-[#f4f7f6] p-10 rounded-3xl shadow-xl shadow-navy-blue/5 border border-white">
              <h3 className="text-2xl font-extrabold text-navy-blue mb-6">Szybki Kontakt</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Każde zgłoszenie jest inne. Zadzwoń, a nasz zespół błyskawicznie oceni sytuację i dokona darmowej wyceny.
              </p>
              <div className="space-y-4">
                <a href="tel:602622840" className="flex items-center gap-4 bg-primary-red text-white p-5 rounded-2xl font-bold shadow-lg shadow-primary-red/20 transition-all hover:scale-105">
                  <Phone /> +48 602 622 840
                </a>
                <a href="tel:505751858" className="flex items-center gap-4 bg-white text-navy-blue p-5 rounded-2xl font-bold border border-navy-blue/10 shadow-sm transition-all hover:scale-105">
                  <Phone /> +48 505 751 858
                </a>
                <a href="mailto:biuro@life-ratownictwo.pl" className="flex items-center gap-4 bg-navy-blue text-white p-5 rounded-2xl font-bold transition-all hover:scale-105">
                  <Mail /> biuro@life-ratownictwo.pl
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
