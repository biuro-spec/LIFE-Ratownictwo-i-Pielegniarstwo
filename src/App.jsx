import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ONas from './pages/ONas';
import Blog from './pages/Blog';
import TransportMedyczny from './pages/TransportMedyczny';
import ZabezpieczeniaMedyczne from './pages/ZabezpieczeniaMedyczne';
import Szkolenia from './pages/Szkolenia';
import Pielegniarstwo from './pages/Pielegniarstwo';
import BlogArticle from './pages/BlogArticle';
import NotFound from './pages/NotFound';
import CookieConsent from './components/CookieConsent';
import { HeartPulse, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// ScrollToTop component to fix SPA scroll position issue
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<ONas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/transport-medyczny" element={<TransportMedyczny />} />
            <Route path="/zabezpieczenia-medyczne" element={<ZabezpieczeniaMedyczne />} />
            <Route path="/szkolenia-pierwsza-pomoc" element={<Szkolenia />} />
            <Route path="/uslugi-pielegniarskie" element={<Pielegniarstwo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <footer className="bg-[#081525] text-white/40 py-20 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="text-white font-black text-2xl mb-6 flex items-center gap-3 tracking-tighter">
                            <HeartPulse className="text-primary-red w-8 h-8" /> LIFE-RATOWNICTWO
                        </div>
                        <p className="text-base leading-relaxed mb-6">
                            Profesjonalna opieka medyczna i transport sanitarny. Działamy z misją i pasją od 2012 roku.
                        </p>
                        <div className="flex gap-4">
                             <a href="https://facebook.com" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-red transition-colors text-white">FB</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Nasze Usługi</h4>
                        <ul className="space-y-3">
                            <li><Link to="/transport-medyczny" className="hover:text-primary-red transition-colors text-sm">Transport Medyczny</Link></li>
                            <li><Link to="/zabezpieczenia-medyczne" className="hover:text-primary-red transition-colors text-sm">Zabezpieczenia Imprez</Link></li>
                            <li><Link to="/szkolenia-pierwsza-pomoc" className="hover:text-primary-red transition-colors text-sm">Szkolenia Pierwszej Pomocy</Link></li>
                            <li><Link to="/uslugi-pielegniarskie" className="hover:text-primary-red transition-colors text-sm">Opieka Pielęgniarska</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Strony</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="hover:text-primary-red transition-colors text-sm">Strona Główna</Link></li>
                            <li><Link to="/o-nas" className="hover:text-primary-red transition-colors text-sm">O nas</Link></li>
                            <li><Link to="/blog" className="hover:text-primary-red transition-colors text-sm">Aktualności / Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Kontakt</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm">
                                <Phone size={16} className="text-primary-red" /> 
                                <span className="font-bold text-white">+48 602 622 840</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Mail size={16} className="text-primary-red" /> biuro@life-ratownictwo.pl
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <MapPin size={16} className="text-primary-red" /> ul. Rudzka 14, Racibórz
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-10 text-center text-xs opacity-50 border-t border-white/5">
                    &copy; 2026 Life-Ratownictwo Medyczne i Pielęgniarstwo Sp. z o.o. | KRS: 0000920762 | NIP: 6392023251
                </div>
            </div>
        </footer>
      </div>
      <CookieConsent />
    </Router>
  );
}

export default App;
