document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
            });
        }
    });
});

function animateOnScroll() {
    const cards = document.querySelectorAll('.curriculum-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

function animateBanner() {
    const banner = document.querySelector('.banner-container img');
    if (banner) {
        banner.style.opacity = '0';
        banner.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            banner.style.opacity = '1';
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    animateBanner();
    animateOnScroll();
});

window.addEventListener('resize', animateOnScroll);

function fadeInOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', fadeInOnScroll);
window.addEventListener('resize', fadeInOnScroll);
