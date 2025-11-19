import { motion } from "motion/react"

export const Contact = () => {
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
        id="contact"
        className="bg-dark-navy py-20 w-full border-t text-[12px] border-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-white font-poppins text-center">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-color mb-4">
            Contact
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Ready to explore a project?
          </h2>
          <p className="text-gray-300 font-inter text-sm md:text-base mb-8">
            Tell us about your product, goals, and timelines. We&apos;ll respond with a structured way to move forward.
          </p>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 max-w-xl mx-auto">
            <form className="space-y-4 text-left font-inter">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-color focus:border-color"
                  placeholder="Your name or team"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-color focus:border-color"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">
                  Project details
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-color focus:border-color resize-none"
                  placeholder="What are you looking to build or improve?"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto inline-flex justify-center rounded-md px-6 py-2.5 bg-color text-sm font-medium text-white hover:brightness-110 transition-all duration-200"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    )
    
}