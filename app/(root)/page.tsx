"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import AboutSection from "../components/AboutSection";
import { Services } from "../components/Services";
import { Work } from "../components/Work";
import { Process } from "../components/Process";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";


const HomePage = () => {
  const fullText = "Lifinity";
  const tech = useRef(null);
  const footerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    gsap.from(tech.current, {
      x: 50,
      opacity: 0,
      duration: 5,
      ease: "power3.out",
    });

    if (footerRef.current) {
      gsap.from(footerRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.2,
      });
    }
  }, []);

  return (
    <div className="w-full">
      <div
        id="home"
        className="flex flex-col gap-6 md:flex-row md:gap-4 justify-center items-center w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
      >
        <div className="flex flex-col mt-20">
          <h1
            className="text-white text-[70px] md:text-[100px] sm:text-[80px] lg:text-[200px] typewriter font-extrabold font-poppins leading-none transition-all duration-500"
            style={{ display: "inline-flex" }}
          >
            {fullText.split("").map((char, index) => (
              <span
                key={index}
                className="letter-animate"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0,
                  display: "inline-block",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <h1 className="text-white text-[15px] md:text-2xl font-light font-montserrat">
            Discover the <span className="text-color">life</span> in Tech
          </h1>
        </div>
        <Image
          className="w-50 h-70 md:w-60 md:h-100 lg:w-90 lg:h-130"
          ref={tech}
          src="/heroOne.png"
          width={300}
          height={300}
          alt="heroOne"
        />
      </div>
      <AboutSection />
<Services/>   
<Work/>
<Process/>
<Contact/>
<Faq/>
<Footer/>



    </div>
  );
};

export default HomePage;
