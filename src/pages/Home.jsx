import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, HeartPulse, Home as HomeIcon, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { blogArticles } from '../data/blogArticles';

const Home = () => {
  useSEO();
  const services = [
    {
      title: "Transport Medyczny",
      desc: "Szybki i bezpieczny przewóz osób chorych i niepełnosprawnych.",
      path: "/transport-medyczny",
      icon: <Truck className="w-10 h-10" />,
    },
    {
      title: "Zabezpieczenia",
      desc: "Profesjonalna ochrona medyczna imprez i wydarzeń.",
      path: "/zabezpieczenia-medyczne",
      icon: <ShieldCheck className="w-10 h-10" />,
    },
    {
      title: "Szkolenia",
      desc: "Kursy pierwszej pomocy dla firm, szkół i instytucji.",
      path: "/szkolenia-pierwsza-pomoc",
      icon: <HeartPulse className="w-10 h-10" />,
    },
    {
      title: "Pielęgniarstwo",
      desc: "Kompletna opieka medyczna i zabiegi w domu pacjenta.",
      path: "/uslugi-pielegniarskie",
      icon: <HomeIcon className="w-10 h-10" />,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000"
          style={{ 
            backgroundImage: "url('/assets/images/Life-Ratownictwo-Medyczne-i-Pielegniarstwo.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1 rounded-full text-sm inline-block mb-4">
              Działamy w Raciborzu, Rybniku i całym woj. śląskim
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-navy-blue leading-tight mb-6">
              Profesjonalne <span className="text-primary-red">Ratownictwo</span> i Transport
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              <strong>Life-Ratownictwo Medyczne i Pielęgniarstwo</strong> to firma działająca od 2012 roku. Zapewniamy profesjonalne usługi medyczne poza szpitalem – tam, gdzie pacjent czuje się u siebie.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/transport-medyczny" className="bg-primary-red text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary-red/20 flex items-center gap-2 hover:bg-[#ba1e17] transition-all hover:scale-105">
                Zamów Transport <ChevronRight size={20} />
              </Link>
              <a href="#services" className="bg-navy-blue text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-navy-blue/20 hover:bg-navy-blue-light transition-all hover:scale-105">
                Nasza Oferta
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Co możemy dla Ciebie zrobić?</h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg italic">"To my dopasowujemy się do pacjenta, a nie pacjent do nas."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={item.path} className="group block bg-[#f4f7f6] p-10 rounded-3xl service-card-hover relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0 bg-navy-blue transition-all duration-500 group-hover:h-full z-0"></div>
                  <div className="relative z-10">
                    <div className="text-primary-red mb-6 group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-extrabold text-navy-blue mb-4 group-hover:text-white transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 group-hover:text-white/80 transition-colors duration-500 mb-6">
                      {item.desc}
                    </p>
                    <span className="text-primary-red font-bold flex items-center gap-1 group-hover:text-white transition-colors duration-500">
                      Sprawdź szczegóły <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section - Based on provided text */}
      <section className="py-24 bg-[#f4f7f6]">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary-red rounded-3xl translate-x-4 translate-y-4"></div>
            <img 
              src="/assets/images/IMG_0802.jpg" 
              alt="Personel medyczny"
              loading="lazy"
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
            />
          </motion.div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-8 leading-tight">
              Eksperci z <span className="text-primary-red">Raciborza</span>, działający w całej Europie
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Firmę założył <strong>Mariusz Cichoń</strong> – czynny ratownik medyczny systemu Państwowego Ratownictwa Medycznego w Raciborzu. Dzięki temu nasz zespół tworzą specjaliści z ogromnym bagażem doświadczeń.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Działamy w Rybniku, Wodzisławiu Śl., Kędzierzynie-Koźlu",
                "Doświadczenie zdobyte podczas pandemii (wymazobusy, Drive-Thru)",
                "Nowoczesna flota ambulansów ratunkowych",
                "Ratownicy medyczni i pielęgniarki z PRM"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-primary-red rounded-full p-1 text-white">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-bold text-navy-blue">{text}</span>
                </div>
              ))}
            </div>
            <Link to="/o-nas" className="text-navy-blue font-black flex items-center gap-2 group">
              POZNAJ NASZĄ HISTORIĘ <ChevronRight className="text-primary-red transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Z naszego <span className="text-primary-red">bloga</span></h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg">Porady od czynnych ratowników medycznych i aktualności ze świata ratownictwa.</p>
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
