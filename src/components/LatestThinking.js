const LatestThinking = ({ id }) => {
  const articles = [
    {
      title: "How New Carbon Regulations Will Impact African Businesses",
      date: "February 16, 2025",
      image: "https://images.unsplash.com/photo-1683529928404-a4c9dbf1f80d?q=80&w=800",
    },
    {
      title: "Still Treating Sustainability Like a Marketing Campaign?",
      date: "November 11, 2024",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800",
    },
    {
      title: "The Role of Digital Media in Driving Sustainability Engagement",
      date: "October 19, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    },
  ];

  return (
    <section id={id} className="latest-thinking">
      <div className="container">
        <span className="section-label">LATEST THINKING</span>

        <div className="articles-grid">
          {articles.map((a, i) => (
            <div key={i} className="article-card">
              <div className="img-wrap">
                <img src={a.image} alt={a.title} />
              </div>
              <h3 className="article-title">{a.title}</h3>
              <span className="date">{a.date}</span>
            </div>
          ))}
        </div>

        <button className="read-more">Read more thoughts →</button>
      </div>
    </section>
  );
};

export default LatestThinking;
