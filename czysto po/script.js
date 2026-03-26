/**
 * CZYSTO-PO.PL - JavaScript Functionality
 * Professional Cleaning Services Website
 */

/**
 * Preloader Module
 */
const Preloader = {
    init() {
        const preloader = document.getElementById('preloader');
        if (!preloader) return;
        
        // Ukryj preloader natychmiast po załadowaniu DOM
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
        
        // Dodatkowy fallback po load event
        window.addEventListener('load', () => {
            preloader.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }
};

/**
 * Navigation Module
 */
const Navigation = {
    init() {
        this.toggle = document.getElementById('navToggle');
        this.nav = document.getElementById('nav');
        this.links = document.querySelectorAll('.nav-link');
        
        if (!this.toggle || !this.nav) return;
        
        this.toggle.addEventListener('click', () => this.toggleMenu());
        
        // Close menu on link click
        this.links.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
        
        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!this.nav.contains(e.target) && !this.toggle.contains(e.target)) {
                this.closeMenu();
            }
        });
        
        // Close menu on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeMenu();
        });
    },
    
    toggleMenu() {
        this.toggle.classList.toggle('active');
        this.nav.classList.toggle('active');
        document.body.style.overflow = this.nav.classList.contains('active') ? 'hidden' : '';
    },
    
    closeMenu() {
        this.toggle.classList.remove('active');
        this.nav.classList.remove('active');
        document.body.style.overflow = '';
    }
};

/**
 * Smooth Scroll Module
 */
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (!target) return;
                
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }
};

/**
 * Header Module
 */
const Header = {
    init() {
        this.header = document.getElementById('header');
        if (!this.header) return;
        
        this.lastScroll = 0;
        this.scrollThreshold = 50;
        
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
        this.handleScroll(); // Initial check
    },
    
    handleScroll() {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > this.scrollThreshold) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
        
        this.lastScroll = currentScroll;
    }
};

/**
 * FAQ Module
 */
const FAQ = {
    init() {
        this.items = document.querySelectorAll('.faq-item');
        if (!this.items.length) return;
        
        this.items.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => this.toggleItem(item));
        });
    },
    
    toggleItem(item) {
        const isActive = item.classList.contains('active');
        
        // Close all items
        this.items.forEach(i => i.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    }
};

/**
 * Contact Form Module
 */
const ContactForm = {
    init() {
        this.form = document.getElementById('contactForm');
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Phone number formatting
        const phoneInput = this.form.querySelector('#phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => this.formatPhone(e));
        }
    },
    
    formatPhone(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 9) value = value.slice(0, 9);
        
        // Format as XXX XXX XXX
        if (value.length > 6) {
            value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6);
        } else if (value.length > 3) {
            value = value.slice(0, 3) + ' ' + value.slice(3);
        }
        
        e.target.value = value;
    },
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Validate form
        if (!this.validateForm()) return;
        
        // Show loading state
        submitBtn.innerHTML = `
            <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
                <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round">
                    <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
                </path>
            </svg>
            <span>Wysyłanie...</span>
        `;
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        try {
            await this.submitForm();
            this.showSuccessModal();
            this.form.reset();
            FileUpload.clearPreview();
        } catch (error) {
            alert('Wystąpił błąd. Proszę spróbować ponownie lub zadzwonić bezpośrednio.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    },
    
    validateForm() {
        const required = this.form.querySelectorAll('[required]');
        let isValid = true;
        
        required.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
                field.addEventListener('input', () => field.classList.remove('error'), { once: true });
            }
        });
        
        // Email validation
        const email = this.form.querySelector('#email');
        if (email && email.value && !this.isValidEmail(email.value)) {
            isValid = false;
            email.classList.add('error');
        }
        
        // Privacy checkbox
        const privacy = this.form.querySelector('#privacy');
        if (privacy && !privacy.checked) {
            isValid = false;
            privacy.parentElement.classList.add('error');
        }
        
        return isValid;
    },
    
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    
    async submitForm() {
        const formData = new FormData(this.form);
        
        // Web3Forms configuration
        const accessKey = 'eac7b1b4-cee4-46e2-929d-4d4a2cbc3bb5';
        
        // Przygotuj dane
        const data = {
            access_key: accessKey,
            subject: '🏠 Nowe zapytanie ze strony Czysto-Po.pl',
            from_name: 'Formularz Czysto-Po.pl',
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email') || 'Nie podano',
            service: formData.get('service'),
            location: formData.get('location'),
            message: formData.get('message') || 'Brak dodatkowej wiadomości',
            urgent: this.form.querySelector('#urgent')?.checked ? 'TAK - PILNE!' : 'Nie'
        };
        
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (!result.success) {
            throw new Error(result.message || 'Błąd wysyłania');
        }
        
        return result;
    },
    
    showSuccessModal() {
        const modal = document.getElementById('successModal');
        if (modal) {
            modal.classList.add('active');
        }
    }
};

/**
 * Close Modal Function (global)
 */
function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal on backdrop click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal();
        closeServiceModal();
        closeBlogModal();
    }
});

/**
 * Service Modals Module
 */
const ServiceModals = {
    data: {
        'sprzatanie-po-zgonach': {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>`,
            title: 'Sprzątanie po zgonach',
            subtitle: 'Profesjonalna dekontaminacja mieszkań',
            content: `
                <h4>Czym jest sprzątanie po zgonach?</h4>
                <p>Profesjonalne <strong>sprzątanie po zgonach</strong> to specjalistyczna usługa wymagająca odpowiedniego sprzętu, środków dezynfekujących i doświadczenia. Jako certyfikowana firma z wpisem do BDO zapewniamy kompleksową dekontaminację mieszkań po osobach zmarłych.</p>
                
                <h4>Co obejmuje usługa?</h4>
                <ul>
                    <li><strong>Usunięcie śladów biologicznych</strong> – krew, płyny ustrojowe</li>
                    <li><strong>Dezynfekcja powierzchni</strong> – środkami biobójczymi</li>
                    <li><strong>Neutralizacja zapachów</strong> – metodą ozonowania</li>
                    <li><strong>Utylizacja przedmiotów</strong> – zgodnie z przepisami BDO</li>
                    <li><strong>Certyfikat dezynfekcji</strong> – dla Sanepidu</li>
                </ul>
                
                <h4>Dlaczego warto zlecić profesjonalistom?</h4>
                <p>Samodzielne sprzątanie miejsc zgonów niesie poważne zagrożenia zdrowotne. Ślady biologiczne mogą zawierać niebezpieczne patogeny, w tym wirusy zapalenia wątroby i HIV.</p>
                
                <h4>Czas realizacji</h4>
                <p>Standardowa realizacja to <strong>4-12 godzin</strong> w zależności od stopnia skażenia. Jesteśmy na miejscu w ciągu <strong>2 godzin</strong> od zgłoszenia.</p>
            `
        },
        'dezynfekcja': {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>`,
            title: 'Dezynfekcja mieszkań',
            subtitle: 'Eliminacja bakterii, wirusów i grzybów',
            content: `
                <h4>Czym jest dezynfekcja mieszkań?</h4>
                <p><strong>Profesjonalna dezynfekcja mieszkań</strong> to skuteczna metoda eliminacji bakterii, wirusów i grzybów. Stosujemy atestowane środki biobójcze i nowoczesne metody aplikacji.</p>
                
                <h4>Kiedy potrzebna jest dezynfekcja?</h4>
                <ul>
                    <li><strong>Po chorobach zakaźnych</strong> – COVID-19, grypa, rotawirus</li>
                    <li><strong>Po obecności gryzoni</strong> – lub insektów</li>
                    <li><strong>Po zalaniu</strong> – pleśń, grzyby</li>
                    <li><strong>Przy zakupie mieszkania</strong> – po poprzednich lokatorach</li>
                    <li><strong>W lokalach gastronomicznych</strong> – i medycznych</li>
                </ul>
                
                <h4>Certyfikat dezynfekcji</h4>
                <p>Po wykonaniu usługi wystawiamy <strong>certyfikat dezynfekcji</strong> honorowany przez Sanepid, administracje budynków i ubezpieczycieli.</p>
            `
        },
        'ozonowanie': {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
            </svg>`,
            title: 'Ozonowanie pomieszczeń',
            subtitle: 'Skuteczne usuwanie zapachów',
            content: `
                <h4>Czym jest ozonowanie?</h4>
                <p><strong>Ozonowanie</strong> to jedna z najskuteczniejszych metod usuwania uporczywych zapachów i eliminacji mikroorganizmów. Ozon (O₃) jest silnym utleniaczem.</p>
                
                <h4>Zastosowania ozonowania</h4>
                <ul>
                    <li><strong>Zapach po zgonach</strong> – pożarach, zalaniach</li>
                    <li><strong>Dym papierosowy</strong> – eliminacja zapachu</li>
                    <li><strong>Odory po zwierzętach</strong> – neutralizacja</li>
                    <li><strong>Po chorobach zakaźnych</strong> – dezynfekcja</li>
                    <li><strong>Samochody</strong> – odświeżanie wnętrza</li>
                </ul>
                
                <h4>Bezpieczeństwo</h4>
                <p>Podczas ozonowania pomieszczenie musi być puste. Po zakończeniu procesu (<strong>2-4 godziny</strong>) ozon rozpada się do tlenu i pomieszczenie jest bezpieczne.</p>
            `
        },
        'zamglawianie': {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
            </svg>`,
            title: 'Zamgławianie ULV',
            subtitle: 'Dezynfekcja suchą mgłą',
            content: `
                <h4>Czym jest zamgławianie ULV?</h4>
                <p><strong>Zamgławianie ULV</strong> (Ultra Low Volume) to nowoczesna metoda dezynfekcji polegająca na rozpylaniu preparatu w postaci bardzo drobnej mgły.</p>
                
                <h4>Zalety metody ULV</h4>
                <ul>
                    <li><strong>Dociera wszędzie</strong> – miejsca niedostępne dla tradycyjnych metod</li>
                    <li><strong>Sucha aplikacja</strong> – nie pozostawia mokrych powierzchni</li>
                    <li><strong>Szybka</strong> – nawet duże powierzchnie w krótkim czasie</li>
                    <li><strong>Klimatyzacja</strong> – skuteczna dezynfekcja wentylacji</li>
                    <li><strong>Ekonomiczna</strong> – minimalne zużycie preparatu</li>
                </ul>
            `
        },
        'dezynsekcja': {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
            </svg>`,
            title: 'Dezynsekcja',
            subtitle: 'Profesjonalne zwalczanie insektów',
            content: `
                <h4>Czym jest dezynsekcja?</h4>
                <p><strong>Profesjonalna dezynsekcja</strong> to skuteczne zwalczanie insektów. Stosujemy sprawdzone metody i preparaty zapewniające trwałe efekty.</p>
                
                <h4>Zwalczane szkodniki</h4>
                <ul>
                    <li><strong>Pluskwy łóżkowe</strong> – kompleksowa likwidacja z gwarancją</li>
                    <li><strong>Prusaki i karaluchy</strong> – dezynsekcja żelowa i opryskowa</li>
                    <li><strong>Mrówki faraona</strong> – zwalczanie całych kolonii</li>
                    <li><strong>Mole</strong> – odzieżowe i spożywcze</li>
                    <li><strong>Pchły, kleszcze</strong> – po zwierzętach</li>
                </ul>
                
                <h4>Gwarancja skuteczności</h4>
                <p>Na wszystkie usługi dezynsekcji udzielamy <strong>gwarancji</strong>. W przypadku ponownego pojawienia się szkodników wykonujemy bezpłatny zabieg.</p>
            `
        },
        'zaniedbane': {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>`,
            title: 'Sprzątanie zaniedbanych mieszkań',
            subtitle: 'Dyskretnie i bez oceniania',
            content: `
                <h4>Dla kogo jest ta usługa?</h4>
                <p><strong>Sprzątanie zaniedbanych mieszkań</strong> to usługa dla osób zmagających się z syndromem zbieractwa lub ich rodzin. Podchodzimy do tematu z pełnym zrozumieniem.</p>
                
                <h4>Zakres usługi</h4>
                <ul>
                    <li><strong>Segregacja</strong> – i usuwanie nagromadzonych przedmiotów</li>
                    <li><strong>Zabezpieczenie</strong> – wartościowych rzeczy i dokumentów</li>
                    <li><strong>Gruntowne czyszczenie</strong> – wszystkich powierzchni</li>
                    <li><strong>Dezynfekcja</strong> – i ozonowanie</li>
                    <li><strong>Wywóz odpadów</strong> – z wpisem BDO</li>
                </ul>
                
                <h4>Pełna dyskrecja</h4>
                <p>Używamy <strong>nieoznakowanych pojazdów</strong>. Nie publikujemy zdjęć z realizacji. Wszystkie dane klientów są chronione.</p>
            `
        },
        'pozary': {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
            </svg>`,
            title: 'Sprzątanie po pożarach',
            subtitle: 'Usuwanie sadzy i spalenizny',
            content: `
                <h4>Kiedy potrzebne jest sprzątanie po pożarze?</h4>
                <p><strong>Sprzątanie po pożarach</strong> wymaga specjalistycznego podejścia. Sadza i spalenizna wnikają głęboko w materiały.</p>
                
                <h4>Etapy prac</h4>
                <ul>
                    <li><strong>Ocena zniszczeń</strong> – i plan działania</li>
                    <li><strong>Usunięcie gruzu</strong> – spalonych elementów</li>
                    <li><strong>Czyszczenie sadzy</strong> – metodami suchymi i mokrymi</li>
                    <li><strong>Neutralizacja zapachu</strong> – ozonowanie</li>
                    <li><strong>Dezynfekcja</strong> – po kontakcie z wodą gaśniczą</li>
                </ul>
                
                <h4>Dokumentacja dla ubezpieczyciela</h4>
                <p>Przygotowujemy pełną <strong>dokumentację fotograficzną</strong> i kosztorys prac do zgłoszenia szkody.</p>
            `
        },
        'zalania': {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
            </svg>`,
            title: 'Sprzątanie po zalaniach',
            subtitle: 'Osuszanie i zapobieganie pleśni',
            content: `
                <h4>Dlaczego szybka reakcja jest ważna?</h4>
                <p><strong>Sprzątanie po zalaniach</strong> to nie tylko usunięcie wody. Pleśń i grzyby mogą pojawić się już w ciągu <strong>24-48 godzin</strong> od zalania.</p>
                
                <h4>Kompleksowe działanie</h4>
                <ul>
                    <li><strong>Odpompowanie wody</strong> – osuszanie pomieszczeń</li>
                    <li><strong>Usunięcie zniszczeń</strong> – podłogi, tynki</li>
                    <li><strong>Profesjonalne osuszanie</strong> – przemysłowymi osuszaczami</li>
                    <li><strong>Dezynfekcja</strong> – przeciwgrzybicza</li>
                    <li><strong>Ozonowanie</strong> – eliminacja stęchlizny</li>
                </ul>
                
                <h4>Szybka reakcja</h4>
                <p>Oferujemy reakcję w ciągu <strong>2 godzin</strong> na terenie Raciborza i okolic.</p>
            `
        },
        'utylizacja': {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polyline points="3,6 5,6 6,6"/>
                <path d="M6 6h15l-1.5 9H7.1"/>
                <circle cx="8" cy="20" r="1.5"/>
                <circle cx="18" cy="20" r="1.5"/>
            </svg>`,
            title: 'Utylizacja mebli i odpadów',
            subtitle: 'Legalnie z dokumentacją BDO',
            content: `
                <h4>Co odbieramy?</h4>
                <p><strong>Utylizacja mebli i odpadów</strong> to usługa dla wszystkich potrzebujących pozbyć się przedmiotów zgodnie z przepisami. Posiadamy <strong>wpis do BDO</strong>.</p>
                
                <h4>Rodzaje odpadów</h4>
                <ul>
                    <li><strong>Meble skażone</strong> – biologicznie</li>
                    <li><strong>Materace, dywany</strong> – wykładziny</li>
                    <li><strong>Odpady remontowe</strong> – po sprzątaniu</li>
                    <li><strong>Elektrośmieci</strong> – sprzęt AGD</li>
                    <li><strong>Odpady niebezpieczne</strong> – farby, rozpuszczalniki</li>
                </ul>
                
                <h4>Legalnie z dokumentacją</h4>
                <p>Wystawiamy <strong>karty przekazania odpadów</strong> i faktury VAT. Współpracujemy z certyfikowanymi zakładami utylizacji.</p>
            `
        }
    },
    
    init() {
        this.modal = document.getElementById('serviceModal');
        if (!this.modal) {
            console.log('ServiceModal: modal element not found');
            return;
        }
        
        this.iconEl = document.getElementById('serviceModalIcon');
        this.titleEl = document.getElementById('serviceModalTitle');
        this.subtitleEl = document.getElementById('serviceModalSubtitle');
        this.bodyEl = document.getElementById('serviceModalBody');
        
        console.log('ServiceModals initialized');
        this.bindEvents();
    },
    
    bindEvents() {
        const self = this;
        
        // Open modal on button click
        document.addEventListener('click', function(e) {
            const btn = e.target.closest('[data-service]');
            if (btn) {
                e.preventDefault();
                e.stopPropagation();
                const serviceId = btn.dataset.service;
                console.log('Service button clicked:', serviceId);
                self.open(serviceId);
            }
            
            // Close on X button
            if (e.target.closest('#serviceModal .modal-close')) {
                self.close();
            }
            
            // Close on backdrop
            if (e.target === self.modal) {
                self.close();
            }
            
            // Close on footer link
            if (e.target.closest('#serviceModal .modal-footer a[href="#kontakt"]')) {
                self.close();
            }
        });
        
        // Close on Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && self.modal && self.modal.classList.contains('active')) {
                self.close();
            }
        });
    },
    
    open(serviceId) {
        console.log('Opening service modal:', serviceId);
        const data = this.data[serviceId];
        if (!data) {
            console.log('No data found for:', serviceId);
            return;
        }
        
        console.log('Modal elements:', this.modal, this.iconEl, this.titleEl, this.subtitleEl, this.bodyEl);
        
        this.iconEl.innerHTML = data.icon;
        this.titleEl.textContent = data.title;
        this.subtitleEl.textContent = data.subtitle;
        this.bodyEl.innerHTML = data.content;
        
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Modal opened');
    },
    
    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

/**
 * Blog Modals Module
 */
const BlogModals = {
    data: {
        'samodzielne-sprzatanie': {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>`,
            title: 'Dlaczego nie należy samodzielnie sprzątać po zgonie?',
            subtitle: 'Poradnik • Styczeń 2026',
            content: `
                <h4>Zagrożenia zdrowotne</h4>
                <p>Śmierć bliskiej osoby to zawsze trudne doświadczenie. W obliczu żałoby niektórzy bliscy decydują się na samodzielne posprzątanie mieszkania. Jest to jednak <strong>poważny błąd</strong>.</p>
                <p>Ślady biologiczne mogą zawierać niebezpieczne patogeny:</p>
                <ul>
                    <li><strong>Wirusy zapalenia wątroby</strong> – typu B i C (przeżywają do 7 dni)</li>
                    <li><strong>Wirus HIV</strong> – zagrożenie przy świeżych śladach</li>
                    <li><strong>Bakterie</strong> – gronkowce, paciorkowce, E.coli</li>
                    <li><strong>Priony</strong> – białka wywołujące choroby neurodegeneracyjne</li>
                </ul>
                
                <h4>Brak odpowiedniego sprzętu</h4>
                <p>Profesjonalne sprzątanie wymaga:</p>
                <ul>
                    <li><strong>Kombinezony ochronne</strong> – i maski z filtrem HEPA</li>
                    <li><strong>Środki biobójcze</strong> – niedostępne w sklepach</li>
                    <li><strong>Generatory ozonu</strong> – do neutralizacji zapachów</li>
                    <li><strong>Specjalistyczne narzędzia</strong> – do usuwania płynów</li>
                </ul>
                
                <h4>Problem z zapachem</h4>
                <p>Nawet dokładne umycie nie usunie zapachu rozkładu, który wnika w drewno, beton, tapicerkę. Bez profesjonalnego ozonowania zapach będzie wracał.</p>
                
                <h4>Podsumowanie</h4>
                <p>Ze względu na bezpieczeństwo zdrowotne <strong>zdecydowanie zalecamy skorzystanie z usług profesjonalnej firmy</strong> posiadającej doświadczenie i odpowiednie certyfikaty.</p>
            `
        },
        'ozonowanie-poradnik': {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
            </svg>`,
            title: 'Ozonowanie - jak działa i kiedy jest skuteczne?',
            subtitle: 'Poradnik • Styczeń 2026',
            content: `
                <h4>Czym jest ozon?</h4>
                <p><strong>Ozon (O₃)</strong> to trójatomowa cząsteczka tlenu. Jest silnym utleniaczem - reaguje z innymi substancjami, powodując ich rozpad. W przyrodzie powstaje podczas burz.</p>
                
                <h4>Jak działa ozonowanie?</h4>
                <p>Generator ozonu wytwarza ozon z tlenu atmosferycznego. Ozon jako gaz wypełnia całe pomieszczenie:</p>
                <ul>
                    <li><strong>Cząsteczki zapachowe</strong> – są rozkładane na bezwonne związki</li>
                    <li><strong>Błony komórkowe</strong> – bakterii i wirusów są niszczone</li>
                    <li><strong>Zarodniki grzybów</strong> – i pleśni są eliminowane</li>
                    <li><strong>Roztocza</strong> – kurzu domowego są zabijane</li>
                </ul>
                
                <h4>Kiedy stosować?</h4>
                <ul>
                    <li><strong>Po zgonach</strong> – neutralizacja zapachu rozkładu</li>
                    <li><strong>Po pożarach</strong> – usunięcie zapachu spalenizny</li>
                    <li><strong>Dym papierosowy</strong> – w mieszkaniach palaczy</li>
                    <li><strong>Zapachy zwierzęce</strong> – mocz, sierść</li>
                    <li><strong>W samochodach</strong> – odświeżanie wnętrza</li>
                </ul>
                
                <h4>Bezpieczeństwo</h4>
                <p>Podczas ozonowania pomieszczenie musi być puste. Po zakończeniu procesu (<strong>2-4 godziny</strong>) ozon rozpada się do zwykłego tlenu.</p>
            `
        },
        'pluskwy-poradnik': {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
            </svg>`,
            title: 'Pluskwy - skąd się biorą i jak się ich pozbyć?',
            subtitle: 'Poradnik • Grudzień 2025',
            content: `
                <h4>Skąd się biorą pluskwy?</h4>
                <p><strong>Pluskwy łóżkowe</strong> to "autostopowicze" - przenoszone nieświadomie przez ludzi:</p>
                <ul>
                    <li><strong>Z podróży</strong> – hotele, hostele</li>
                    <li><strong>Używane meble</strong> – i materace</li>
                    <li><strong>Second-handy</strong> – odzież</li>
                    <li><strong>Od sąsiadów</strong> – przez szczeliny</li>
                    <li><strong>Paczki</strong> – i przesyłki</li>
                </ul>
                
                <h4>Jak rozpoznać pluskwy?</h4>
                <ul>
                    <li><strong>Ugryzienia</strong> – swędzące, czerwone punkty, często w rzędach</li>
                    <li><strong>Ślady krwi</strong> – na pościeli</li>
                    <li><strong>Ciemne plamki</strong> – odchody, jak plamy z tuszu</li>
                    <li><strong>Zrzutki</strong> – jasne łuski po linieniu</li>
                    <li><strong>Specyficzny zapach</strong> – słodkawy przy dużej inwazji</li>
                </ul>
                
                <h4>Profesjonalne metody zwalczania</h4>
                <ul>
                    <li><strong>Termiczna</strong> – podgrzewanie do 50-60°C</li>
                    <li><strong>Chemiczna</strong> – preparaty profesjonalne</li>
                    <li><strong>Kriogeniczna</strong> – zamrażanie ciekłym azotem</li>
                    <li><strong>Zintegrowana</strong> – połączenie metod</li>
                </ul>
                
                <h4>Koszt dezynsekcji</h4>
                <p>Standardowo to <strong>300-800 zł</strong> za zabieg, często z gwarancją skuteczności.</p>
            `
        }
    },
    
    init() {
        this.modal = document.getElementById('blogModal');
        if (!this.modal) {
            console.log('BlogModal: modal element not found');
            return;
        }
        
        this.iconEl = document.getElementById('blogModalIcon');
        this.titleEl = document.getElementById('blogModalTitle');
        this.subtitleEl = document.getElementById('blogModalSubtitle');
        this.bodyEl = document.getElementById('blogModalBody');
        
        console.log('BlogModals initialized');
        this.bindEvents();
    },
    
    bindEvents() {
        const self = this;
        
        // Open modal on button click
        document.addEventListener('click', function(e) {
            const btn = e.target.closest('[data-blog]');
            if (btn) {
                e.preventDefault();
                e.stopPropagation();
                const blogId = btn.dataset.blog;
                console.log('Blog button clicked:', blogId);
                self.open(blogId);
            }
            
            // Close on X button
            if (e.target.closest('#blogModal .modal-close')) {
                self.close();
            }
            
            // Close on backdrop
            if (e.target === self.modal) {
                self.close();
            }
        });
        
        // Close on Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && self.modal && self.modal.classList.contains('active')) {
                self.close();
            }
        });
    },
    
    open(blogId) {
        console.log('Opening blog modal:', blogId);
        const data = this.data[blogId];
        if (!data) {
            console.log('No data found for:', blogId);
            return;
        }
        
        this.iconEl.innerHTML = data.icon;
        this.titleEl.textContent = data.title;
        this.subtitleEl.textContent = data.subtitle;
        this.bodyEl.innerHTML = data.content;
        
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Blog modal opened');
    },
    
    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

/**
 * File Upload Module
 */
const FileUpload = {
    files: [],
    maxFiles: 5,
    maxSize: 5 * 1024 * 1024, // 5MB
    
    init() {
        this.input = document.getElementById('photos');
        this.preview = document.getElementById('filePreview');
        
        if (!this.input || !this.preview) return;
        
        this.input.addEventListener('change', (e) => this.handleFiles(e));
        
        // Drag and drop
        const uploadArea = this.input.parentElement;
        ['dragenter', 'dragover'].forEach(event => {
            uploadArea.addEventListener(event, (e) => {
                e.preventDefault();
                uploadArea.classList.add('drag-over');
            });
        });
        
        ['dragleave', 'drop'].forEach(event => {
            uploadArea.addEventListener(event, (e) => {
                e.preventDefault();
                uploadArea.classList.remove('drag-over');
            });
        });
        
        uploadArea.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            this.input.files = files;
            this.handleFiles({ target: { files } });
        });
    },
    
    handleFiles(e) {
        const newFiles = Array.from(e.target.files);
        
        // Validate files
        const validFiles = newFiles.filter(file => {
            if (!file.type.startsWith('image/')) {
                alert(`${file.name} nie jest obrazem`);
                return false;
            }
            if (file.size > this.maxSize) {
                alert(`${file.name} jest za duży (max 5MB)`);
                return false;
            }
            return true;
        });
        
        // Check max files
        if (this.files.length + validFiles.length > this.maxFiles) {
            alert(`Możesz dodać maksymalnie ${this.maxFiles} zdjęć`);
            validFiles.splice(this.maxFiles - this.files.length);
        }
        
        this.files = [...this.files, ...validFiles];
        this.updatePreview();
    },
    
    updatePreview() {
        this.preview.innerHTML = '';
        
        this.files.forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const item = document.createElement('div');
                item.className = 'file-preview-item';
                item.innerHTML = `
                    <img src="${e.target.result}" alt="${file.name}">
                    <button type="button" onclick="FileUpload.removeFile(${index})">&times;</button>
                `;
                this.preview.appendChild(item);
            };
            reader.readAsDataURL(file);
        });
    },
    
    removeFile(index) {
        this.files.splice(index, 1);
        this.updatePreview();
    },
    
    clearPreview() {
        this.files = [];
        this.preview.innerHTML = '';
    }
};

/**
 * Counter Animation Module
 */
const CounterAnimation = {
    init() {
        this.counters = document.querySelectorAll('[data-count]');
        if (!this.counters.length) return;
        
        // Animuj liczniki gdy są widoczne
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '50px' });
        
        this.counters.forEach(counter => observer.observe(counter));
        
        // Fallback - animuj po 1 sekundzie jeśli IntersectionObserver nie zadziała
        setTimeout(() => {
            this.counters.forEach(counter => {
                if (counter.textContent === '0') {
                    this.animateCounter(counter);
                }
            });
        }, 1000);
    },
    
    animateCounter(element) {
        const target = parseInt(element.dataset.count);
        const suffix = element.dataset.suffix || '+';
        const duration = 2000;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = target + suffix;
            }
        };
        
        requestAnimationFrame(animate);
    }
};

/**
 * Scroll Animations Module
 */
const ScrollAnimations = {
    init() {
        const animatedElements = document.querySelectorAll(
            '.service-card, .price-card, .feature, .process-step, .blog-card, .faq-item'
        );
        
        if (!animatedElements.length) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 50);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    }
};

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Error styling for form validation
 */
const style = document.createElement('style');
style.textContent = `
    input.error, select.error, textarea.error {
        border-color: #ef4444 !important;
        animation: shake 0.5s ease;
    }
    
    .form-checkbox.error label {
        color: #ef4444;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .spinner {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .file-upload.drag-over .file-upload-label {
        border-color: var(--navy-900);
        background: var(--navy-50);
    }
`;
document.head.appendChild(style);

// Console branding
console.log('%c🧹 Czysto-Po.pl', 'font-size: 24px; font-weight: bold; color: #0a1628;');
console.log('%cProfesjonalne sprzątanie po zgonach i dezynfekcja', 'font-size: 12px; color: #64748b;');
console.log('%cTelefon 24/7: 732 608 702', 'font-size: 14px; font-weight: bold; color: #c9a962;');

/**
 * Back to Top Button Module
 */
const BackToTop = {
    init() {
        this.button = document.getElementById('backToTop');
        if (!this.button) {
            console.log('BackToTop: button not found');
            return;
        }
        
        console.log('BackToTop initialized');
        
        const btn = this.button;
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        btn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Sprawdź od razu przy załadowaniu
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        }
    }
};

/**
 * Email Protection Module - prevents Cloudflare from encoding email
 */
const EmailProtection = {
    init() {
        // Build email dynamically to prevent Cloudflare encoding
        const user = 'kontakt';
        const domain = 'czysto-po.pl';
        const email = user + '@' + domain;
        
        // Contact section email
        const emailValue = document.getElementById('emailValue');
        const emailContact = document.getElementById('emailContact');
        if (emailValue && emailContact) {
            emailValue.textContent = email;
            emailContact.href = 'mailto:' + email;
        }
        
        // Footer email
        const footerEmail = document.getElementById('footerEmail');
        if (footerEmail) {
            footerEmail.textContent = email;
            footerEmail.href = 'mailto:' + email;
        }
        
        // Photo email in form
        const photoEmailText = document.getElementById('photoEmailText');
        const photoEmailLink = document.getElementById('photoEmailLink');
        if (photoEmailText && photoEmailLink) {
            photoEmailText.textContent = email;
            photoEmailLink.href = 'mailto:' + email;
        }
    }
};

// ============================================
// INITIALIZE ALL MODULES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing modules...');
    
    try {
        Preloader.init();
        Navigation.init();
        SmoothScroll.init();
        Header.init();
        FAQ.init();
        ContactForm.init();
        FileUpload.init();
        CounterAnimation.init();
        ScrollAnimations.init();
        ServiceModals.init();
        BlogModals.init();
        BackToTop.init();
        EmailProtection.init();
        
        console.log('All modules initialized successfully');
    } catch (error) {
        console.error('Error initializing modules:', error);
    }
});
