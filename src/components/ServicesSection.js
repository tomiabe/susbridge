const ServicesSection = ({ id }) => {
  const services = [
    {
      title: "Research & Strategy",
      description: "We clarify context, map systems, and help teams make sense of what's changing. Policy and market questions, sustainability and impact strategies, evidence synthesis, and decision frameworks.",
    },
    {
      title: "Communications & Narrative",
      description: "We design narratives and communication systems that respect complexity without losing people. Sustainability and impact communications strategy, report redesign, and digital storytelling.",
    },
    {
      title: "Data & Insight",
      description: "We turn data into insight that leaders can act on. Indicators, dashboards, analytics, and reporting systems that make progress visible, risk legible, and opportunity clear.",
    },
    {
      title: "Advisory & Embedded Support",
      description: "We embed as senior practitioners inside teams or provide ongoing advisory support, helping leaders think through choices, pressure-test strategies, and keep information honest over time.",
    },
  ];

  return (
    <section id={id} className="services-section">
      <div className="container">
        <span className="section-label">WHAT WE DO AT THE INFORMATION LAYER</span>
        <h2 className="title">We support organizations that need clarity where complexity is unavoidable.</h2>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
