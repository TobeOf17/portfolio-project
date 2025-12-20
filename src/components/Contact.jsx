function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Get In Touch</h2>

        <div className="contact-content">
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="contact-cta">
            <a href="mailto:ofilitobe@gmail.com" className="btn">
              Send Email
            </a>

            <a
              href="https://wa.me/2349067051794"
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://linkedin.com/in/tobechukwu-ofili"
              className="btn btn-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
