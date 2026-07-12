import SunIcon from './SunIcon';

function Hero() {
  return (
      <div className="hero-card">
        <img src="/passport.JPG" alt="Tobechukwu Ofili" className="hero-image" />
        <div className="hero-title-wrapper">
          <h1>Hi, I'm <span className="text-brand">Tobechukwu Ofili</span></h1>
          <SunIcon />
        </div>
        <p className="hero-subtitle">
          A passionate developer building modern web applications
        </p>
        <a href="#contact" className="btn btn-outline">Get In Touch</a>
      </div>
  );
}

export default Hero;