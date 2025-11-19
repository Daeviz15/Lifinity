import { motion } from "motion/react"

export const Process = () => {
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
        id="process"
        className="bg-dark-navy py-20 w-full border-t border-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-white font-poppins">
          <div className="mb-10 text-center">
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-color mb-4">
              Process
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-3">
              A structured way to ship
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto font-inter text-sm md:text-base">
              We pair clear communication with disciplined execution so teams always know what&apos;s next.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4 text-sm md:text-base font-inter">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 mb-1">01</p>
              <h3 className="font-semibold mb-2">Discover</h3>
              <p className="text-gray-300">
                Workshops, research, and audits to align on goals, constraints, and opportunities.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 mb-1">02</p>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-gray-300">
                UX flows, interface design, and prototyping that make decisions tangible early.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 mb-1">03</p>
              <h3 className="font-semibold mb-2">Build</h3>
              <p className="text-gray-300">
                Iterative engineering with tight feedback loops and production-ready quality from day one.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 mb-1">04</p>
              <h3 className="font-semibold mb-2">Launch & grow</h3>
              <p className="text-gray-300">
                Rollouts, experimentation, and continuous improvements tied to clear metrics.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
   
    )
    
}