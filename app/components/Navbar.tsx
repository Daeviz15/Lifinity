"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  const NavLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleSmoothScroll = (href: string) => {
    return (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      const id = href.replace("#", "");
      const target = document.getElementById(id);

      if (!target) return;

      const headerHeight = (navRef.current?.getBoundingClientRect().height ?? 0) + 12;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const offsetTop = targetTop - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      if (isOpen) {
        setIsOpen(false);
      }
    };
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-dark-navy/80 backdrop-blur-md">
      <div
        className="w-full max-w-6xl mx-auto px-4 pt-6 pb-4"
        ref={navRef}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="#home" className="flex items-center gap-2">
            <Image src="/logo.png" alt="LifinityTech logo" width={48} height={48} />
            <span className="hidden sm:inline-block font-roboto text-white font-semibold tracking-wide">
              LifinityTech
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-montserrat">
            {NavLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text transition-colors font-light text-[13px] duration-200"
                onClick={handleSmoothScroll(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden sm:inline-flex text-white font-montserrat font-light px-5 py-2 rounded-[5px] button text-sm"
              onClick={handleSmoothScroll("#contact")}
            >
              Get in touch
            </Link>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-color focus:ring-offset-2 focus:ring-offset-dark-navy"
              aria-label="Toggle navigation"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="relative w-5 h-4 block">
                <span
                  className={`absolute left-0 h-[2px] w-full bg-white transition-transform duration-200 ${
                    isOpen ? "translate-y-[7px] rotate-45" : "-translate-y-[6px]"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-full bg-white transition-opacity duration-200 ${
                    isOpen ? "opacity-0" : "opacity-80"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-full bg-white transition-transform duration-200 ${
                    isOpen ? "-translate-y-[7px] -rotate-45" : "translate-y-[6px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mt-4 rounded-lg border border-white/5 bg-dark-navy/95 px-4 py-3 shadow-lg shadow-black/40">
            <ul className="flex flex-col gap-3 text-sm font-montserrat">
              {NavLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-1 text-white/80 hover:text-white transition-colors duration-200"
                    onClick={handleSmoothScroll(item.href)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
