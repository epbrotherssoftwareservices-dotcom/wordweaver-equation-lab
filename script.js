// ── Language Toggle ──
let currentLang = 'es';

function toggleLang() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyLang(currentLang);
    document.getElementById('langToggle').textContent = currentLang === 'es' ? '🌐 EN' : '🌐 ES';
    document.documentElement.setAttribute('data-lang', currentLang);
}

function applyLang(lang) {
    document.querySelectorAll('[data-es]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
    // Update html lang attr
    document.documentElement.lang = lang;
    // Update page title
    document.title = lang === 'es'
        ? 'WordWeaver Equation Lab Pro | La solución definitiva para matemáticas con IA'
        : 'WordWeaver Equation Lab Pro | The ultimate solution for AI math equations';
}

// ── Scroll Reveal ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .step-card, .pricing-card, .section-header').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ── Smooth scroll for nav links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ── Navbar shadow on scroll ──
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ── FAQ Accordion ──
function toggleFaq(btn) {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    // Close all open items
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    // Open clicked one if it was closed
    if (!isOpen) item.classList.add('open');
}
