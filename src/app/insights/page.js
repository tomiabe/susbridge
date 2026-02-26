"use client";

import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import { useState } from "react";

const InsightsPage = () => {
    const [filter, setFilter] = useState("All");

    const articles = [
        { title: "How New Carbon Regulations Will Impact African Businesses", category: "Sustainability", date: "Feb 2026", image: "/images/article-1.png" },
        { title: "The Data Infrastructure Gap in Development Finance", category: "Data & Measurement", date: "Jan 2026", image: "/images/article-2.png" },
        { title: "Why Most Impact Reports Fail to Drive Decisions", category: "Communications", date: "Jan 2026", image: "/images/article-3.png" },
        { title: "Designing for Decision-Making Under Uncertainty", category: "Strategy", date: "Dec 2025", image: "/images/article-4.png" },
        { title: "The Role of Narrative in Climate Adaptation", category: "Communications", date: "Nov 2025", image: "/images/article-5.png" },
        { title: "Measuring What Matters: Beyond Standard ESG Metrics", category: "Data & Measurement", date: "Oct 2025", image: "/images/article-6.png" },
        { title: "Local Knowledge Systems and Global Development Goals", category: "Research Methods", date: "Sep 2025", image: "/images/article-7.png" },
        { title: "From Reporting to Action: The Missing Translation Layer", category: "Strategy", date: "Aug 2025", image: "/images/article-8.png" },
        { title: "Building Research Partnerships That Last", category: "Research Methods", date: "Jul 2025", image: "/images/article-9.png" },
    ];

    const filters = ["All", "Sustainability", "Strategy", "Data & Measurement", "Communications", "Research Methods"];

    const filteredArticles = filter === "All"
        ? articles
        : articles.filter(a => a.category === filter);

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-wrapper">
                <MobileHeader />
                <main>
                    {/* Hero */}
                    <section className="insights-hero">
                        <div className="container">
                            <span className="section-label white">Insights</span>
                            <h1 className="title">Questions we're exploring through<br />research, analysis, and practice.</h1>
                            <p className="description">We write about sustainability, development, information systems, and the gap between knowing and doing.</p>
                        </div>
                    </section>

                    {/* Filter Bar */}
                    <section className="filter-section">
                        <div className="container">
                            <div className="filter-bar">
                                {filters.map(f => (
                                    <button
                                        key={f}
                                        className={`filter-btn ${filter === f ? 'active' : ''}`}
                                        onClick={() => setFilter(f)}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Article Grid */}
                    <section className="insights-grid-section">
                        <div className="container">
                            <div className="articles-grid">
                                {filteredArticles.map((a, i) => (
                                    <a key={i} href={`/insights/${a.title.toLowerCase().replace(/\s+/g, '-')}`} className="article-card">
                                        <div className="img-wrap">
                                            <img src={a.image} alt={a.title} />
                                        </div>
                                        <span className="date">{a.category} · {a.date}</span>
                                        <h3 className="article-title">{a.title}</h3>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Subscribe CTA */}
                    <section className="subscribe-cta">
                        <div className="container">
                            <h2>Want updates when we publish?</h2>
                            <p>We share new insights a few times a month—no noise, just thinking.</p>
                            <div className="subscribe-row">
                                <input type="email" placeholder="Your email address" className="subscribe-input" />
                                <button className="btn btn-primary">Subscribe →</button>
                            </div>
                            <span className="subscribe-note">No spam. Unsubscribe any time.</span>
                        </div>
                    </section>

                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default InsightsPage;
