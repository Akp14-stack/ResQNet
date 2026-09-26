"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Mountain, Waves, Wind, Flame, CheckCircle2, XCircle } from "lucide-react";
import AutoSlider from "./AutoSlider";
import { useTranslation } from "../i18n/i18nContext";

type Guideline = {
  id: string;
  title: string;
  icon: any;
  image: string | string[];
  dos: string[];
  donts: string[];
  specialNote?: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function DosAndDonts() {
  const { t, language } = useTranslation();

  const guidelines: Guideline[] = [
    {
      id: "flood",
      title: language === "hi" ? "बाढ़" : language === "bn" ? "বন্যা" : "Flood",
      icon: Waves,
      image: [
        "/images/flood.png",
        "/images/flood-2.png",
        "/images/flood-3.png"
      ],
      dos: language === "hi" ? [
        "ऊंचे और सुरक्षित स्थान पर जाएं।",
        "आधिकारिक चेतावनियों और निकासी निर्देशों का पालन करें।",
        "अपना फोन चार्ज रखें।",
        "एक आपातकालीन किट साथ रखें।",
        "पीने का पानी और जरूरी दवाएं रखें।",
        "परिवार के सदस्यों से जुड़े रहें।",
        "खतरे में होने पर SOS भेजें।",
        "बिजली के तारों और खंभों से दूर रहें।"
      ] : language === "bn" ? [
        "উঁচু এবং নিরাপদ স্থানে যান।",
        "সরকারি সতর্কতা এবং সরিয়ে নেওয়ার নির্দেশাবলী অনুসরণ করুন।",
        "আপনার ফোন চার্জ রাখুন।",
        "একটি জরুরি কিট সাথে রাখুন।",
        "পানীয় জল এবং প্রয়োজনীয় ওষুধ রাখুন।",
        "পরিবারের সদস্যদের সাথে সংযুক্ত থাকুন।",
        "বিপদে পড়লে SOS পাঠান।",
        "বৈদ্যুতিক তার এবং খুঁটি থেকে দূরে থাকুন।"
      ] : [
        "Move to higher and safer ground.",
        "Follow official warnings and evacuation instructions.",
        "Keep your phone charged.",
        "Carry an emergency kit.",
        "Keep drinking water and essential medicines.",
        "Stay connected with family members.",
        "Send an SOS if you are in danger.",
        "Stay away from electrical wires and poles.",
      ],
      donts: language === "hi" ? [
        "तेज बहते बाढ़ के पानी में पैदल या गाड़ी से न जाएं।",
        "गिरे हुए बिजली के तारों को न छुएं।",
        "गहरे या तेज बहते पानी में न उतरें।",
        "असत्यापित जानकारी न फैलाएं।"
      ] : language === "bn" ? [
        "প্রবল স্রোতের মধ্যে দিয়ে হাঁটবেন না বা গাড়ি চালাবেন না।",
        "পড়ে যাওয়া বৈদ্যুতিক তার স্পর্শ করবেন না।",
        "গভীর বা দ্রুত প্রবাহিত জলে প্রবেশ করবেন না।",
        "যাচাই না করা তথ্য ছড়াবেন না।"
      ] : [
        "Do not walk or drive through fast-moving floodwater.",
        "Do not touch fallen electrical wires.",
        "Do not enter deep or rapidly flowing water.",
        "Do not spread unverified information.",
      ],
    },
    {
      id: "cyclone",
      title: language === "hi" ? "चक्रवात" : language === "bn" ? "ঘূর্ণিঝড়" : "Cyclone",
      icon: Wind,
      image: [
        "/images/cyclone.png",
        "/images/cyclone-2.png",
        "/images/cyclone-3.png"
      ],
      dos: language === "hi" ? [
        "एक सुरक्षित क्षेत्र में घर के अंदर रहें।",
        "दरवाजे और खिड़कियां बंद और सुरक्षित करें।",
        "एक आपातकालीन किट तैयार रखें।",
        "आधिकारिक चक्रवात अलर्ट की निगरानी करें।",
        "अधिकारियों के निर्देश पर सुरक्षित स्थान पर जाएं।",
        "महत्वपूर्ण दस्तावेज और दवाएं सुरक्षित रखें।"
      ] : language === "bn" ? [
        "একটি নিরাপদ স্থানে বাড়ির ভিতরে থাকুন।",
        "দরজা এবং জানালা বন্ধ এবং সুরক্ষিত করুন।",
        "একটি জরুরি কিট প্রস্তুত রাখুন।",
        "সরকারি ঘূর্ণিঝড় সতর্কতা পর্যবেক্ষণ করুন।",
        "কর্তৃপক্ষের নির্দেশে নিরাপদ স্থানে সরে যান।",
        "গুরুত্বপূর্ণ কাগজপত্র এবং ওষুধ নিরাপদ রাখুন।"
      ] : [
        "Stay indoors in a safe area.",
        "Close and secure doors and windows.",
        "Keep an emergency kit ready.",
        "Monitor official cyclone alerts.",
        "Evacuate when authorities instruct you to do so.",
        "Keep important documents and medicines safe.",
      ],
      donts: language === "hi" ? [
        "गंभीर स्थिति के दौरान बाहर न जाएं।",
        "खिड़कियों के पास न रहें।",
        "समुद्र, नदी या तटीय क्षेत्रों के पास न जाएं।",
        "अफवाहें न फैलाएं।",
        "निकासी आदेशों की अनदेखी न करें।"
      ] : language === "bn" ? [
        "প্রবল ঝড়ের সময় বাইরে যাবেন না।",
        "জানালার কাছে থাকবেন না।",
        "সমুদ্র, নদী বা উপকূলীয় অঞ্চলের কাছাকাছি যাবেন না।",
        "গুজব ছড়াবেন না।",
        "সরে যাওয়ার নির্দেশ উপেক্ষা করবেন না।"
      ] : [
        "Do not go outside during severe conditions.",
        "Do not stay near windows.",
        "Do not go near the sea, rivers, or coastal areas.",
        "Do not spread rumors.",
        "Do not ignore evacuation orders.",
      ],
    },
    {
      id: "earthquake",
      title: language === "hi" ? "भूकंप" : language === "bn" ? "ভূমিকম্প" : "Earthquake",
      icon: Mountain,
      image: [
        "/images/slider-1.png", 
        "/images/slider-2.png", 
        "/images/slider-3.png", 
        "/images/slider-4.png"
      ],
      specialNote: language === "hi" ? "याद रखें: झुकें → ढकें → पकड़ें" : language === "bn" ? "মনে রাখবেন: ঝুঁকুন → ঢাকুন → ধরে রাখুন" : "Remember: DROP → COVER → HOLD",
      dos: language === "hi" ? [
        "1. जमीन पर झुकें।",
        "2. किसी मजबूत मेज या डेस्क के नीचे शरण लें।",
        "3. अपने सिर और गर्दन की रक्षा करें।",
        "4. झटके रुकने तक पकड़े रहें।",
        "5. यदि बाहर हैं, तो इमारतों, खंभों और पेड़ों से दूर रहें।"
      ] : language === "bn" ? [
        "১. মাটিতে বসে পড়ুন।",
        "২. একটি শক্ত টেবিল বা ডেস্কের নিচে আশ্রয় নিন।",
        "৩. আপনার মাথা এবং ঘাড় রক্ষা করুন।",
        "৪. কম্পন না থামা পর্যন্ত শক্ত করে ধরে রাখুন।",
        "৫. বাইরে থাকলে বিল্ডিং, খুঁটি এবং গাছ থেকে দূরে থাকুন।"
      ] : [
        "1. Drop to the ground.",
        "2. Take cover under a strong table or desk.",
        "3. Protect your head and neck.",
        "4. Hold on until the shaking stops.",
        "5. If outdoors, stay away from buildings, poles and trees.",
      ],
      donts: language === "hi" ? [
        "लिफ्ट का प्रयोग न करें।",
        "खिड़कियों के पास खड़े न हों।",
        "झटके के दौरान बाहर न भागें।",
        "क्षतिग्रस्त इमारतों में प्रवेश न करें।",
        "घबराएं नहीं।"
      ] : language === "bn" ? [
        "লিফট ব্যবহার করবেন না।",
        "জানালার কাছে দাঁড়াবেন না।",
        "কম্পনের সময় বাইরে দৌড়াবেন না।",
        "ক্ষতিগ্রস্ত ভবনে প্রবেশ করবেন না।",
        "আতঙ্কিত হবেন না।"
      ] : [
        "Do not use elevators.",
        "Do not stand near windows.",
        "Do not run outside during the shaking.",
        "Do not enter damaged buildings.",
        "Do not panic.",
      ],
    },
    {
      id: "fire",
      title: language === "hi" ? "आग" : language === "bn" ? "আগুন" : "Fire",
      icon: Flame,
      image: [
        "/images/fire.png",
        "/images/fire-2.png"
      ],
      dos: language === "hi" ? [
        "सुरक्षित निकास का उपयोग करके इमारत से बाहर निकलें।",
        "यदि भारी धुआं हो तो नीचे रहें।",
        "आसपास के अन्य लोगों को सचेत करें।",
        "आपातकालीन निर्देशों का पालन करें।",
        "निर्धारित अग्नि निकास का उपयोग करें।"
      ] : language === "bn" ? [
        "একটি নিরাপদ প্রস্থান ব্যবহার করে ভবনটি ছেড়ে যান।",
        "প্রচুর ধোঁয়া থাকলে নিচু হয়ে থাকুন।",
        "আশেপাশের অন্যান্য লোকেদের সতর্ক করুন।",
        "জরুরী নির্দেশাবলী অনুসরণ করুন।",
        "নির্ধারিত ফায়ার এক্সিট ব্যবহার করুন।"
      ] : [
        "Leave the building using a safe exit.",
        "Stay low if there is heavy smoke.",
        "Alert other people nearby.",
        "Follow emergency instructions.",
        "Use designated fire exits.",
      ],
      donts: language === "hi" ? [
        "लिफ्ट का प्रयोग न करें।",
        "जलती हुई इमारत में वापस न जाएं।",
        "अनावश्यक रूप से भारी धुएं से न गुजरें।",
        "स्वयं एक बड़ी आग से लड़ने का प्रयास न करें।"
      ] : language === "bn" ? [
        "লিফট ব্যবহার করবেন না।",
        "জ্বলন্ত ভবনে ফিরে যাবেন না।",
        "অপ্রয়োজনীয়ভাবে ভারী ধোঁয়ার মধ্য দিয়ে যাবেন না।",
        "নিজে একটি বড় আগুন নেভানোর চেষ্টা করবেন না।"
      ] : [
        "Do not use elevators.",
        "Do not go back into a burning building.",
        "Do not move heavy smoke unnecessarily.",
        "Do not attempt to fight a large fire yourself.",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(guidelines[0].id);

  useEffect(() => {
    const handleSetDisaster = (e: any) => {
      if (e.detail) {
        setActiveTab(e.detail);
      }
    };
    window.addEventListener("setActiveDisaster", handleSetDisaster);
    return () => window.removeEventListener("setActiveDisaster", handleSetDisaster);
  }, []);

  const activeData = guidelines.find((g) => g.id === activeTab) || guidelines[0];

  return (
    <section id="guidelines" className="w-full py-24 px-6 md:px-16 bg-[var(--background)] text-[var(--foreground)] relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {t("guide_title")} <span className="text-[var(--danger)]">{t("guide_title_highlight")}</span>
          </h2>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            {t("guide_subtitle")}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Tabs */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {guidelines.map((disaster) => {
              const isActive = activeTab === disaster.id;
              const Icon = disaster.icon;
              return (
                  <button
                  key={disaster.id}
                  onClick={() => setActiveTab(disaster.id)}
                  className={`relative flex items-center gap-4 p-5 rounded-3xl transition-all duration-500 text-left min-w-[200px] lg:min-w-0 overflow-hidden group ${
                    isActive
                      ? "bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/80 text-[var(--background)] shadow-[0_10px_30px_rgba(var(--primary-rgb),0.4)] scale-105 border border-[var(--primary)]/50"
                      : "bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 text-[var(--foreground)] hover:-translate-y-1 hover:shadow-lg border border-[var(--foreground)]/5"
                  }`}
                >
                  {isActive && (
                    <motion.div layoutId="activeTabIndicator" className="absolute inset-0 bg-white/10 mix-blend-overlay"></motion.div>
                  )}
                  <div className={`p-3 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${isActive ? "bg-[var(--background)]/20 shadow-inner" : "bg-[var(--foreground)]/10"}`}>
                    <Icon size={28} className={isActive ? "text-[var(--background)]" : "text-[var(--primary)]"} />
                  </div>
                  <span className="font-extrabold text-lg tracking-wide z-10">{disaster.title}</span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-8"
              >
                {/* Stunning Hero Image for Disaster */}
                <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl group border border-[var(--primary)]/20">
                  {Array.isArray(activeData.image) ? (
                    <AutoSlider images={activeData.image} interval={4000} />
                  ) : (
                    <Image 
                      src={activeData.image} 
                      alt={`${activeData.title} safety`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent flex flex-col justify-end p-8 z-20 pointer-events-none">
                    <h3 className="text-3xl font-extrabold text-[var(--foreground)]">
                      {activeData.title} {language === "hi" ? "सुरक्षा प्रोटोकॉल" : language === "bn" ? "নিরাপত্তা প্রোটোকল" : "Safety Protocol"}
                    </h3>
                    <p className="text-[var(--foreground)]/80 mt-2 font-medium">
                      {language === "hi" ? "आपात स्थिति के दौरान इन महत्वपूर्ण निर्देशों का पालन करें।" : language === "bn" ? "জরুরী পরিস্থিতিতে এই গুরুত্বপূর্ণ নির্দেশাবলী অনুসরণ করুন।" : "Follow these critical instructions during an emergency."}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Do's Column */}
                  <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-6">
                      <CheckCircle2 size={32} className="text-[var(--primary)]" />
                      <h3 className="text-3xl font-bold text-[var(--primary)]">{t("guide_what_to_do")}</h3>
                    </div>
                    
                    {activeData.specialNote && (
                      <div className="mb-6 p-4 rounded-xl bg-[var(--primary)] text-[var(--background)] font-bold text-lg border border-[var(--primary)]/30 shadow-md">
                        {activeData.specialNote}
                      </div>
                    )}

                    <motion.ul
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-4"
                    >
                      {activeData.dos.map((item, index) => (
                        <motion.li key={index} variants={itemVariants} className="flex gap-4">
                          <div className="min-w-[8px] h-[8px] rounded-full bg-[var(--primary)] mt-2 shadow-[0_0_8px_var(--color-primary)]" />
                          <p className="text-lg opacity-90 leading-relaxed font-medium">{item}</p>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* Don'ts Column */}
                  <div className="bg-[var(--danger)]/10 border border-[var(--danger)]/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-6">
                      <XCircle size={32} className="text-[var(--danger)]" />
                      <h3 className="text-3xl font-bold text-[var(--danger)]">{t("guide_what_not_to_do")}</h3>
                    </div>
                    <motion.ul
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-4"
                    >
                      {activeData.donts.map((item, index) => (
                        <motion.li key={index} variants={itemVariants} className="flex gap-4">
                          <div className="min-w-[8px] h-[8px] rounded-full bg-[var(--danger)] mt-2 shadow-[0_0_8px_var(--color-danger)]" />
                          <p className="text-lg opacity-90 leading-relaxed font-medium">{item}</p>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
