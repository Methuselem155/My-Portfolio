document.getElementById('contact').innerHTML = `
    <div class="container">
        <h2>Contact Me</h2>
        <div class="contact-info">
            <div class="contact-card">
                <i class="fas fa-phone"></i>
                <h3>Phone</h3>
                <p>0785815753</p>
            </div>
            <div class="contact-card">
                <i class="fas fa-envelope"></i>
                <h3>Email</h3>
                <p>methuselem155@gmail.com</p>
            </div>
            <div class="contact-card">
                <i class="fas fa-map-marker-alt"></i>
                <h3>Address</h3>
                <p>Kigali, Rwanda</p>
            </div>
            <div class="contact-card">
                <i class="fab fa-linkedin"></i>
                <h3>LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/munyaneza-methuselem-402428364//" target="_blank">View Profile</a></p>
            </div>
        </div>
        <div class="contact-form-box">
            <form id="contactForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
`;