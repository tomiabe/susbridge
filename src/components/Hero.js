const Hero = ({ id }) => {
  return (
    <section id={id} className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="subtitle">Susbridge</span>
          <h1 className="title">Independent consulting practice for impact-driven work.</h1>
          <p className="description">
            We work at the information layer where research, data, and communication must become decisions that hold up under real-world pressure.
          </p>
          <div className="cta-group">
            <button className="btn btn-primary">Work with us ↓</button>
            <button className="btn btn-secondary">See our work →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
