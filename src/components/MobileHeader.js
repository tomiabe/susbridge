"use client";

import { useState } from "react";
import Link from "next/link";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/#services" },
    { label: "Platforms", path: "/#platforms" },
    { label: "Work", path: "/work" },
    { label: "Insights", path: "/insights" },
    { label: "About", path: "/#about" },
    { label: "Contact", path: "/#contact" },
  ];

  return (
    <>
      <header className="mobile-header">
        <Link href="/" className="logo">Susbridge</Link>
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
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
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
