"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("");

    const navItems = [
        { label: "Home", path: "/", id: "home", type: "page" },
        { label: "Services", path: "/#services", id: "services", type: "anchor" },
        { label: "Platforms", path: "/#platforms", id: "platforms", type: "anchor" },
        { label: "Work", path: "/work", id: "work", type: "page" },
        { label: "Insights", path: "/insights", id: "insights", type: "page" },
        { label: "About", path: "/#about", id: "about", type: "anchor" },
        { label: "Contact", path: "/#contact", id: "contact", type: "anchor" },
    ];

    useEffect(() => {
        // Only run scroll spy on homepage
        if (pathname !== "/") {
            const currentItem = navItems.find(item => item.path === pathname);
            setActiveSection(currentItem ? currentItem.id : "");
            return;
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (const item of navItems) {
                if (item.type === "anchor" || item.id === "home") {
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
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <Link href="/" className="logo">Susbridge</Link>
                <nav className="nav">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.path}
                                    className={activeSection === item.id ? "active" : ""}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
