import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

export default function SusinsightPage() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main-wrapper">
                <MobileHeader />
                <main>
                    {/* Hero */}
                    <section className="platform-hero">
                        <div className="container-wide">
                            <div className="platform-logo-row">
                                <span className="platform-logo-text">Susinsight</span>
                            </div>
                            <span className="platform-type">Editorial & analysis platform</span>
                            <h1 className="title">Independent reporting and analysis on sustainability and development—with a particular depth in African contexts.</h1>
                            <a href="https://susinsight.com" className="platform-link">susinsight.com ↗</a>
                        </div>
                    </section>

                    {/* What It Is */}
                    <section className="platform-section">
                        <div className="container-wide">
                            <span className="section-label-sm">WHAT IT IS</span>
                            <h2 className="project-section-title">An independent publication at the interface of analysis and action</h2>
                            <div className="two-col-row">
                                <div className="col">
                                    <p>Susinsight is where our analytical work becomes public. It's an editorial platform covering sustainability, climate adaptation, and development in African and emerging markets, written for professionals who need depth—not headlines.</p>
                                </div>
                                <div className="col">
                                    <p>The publication grounds our consulting practice in original thought and analysis. Every article is a reflection of real questions we encounter in client work—sharpened and shared openly.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Latest Articles */}
                    <section className="platform-dark-section">
                        <div className="container-wide">
                            <span className="section-label-sm teal">LATEST FROM SUSINSIGHT</span>
                            <h2 className="project-section-title white">Recent analysis from the platform</h2>
                            <div className="articles-grid dark">
                                <div className="article-card dark">
                                    <div className="img-wrap"><img src="/images/article-1.png" alt="Article" /></div>
                                    <span className="date light">Sustainability · Feb 2026</span>
                                    <h3 className="article-title white">How New Carbon Regulations Will Impact African Businesses</h3>
                                </div>
                                <div className="article-card dark">
                                    <div className="img-wrap"><img src="/images/article-2.png" alt="Article" /></div>
                                    <span className="date light">Data & Measurement · Jan 2026</span>
                                    <h3 className="article-title white">The Data Infrastructure Gap in Development Finance</h3>
                                </div>
                                <div className="article-card dark">
                                    <div className="img-wrap"><img src="/images/article-3.png" alt="Article" /></div>
                                    <span className="date light">Communications · Jan 2026</span>
                                    <h3 className="article-title white">Why Most Impact Reports Fail to Drive Decisions</h3>
                                </div>
                            </div>
                            <a href="https://susinsight.com" className="platform-see-all">See all articles on Susinsight ↗</a>
                        </div>
                    </section>

                    {/* Informs Consulting */}
                    <section className="platform-section bg-accent">
                        <div className="container-wide">
                            <span className="section-label-sm">HOW THIS INFORMS OUR CONSULTING</span>
                            <h2 className="project-section-title">Publishing keeps our thinking honest</h2>
                            <div className="two-col-row">
                                <div className="col">
                                    <p>Writing publicly forces a level of rigour that internal deliverables sometimes don't. When we publish on Susinsight, we're not just sharing information—we're stress-testing our own frameworks and assumptions.</p>
                                </div>
                                <div className="col">
                                    <p>For our consulting clients, this means they benefit from an analytical layer that has been sharpened through public scrutiny. Our recommendations are built on thinking that has already been tested in the open.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="full-cta teal-bg">
                        <div className="container-wide">
                            <h2>Interested in similar work?</h2>
                            <p>If you're looking for research, editorial strategy, or communications support on sustainability and development challenges, we'd like to hear about it.</p>
                            <a href="/contact" className="btn btn-secondary">Start a conversation →</a>
                        </div>
                    </section>

                    <Footer />
                </main>
            </div>
        </div>
    );
}
