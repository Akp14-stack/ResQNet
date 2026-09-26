"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Users, HeartPulse, Globe, Smartphone, HeartHandshake, BellRing, Map, ShieldCheck, ArrowRight, Download } from "lucide-react";
import AutoSlider from "./AutoSlider";
import Link from "next/link";
import { useTranslation } from "../i18n/i18nContext";

export default function AboutUs() {
  const { t, language } = useTranslation();

  const stats = [
    { label: t("about_stats_ngos"), value: "250+", icon: Users },
    { label: t("about_stats_zones"), value: "12,000+", icon: Globe },
    { label: t("about_stats_lives"), value: "2.5M+", icon: HeartPulse },
  ];

  return (
    <section id="connect" className="w-full py-24 px-6 md:px-16 bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden">
      
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[var(--danger)]/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">
        
        {/* Top Section: About Mission & Stats */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="text-[var(--primary)]" size={40} />
                <h2 className="text-4xl md:text-6xl font-extrabold">
                  {t("about_title")} <span className="text-[var(--primary)]">ResQNet</span>
                </h2>
              </div>
              
              <p className="text-lg opacity-80 leading-relaxed mb-6 font-medium text-justify">
                {t("about_desc_1")}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all group shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                  >
                    <stat.icon size={28} className="mb-3 text-[var(--primary)] group-hover:text-[var(--background)] transition-colors" />
                    <h4 className="text-3xl font-extrabold mb-1">{stat.value}</h4>
                    <span className="text-xs font-bold opacity-80 uppercase tracking-wider">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visuals Slider */}
          <div className="w-full lg:w-1/2 relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-[var(--primary)]/20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-full relative"
            >
              <div className="absolute inset-0 bg-[var(--primary)]/10 mix-blend-multiply z-10"></div>
              <AutoSlider 
                images={["/images/slider-3.png", "/images/flood-3.png", "/images/cyclone-3.png", "/images/fire-2.png"]} 
                interval={4000} 
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 bg-gradient-to-t from-[var(--foreground)]/90 via-[var(--foreground)]/40 to-transparent pointer-events-none">
                <h3 className="text-3xl font-extrabold text-[var(--background)] mb-3">Together We Can Save Lives</h3>
                <p className="text-[var(--background)]/90 text-base font-medium max-w-md">
                  Our global network of volunteers and professionals works around the clock to ensure safety protocols are followed worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--foreground)]/10 to-transparent"></div>

        {/* Bottom Section: Connect & Collaborate Cards */}
        <div className="flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mb-6"
            >
              {t("connect_title")} <span className="text-[var(--primary)]">{t("connect_title_highlight")}</span>
            </motion.h2>
            <p className="text-lg text-[var(--foreground)]/70 font-medium">
              {t("connect_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* NGO Connect Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--foreground)] text-[var(--background)] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-all duration-500 border border-[var(--foreground)]/20"
            >
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-[var(--primary)] rounded-full blur-[100px] opacity-20 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-[var(--primary)]/20 flex items-center justify-center mb-8 border border-[var(--primary)]/40 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <HeartHandshake className="text-[var(--primary)] w-10 h-10" />
                </div>
                <h3 className="text-3xl font-extrabold mb-4">{t("ngo_card_title")}</h3>
                <p className="text-[var(--background)]/80 leading-relaxed mb-8 font-medium">
                  {t("ngo_card_desc")}
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 font-medium">
                    <ShieldCheck className="text-[var(--primary)] w-5 h-5 flex-shrink-0" />
                    <span>{t("ngo_card_f1")}</span>
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <Users className="text-[var(--primary)] w-5 h-5 flex-shrink-0" />
                    <span>{t("ngo_card_f2")}</span>
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <Map className="text-[var(--primary)] w-5 h-5 flex-shrink-0" />
                    <span>{t("ngo_card_f3")}</span>
                  </li>
                </ul>
                
                <Link href="/coming-soon" className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-extrabold rounded-full overflow-hidden transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.8)] w-full sm:w-auto">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative z-10">{t("btn_go_ngo_portal")}</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Citizen App Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[var(--primary)] to-[#4a5528] text-[var(--background)] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group shadow-[0_20px_50px_rgba(var(--primary-rgb),0.3)] hover:-translate-y-2 transition-all duration-500 border border-[var(--primary)]/50"
            >
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[var(--foreground)] rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-20 h-20 rounded-3xl bg-[var(--background)]/20 flex items-center justify-center mb-8 border border-[var(--background)]/30 backdrop-blur-md shadow-inner group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                  <Smartphone className="text-[var(--background)] w-10 h-10" />
                </div>
                <h3 className="text-3xl font-extrabold mb-4">{t("citizen_card_title")}</h3>
                <p className="text-[var(--background)]/90 leading-relaxed mb-8 font-medium">
                  {t("citizen_card_desc")}
                </p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3 font-medium">
                    <BellRing className="text-[var(--background)] w-5 h-5 flex-shrink-0" />
                    <span>{t("citizen_card_f1")}</span>
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <Map className="text-[var(--background)] w-5 h-5 flex-shrink-0" />
                    <span>{t("citizen_card_f2")}</span>
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <HeartHandshake className="text-[var(--background)] w-5 h-5 flex-shrink-0" />
                    <span>{t("citizen_card_f3")}</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/coming-soon" className="flex-1 group/btn relative inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--foreground)] text-[var(--background)] font-extrabold rounded-2xl overflow-hidden transition-transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <Download className="w-5 h-5 relative z-10 group-hover/btn:-translate-y-1 transition-transform" />
                    <span className="relative z-10">{language === "hi" ? "ऐप स्टोर" : language === "bn" ? "অ্যাপ স্টোর" : "App Store"}</span>
                  </Link>
                  <Link href="/coming-soon" className="flex-1 group/btn relative inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--foreground)] text-[var(--background)] font-extrabold rounded-2xl overflow-hidden transition-transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <Download className="w-5 h-5 relative z-10 group-hover/btn:-translate-y-1 transition-transform" />
                    <span className="relative z-10">{language === "hi" ? "गूगल प्ले" : language === "bn" ? "গুগল প্লে" : "Google Play"}</span>
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
