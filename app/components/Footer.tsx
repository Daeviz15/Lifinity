import { motion } from "motion/react"
import { useRef } from "react"

export const Footer = () => {
    const footerRef = useRef<HTMLDivElement | null>(null);
    const sectionVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 2, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
        },
      };
    return (
        
      <motion.footer
        ref={footerRef}
        className="relative bg-black/90 border-t border-white/10 py-10 md:py-12 mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(199,0,89,0.4),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.06),_transparent_55%)]" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-white font-poppins">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 mb-8">
            <div className="space-y-3 max-w-xs">
              <p className="text-sm tracking-[0.3em] uppercase text-color">LifinityTech</p>
              <p className="text-sm md:text-[13px] text-gray-300 font-inter">
                The product and engineering arm of the Lifinity ecosystem, helping teams ship digital experiences that actually move the needle.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm font-inter">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Company</p>
                <ul className="space-y-1.5 text-gray-300">
                  <li>About</li>
                  <li>Work</li>
                  <li>Process</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Services</p>
                <ul className="space-y-1.5 text-gray-300">
                  <li>Product strategy</li>
                  <li>Design & UX</li>
                  <li>Engineering</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Connect</p>
                <ul className="space-y-1.5 text-gray-300">
                  <li>Contact</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs md:text-sm font-inter text-gray-400">
            <p>© {new Date().getFullYear()} LifinityTech. All rights reserved.</p>
            <p className="text-gray-500">Built for teams who care about story, performance, and execution.</p>
          </div>
        </div>
      </motion.footer>
    )
}