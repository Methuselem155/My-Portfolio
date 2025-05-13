document.getElementById('projects').innerHTML = `
    <div class="container">
        <h2>Featured Projects</h2>
        <div class="projects-container">
            <div class="project-card">
                <div class="project-image">
                    <img src="assets/images/portfolio-project.jpg" alt="Portfolio Website">
                </div>
                <div class="project-content">
                    <h3>Personal Portfolio Website</h3>
                    <p class="project-description">
                        My personal portfolio website showcasing my journey as a full stack developer. Built with modern web technologies,
                        featuring smooth animations, responsive design, and a contact form with email integration. The site demonstrates
                        my skills in both frontend and backend development, with a focus on user experience and performance.
                    </p>
                    <div class="project-tech">
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript</span>
                        <span>Node.js</span>
                        <span>Express</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/methuselem/portfolio" target="_blank" class="btn">
                            <i class="fab fa-github"></i> View Code
                        </a>
                        <a href="https://methuselem.dev" target="_blank" class="btn">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <img src="assets/images/ecommerce-project.jpg" alt="E-commerce Platform">
                </div>
                <div class="project-content">
                    <h3>RwandaTech E-commerce Platform</h3>
                    <p class="project-description">
                        A full-featured e-commerce platform specifically designed for Rwandan tech businesses. Features include
                        user authentication, product management, shopping cart functionality, and secure payment integration
                        with local payment providers. The platform supports multiple languages and currencies.
                    </p>
                    <div class="project-tech">
                        <span>React.js</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                        <span>Express</span>
                        <span>Stripe API</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/methuselem/rwandatech-ecommerce" target="_blank" class="btn">
                            <i class="fab fa-github"></i> View Code
                        </a>
                        <a href="https://rwandatech.shop" target="_blank" class="btn">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <img src="assets/images/task-manager-project.jpg" alt="Task Management App">
                </div>
                <div class="project-content">
                    <h3>UR Task Manager</h3>
                    <p class="project-description">
                        A collaborative task management application developed for the University of Rwanda. Features real-time
                        updates, user roles, task assignments, and progress tracking. The application helps students and
                        faculty members manage academic projects and assignments efficiently.
                    </p>
                    <div class="project-tech">
                        <span>React.js</span>
                        <span>Socket.io</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                        <span>JWT Auth</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/methuselem/ur-task-manager" target="_blank" class="btn">
                            <i class="fab fa-github"></i> View Code
                        </a>
                        <a href="https://tasks.ur.ac.rw" target="_blank" class="btn">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <img src="assets/images/api-project.jpg" alt="RESTful API">
                </div>
                <div class="project-content">
                    <h3>Rwanda Tourism API</h3>
                    <p class="project-description">
                        A comprehensive RESTful API service for Rwanda's tourism sector. Features include location data,
                        tourist attraction information, booking systems, and real-time availability checks. The API is
                        well-documented and includes authentication, rate limiting, and data validation.
                    </p>
                    <div class="project-tech">
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>PostgreSQL</span>
                        <span>Swagger</span>
                        <span>Docker</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/methuselem/rwanda-tourism-api" target="_blank" class="btn">
                            <i class="fab fa-github"></i> View Code
                        </a>
                        <a href="https://api.rwandatourism.com/docs" target="_blank" class="btn">
                            <i class="fas fa-book"></i> API Docs
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;