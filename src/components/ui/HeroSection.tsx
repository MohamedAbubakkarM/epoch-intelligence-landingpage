"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center overflow-hidden px-6 pt-32 pb-20">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      
      <div className="z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-theme-gold-light text-xs md:text-sm font-medium tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.03)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-gold"></span>
          </span>
          Early Access Waitlist Open
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-50 leading-[1.15] tracking-tight mb-8 drop-shadow-md"
        >
          Don&apos;t just consume information. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ebd599] via-[#cfae60] to-[#ecdbb0] italic pr-4">Understand the world.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed font-sans font-light"
        >
          The premier intelligence platform for geopolitics and finance. 
          We strip away the noise and sensationalism to give you pristine clarity, historical context, and predictive data.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center w-full max-w-md mx-auto relative justify-center"
        >
          <a 
            href="#waitlist"
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-black bg-gradient-to-r from-[#cfae60] to-[#ecdbb0] rounded-full overflow-hidden transition-all hover:scale-105 duration-300 shadow-[0_0_30px_rgba(207,174,96,0.3)] hover:shadow-[0_0_50px_rgba(207,174,96,0.6)] shrink-0"
          >
            <span className="mr-2 text-lg">Join the Waitlist</span>
            <ArrowRight strokeWidth={2.5} className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
