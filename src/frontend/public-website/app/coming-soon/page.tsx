"use client";

import { motion } from "framer-motion";
import { Construction, ArrowLeft, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-[var(--background)] flex flex-col justify-between selection:bg-[var(--primary)] selection:text-[var(--background)]">
      <section className="flex-1 flex flex-col items-center justify-center relative overflow-hidden px-6 pt-32 pb-24">
        {/* Animated Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[var(--warning)]/10 rounded-full blur-[100px] pointer-events-none animate-bounce duration-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[var(--danger)]/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-700"></div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-2xl w-full bg-[var(--foreground)]/5 backdrop-blur-3xl border border-[var(--foreground)]/10 rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center shadow-2xl"
        >
          {/* Pulsing Icon */}
          <div className="relative mb-10">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border-2 border-dashed border-[var(--primary)]/30 rounded-full"
            ></motion.div>
            <div className="w-24 h-24 bg-gradient-to-br from-[var(--primary)] to-[var(--danger)] rounded-3xl shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] flex items-center justify-center transform rotate-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              <Rocket size={48} className="text-[var(--background)] transform -rotate-12" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--warning)]/20 text-[var(--warning)] font-bold text-sm mb-6 border border-[var(--warning)]/30">
              <Sparkles size={16} />
              <span>Under Construction</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight">
              Coming <span className="text-[var(--primary)]">Soon</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--foreground)]/70 font-medium mb-12 max-w-lg leading-relaxed">
              We are working hard behind the scenes to bring you the ultimate disaster response experience. Stay tuned!
            </p>

            <Link href="/">
              <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-2xl overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--danger)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ArrowLeft size={20} className="relative z-10 group-hover:-translate-x-1 transition-transform" />
                <span className="relative z-10">Return to Home</span>
              </button>
            </Link>
          </motion.div>

        </motion.div>
      </section>
    </main>
  );
}
