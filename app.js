// Particle animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Navbar functionality
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navLinksMobile = document.querySelectorAll('.nav-link-mobile');

// Toggle mobile menu
if (hamburger && navMobile) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMobile.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMobile.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMobile.contains(e.target)) {
            hamburger.classList.remove('active');
            navMobile.classList.remove('active');
        }
    });
}

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Active link highlighting
function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });

            navLinksMobile.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Enquiry modal functions
function openModal() {
    const modal = document.getElementById('enquireModal');
    if (modal) {
        modal.style.display = 'flex';
    } else {
        console.error("Modal #enquireModal not found");
    }
}

function closeModal() {
    const modal = document.getElementById('enquireModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function (event) {
    const modal = document.getElementById('enquireModal');
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
});

// Parallax hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Init
document.addEventListener('DOMContentLoaded', () => {
    setActiveLink();
    createParticles();
});

// Update active link on scroll
window.addEventListener('scroll', setActiveLink);
