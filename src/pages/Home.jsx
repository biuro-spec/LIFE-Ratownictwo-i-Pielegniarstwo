import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, HeartPulse, ChevronRight, CheckCircle2, Clock, Star, Quote } from 'lucide-react';
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
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/Life-Ratownictwo-Medyczne-i-Pielegniarstwo.jpg')",
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0.92) 25%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0.2) 60%, transparent 75%)' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="bg-primary-red/10 text-primary-red font-bold px-5 py-2 rounded-full text-sm inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-primary-red rounded-full animate-pulse"></span>
                Racibórz &bull; Rybnik &bull; całe woj. śląskie
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-navy-blue leading-tight mb-8">
                Profesjonalne <span className="text-primary-red">Ratownictwo</span> i Transport
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                <strong>Life-Ratownictwo Medyczne</strong> — transport medyczny, zabezpieczenia imprez i szkolenia z pierwszej pomocy. Działamy od 2012 roku — tam, gdzie pacjent czuje się u siebie.
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

            {/* Stats tiles */}
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

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Co możemy dla Ciebie zrobić?</h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg italic">"To my dopasowujemy się do pacjenta, a nie pacjent do nas."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      {/* Reviews Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Co mówią nasi <span className="text-primary-red">Pacjenci</span></h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-black text-navy-blue">5.0</span>
            </div>
            <p className="text-gray-500 text-lg">Ocena <strong>5.0/5</strong> na podstawie <strong>46 opinii</strong> w Google i Kliniki.pl</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Natalia",
                date: "Czerwiec 2022",
                text: "Perfekcyjne podejście do pacjenta, fachowa pomoc i skuteczność w podjętych działaniach. Pan Mariusz wykazał się ogromną empatią wobec moich bliskich w trudnym czasie pandemii. Polecam z całego serca!",
                source: "Kliniki.pl",
              },
              {
                name: "Krzysztof",
                date: "Marzec 2022",
                text: "Pełny profesjonalizm. Super podejście do pacjenta. Pan Mariusz to facet na poziomie — widać, że ratownictwo to jego prawdziwe powołanie. Gorąco polecam usługi transportu medycznego.",
                source: "Kliniki.pl",
              },
              {
                name: "Anna M.",
                date: "Styczeń 2023",
                text: "Transport mojej mamy przebiegł wzorowo. Zespół był punktualny, delikatny i bardzo profesjonalny. Mama czuła się bezpiecznie przez całą drogę. Dziękuję za troskę i zaangażowanie!",
                source: "Google",
              },
              {
                name: "Marek W.",
                date: "Kwiecień 2023",
                text: "Zabezpieczenie medyczne naszego biegu charytatywnego na najwyższym poziomie. Ratownicy byli czujni, dobrze wyposażeni i bardzo przyjaźni. Na pewno będziemy współpracować ponownie.",
                source: "Google",
              },
              {
                name: "Dorota K.",
                date: "Wrzesień 2023",
                text: "Szkolenie z pierwszej pomocy dla naszej firmy — fantastyczne! Prowadzący przekazał wiedzę w przystępny sposób, dużo praktycznych ćwiczeń. Pracownicy byli zachwyceni.",
                source: "Google",
              },
              {
                name: "Tomasz B.",
                date: "Listopad 2023",
                text: "Błyskawiczna reakcja na nasze zgłoszenie. Transport sanitarny z Raciborza do Katowic przebiegł bez zarzutu. Profesjonalizm, empatia i spokój — tak powinno wyglądać ratownictwo.",
                source: "Google",
              },
            ].map((review, i) => (
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
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-navy-blue">{review.name}</div>
                    <div className="text-gray-400 text-xs">{review.date}</div>
                  </div>
                  <span className="text-xs font-bold text-gray-400 bg-white px-3 py-1 rounded-full">{review.source}</span>
                </div>
              </motion.div>
            ))}
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
