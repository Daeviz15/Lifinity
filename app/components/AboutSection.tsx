"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
    },
  },
};

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
    },
  },
};

const AboutSection = () => {
  const humanoidRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const el = humanoidRef.current;
    if (!el) return;

    gsap.from(el, {
      y: 150,
      opacity: 0,
      duration: 4,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <section
      id="about"
      className="relative bg-black text-white py-20 w-full font-poppins text-[12px] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(199,0,89,0.22),transparent_55%)]" />
      <motion.div
        className="relative px-4 md:px-6 max-w-6xl mx-auto lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          variants={staggerVariants}
        >
          <motion.p
            className="uppercase tracking-[0.3em] text-xs md:text-sm text-color mb-4"
            variants={itemVariants}
          >
            About LifinityTech
          </motion.p>
          <motion.h1
            className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            variants={itemVariants}
          >
            Building digital products
            <span className="block text-color">
              that move businesses forward.
            </span>
          </motion.h1>
          <motion.p
            className="text-base md:text-[16px] text-gray-300 font-light"
            variants={itemVariants}
          >
            LifinityTech is the technology arm of the Lifinity ecosystem,
            partnering with ambitious brands to design, build, and scale
            high-performing digital experiences. We combine strategy, design,
            and engineering to turn complex ideas into products that actually
            ship and perform.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 lg:gap-12 mb-16 md:mb-20 items-start"
          variants={staggerVariants}
        >
          {/* Left: Narrative */}
          <motion.div
            className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-semibold">
              The Lifinity ecosystem
            </h3>
            <p className="text-gray-300 leading-relaxed font-inter">
              Lifinity brings together specialized teams across technology,
              branding, media, and project orchestration under one unified
              vision. This integrated structure allows us to move from idea to
              execution with speed, clarity, and accountability.
            </p>
            <p className="text-gray-300 leading-relaxed font-inter">
              <span className="font-semibold text-white">LifinityTech</span>{" "}
              focuses on digital product innovation: modern websites, web
              applications, and mobile apps engineered for performance,
              security, and scalability. Every engagement is anchored in clear
              business outcomes – whether that&apos;s increasing conversion,
              improving customer experience, or enabling new revenue streams.
            </p>
            <p className="text-gray-300 leading-relaxed font-inter">
              We collaborate closely with founders, marketing teams, and
              operators to translate their vision into a roadmap, then own the
              delivery from design sprints to launch and continuous improvement.
            </p>
          </motion.div>

          {/* Right: Value props */}
          <motion.div
            className="space-y-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold font-poppins">
                Why teams partner with us
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-inter">
                Beyond clean code and beautiful interfaces, we bring structured
                processes, transparent communication, and a long-term mindset to
                every collaboration.
              </p>
            </div>
            <motion.ul
              className="space-y-4 text-gray-300 font-inter"
              variants={staggerVariants}
            >
              <motion.li
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <span className="text-[#c70059] text-xl leading-none mt-[2px]">
                  →
                </span>
                <motion.span variants={itemVariants}>
                  Full-stack capability across web, mobile, and cloud – from
                  product discovery to architecture, development, and
                  deployment.
                </motion.span>
              </motion.li>
              <motion.li
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <motion.span
                  variants={itemVariants}
                  className="text-[#c70059] text-xl leading-none mt-[2px]"
                >
                  →
                </motion.span>
                <motion.span variants={itemVariants}>
                  An integrated approach that connects technology with brand,
                  content, and go-to-market strategy for coherent digital
                  experiences.
                </motion.span>
              </motion.li>
              <motion.li
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <motion.span
                  variants={itemVariants}
                  className="text-[#c70059] text-xl leading-none mt-[2px]"
                >
                  →
                </motion.span>
                <motion.span variants={itemVariants}>
                  Agile, outcome-focused delivery – we prioritize impact, ship
                  in iterations, and keep stakeholders involved at every key
                  decision.
                </motion.span>
              </motion.li>
              <motion.li
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <motion.span
                  variants={itemVariants}
                  className="text-[#c70059] text-xl leading-none mt-[2px]"
                >
                  →
                </motion.span>
                <motion.span variants={itemVariants}>
                  Story-driven production across web, video, and audio that
                  helps your product stand out and your brand message land with
                  clarity.
                </motion.span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Humanoid image that animates up as it scrolls into view */}
      <div
        ref={humanoidRef}
        className="absolute w-full flex items-center justify-center -bottom-15  md:-bottom-25 pointer-events-none z-20"
        aria-hidden
      >
        <Image
          src="/lifinity.png"
          alt=""
          width={320}
          height={420}
          className="w-[220px] md:w-[320px] opacity-30  lg:w-[380px] h-auto"
        />
      </div>
    </section>
  );
};

export default AboutSection;
