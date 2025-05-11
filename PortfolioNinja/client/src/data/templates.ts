interface Tag {
  label: string;
  color: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  image: string;
  html: string;
  css: string;
  features: string[];
  tags: Tag[];
}

export const templates: Template[] = [
  {
    id: "clean-portfolio",
    name: "Clean Portfolio",
    description: "A minimalist portfolio template that puts your work at the center of attention.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>John Doe | Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <div class="container">
            <nav class="navbar">
                <div class="logo">John Doe</div>
                <ul class="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    </header>

    <section class="hero" id="about">
        <div class="container">
            <div class="hero-content">
                <h1>Hi, I'm John Doe</h1>
                <h2>Product Designer & Developer</h2>
                <p>I design and build digital products that help businesses grow and make people's lives easier.</p>
                <div class="hero-cta">
                    <a href="#work" class="btn primary-btn">View My Work</a>
                    <a href="#contact" class="btn secondary-btn">Contact Me</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="profile.jpg" alt="John Doe">
            </div>
        </div>
    </section>

    <section class="work" id="work">
        <div class="container">
            <div class="section-header">
                <h2>Selected Projects</h2>
                <p>Here are some of my recent works</p>
            </div>
            <div class="work-grid">
                <div class="work-item">
                    <img src="project1.jpg" alt="Project 1">
                    <div class="work-info">
                        <h3>Project Title 1</h3>
                        <p>UI/UX Design, Development</p>
                        <a href="#" class="view-project">View Project</a>
                    </div>
                </div>
                <!-- More work items -->
            </div>
        </div>
    </section>

    <!-- More sections (Services, Contact) -->

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="copyright">
                    <p>&copy; 2023 John Doe. All Rights Reserved.</p>
                </div>
                <div class="social-links">
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                    <a href="#">Dribbble</a>
                    <a href="#">GitHub</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`,
    css: `/* Base Styles */
:root {
    --primary-color: #3182CE;
    --secondary-color: #2D3748;
    --text-color: #4A5568;
    --light-bg: #F7FAFC;
    --border-color: #E2E8F0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--text-color);
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;
}

/* Header & Navigation */
.header {
    position: fixed;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    font-size: 24px;
    font-weight: 700;
    color: var(--secondary-color);
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 40px;
}

.nav-links a {
    font-weight: 500;
    color: var(--text-color);
}

.nav-links a:hover {
    color: var(--primary-color);
}

.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.menu-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--secondary-color);
    margin-bottom: 5px;
    border-radius: 3px;
}

/* Hero Section */
.hero {
    padding: 150px 0 100px;
    background-color: var(--light-bg);
}

.hero .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hero-content {
    width: 50%;
}

.hero h1 {
    font-size: 48px;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: 10px;
}

.hero h2 {
    font-size: 24px;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 20px;
}

.hero p {
    font-size: 18px;
    margin-bottom: 30px;
}

.hero-cta {
    display: flex;
    gap: 15px;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 6px;
    font-weight: 500;
    transition: all 0.3s;
}

.primary-btn {
    background-color: var(--primary-color);
    color: white;
}

.primary-btn:hover {
    background-color: #2c73b4;
}

.secondary-btn {
    border: 1px solid var(--border-color);
    color: var(--secondary-color);
}

.secondary-btn:hover {
    background-color: var(--border-color);
}

.hero-image {
    width: 40%;
}

.hero-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Work Section */
.work {
    padding: 100px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-header h2 {
    font-size: 36px;
    color: var(--secondary-color);
    margin-bottom: 15px;
}

.work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
}

.work-item {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.work-item:hover {
    transform: translateY(-10px);
}

.work-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.work-info {
    padding: 20px;
}

.work-info h3 {
    font-size: 20px;
    color: var(--secondary-color);
    margin-bottom: 10px;
}

.work-info p {
    font-size: 14px;
    color: var(--text-color);
    margin-bottom: 15px;
}

.view-project {
    color: var(--primary-color);
    font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
    .hero .container {
        flex-direction: column;
    }
    
    .hero-content, .hero-image {
        width: 100%;
        text-align: center;
    }
    
    .hero-image {
        margin-top: 40px;
    }
    
    .hero-cta {
        justify-content: center;
    }
    
    .nav-links {
        display: none;
    }
    
    .menu-toggle {
        display: flex;
    }
}`,
    features: [
      "Responsive design that works on all devices",
      "Easy to customize sections and layouts",
      "Optimized for fast loading and performance",
      "Built with modern HTML and CSS best practices"
    ],
    tags: [
      { color: "blue", label: "Minimalist" },
      { color: "purple", label: "Modern" },
      { color: "green", label: "Responsive" }
    ]
  },
  {
    id: "creative-portfolio",
    name: "Creative Portfolio",
    description: "Bold, artistic design for creatives wanting to make a statement with their work.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creative Portfolio | Jane Smith</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="cursor"></div>
    <header>
        <div class="container">
            <nav>
                <div class="logo">Jane Smith</div>
                <ul class="menu">
                    <li><a href="#home" class="active">Home</a></li>
                    <li><a href="#work">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="container">
                <div class="hero-text">
                    <h1 class="gradient-text">Creative <br>Designer & <br>Developer</h1>
                    <p>I create bold, engaging digital experiences that bring ideas to life.</p>
                </div>
                <div class="hero-image">
                    <div class="gradient-circle"></div>
                    <img src="portrait.jpg" alt="Jane Smith">
                </div>
            </div>
            <div class="scroll-indicator">
                <span>Scroll</span>
                <div class="scroll-arrow"></div>
            </div>
        </section>

        <section id="work" class="projects">
            <div class="container">
                <h2 class="section-title">Selected <span class="accent">Projects</span></h2>
                <div class="project-grid">
                    <div class="project-item">
                        <div class="project-image">
                            <img src="project1.jpg" alt="Project 1">
                        </div>
                        <div class="project-details">
                            <h3>Vibrant Brand Identity</h3>
                            <p>Brand Design / Web Development</p>
                            <a href="#" class="project-link">View Project</a>
                        </div>
                    </div>
                    <!-- More project items -->
                </div>
            </div>
        </section>

        <!-- More sections (About, Contact) -->
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h4>Jane Smith</h4>
                    <p>&copy; 2023 All Rights Reserved</p>
                </div>
                <div class="social-links">
                    <a href="#">Instagram</a>
                    <a href="#">Behance</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`,
    css: `/* Creative Portfolio CSS */
:root {
    --primary: #ff3366;
    --secondary: #6b38fb;
    --dark: #151515;
    --light: #f9f9f9;
    --text: #333333;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    color: var(--text);
    background-color: var(--light);
    cursor: none;
}

.cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(255, 51, 102, 0.5);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.2s, width 0.2s, height 0.2s;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Navigation */
header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    padding: 20px 0;
    background-color: rgba(249, 249, 249, 0.9);
    backdrop-filter: blur(10px);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 24px;
    font-weight: 700;
}

.menu {
    display: flex;
    list-style: none;
}

.menu li {
    margin-left: 40px;
}

.menu a {
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
    position: relative;
    padding: 5px 0;
}

.menu a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    transition: width 0.3s;
}

.menu a:hover::after,
.menu a.active::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: var(--dark);
    margin-bottom: 6px;
    border-radius: 3px;
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 80px;
    position: relative;
}

.hero .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hero-text {
    width: 55%;
}

.gradient-text {
    font-size: 72px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 20px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-text p {
    font-size: 20px;
    max-width: 500px;
}

.hero-image {
    width: 40%;
    position: relative;
}

.gradient-circle {
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    opacity: 0.2;
    z-index: -1;
    top: -30px;
    right: -30px;
}

.hero-image img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.scroll-indicator {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.7;
}

.scroll-indicator span {
    font-size: 14px;
    margin-bottom: 10px;
}

.scroll-arrow {
    width: 30px;
    height: 50px;
    border: 2px solid var(--text);
    border-radius: 15px;
    position: relative;
}

.scroll-arrow::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: var(--text);
    border-radius: 50%;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    animation: scroll 2s infinite;
}

@keyframes scroll {
    0% {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateX(-50%) translateY(20px);
        opacity: 0;
    }
}

/* Projects Section */
.projects {
    padding: 100px 0;
}

.section-title {
    font-size: 48px;
    margin-bottom: 60px;
    text-align: center;
}

.accent {
    color: var(--primary);
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 40px;
}

.project-item {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s, box-shadow 0.4s;
}

.project-item:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.project-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.6s;
}

.project-item:hover .project-image img {
    transform: scale(1.05);
}

.project-details {
    padding: 25px;
    background-color: var(--light);
}

.project-details h3 {
    font-size: 24px;
    margin-bottom: 8px;
}

.project-details p {
    color: #777;
    margin-bottom: 15px;
}

.project-link {
    display: inline-block;
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    position: relative;
}

.project-link::after {
    content: "→";
    margin-left: 8px;
    transition: transform 0.3s;
}

.project-link:hover::after {
    transform: translateX(5px);
}

/* Footer */
footer {
    background-color: var(--dark);
    color: var(--light);
    padding: 50px 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.social-links a {
    color: var(--light);
    text-decoration: none;
    margin-left: 20px;
    opacity: 0.7;
    transition: opacity 0.3s;
}

.social-links a:hover {
    opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
    .menu {
        display: none;
    }
    
    .hamburger {
        display: flex;
    }
    
    .hero .container {
        flex-direction: column;
        text-align: center;
    }
    
    .hero-text, .hero-image {
        width: 100%;
    }
    
    .hero-image {
        margin-top: 50px;
    }
    
    .gradient-text {
        font-size: 48px;
    }
    
    .footer-content {
        flex-direction: column;
    }
    
    .social-links {
        margin-top: 20px;
    }
    
    .social-links a {
        margin: 0 10px;
    }
}`,
    features: [
      "Bold, artistic design for creatives wanting to make a statement with their work.",
      "Vibrant, vibrant color palette",
      "Modern and sleek design"
    ],
    tags: [
      { color: "purple", label: "Creative" },
      { color: "pink", label: "Vibrant" }
    ]
  },
  {
    id: "dark-portfolio",
    name: "Dark Portfolio",
    description: "Sleek, modern dark theme perfect for photographers and designers.",
    image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Portfolio | Creative Design</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="cursor"></div>
    
    <header>
        <nav>
            <div class="logo">Portfolio</div>
            <ul class="nav-links">
                <li><a href="#home" class="active">Home</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="menu-toggle">
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1>Creative <span class="gradient-text">Design</span> & Development</h1>
                    <p>Creating digital experiences that inspire and engage</p>
                    <div class="cta-buttons">
                        <a href="#work" class="btn primary">View Work</a>
                        <a href="#contact" class="btn secondary">Contact Me</a>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="gradient-circle"></div>
                    <img src="profile.jpg" alt="Profile">
                </div>
            </div>
        </section>

        <section id="work" class="work">
            <div class="container">
                <h2>Selected <span class="gradient-text">Projects</span></h2>
                <div class="work-grid">
                    <div class="work-item">
                        <img src="project1.jpg" alt="Project 1">
                        <div class="work-info">
                            <h3>Project Name</h3>
                            <p>Design / Development</p>
                            <a href="#" class="view-project">View Project</a>
                        </div>
                    </div>
                    <div class="work-item">
                        <img src="project2.jpg" alt="Project 2">
                        <div class="work-info">
                            <h3>Project Name</h3>
                            <p>Design / Development</p>
                            <a href="#" class="view-project">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="about">
            <div class="container">
                <h2>About <span class="gradient-text">Me</span></h2>
                <div class="about-content">
                    <div class="about-text">
                        <p>I'm a creative designer and developer passionate about creating beautiful digital experiences. With expertise in both design and development, I bring ideas to life through thoughtful and engaging solutions.</p>
                        <div class="skills">
                            <span>UI/UX Design</span>
                            <span>Web Development</span>
                            <span>Branding</span>
                            <span>Photography</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="contact">
            <div class="container">
                <h2>Get in <span class="gradient-text">Touch</span></h2>
                <div class="contact-content">
                    <form class="contact-form">
                        <div class="form-group">
                            <input type="text" placeholder="Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Email" required>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" class="btn primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="social-links">
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Dribbble</a>
                </div>
                <p>&copy; 2024 Portfolio. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`,
    css: `/* Dark Portfolio CSS */
:root {
    --bg-dark: #0a0a0a;
    --bg-darker: #050505;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
    --accent: #6366f1;
    --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    --border-color: rgba(255, 255, 255, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-dark);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Custom Cursor */
.cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--accent-gradient);
    pointer-events: none;
    mix-blend-mode: difference;
    z-index: 9999;
    transition: transform 0.2s ease;
}

/* Header & Navigation */
header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    font-size: 24px;
    font-weight: 700;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 40px;
}

.nav-links a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-gradient);
    transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
    width: 100%;
}

.menu-toggle {
    display: none;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 0;
    position: relative;
}

.hero-content {
    max-width: 600px;
}

h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 20px;
    background: linear-gradient(to right, var(--accent), #6610f2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gradient-text {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero p {
    font-size: 20px;
    color: var(--text-secondary);
    margin-bottom: 40px;
}

.cta-buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 30px;
    font-weight: 500;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn:hover {
    transform: translateY(-3px);
}

.primary {
    background: var(--accent-gradient);
    color: var(--text-primary);
}

.secondary {
    border: 1px solid var(--accent);
    color: var(--text-primary);
}

.hero-image {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 40%;
    height: 80vh;
    overflow: hidden;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}

.gradient-circle {
    position: absolute;
    width: 400px;
    height: 400px;
    background: var(--accent-gradient);
    border-radius: 50%;
    opacity: 0.1;
    filter: blur(60px);
    z-index: -1;
}

/* Work Section */
.work {
    padding: 120px 0;
    background-color: var(--bg-darker);
}

h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 60px;
}

.work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.work-item {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    background: var(--bg-dark);
    transition: transform 0.3s ease;
}

.work-item:hover {
    transform: translateY(-10px);
}

.work-item img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.work-info {
    padding: 30px;
}

.work-info h3 {
    font-size: 24px;
    margin-bottom: 10px;
}

.work-info p {
    color: var(--text-secondary);
    margin-bottom: 15px;
}

.view-project {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

/* About Section */
.about {
    padding: 120px 0;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
}

.about-text p {
    font-size: 18px;
    color: var(--text-secondary);
    margin-bottom: 30px;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.skills span {
    padding: 8px 20px;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 20px;
    color: var(--accent);
    font-size: 14px;
}

/* Contact Section */
.contact {
    padding: 120px 0;
    background-color: var(--bg-darker);
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

input, textarea {
    width: 100%;
    padding: 15px;
    background: var(--bg-dark);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    color: var(--text-primary);
    font-size: 16px;
    transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
    outline: none;
    border-color: var(--accent);
}

textarea {
    height: 150px;
    resize: vertical;
}

/* Footer */
footer {
    padding: 60px 0;
    border-top: 1px solid var(--border-color);
}

.footer-content {
    text-align: center;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;
}

.social-links a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: var(--accent);
}

/* Responsive Design */
@media (max-width: 992px) {
    .hero-content {
        flex-direction: column-reverse;
    }

    .text-content, .hero-image {
        flex: none;
        width: 100%;
    }

    h1 {
        font-size: 48px;
    }

    .gradient-text {
        font-size: 48px;
    }

    .footer-content {
        flex-direction: column;
    }

    .social-links {
        margin-top: 20px;
    }

    .social-links a {
        margin: 0 10px;
    }
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .menu-toggle {
        display: block;
    }

    h1 {
        font-size: 48px;
    }

    .hero-image {
        display: none;
    }

    .work-grid {
        grid-template-columns: 1fr;
    }
}`,
    features: [
      "Sleek, modern dark theme perfect for photographers and designers.",
      "Dramatic, blue color palette",
      "Modern and sleek design"
    ],
    tags: [
      { color: "gray", label: "Dark Mode" },
      { color: "blue", label: "Dramatic" }
    ]
  },
  {
    id: "developer-portfolio",
    name: "Developer Portfolio",
    description: "Technical-focused template with sections for projects, skills, and GitHub integration.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sam Wilson | Developer Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="cursor"></div>
    
    <header>
        <nav>
            <div class="logo">
                <span class="highlight">&lt;</span> samWilson <span class="highlight">/&gt;</span>
            </div>
            <ul class="nav-links">
                <li><a href="#home" class="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="menu-toggle">
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="container">
                <div class="hero-content">
                    <div class="text-content">
                        <div class="greeting">
                            <span class="hello">Hello World! I'm</span>
                        </div>
                        <h1>Sam Wilson</h1>
                        <h2 class="typed-text">Full Stack Developer</h2>
                        <p>I build scalable web applications with a focus on performance and user experience.</p>
                        <div class="cta-buttons">
                            <a href="#projects" class="btn primary">View My Work</a>
                            <a href="#contact" class="btn secondary">Contact Me</a>
                        </div>
                        <div class="social-links">
                            <a href="#" title="GitHub"><i class="fab fa-github"></i></a>
                            <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                            <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" title="CodePen"><i class="fab fa-codepen"></i></a>
                        </div>
                    </div>
                    <div class="hero-image">
                        <div class="gradient-circle"></div>
                        <img src="profile.jpg" alt="Sam Wilson">
                    </div>
                </div>
            </div>
            <div class="tech-stack">
                <div class="tech-item"><i class="fab fa-react"></i></div>
                <div class="tech-item"><i class="fab fa-node-js"></i></div>
                <div class="tech-item"><i class="fab fa-js"></i></div>
                <div class="tech-item"><i class="fab fa-python"></i></div>
                <div class="tech-item"><i class="fab fa-docker"></i></div>
            </div>
        </section>

        <section id="skills" class="skills">
            <div class="container">
                <h2>Skills <span class="gradient-text">&</span> Technologies</h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3>Frontend</h3>
                        <div class="skill-items">
                            <div class="skill-item">
                                <div class="skill-icon"><i class="fab fa-html5"></i></div>
                                <div class="skill-info">
                                    <h4>HTML5</h4>
                                    <div class="skill-level">
                                        <div class="level-bar" style="width: 95%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-icon"><i class="fab fa-css3-alt"></i></div>
                                <div class="skill-info">
                                    <h4>CSS3</h4>
                                    <div class="skill-level">
                                        <div class="level-bar" style="width: 90%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-icon"><i class="fab fa-js"></i></div>
                                <div class="skill-info">
                                    <h4>JavaScript</h4>
                                    <div class="skill-level">
                                        <div class="level-bar" style="width: 85%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Backend</h3>
                        <div class="skill-items">
                            <div class="skill-item">
                                <div class="skill-icon"><i class="fab fa-node-js"></i></div>
                                <div class="skill-info">
                                    <h4>Node.js</h4>
                                    <div class="skill-level">
                                        <div class="level-bar" style="width: 80%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-icon"><i class="fab fa-python"></i></div>
                                <div class="skill-info">
                                    <h4>Python</h4>
                                    <div class="skill-level">
                                        <div class="level-bar" style="width: 75%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" class="projects">
            <div class="container">
                <h2>Featured <span class="gradient-text">Projects</span></h2>
                <div class="project-filters">
                    <button class="filter-btn active" data-filter="all">All</button>
                    <button class="filter-btn" data-filter="web">Web Apps</button>
                    <button class="filter-btn" data-filter="mobile">Mobile</button>
                    <button class="filter-btn" data-filter="api">API</button>
                </div>
                <div class="projects-grid">
                    <div class="project-card" data-category="web">
                        <div class="project-image">
                            <img src="project1.jpg" alt="Project 1">
                        </div>
                        <div class="project-content">
                            <div class="project-tags">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>MongoDB</span>
                            </div>
                            <h3>Task Management Platform</h3>
                            <p>A fullstack application for team collaboration and task management with real-time updates.</p>
                            <div class="project-links">
                                <a href="#" class="github-link"><i class="fab fa-github"></i> Code</a>
                                <a href="#" class="live-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="contact">
            <div class="container">
                <h2>Get in <span class="gradient-text">Touch</span></h2>
                <div class="contact-content">
                    <form class="contact-form">
                        <div class="form-group">
                            <input type="text" placeholder="Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Email" required>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" class="btn primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <span class="highlight">&lt;</span> samWilson <span class="highlight">/&gt;</span>
                </div>
                <p class="footer-message">Feel free to reach out for collaborations or just a friendly hello!</p>
                <div class="footer-social">
                    <a href="#"><i class="fab fa-github"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-codepen"></i></a>
                </div>
                <div class="footer-attribution">
                    <p>&copy; 2024 Sam Wilson. All rights reserved.</p>
                    <p>Built with <span class="highlight">❤️</span> and a lot of <span class="highlight">☕</span></p>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`,
    css: `/* Developer Portfolio CSS */
:root {
    --bg-dark: #0a0a0a;
    --bg-darker: #050505;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
    --accent: #6366f1;
    --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    --border-color: rgba(255, 255, 255, 0.1);
    --font-mono: 'JetBrains Mono', monospace;
    --font-sans: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-sans);
    background-color: var(--bg-dark);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Custom Cursor */
.cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--accent-gradient);
    pointer-events: none;
    mix-blend-mode: difference;
    z-index: 9999;
    transition: transform 0.2s ease;
}

/* Header & Navigation */
header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    font-family: var(--font-mono);
    font-size: 24px;
    font-weight: 700;
}

.highlight {
    color: var(--accent);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 40px;
}

.nav-links a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-gradient);
    transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
    width: 100%;
}

.menu-toggle {
    display: none;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 0;
    position: relative;
}

.hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
}

.text-content {
    flex: 1;
}

.greeting {
    margin-bottom: 10px;
}

.hello {
    display: inline-block;
    font-size: 18px;
    padding: 5px 15px;
    background: rgba(99, 102, 241, 0.1);
    border-left: 3px solid var(--accent);
    border-radius: 0 20px 20px 0;
    font-family: var(--font-mono);
}

h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 20px;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.typed-text {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
    font-family: var(--font-mono);
    position: relative;
}

.typed-text::after {
    content: '|';
    position: absolute;
    right: -12px;
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

.hero p {
    font-size: 20px;
    color: var(--text-secondary);
    margin-bottom: 40px;
}

.cta-buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 30px;
    font-weight: 500;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn:hover {
    transform: translateY(-3px);
}

.primary {
    background: var(--accent-gradient);
    color: var(--text-primary);
}

.secondary {
    border: 1px solid var(--accent);
    color: var(--text-primary);
}

.social-links {
    display: flex;
    gap: 20px;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(99, 102, 241, 0.1);
    color: var(--text-primary);
    transition: all 0.3s ease;
}

.social-links a:hover {
    background: var(--accent-gradient);
    transform: translateY(-5px);
}

.hero-image {
    flex: 1;
    position: relative;
}

.hero-image img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 20px;
    position: relative;
    z-index: 2;
}

.gradient-circle {
    position: absolute;
    width: 400px;
    height: 400px;
    background: var(--accent-gradient);
    border-radius: 50%;
    opacity: 0.1;
    filter: blur(60px);
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.tech-stack {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 50px;
}

.tech-item {
    font-size: 32px;
    color: var(--text-secondary);
    transition: all 0.3s ease;
}

.tech-item:hover {
    color: var(--accent);
    transform: translateY(-10px);
}

/* Skills Section */
.skills {
    padding: 120px 0;
    background-color: var(--bg-darker);
}

h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 60px;
}

.gradient-text {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.skill-category {
    background: rgba(99, 102, 241, 0.05);
    border-radius: 20px;
    padding: 30px;
    border: 1px solid var(--border-color);
}

.skill-category h3 {
    font-size: 24px;
    margin-bottom: 20px;
    font-family: var(--font-mono);
}

.skill-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: 15px;
}

.skill-icon {
    font-size: 24px;
    color: var(--accent);
}

.skill-info {
    flex: 1;
}

.skill-info h4 {
    margin-bottom: 5px;
}

.skill-level {
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.level-bar {
    height: 100%;
    background: var(--accent-gradient);
    border-radius: 10px;
}

/* Projects Section */
.projects {
    padding: 120px 0;
}

.project-filters {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 8px 20px;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn.active,
.filter-btn:hover {
    background: var(--accent-gradient);
    border-color: transparent;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.project-card {
    background: rgba(99, 102, 241, 0.05);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);
}

.project-image {
    height: 200px;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.05);
}

.project-content {
    padding: 25px;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
}

.project-tags span {
    padding: 5px 15px;
    background: rgba(99, 102, 241, 0.1);
    color: var(--accent);
    border-radius: 20px;
    font-size: 12px;
    font-family: var(--font-mono);
}

.project-content h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.project-content p {
    color: var(--text-secondary);
    margin-bottom: 20px;
    font-size: 14px;
}

.project-links {
    display: flex;
    gap: 20px;
}

.project-links a {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.3s ease;
}

.project-links a:hover {
    color: var(--accent);
}

.project-links a i {
    margin-right: 5px;
}

/* Contact Section */
.contact {
    padding: 120px 0;
    background-color: var(--bg-darker);
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

input, textarea {
    width: 100%;
    padding: 15px;
    background: rgba(99, 102, 241, 0.05);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    color: var(--text-primary);
    font-size: 16px;
    transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
    outline: none;
    border-color: var(--accent);
}

textarea {
    height: 150px;
    resize: vertical;
}

/* Footer */
footer {
    padding: 60px 0;
    border-top: 1px solid var(--border-color);
}

.footer-content {
    text-align: center;
}

.footer-logo {
    font-family: var(--font-mono);
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 15px;
}

.footer-message {
    color: var(--text-secondary);
    margin-bottom: 30px;
}

.footer-social {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
}

.footer-social a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(99, 102, 241, 0.1);
    color: var(--text-primary);
    transition: all 0.3s ease;
}

.footer-social a:hover {
    background: var(--accent-gradient);
    transform: translateY(-5px);
}

.footer-attribution {
    color: var(--text-secondary);
    font-size: 14px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .menu-toggle {
        display: block;
    }

    h1 {
        font-size: 48px;
    }

    .hero-content {
        flex-direction: column;
    }

    .hero-image {
        display: none;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }
}`,
    features: [
      "Technical-focused template with sections for projects, skills, and GitHub integration.",
      "Code-friendly, blue color palette",
      "Modern and sleek design"
    ],
    tags: [
      { color: "blue", label: "Technical" },
      { color: "gray", label: "Code-friendly" }
    ]
  }
];

