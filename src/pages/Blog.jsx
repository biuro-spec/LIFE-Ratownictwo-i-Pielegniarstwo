import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const Blog = () => {
  useSEO({ title: 'Blog i Aktualności', description: 'Aktualności, porady i artykuły z zakresu ratownictwa medycznego, pierwszej pomocy i transportu sanitarnego.' });
  const posts = [
    {
      date: "10 Kwietnia 2020",
      title: "Pobierając, pomagamy. Walka na pierwszej linii frontu",
      desc: "Wspomnienia z pierwszych dni pandemii i uruchomienia wymazobusów w regionie.",
      image: "/assets/images/pobieranie-wymazow.jpg"
    },
    {
      date: "7 Kwietnia 2020",
      title: "Wielkie spotkanie w Urzędzie Wojewódzkim i strefy Drive-Thru",
      desc: "Jak planowaliśmy i wdrażaliśmy punkty kontrolne w Raciborzu i Rybniku.",
      image: "/assets/images/IMG_2229.jpg"
    },
    {
      date: "Z archiwum",
      title: "Otwarte Mistrzostwa Śląska w Ratownictwie Medycznym",
      desc: "Nostalgiczny powrót do historycznych zawodów w Raciborzu w 2015 roku.",
      image: "/assets/images/IMG_0802.jpg"
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="bg-[#f4f7f6] py-24">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-navy-blue mb-6">Blog i <span className="text-primary-red">Aktualności</span></h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto italic font-light">"Bądź na bieżąco z tym, jak zmieniamy życie pacjentów w naszym regionie."</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 gap-16">
                {posts.map((post, i) => (
                    <motion.article 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row gap-8 items-center group cursor-pointer"
                    >
                        <div className="md:w-1/2 overflow-hidden rounded-[40px] shadow-2xl">
                            <img src={post.image} alt={post.title} className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="md:w-1/2">
                            <span className="text-primary-red font-bold text-sm uppercase tracking-widest">{post.date}</span>
                            <h2 className="text-3xl font-black text-navy-blue mt-4 mb-6 leading-tight group-hover:text-primary-red transition-colors">{post.title}</h2>
                            <p className="text-gray-500 text-lg leading-relaxed mb-8">{post.desc}</p>
                            <button className="flex items-center gap-2 font-black text-navy-blue hover:gap-4 transition-all">
                                CZYTAJ WIĘCEJ <ChevronRight className="text-primary-red" />
                            </button>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
