document.getElementById('skills').innerHTML = `
    <div class="skills-section">
        <div class="container">
            <h2 class="section-title">Technical Expertise</h2>
            <p class="section-subtitle">A comprehensive overview of my technical skills and capabilities</p>
            
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Frontend Development</h3>
                    <div class="skill-items">
                        <div class="skill-item" data-skill="HTML5">
                            <div class="skill-icon">
                                <i class="fab fa-html5"></i>
                            </div>
                            <div class="skill-info">
                                <h4>HTML5</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" style="width: 95%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item" data-skill="CSS3">
                            <div class="skill-icon">
                                <i class="fab fa-css3-alt"></i>
                            </div>
                            <div class="skill-info">
                                <h4>CSS3/SASS</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" style="width: 90%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item" data-skill="JavaScript">
                            <div class="skill-icon">
                                <i class="fab fa-js"></i>
                            </div>
                            <div class="skill-info">
                                <h4>JavaScript (ES6+)</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" style="width: 85%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item" data-skill="React">
                            <div class="skill-icon">
                                <i class="fab fa-react"></i>
                            </div>
                            <div class="skill-info">
                                <h4>React.js</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" style="width: 80%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>Backend Development</h3>
                    <div class="skill-items">
                        <div class="skill-item" data-skill="Node.js">
                            <div class="skill-icon">
                                <i class="fab fa-node-js"></i>
                            </div>
                            <div class="skill-info">
                                <h4>Node.js</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" style="width: 85%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item" data-skill="Express">
                            <div class="skill-icon">
                                <i class="fas fa-server"></i>
                            </div>
                            <div class="skill-info">
                                <h4>Express.js</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" style="width: 80%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item" data-skill="MongoDB">
                            <div class="skill-icon">
                                <i class="fas fa-database"></i>
                            </div>
                            <div class="skill-info">
                                <h4>MongoDB</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" style="width: 75%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item" data-skill="MySQL">
                            <div class="skill-icon">
                                <i class="fas fa-database"></i>
                            </div>
                            <div class="skill-info">
                                <h4>MySQL</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" style="width: 70%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>Tools & Technologies</h3>
                    <div class="skill-items">
                        <div class="skill-item" data-skill="Git">
                            <div class="skill-icon">
                                <i class="fab fa-git-alt"></i>
                            </div>
                            <div class="skill-info">
                                <h4>Git/GitHub</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" style="width: 85%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item" data-skill="Docker">
                            <div class="skill-icon">
                                <i class="fab fa-docker"></i>
                            </div>
                            <div class="skill-info">
                                <h4>Docker</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" style="width: 65%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item" data-skill="AWS">
                            <div class="skill-icon">
                                <i class="fab fa-aws"></i>
                            </div>
                            <div class="skill-info">
                                <h4>AWS</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" style="width: 60%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item" data-skill="Linux">
                            <div class="skill-icon">
                                <i class="fab fa-linux"></i>
                            </div>
                            <div class="skill-info">
                                <h4>Linux</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" style="width: 70%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="additional-skills">
                <h3>Additional Skills</h3>
                <div class="skills-tags">
                    <span class="skill-tag">RESTful APIs</span>
                    <span class="skill-tag">JWT Authentication</span>
                    <span class="skill-tag">Responsive Design</span>
                    <span class="skill-tag">UI/UX Design</span>
                    <span class="skill-tag">Agile Methodologies</span>
                    <span class="skill-tag">Test-Driven Development</span>
                    <span class="skill-tag">CI/CD</span>
                    <span class="skill-tag">Performance Optimization</span>
                    <span class="skill-tag">Security Best Practices</span>
                    <span class="skill-tag">Cross-browser Compatibility</span>
                </div>
            </div>
        </div>
    </div>
`;

// Add animation to skill progress bars when they come into view
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-progress').forEach(progress => {
    observer.observe(progress);
});