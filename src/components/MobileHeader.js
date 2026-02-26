"use client";

import { useState } from "react";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      setIsOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="mobile-header">
        <h1 className="logo">Susbridge</h1>
        <button className="menu-trigger" onClick={() => setIsOpen(!isOpen)}>
          MENU
        </button>
      </header>

      {isOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-content">
            <button className="close-trigger" onClick={() => setIsOpen(false)}>✕</button>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
