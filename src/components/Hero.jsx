import SunIcon from "../components/SunIcon";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <img
            src="/passport.JPG"
            alt="Tobechukwu Ofili"
            className="hero-image"
          />

          <div className="hero-text">
            <div className="hero-title-wrapper">
              <h1>
                Hi, I'm <span className="text-brand">Tobechukwu Ofili</span>
              </h1>
              <SunIcon />
            </div>

            <p className="hero-subtitle">
              A passionate developer building modern web applications
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
