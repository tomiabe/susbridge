import Link from "next/link";

const Hero = ({ id }) => {
  return (
    <section id={id} className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="title">Independent consulting practice for impact-driven work.</h1>
          <p className="description">
            We work at the information layer where research, data, and communication must become decisions that hold up under real-world pressure.
          </p>
          <div className="cta-group">
            <a href="#contact" className="btn btn-primary">Work with us ↓</a>
            <Link href="/work" className="btn btn-secondary">See our work →</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
