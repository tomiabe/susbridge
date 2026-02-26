import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

export default function SusdataPage() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main-wrapper">
                <MobileHeader />
                <main>
                    {/* Hero */}
                    <section className="platform-hero susdata-hero">
                        <div className="container-wide">
                            <div className="platform-logo-row">
                                <span className="platform-logo-text">Susdata</span>
                            </div>
                            <span className="platform-type">Data & measurement initiative</span>
                            <h1 className="title">Indicators, analytics, and visual tools that make sustainability and development data usable.</h1>
                            <a href="https://susdata.xyz" className="platform-link">susdata.xyz ↗</a>
                        </div>
                    </section>

                    {/* What It Is */}
                    <section className="platform-section">
                        <div className="container-wide">
                            <span className="section-label-sm">WHAT IT IS</span>
                            <h2 className="project-section-title">The gap between data and decision is a design problem</h2>
                            <div className="two-col-row">
                                <div className="col">
                                    <p>Susdata is where we work on making sustainability data more useful. Not just accessible—useful. We build indicators, tools, and visualizations that help organizations move from raw data to practical insight.</p>
                                </div>
                                <div className="col">
                                    <p>Most sustainability data exists in formats designed for reporting, not for decision-making. Susdata is our attempt to close that gap—creating tools that translate measurement into meaning.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Featured Datasets */}
                    <section className="platform-dark-section">
                        <div className="container-wide">
                            <span className="section-label-sm teal">FEATURED DATASETS & TOOLS</span>
                            <h2 className="project-section-title white">Explore the data</h2>
                            <div className="articles-grid dark">
                                <div className="article-card dark">
                                    <div className="img-wrap"><img src="/images/data-1.png" alt="Dataset" /></div>
                                    <span className="date light">Dataset</span>
                                    <h3 className="article-title white">African Climate Risk Index</h3>
                                </div>
                                <div className="article-card dark">
                                    <div className="img-wrap"><img src="/images/data-2.png" alt="Dataset" /></div>
                                    <span className="date light">Dashboard</span>
                                    <h3 className="article-title white">ESG Disclosure Tracker</h3>
                                </div>
                                <div className="article-card dark">
                                    <div className="img-wrap"><img src="/images/data-3.png" alt="Tool" /></div>
                                    <span className="date light">Tool</span>
                                    <h3 className="article-title white">Impact Measurement Calculator</h3>
                                </div>
                            </div>
                            <a href="https://susdata.xyz" className="platform-see-all">See all datasets on Susdata ↗</a>
                        </div>
                    </section>

                    {/* Informs Consulting */}
                    <section className="platform-section bg-accent">
                        <div className="container-wide">
                            <span className="section-label-sm">HOW THIS INFORMS OUR CONSULTING</span>
                            <h2 className="project-section-title">Working with real data sharpens every engagement</h2>
                            <div className="two-col-row">
                                <div className="col">
                                    <p>Maintaining Susdata means we stay close to the data—not just the theory. When we advise clients on measurement and reporting, we're drawing on our own experience building and maintaining real data systems.</p>
                                </div>
                                <div className="col">
                                    <p>This isn't a side project. It's a core part of how we maintain the technical depth that makes our advisory work practical, not theoretical.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="full-cta teal-bg">
                        <div className="container-wide">
                            <h2>Need data & insight support?</h2>
                            <p>If you're working on impact measurement, sustainability indicators, or data storytelling, we'd like to hear about it.</p>
                            <a href="/contact" className="btn btn-secondary">Start a conversation →</a>
                        </div>
                    </section>

                    <Footer />
                </main>
            </div>
        </div>
    );
}
