import Link from "next/link";

const WorkSection = ({ id }) => {
  const projects = [
    {
      title: "Project Title",
      category: "Strategy | Research",
      description: "Brief description of the challenge, approach, and outcome.",
      image: "https://images.unsplash.com/photo-1766898765658-ac47d5f650e6?q=80&w=800",
    },
    {
      title: "Project Title",
      category: "Communications | Data",
      description: "Brief description of the challenge, approach, and outcome.",
      image: "https://images.unsplash.com/photo-1760112783563-514867b4c2ed?q=80&w=800",
    },
    {
      title: "Project Title",
      category: "Research | Advisory",
      description: "Brief description of the challenge, approach, and outcome.",
      image: "https://images.unsplash.com/photo-1724860755552-55f1c46f763d?q=80&w=800",
    },
  ];

  return (
    <section id={id} className="work-section">
      <div className="container">
        <span className="section-label">FEATURED WORK</span>

        <div className="work-grid">
          {projects.map((p, i) => (
            <div key={i} className="work-card">
              <div className="img-wrap">
                <img src={p.image} alt={p.title} />
              </div>
              <h3 className="project-title">{p.title}</h3>
              <span className="category">{p.category}</span>
              <p className="description">{p.description}</p>
            </div>
          ))}
        </div>

        <Link href="/work" className="see-more">See more work →</Link>
      </div>
    </section>
  );
};

export default WorkSection;
