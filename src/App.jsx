import "./App.css";
import profile from "./assets/profile1.jpg";
import MY_CV from "./assets/KAMALESH_711522BCB024_RESUME.pdf";
const App = () => {
  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">KAMALESH</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="fade-in">KAMALESH</h1>
          <p className="fade-in">Frontend Developer</p>
          <div className="hero-buttons">
            <a href="#projects" className="cta-button pulse">
              View My Work
            </a>
            <a
                href= {MY_CV}
                download="KAMALESH_711522BCB024_RESUME.pdf"
                className="cta-button secondary pulse"
              >
                Download CV
              </a>
              </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="fade-in">About Me</h2>
          <div className="about-content">
            <img
              src={profile}
              alt="KAMALESH ELANGOVAN"
              className="profile-image fade-in"
            />
            <p className="fade-in">
                I&apos;m a passionate frontend developer with expertise in React, JavaScript, and modern web technologies. I love building user-friendly and visually appealing applications. When I&apos;m not coding, I enjoy exploring new design trends and contributing to open-source projects.
            </p>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="slide-in">Projects</h2>
          <div className="projects-grid">
            <div className="project-card slide-in">
              <h3>Qr-Generator</h3>
              <p>QR-Generator is an efficient tool for creating customised QR codes with dynamic styling, saving them as images, and ensuring security by removing the image after saving.</p>
              <a href="https://github.com/kamalesh-E08/QR-Generator" className="project-link">
                View Project →
              </a>
            </div>
            <div className="project-card slide-in">
              <h3>Udhayam - CSBS</h3>
              <p>Developed a website for my department&apos;s events at Udhayam Fest using HTML, CSS, JavaScript, and React, enhancing user experience and showcasing event details effectively.</p>
              <a href="https://github.com/kamalesh-E08/Udayam" className="project-link">
                View Project →
              </a>
            </div>
            <div className="project-card slide-in">
              <h3>Personal - Portfolio</h3>
              <p> Developed a responsive personal portfolio website using HTML, CSS, JavaScript, and React to showcase my skills, projects, and achievements.</p>
              <a href="https://github.com/kamalesh-E08/Personal_Portfolio" className="project-link">
                View Project →
              </a>
            </div>
            <div className="project-card slide-in">
              <h3>Certify</h3>
              <p>Certify is a Flask - based tool that automates bulk certificate distribution via email using recipient details from an Excel sheet, built with HTML, CSS and Python.</p>
              <a href="https://github.com/kamalesh-E08/Certify" className="project-link">
                View Project →
              </a>
            </div>
            <div className="project-card slide-in">
              <h3>Finance management</h3>
              <p>Finance Management helps users track, manage, and visualize financial data with interactive charts and seamless integration.</p>
              <a href="https://github.com/kamalesh-E08/React_Finance_Management_FE" className="project-link">
                View Project →
              </a>
            </div>
            <div className="project-card slide-in">
              <h3>Face attendance system </h3>
              <p>this implements a face recognition-based attendance system that sends attendance details via email. Built using Python, it includes face detection and email notification features</p>
              <a href="https://github.com/kamalesh-E08/Face-attendance-system-with-email" className="project-link">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="achievements">
        <div className="container">
          <h2 className="fade-in">Achievements</h2>
          <div className="achievements-grid fade-in">
            <div className="achievement-card">
              <h3>NPTEL CERTIFICATION</h3>
              <p>Earn the <b>ELITE</b> certificate in Problem Solving Through Programming in C</p>
            </div>
            <div className="achievement-card">
              <h3>WORKSHOP</h3>
              <p>I have attended workshop in Cyber Security at KIT-Kalaignarkarunanidhi Institute of Technology</p>
            </div>
            <div className="achievement-card">
              <h3>ACTIVE PARTICIPATOR</h3>
              <p>Actively participate in Weekly Contest in <b>Codechef</b> and Ranked at <b>Div-3</b></p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="fade-in">Contact Me</h2>
          <form className="contact-form fade-in">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="submit-button pulse">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Copyrights © 2023. All rights reserved by Kamalesh.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/kamalesh-e-27b456265/">LinkedIn</a>
            <a href="https://github.com/kamalesh-E08">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;