const PracticeSection = ({ id }) => {
  const platforms = [
    {
      title: "Susinsight",
      description: "Independent reporting and analysis on sustainability and development, with a particular depth in African contexts.",
      image: "https://images.unsplash.com/photo-1766898765658-ac47d5f650e6?q=80&w=800",
    },
    {
      title: "Susdata",
      description: "Indicators, analytics, and visual tools that make sustainability and development data usable.",
      image: "https://images.unsplash.com/photo-1760112783563-514867b4c2ed?q=80&w=800",
    },
    {
      title: "Knowledge Lab",
      description: "A space for pilots, applied research, and new methods for communicating impact.",
      image: "https://images.unsplash.com/photo-1724860755552-55f1c46f763d?q=80&w=800",
    },
  ];

  return (
    <section id={id} className="practice-section">
      <div className="container">
        <span className="section-label">HOW OUR PRACTICE STAYS GROUNDED</span>
        <h2 className="title">Our consulting is informed by independent initiatives we maintain alongside client work.</h2>

        <div className="platforms-grid">
          {platforms.map((p, i) => (
            <div key={i} className="platform-card">
              <div className="img-wrap">
                <img src={p.image} alt={p.title} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <button className="learn-more">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;
