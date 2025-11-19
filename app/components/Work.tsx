import { motion } from "motion/react"

export const Work = () => {

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
        id="work"
        className="bg-dark-navy py-20 w-full border-t border-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-white font-poppins">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-color mb-4">
                Work
              </p>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-3">
                Selected product stories
              </h2>
            </div>
            <p className="text-gray-300 max-w-md font-inter text-sm md:text-base">
              We collaborate with teams to ship high-impact releases, not just pretty interfaces.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 hover:border-color transition-all duration-300">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">SaaS Platform</p>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Conversion-focused marketing site</h3>
                <p className="text-sm md:text-base text-gray-300 font-inter">
                  Reimagined the product story and web experience, driving more qualified demo requests for a B2B SaaS brand.
                </p>
              </div>
              <p className="mt-4 text-xs text-gray-400 font-inter">Impact: +28% uplift in demo sign-ups.</p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 hover:border-color transition-all duration-300">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Fintech</p>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Mobile-first customer onboarding</h3>
                <p className="text-sm md:text-base text-gray-300 font-inter">
                  Designed and built a streamlined onboarding flow that reduces friction and improves customer activation.
                </p>
              </div>
              <p className="mt-4 text-xs text-gray-400 font-inter">Impact: Faster KYC completion, fewer drop-offs.</p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 hover:border-color transition-all duration-300">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Media & Content</p>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Story-led content hub</h3>
                <p className="text-sm md:text-base text-gray-300 font-inter">
                  Built a performant content platform that unifies editorial, audio, and video under a cohesive brand experience.
                </p>
              </div>
              <p className="mt-4 text-xs text-gray-400 font-inter">Impact: Longer session times and stronger brand recall.</p>
            </div>
          </div>
        </div>
      </motion.section>
    )
}