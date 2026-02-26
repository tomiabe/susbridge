const ContactSection = ({ id }) => {
    return (
        <section id={id} className="contact-section">
            <div className="container">
                <span className="section-label">WORK WITH US</span>
                <div className="content-wrap">
                    <h2 className="title">
                        If you're working on complex impact challenges and need clarity you can act on, we'd like to hear about it.
                    </h2>
                    <div className="contact-info">
                        <p className="label">Start a conversation:</p>
                        <p className="email">info@susbridge.xyz</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
