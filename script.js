// Portfolio JavaScript - Sebastian Sandino

// Projects data
const projects = [
    {
        id: 1,
        title: "Herramienta de apoyo en las aulas",
        category: ["Página Web", "Animación"],
        description: "Plataforma web responsiva diseñada para apoyar a los docentes en la detección temprana de dificultades motoras en niños, facilitando la identificación y seguimiento de estas condiciones.",
        images: [
            "img/Koko-01.png",
            "img/Koko-02.png",
            "img/Koko-03.png"
        ],
        video: "",
        link: "https://prismatic-tapioca-078af1.netlify.app/",
        technologies: ["HTML5", "JavaScript", "Blender"]
    },
    {
        id: 2,
        title: "Diseño Web para E-commerce Decameron",
        category: "Página Web",
        description: "Diseño de material visual para actualizar la página web de Decameron.",
        images: [
            "img/Decameron_img-02.png",
            "img/Decameron_img-03.png",
            "img/Decameron_img-01.png"
        ],
        video: "",
        link: "https://www.decameron.com/es/co-noticias/renovacion-baru",
        technologies: ["HTML5", "CSS3", "JavaScript", "Joomla"]
    },
    {
        id: 3,
        title: "Nike Ux/Ui 3D",
        category: ["Modelado 3D","Animación"],
        description: "Concepto interactivo animado en 3d para un carrito de compras de la marca Nike, diseñado para integrarse en plataformas VR y AR.",
        images: [
            "img/Jordan_img_1.png",
            "img/Jordan_img_3.png",
            "img/Jordan_gif.gif"
        ],
        video: "Video/Air Jordan 1.mp4",
        technologies: ["Blender", "Premier pro", "Ilustrator"]
    },
    {
        id: 4,
        title: "Comercial de maquinas en 3D",
        category: ["Modelado 3D","VFX"],
        description: "Creación y animación de maquinas industriales con texturización detallada y efectos visuales con el fin de implementar en publicidad, pagina web y redes sociales.",
        images: [
            "img/Global_1.png",
            "img/Global_2.png",
            "img/Global.gif"
        ],
        video: "Video/Global.mp4",
        technologies: ["Blender", "Rhino", "Substance Painter"]
    },
    /*
    {
        id: 5,
        title: "Stand Comercial",
        category: "Modelado de Stands",
        description: "Diseño y modelado 3D de stand para feria comercial con elementos interactivos.",
        images: [
            "https://images.unsplash.com/photo-1706759755782-62bc9a0b32e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwcG9ydGZvbGlvfGVufDB8fHx8MTc1MzMyNjc3OHww&ixlib=rb-4.1.0&q=85",
            "https://images.unsplash.com/photo-1683818051102-dd1199d163b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwcG9ydGZvbGlvfGVufDB8fHx8MTc1MzMyNjc3OHww&ixlib=rb-4.1.0&q=85",
            "https://images.unsplash.com/photo-1736116821258-a76a92b62d84?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHxkaWdpdGFsJTIwcG9ydGZvbGlvfGVufDB8fHx8MTc1MzMyNjc3OHww&ixlib=rb-4.1.0&q=85"
        ],
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        technologies: ["SketchUp", "KeyShot", "AutoCAD"]
    },
    */
    {
        id: 6,
        title: "VFX para comercial",
        category: ["VFX","Modelado 3D"],
        description: "Composición de efectos visuales para publicidad en canales masivos con simulaciones de partículas.",
        images: [
            "img/Spider_1.png",
            "img/Spider.gif",
            "img/Spider_2.png"
        ],
        video: "Video/Spider_video.mp4",
        technologies: ["After Effects", "Blender", "Substance Pinter"]
    },
    {
        id: 7,
        title: "Modelado de maquinas en 3D",
        category: ["Modelado 3D", "Animación"],
        description: "Creación y animación de maquinas industriales con texturización detallada y efectos visuales con el fin de implementar en publicidad, pagina web y redes sociales.",
        images: [
            "img/Maquinas_1.png",
            "img/Maquinas_2.gif",
            "img/Maquina.gif"
        ],
        video: "Video/Maquina.mp4",
        technologies: ["Rhino", "Blender", "Ilustrator", "Premier pro"]
    },
    {
        id: 8,
        title: "Poster AR Interactivo",
        category: ["RA", "Modelado 3D"],
        description: "Poster con realidad aumentada que incluye modelado 3D y renderizado fotorrealista. Diseñado para una feria de arquitectura bogotana, este proyecto combina elementos visuales interactivos con tecnología de realidad aumentada para ofrecer una experiencia única.",
        images: [
            "img/RA_1.png",
            "img/Poster.gif",
            "img/RA_2.png"
        ],
        video: "Video/Poster_AR.mp4",
        technologies: ["Unity", "Blender", "C#"]
    }
];

// Global variables
let currentLanguage = 'es';
let currentProjectLink = '';
let filteredProjects = [...projects];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    renderProjects();
    setupEventListeners();
    initializeGoogleTranslate();
});

// Particle system for hero section
function initializeParticles() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = '#ec4899';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    // Create particles
    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        animationId = requestAnimationFrame(animate);
    }

    animate();
}

// Setup event listeners
function setupEventListeners() {
    // Language toggle
    const langToggle = document.getElementById('langToggle');
    langToggle.addEventListener('click', toggleLanguage);

    // Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Project filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            filterProjects(category);
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleContactForm);

    // Modal close on background click
    const modal = document.getElementById('projectModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.querySelector('.mobile-menu');
            mobileMenu.classList.remove('active');
        });
    });
}

// Language toggle
function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    const langBtn = document.getElementById('langToggle');
    langBtn.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
    
    // Here you could implement translation logic
    // For now, we'll use Google Translate
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Close mobile menu if open
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.remove('active');
}

// Render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.addEventListener('click', () => openModal(project));

        // Mostrar categorías como texto separado por comas
        let categoryText = Array.isArray(project.category) ? project.category.join(', ') : project.category;

        projectCard.innerHTML = `
            <div class="project-image-container">
                <img src="${project.images[0]}" alt="${project.title}" class="project-image">
                <div class="project-overlay"></div>
                <span class="project-category">${categoryText}</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <button class="project-btn" onclick="event.stopPropagation(); openModal(projects.find(p => p.id === ${project.id}))">
                    VER PROYECTO
                </button>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Filter projects
function filterProjects(category) {
    if (category === 'all') {
        filteredProjects = [...projects];
    } else {
        filteredProjects = projects.filter(project => {
            if (Array.isArray(project.category)) {
                return project.category.includes(category);
            } else {
                return project.category === category;
            }
        });
    }
    renderProjects();
}

// Open project modal
function openModal(project) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const modalImages = document.getElementById('modalImages');
    const modalVideo = document.getElementById('modalVideo');
    const modalTechnologies = document.getElementById('modalTechnologies');
    const modalLink = document.getElementById('modalLink');

    // Set content
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalDescription.textContent = project.description;

    // Images
    modalImages.innerHTML = '';
    project.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = project.title;
        img.className = 'modal-image';
        modalImages.appendChild(img);
    });

    // Video
    modalVideo.src = project.video;
    modalVideo.poster = project.images[0];

    // Technologies
    modalTechnologies.innerHTML = '';
    project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'modal-tech-tag';
        span.textContent = tech;
        modalTechnologies.appendChild(span);
    });

    // External link
    if (project.link) {
        modalLink.style.display = 'block';
        currentProjectLink = project.link;
    } else {
        modalLink.style.display = 'none';
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    const modalVideo = document.getElementById('modalVideo');
    
    modal.classList.remove('active');
    modalVideo.pause();
    document.body.style.overflow = 'auto';
}

// Visit project
function visitProject() {
    if (currentProjectLink) {
        window.open(currentProjectLink, '_blank');
    }
}

// Handle contact form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Mock form submission
    alert('¡Mensaje enviado! (Esta es una simulación)\n\nDatos recibidos:\n' + 
          `Nombre: ${data.name}\n` +
          `Email: ${data.email}\n` +
          `Asunto: ${data.subject}\n` +
          `Mensaje: ${data.message.substring(0, 50)}...`);
    
    // Reset form
    e.target.reset();
}

// Google Translate initialization
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'en,es',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
    }, 'google_translate_element');
}

function initializeGoogleTranslate() {
    // This will be called automatically when the Google Translate script loads
    window.googleTranslateElementInit = googleTranslateElementInit;
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .profile-card, .skills-card, .education-card, .experience-card');
    animatedElements.forEach(el => observer.observe(el));
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update progress bar on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxHeight) * 100;
    
    // You can use this to update a progress indicator if needed
    // const progressBar = document.querySelector('.scroll-progress');
    // if (progressBar) {
    //     progressBar.style.width = progress + '%';
    // }
});

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

// Add error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'https://images.unsplash.com/photo-1744686909434-fd158fca1c35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lcnxlbnwwfHx8fDE3NTMzMjY3NzB8MA&ixlib=rb-4.1.0&q=85'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload on page load
document.addEventListener('DOMContentLoaded', preloadImages);

// Export functions for global access
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
window.openModal = openModal;
window.closeModal = closeModal;
window.visitProject = visitProject;
window.googleTranslateElementInit = googleTranslateElementInit;