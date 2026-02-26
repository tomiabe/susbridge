import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

export default function KnowledgeLabPage() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main-wrapper">
                <MobileHeader />
                <main>
                    {/* Hero */}
                    <section className="platform-hero lab-hero">
                        <div className="container">
                            <div className="platform-logo-row">
                                <span className="platform-logo-text">Knowledge Lab</span>
                            </div>
                            <span className="platform-type">Research & experimentation space</span>
                            <h1 className="title">A space for pilots, applied research, and new methods for communicating impact.</h1>
                            <a href="#" className="platform-link">View our research →</a>
                        </div>
                    </section>

                    {/* What It Is */}
                    <section className="platform-section">
                        <div className="container">
                            <span className="section-label-sm">WHAT IT IS</span>
                            <h2 className="project-section-title">The consulting practice we wish had existed sooner</h2>
                            <div className="two-col-row">
                                <div className="col">
                                    <p>Knowledge Lab is where we test new ideas before they become services. It's a space for piloting methods, exploring emerging approaches to impact communication, and running small applied research projects.</p>
                                </div>
                                <div className="col">
                                    <p>Not everything here succeeds—and that is the point. The lab gives us permission to experiment with approaches that may or may not work, keeping our consulting practice connected to what's next.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="lab-projects-section">
                        <div className="container">
                            <span className="section-label-sm lab-label">CURRENT & RECENT PROJECTS</span>
                            <h2 className="project-section-title white">What we're exploring</h2>

                            <div className="lab-project-card">
                                <h3>Narrative Impact Index</h3>
                                <p>Developing a methodology for measuring how effectively sustainability narratives translate into organizational behaviour change. Currently in pilot with three partner organizations.</p>
                                <span className="lab-project-status">Status: Active pilot</span>
                            </div>

                            <div className="lab-project-card">
                                <h3>Visual Data Literacy Toolkit</h3>
                                <p>Creating an open-source toolkit for helping non-technical teams interpret and use sustainability data in their day-to-day decision-making.</p>
                                <span className="lab-project-status">Status: Development</span>
                            </div>
                        </div>
                    </section>

                    {/* Informs Consulting */}
                    <section className="platform-section bg-accent">
                        <div className="container">
                            <span className="section-label-sm">HOW THIS INFORMS OUR CONSULTING</span>
                            <h2 className="project-section-title">Prototyping the future of impact advisory</h2>
                            <div className="two-col-row">
                                <div className="col">
                                    <p>The lab is where tomorrow's consulting methods are tested today. When we bring a new approach to a client engagement, it's likely been prototyped here first.</p>
                                </div>
                                <div className="col">
                                    <p>This keeps us from repeating the same frameworks. The problem landscape evolves, and our methods need to evolve with it. Knowledge Lab is how we make sure that happens.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="full-cta teal-bg">
                        <div className="container">
                            <h2>Interested in research collaboration?</h2>
                            <p>If you're exploring new methods for impact measurement, communication, or knowledge systems, let's talk.</p>
                            <a href="/contact" className="btn btn-secondary">Start a conversation →</a>
                        </div>
                    </section>

                    <Footer />
                </main>
            </div>
        </div>
    );
}
