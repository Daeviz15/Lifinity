import { motion } from "motion/react"

export const Faq = () => {
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
        id="faq"
        className="bg-dark-navy py-16 w-full border-t  border-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-white font-poppins">
          <div className="mb-8 text-center">
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-color mb-4">
              FAQ
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
              Questions teams often ask
            </h2>
          </div>

          <div className="space-y-4 font-inter text-sm md:text-[14px]">
            <div className="border border-white/10 rounded-lg p-4 bg-white/[0.02]">
              <p className="font-medium mb-1 text-white">
                What types of projects does LifinityTech take on?
              </p>
              <p className="text-gray-300">
                We focus on web and mobile products, marketing sites with clear business goals, and product-adjacent tooling that supports growth and operations.
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-4 bg-white/[0.02]">
              <p className="font-medium mb-1 text-white">
                Do you work with existing teams or only end-to-end?
              </p>
              <p className="text-gray-300">
                Both. We can operate as an embedded squad alongside internal teams or own full product delivery from strategy to launch.
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-4 bg-white/[0.02]">
              <p className="font-medium mb-1 text-white">
                How do we get started?
              </p>
              <p className="text-gray-300">
                Share a short brief through the contact form and we&apos;ll propose next steps, timelines, and an engagement model that fits your constraints.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    )
    
}