"use client";

import { motion, Variants } from "framer-motion";
import { Flame, Waves, Wind, Mountain, ArrowRight } from "lucide-react";
import { useTranslation } from "../i18n/i18nContext";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function DisasterCards() {
  const { t } = useTranslation();

  const disasters = [
    {
      id: "earthquake",
      title: t("disaster_earthquake"),
      description: t("disaster_earthquake_desc"),
      icon: Mountain,
      color: "var(--warning)",
    },
    {
      id: "flood",
      title: t("disaster_flood"),
      description: t("disaster_flood_desc"),
      icon: Waves,
      color: "#4A90E2",
    },
    {
      id: "cyclone",
      title: t("disaster_cyclone"),
      description: t("disaster_cyclone_desc"),
      icon: Wind,
      color: "var(--primary)",
    },
    {
      id: "fire",
      title: t("disaster_fire"),
      description: t("disaster_fire_desc"),
      icon: Flame,
      color: "var(--danger)",
    },
  ];

  return (
    <section id="disasters" className="w-full py-24 px-6 md:px-16 bg-[var(--foreground)] text-[var(--background)] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[var(--primary)] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[var(--warning)] rounded-full blur-[120px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {t("disaster_title")}
          </h2>
          <p className="text-lg md:text-xl text-[var(--background)]/80 max-w-2xl mx-auto">
            {t("disaster_subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {disasters.map((disaster) => (
            <motion.a
              href="#guidelines"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("setActiveDisaster", { detail: disaster.id }));
              }}
              key={disaster.id}
              variants={cardVariants}
              className="relative bg-[var(--background)]/5 backdrop-blur-xl border border-[var(--background)]/10 rounded-3xl p-8 flex flex-col items-start transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-[var(--background)]/20 overflow-hidden group cursor-pointer"
            >
              {/* Dynamic Glow Effect */}
              <div 
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: disaster.color }}
              />

              <div 
                className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{ backgroundColor: `${disaster.color}15`, color: disaster.color }}
              >
                <disaster.icon size={32} />
              </div>
              <h3 className="relative z-10 text-2xl font-extrabold mb-3">{disaster.title}</h3>
              <p className="relative z-10 text-[var(--background)]/70 mb-8 flex-grow leading-relaxed font-medium">
                {disaster.description}
              </p>
              
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold tracking-wider uppercase" style={{ color: disaster.color }}>
                <span>{t("btn_view_guidelines")}</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
