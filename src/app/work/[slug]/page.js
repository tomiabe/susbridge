import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

export default function ProjectPage() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main-wrapper">
                <MobileHeader />
                <main className="project-page">

                    {/* Project Header */}
                    <section className="project-header">
                        <div className="container">
                            <a href="/work" className="breadcrumb">← Back to Work</a>
                            <h1 className="project-page-title">Project Title Goes Here</h1>
                            <div className="meta-row">
                                <div className="meta-item">
                                    <span className="meta-label">CLIENT</span>
                                    <span className="meta-value">Organization Name</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">DURATION</span>
                                    <span className="meta-value">6 months</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">SERVICES</span>
                                    <span className="meta-value">Research · Strategy · Advisory</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Hero Image */}
                    <section className="project-hero-image">
                        <img src="/images/work-p1.png" alt="Project hero" />
                    </section>

                    {/* Challenge */}
                    <section className="project-section">
                        <div className="container">
                            <span className="section-label-sm">THE CHALLENGE</span>
                            <h2 className="project-section-title">What the organization<br />was facing</h2>
                            <div className="project-prose">
                                <p>The organization found itself navigating a rapidly shifting regulatory landscape without a clear framework for translating complex policy requirements into actionable decisions for their leadership team. Existing processes were built for stability—not for the pace of change they were now dealing with.</p>
                                <p>What made this particularly difficult was the absence of clear internal consensus on risk priorities. Technical teams and senior leaders were operating from different mental models, creating friction at exactly the point where clarity was most needed.</p>
                                <p>Existing reports existed in abundance—but none were designed for decision-making. The gap wasn't information. It was usable clarity.</p>
                            </div>
                        </div>
                    </section>

                    {/* Approach */}
                    <section className="project-section bg-light">
                        <div className="container">
                            <span className="section-label-sm">OUR APPROACH</span>
                            <h2 className="project-section-title">How we framed the problem<br />and worked through it</h2>
                            <div className="project-prose">
                                <p>We began by running a structured sense-making process with the core team—mapping existing information sources, identifying decision points, and surfacing the implicit assumptions driving the current approach. This revealed three critical misalignments between what data was available and what leaders actually needed to decide.</p>
                                <p>From there, we developed a tailored analytical framework that reframed the regulatory exposure in terms leaders could act on—replacing abstract compliance language with concrete scenario analysis. We worked embedded with the team, not as external advisors handing over deliverables.</p>
                                <p>A key pivot came mid-engagement when we realized the core need was not a strategy document but a shared decision vocabulary. We restructured our approach around facilitating alignment across the team before producing any outputs.</p>
                            </div>
                            <div className="process-diagram-placeholder"></div>
                        </div>
                    </section>

                    {/* Outcomes */}
                    <section className="project-section">
                        <div className="container">
                            <span className="section-label-sm">OUTCOMES</span>
                            <h2 className="project-section-title">What changed and what it made possible</h2>
                            <div className="outcomes-row">
                                <div className="outcome-card">
                                    <h3>Aligned leadership</h3>
                                    <p>All senior stakeholders now operate from a shared understanding of the organization's regulatory exposure and strategic options.</p>
                                </div>
                                <div className="outcome-card">
                                    <h3>Faster response</h3>
                                    <p>Decision-making time on regulatory matters reduced from months to weeks.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Deliverables */}
                    <section className="project-section bg-accent">
                        <div className="container">
                            <span className="section-label-sm">WHAT WE DELIVERED</span>
                            <h2 className="project-section-title">Tangible outputs from this engagement</h2>
                            <div className="deliverables-row">
                                <div className="deliverable-card">
                                    <h3>Regulatory Mapping Framework</h3>
                                    <p>A decision-oriented framework translating complex regulatory requirements into clear action points.</p>
                                </div>
                                <div className="deliverable-card">
                                    <h3>Scenario Analysis Document</h3>
                                    <p>A set of scenario models allowing the leadership team to stress-test decisions under different regulatory outcomes.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonial */}
                    <section className="project-testimonial">
                        <div className="container">
                            <span className="section-label-sm teal">CLIENT TESTIMONIAL</span>
                            <div className="quote-block">
                                <blockquote>
                                    "They didn't just give us a strategy document. They helped us see the problem differently—and that changed everything about how we responded."
                                </blockquote>
                                <cite>— Senior Director, Client Organization</cite>
                            </div>
                        </div>
                    </section>

                    {/* Related Work */}
                    <section className="project-section">
                        <div className="container">
                            <span className="section-label-sm">RELATED WORK</span>
                            <h2 className="project-section-title">Similar engagements</h2>
                            <div className="related-grid">
                                <div className="work-card">
                                    <div className="img-wrap"><img src="/images/work-p2.png" alt="Related project" /></div>
                                    <span className="category">Communications | Data</span>
                                    <h3 className="project-title">Sustainability Narrative</h3>
                                </div>
                                <div className="work-card">
                                    <div className="img-wrap"><img src="/images/work-p3.png" alt="Related project" /></div>
                                    <span className="category">Advisory | Embedded Support</span>
                                    <h3 className="project-title">Strategic Advisory</h3>
                                </div>
                                <div className="work-card">
                                    <div className="img-wrap"><img src="/images/work-p4.png" alt="Related project" /></div>
                                    <span className="category">Data & Insight</span>
                                    <h3 className="project-title">Climate Data Dashboard</h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="full-cta teal-bg">
                        <div className="container">
                            <h2>Need help with something similar?</h2>
                            <p>If you're working on challenges in research, strategy, or communications, we'd like to hear about it.</p>
                            <a href="/contact" className="btn btn-secondary">Start a conversation →</a>
                        </div>
                    </section>

                    <Footer />
                </main>
            </div>
        </div>
    );
}
