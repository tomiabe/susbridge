const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <h2 className="logo">Susbridge</h2>
                        <p className="tagline">Independent consulting practice for impact-driven work. Turning complexity into clarity.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#work">Work</a></li>
                                <li><a href="#insights">Insights</a></li>
                            </ul>
                        </div>
                        <div className="link-col">
                            <h4>Platforms</h4>
                            <ul>
                                <li><a href="#">Susinsight</a></li>
                                <li><a href="#">Susdata</a></li>
                                <li><a href="#">Knowledge Lab</a></li>
                            </ul>
                        </div>
                        <div className="link-col">
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Twitter/X</a></li>
                                <li><a href="#">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Susbridge © 2025</p>
                    <p>Working globally.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
