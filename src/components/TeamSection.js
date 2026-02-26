const TeamSection = ({ id }) => {
    const team = [
        {
            name: "Tomi Abe",
            role: "Co-Founder · Creative & Digital Strategy Lead",
            bio: "Works across digital strategy, narrative, design, and research. Focused on translating complex ideas into clear communication systems.",
            image: "https://images.unsplash.com/photo-1751058127294-fef6189e6c7a?q=80&w=400",
        },
        {
            name: "Adetoro Adetayo",
            role: "Co-Founder · Sustainability Strategy & Research Lead",
            bio: "Sustainability researcher and strategist with a background in chemical engineering. Works at the intersection of science, policy and impact.",
            image: "https://images.unsplash.com/photo-1637589267610-6c66fc2a086b?q=80&w=400",
        },
    ];

    return (
        <section id={id} className="team-section">
            <div className="container">
                <span className="section-label">WHO WE ARE</span>

                <div className="team-grid">
                    {team.map((m, i) => (
                        <div key={i} className="team-card">
                            <div className="img-wrap">
                                <img src={m.image} alt={m.name} />
                            </div>
                            <h3 className="name">{m.name}</h3>
                            <span className="role">{m.role}</span>
                            <p className="bio">{m.bio}</p>
                            <button className="linkedin">Connect on LinkedIn →</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
