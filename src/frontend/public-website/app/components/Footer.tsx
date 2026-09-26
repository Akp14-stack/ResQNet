"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldAlert, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "../i18n/i18nContext";

// Social SVG Components
const TwitterIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const FacebookIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function Footer() {
  const { t, language } = useTranslation();

  return (
    <footer className="bg-[var(--foreground)] text-[var(--background)] pt-16 pb-8 border-t border-[var(--primary)]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Identity */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="relative w-32 h-32 bg-white rounded-3xl p-3 shadow-lg hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/logo.svg" 
                  alt="ResQNet Logo" 
                  fill 
                  className="object-contain p-2"
                />
              </div>
            </Link>
            <p className="text-[var(--background)]/70 text-sm leading-relaxed mt-4">
              {t("footer_desc")}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--background)]/10 flex items-center justify-center hover:bg-[var(--warning)] hover:text-[var(--foreground)] transition-colors">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--background)]/10 flex items-center justify-center hover:bg-[var(--warning)] hover:text-[var(--foreground)] transition-colors">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--background)]/10 flex items-center justify-center hover:bg-[var(--warning)] hover:text-[var(--foreground)] transition-colors">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[var(--warning)]">{t("footer_quick_links")}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#disasters" className="text-[var(--background)]/70 hover:text-[var(--warning)] transition-colors text-sm">{t("nav_disasters")}</Link>
              </li>
              <li>
                <Link href="#guidelines" className="text-[var(--background)]/70 hover:text-[var(--warning)] transition-colors text-sm">{t("nav_guidelines")}</Link>
              </li>
              <li>
                <Link href="#about" className="text-[var(--background)]/70 hover:text-[var(--warning)] transition-colors text-sm">{t("nav_about")}</Link>
              </li>
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[var(--danger)]">
              {language === "hi" ? "आपातकालीन संपर्क" : language === "bn" ? "জরুরী যোগাযোগ" : "Emergency Contacts"}
            </h4>
            <ul className="space-y-4 text-sm text-[var(--background)]/70">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--danger)]" />
                <span>
                  {language === "hi" ? "राष्ट्रीय आपातकाल:" : language === "bn" ? "জাতীয় জরুরী:" : "National Emergency:"} <strong>112</strong>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--danger)]" />
                <span>
                  {language === "hi" ? "एम्बुलेंस:" : language === "bn" ? "অ্যাম্বুলেন্স:" : "Ambulance:"} <strong>102</strong>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--danger)]" />
                <span>
                  {language === "hi" ? "NDRF हेल्पलाइन:" : language === "bn" ? "NDRF হেল্পলাইন:" : "NDRF Helpline:"} <strong>9711077372</strong>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[var(--warning)]">{t("footer_contact")}</h4>
            <ul className="space-y-4 text-sm text-[var(--background)]/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[var(--warning)] mt-1 flex-shrink-0" />
                <span>{t("footer_address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--warning)] flex-shrink-0" />
                <a href="mailto:contactresqnet@gmail.com" className="hover:text-[var(--warning)] transition-colors">contactresqnet@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--warning)] flex-shrink-0" />
                <a href="tel:9883327593" className="hover:text-[var(--warning)] transition-colors">+91 9883327593</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--background)]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--background)]/50">
          <p>{t("footer_rights")}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[var(--warning)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--warning)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
