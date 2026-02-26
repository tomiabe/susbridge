import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

export default function ArticlePage() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main-wrapper">
                <MobileHeader />
                <main className="article-page">

                    {/* Article Header */}
                    <section className="article-header">
                        <div className="container-article">
                            <a href="/insights" className="breadcrumb">← Back to Insights</a>
                            <span className="article-category">Sustainability</span>
                            <h1 className="article-page-title">How New Carbon Regulations Will Impact African Businesses</h1>
                            <div className="byline-row">
                                <div className="author-avatar"></div>
                                <div className="byline-info">
                                    <span className="author-name">Tomi Abe</span>
                                    <span className="article-date">February 2026 · 8 min read</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Hero Image */}
                    <section className="article-hero-image">
                        <img src="/images/article-1.png" alt="Carbon regulations" />
                    </section>

                    {/* Article Body */}
                    <section className="article-body">
                        <div className="container-article">
                            <p className="article-intro">In the past eighteen months, three major regulatory frameworks covering carbon pricing and emissions disclosure have either passed or entered their final consultation phases in sub-Saharan Africa. Most organizations operating in the region are not ready.</p>

                            <h2>The regulatory shift that is already here</h2>
                            <p>It is tempting to treat this as a future problem. The regulations are complex, implementation timelines are uncertain, and enforcement mechanisms in many markets remain underdeveloped. But the organizations we work with that take this posture consistently end up reacting under pressure rather than adapting.</p>
                            <p>The practical challenge is not compliance per se—it is the internal clarity problem that compliance surfaces. When we ask leadership teams what their carbon exposure actually is, we rarely get a clear answer. Not because the data doesn't exist, but because it hasn't been organized for decision-making.</p>

                            <blockquote className="article-blockquote">
                                <p>"The gap isn't information—it's usable clarity arranged for decision-making."</p>
                            </blockquote>

                            <h2>Three things that make this different from before</h2>
                            <p>First, the scope is expanding. Earlier carbon frameworks in the region applied only to large extractive industries. The new frameworks are broader—covering service sectors, financial institutions, and mid-sized manufacturers in ways previous regulations did not.</p>
                            <p>Second, disclosure is moving toward mandatory, not voluntary. The shift from optional sustainability reporting to required disclosure changes the calculus entirely. It is no longer a brand decision—it is a legal one.</p>
                            <p>Third, the data infrastructure isn't there yet. Most organizations don't have systems that track emissions with the granularity these frameworks require. Building that infrastructure takes time—which is exactly why starting now matters.</p>

                            <figure className="article-figure">
                                <img src="/images/article-inline.png" alt="Dashboard" />
                                <figcaption>Emissions disclosure dashboards are becoming a core part of compliance infrastructure.</figcaption>
                            </figure>

                            <h2>What we recommend organizations do now</h2>
                            <p>The organizations that will navigate this best are already doing three things: mapping their current emissions data landscape, identifying the decision points that will be most affected by disclosure requirements, and building internal alignment on what the regulatory exposure actually looks like.</p>
                            <p>None of this requires having all the answers. It requires starting the right conversations—and having them with enough lead time to respond deliberately rather than reactively.</p>
                        </div>
                    </section>

                    {/* About Author */}
                    <section className="about-author">
                        <div className="container-article">
                            <span className="section-label-sm teal">ABOUT THE AUTHOR</span>
                            <div className="author-card-full">
                                <div className="author-avatar-lg"></div>
                                <div className="author-detail">
                                    <h3>Tomi Abe</h3>
                                    <span className="author-role">Founder, Susbridge</span>
                                    <p>Tomi works at the intersection of research, strategy, and communications—helping organizations translate complexity into confident action.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Related Insights */}
                    <section className="related-insights">
                        <div className="container">
                            <span className="section-label-sm">RELATED INSIGHTS</span>
                            <h2 className="project-section-title">More on this topic</h2>
                            <div className="articles-grid">
                                <div className="article-card">
                                    <div className="img-wrap"><img src="/images/article-2.png" alt="Related" /></div>
                                    <span className="date">Data & Measurement · Jan 2026</span>
                                    <h3 className="article-title">The Data Infrastructure Gap in Development Finance</h3>
                                </div>
                                <div className="article-card">
                                    <div className="img-wrap"><img src="/images/article-3.png" alt="Related" /></div>
                                    <span className="date">Communications · Jan 2026</span>
                                    <h3 className="article-title">Why Most Impact Reports Fail to Drive Decisions</h3>
                                </div>
                                <div className="article-card">
                                    <div className="img-wrap"><img src="/images/article-4.png" alt="Related" /></div>
                                    <span className="date">Strategy · Dec 2025</span>
                                    <h3 className="article-title">Designing for Decision-Making Under Uncertainty</h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="full-cta teal-bg">
                        <div className="container-wide">
                            <h2>Working on this challenge?</h2>
                            <p>If carbon compliance or sustainability strategy is something you're navigating in your organization, we'd like to hear about it.</p>
                            <a href="/contact" className="btn btn-secondary">Start a conversation →</a>
                        </div>
                    </section>

                    <Footer />
                </main>
            </div>
        </div>
    );
}
