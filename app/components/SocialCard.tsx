"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SocialCard = ({ href, icon: Icon, label, hoverGlow, className = "" }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDarkMode(document.documentElement.classList.contains('dark'));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Custom Logic for specific problematic brands
  const getSmartColor = () => {
    if (!isHovered) return ''; // Return default (zinc-400) when not hovered

    if (label.toLowerCase().includes("snap")) {
      // Deep Gold for Light Mode, Bright Yellow for Dark Mode
      return isDarkMode ? "#FFFC00" : "#d4af37"; 
    }

    if (label.toLowerCase().includes("threads") || hoverGlow === "#ffffff") {
      // Pure White for Dark Mode, Deep Black for Light Mode
      return isDarkMode ? "#ffffff" : "#000000";
    }

    return hoverGlow; // Use original brand color for everything else
  };

  const activeColor = getSmartColor();

  return (
    <motion.a
      href={href}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -3 }}
      className={`flex flex-col items-center group transition-all duration-300 ${className}`}
    >
      <div 
        className="relative flex items-center justify-center aspect-square w-full rounded-xl 
          bg-zinc-100/80 dark:bg-zinc-900/50 
          border border-black/5 dark:border-white/10 
          transition-all duration-500 overflow-hidden mb-2 shadow-sm"
      >
        {/* Glow Background */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ backgroundColor: activeColor }}
        />

        <Icon 
          size={18} 
          strokeWidth={2.5} 
          className="relative z-10 text-zinc-400 transition-all duration-500"
          style={{ color: isHovered ? activeColor : '' }}
        />

        {/* Tiny arrow */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
          className="absolute bottom-1.5 right-1.5 z-20"
        >
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" 
               stroke={activeColor} 
               strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </motion.div>
      </div>

      <span 
        className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] transition-colors duration-500"
        style={{ color: isHovered ? activeColor : '#71717a' }}
      >
        {label}
      </span>
    </motion.a>
  );
};

export default SocialCard;