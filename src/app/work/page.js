"use client";

import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const WorkPage = () => {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            title: "Impact Analysis Framework",
            tag: "Research | Strategy",
            description: "Developed a comprehensive framework for measuring long-term social impact in agricultural supply chains.",
            image: "/images/work-p1.png",
            category: "Research & Strategy",
            slug: "impact-analysis-framework"
        },
        {
            title: "Sustainability Narrative",
            tag: "Communications | Data",
            description: "Crafted a data-backed sustainability story for an international development agency.",
            image: "/images/work-p2.png",
            category: "Communications",
            slug: "sustainability-narrative"
        },
        {
            title: "Strategic Advisory",
            tag: "Advisory | Embedded Support",
            description: "Providing ongoing strategic support for a pan-African climate initiative.",
            image: "/images/work-p3.png",
            category: "Advisory",
            slug: "strategic-advisory"
        },
        {
            title: "Climate Data Dashboard",
            tag: "Data & Insight",
            description: "Visualizing complex climate risk data for regional policy makers.",
            image: "/images/work-p4.png",
            category: "Data & Insight",
            slug: "climate-data-dashboard"
        },
        {
            title: "Policy Research",
            tag: "Research | Advisory",
            description: "Depth research into the implications of new carbon regulations for exporters.",
            image: "/images/work-p5.png",
            category: "Research & Strategy",
            slug: "policy-research"
        },
        {
            title: "Stakeholder Engagement",
            tag: "Communications | Strategy",
            description: "Designing communication systems for inclusive stakeholder consultation.",
            image: "/images/work-p6.png",
            category: "Communications",
            slug: "stakeholder-engagement"
        },
        {
            title: "Market Entry Strategy",
            tag: "Research | Strategy",
            description: "Evaluating opportunities for sustainable technology in emerging markets.",
            image: "/images/work-p7.png",
            category: "Research & Strategy",
            slug: "market-entry-strategy"
        },
        {
            title: "Crisis Communications",
            tag: "Communications | Advisory",
            description: "Advising on narrative integrity during complex environmental challenges.",
            image: "/images/work-p8.png",
            category: "Communications",
            slug: "crisis-communications"
        },
        {
            title: "ESG Integration",
            tag: "Data & Insight",
            description: "Helping a mid-sized corporation integrate ESG metrics into core reporting.",
            image: "/images/work-p9.png",
            category: "Data & Insight",
            slug: "esg-integration"
        },
        {
            title: "Capacity Building",
            tag: "Advisory | Research",
            description: "Training research teams on impact-oriented data collection methods.",
            image: "/images/work-p10.png",
            category: "Advisory",
            slug: "capacity-building"
        },
        {
            title: "Visualizing Impact",
            tag: "Data & Insight | Communications",
            description: "Translating 10 years of longitudinal data into a digital impact report.",
            image: "/images/work-p11.png",
            category: "Data & Insight",
            slug: "visualizing-impact"
        },
        {
            title: "Digital Transformation",
            tag: "Strategy | Communications",
            description: "Modernizing the knowledge sharing systems of a global foundation.",
            image: "/images/work-p12.png",
            category: "Communications",
            slug: "digital-transformation"
        }
    ];

    const filters = ["All", "Research & Strategy", "Communications", "Data & Insight", "Advisory"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-wrapper">
                <MobileHeader />

                <main className="work-page">
                    <section className="work-hero">
                        <div className="work-hero-content">
                            <span className="section-label white">Work</span>
                            <h1 className="title">Selected engagements across research,<br />strategy, communications, and data.</h1>
                            <p className="description">
                                We work with organizations that need clarity where complexity is unavoidable—helping teams move from information overload to confident action.
                            </p>
                        </div>
                    </section>

                    <section className="filter-section">
                        <div className="filter-bar">
                            {filters.map(f => (
                                <button
                                    key={f}
                                    className={`filter-btn ${filter === f ? 'active' : ''}`}
                                    onClick={() => setFilter(f)}
                                >
                                    {filter === "All" && f === "All" ? "All Projects" : f}
                                </button>
                            ))}
                        </div>
                    </section>

                    <section className="projects-grid-section">
                        <div className="work-full-grid">
                            {filteredProjects.map((p, i) => (
                                <Link key={i} href={`/work/${p.slug}`} className="work-card">
                                    <div className="img-wrap">
                                        <img src={p.image} alt={p.title} />
                                    </div>
                                    <div className="work-card-info">
                                        <span className="category">{p.tag}</span>
                                        <h3 className="project-title">{p.title}</h3>
                                        <p className="project-description">{p.description}</p>
                                        <span className="view-link">View case study →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className="work-cta">
                        <div className="work-cta-content">
                            <h2 className="cta-title">Working on something complex?</h2>
                            <p className="cta-description">
                                If you're navigating challenges where clarity matters, let's talk about how we can help.
                            </p>
                            <Link href="/contact" className="btn btn-secondary">Start a conversation →</Link>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default WorkPage;
