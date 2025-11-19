import { motion } from "motion/react";

export const Services = () => {

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
  },
};

    return (
      <motion.section
        id="services"
        className="relative bg-dark-navy py-20 w-full border-t border-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-white font-poppins">
          <div className="mb-12 text-center">
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-color mb-4">
              Services
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-3">
              Digital products that ship and scale
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto font-inter text-sm md:text-base">
              From concept to launch, we design and engineer high-performing products for the web, mobile, and cloud-native ecosystems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white/5 border border-white/5 rounded-xl p-6 backdrop-blur-sm hover:-translate-y-1 hover:border-color transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Product strategy</h3>
              <p className="text-sm md:text-base text-gray-300 font-inter">
                Discovery, roadmapping, and experimentation frameworks to align technology investments with clear business outcomes.
              </p>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-xl p-6 backdrop-blur-sm hover:-translate-y-1 hover:border-color transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Design & UX</h3>
              <p className="text-sm md:text-base text-gray-300 font-inter">
                Brand-aligned interfaces, interaction design, and design systems that keep teams moving fast without sacrificing quality.
              </p>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-xl p-6 backdrop-blur-sm hover:-translate-y-1 hover:border-color transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Engineering & DevOps</h3>
              <p className="text-sm md:text-base text-gray-300 font-inter">
                Modern web and mobile engineering, CI/CD, and observability to keep products reliable, secure, and ready to scale.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    );
};