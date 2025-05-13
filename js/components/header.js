document.getElementById('header').innerHTML = `
    <div class="hero-section">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="glitch-text">Methuselem MUNYANEZA</h1>
                    <div class="typing-text">
                        <span class="static-text">I'm a </span>
                        <span class="dynamic-text"></span>
                    </div>
                    <p class="hero-description">
                        Crafting digital experiences through clean code and creative solutions.
                        Based in Kigali, Rwanda, I bridge the gap between technology and human needs.
                    </p>
                    <div class="hero-cta">
                        <a href="#projects" class="btn btn-primary">View My Work</a>
                        <a href="#contact" class="btn btn-secondary">Get in Touch</a>
                    </div>
                    <div class="hero-stats">
                        <div class="stat">
                            <span class="stat-number">3+</span>
                            <span class="stat-label">Years Experience</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">15+</span>
                            <span class="stat-label">Projects Completed</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">100%</span>
                            <span class="stat-label">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="image-container">
                        <img src="assets/images/methu.jpg" alt="Methuselem MUNYANEZA" class="profile-image">
                        <div class="image-overlay"></div>
                    </div>
                    <div class="tech-stack">
                        <div class="tech-item" title="HTML5">
                            <i class="fab fa-html5"></i>
                        </div>
                        <div class="tech-item" title="CSS3">
                            <i class="fab fa-css3-alt"></i>
                        </div>
                        <div class="tech-item" title="JavaScript">
                            <i class="fab fa-js"></i>
                        </div>
                        <div class="tech-item" title="React">
                            <i class="fab fa-react"></i>
                        </div>
                        <div class="tech-item" title="Node.js">
                            <i class="fab fa-node-js"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="scroll-indicator">
                <a href="#about">
                    <span>Scroll Down</span>
                    <i class="fas fa-chevron-down"></i>
                </a>
            </div>
        </div>
    </div>
`;

// Add typing animation for the dynamic text
const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeEffect() {
    const dynamicText = document.querySelector('.dynamic-text');
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        dynamicText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        dynamicText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 500; // Pause before starting new word
    }

    setTimeout(typeEffect, typingDelay);
}

// Start the typing animation when the page loads
window.addEventListener('load', typeEffect);