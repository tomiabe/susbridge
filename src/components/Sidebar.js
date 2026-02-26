"use client";

import { useState, useEffect } from "react";

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { label: "Home", id: "home" },
        { label: "Services", id: "services" },
        { label: "Platforms", id: "platforms" },
        { label: "Work", id: "work" },
        { label: "Insights", id: "insights" },
        { label: "About", id: "about" },
        { label: "Contact", id: "contact" },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (const item of navItems) {
                const element = document.getElementById(item.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(item.id);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <h1 className="logo">Susbridge</h1>
                <nav className="nav">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={activeSection === item.id ? "active" : ""}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
