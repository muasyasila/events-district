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

  const getSmartColor = () => {
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes("snap")) return isDarkMode ? "#FFFC00" : "#d4af37";
    if (lowerLabel.includes("threads") || hoverGlow === "#ffffff") return isDarkMode ? "#ffffff" : "#000000";
    if (lowerLabel.includes("tiktok")) return "#25F4EE"; 
    return hoverGlow;
  };

  const activeColor = getSmartColor();

  return (
    <motion.a
      href={href}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`flex flex-col items-center group cursor-pointer ${className}`}
    >
      <div 
        className="relative flex items-center justify-center aspect-square w-full rounded-2xl 
          bg-white dark:bg-zinc-900/80 
          border-2 transition-all duration-300 mb-3 overflow-hidden"
        style={{ 
          borderColor: isHovered ? activeColor : (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'),
          boxShadow: isHovered ? `0 10px 30px -10px ${activeColor}66` : 'none'
        }}
      >
        <Icon 
          size={22} 
          strokeWidth={1.5} 
          className="relative z-10 transition-colors duration-300"
          style={{ 
            // NO FILL - We strictly use color for the stroke/outline
            fill: "none", 
            color: isHovered 
              ? activeColor 
              : (isDarkMode ? '#a1a1aa' : '#27272a'), // Deep Zinc-800 for Light Mode visibility
          }}
        />
      </div>

      <span 
        className="text-[8px] font-black uppercase tracking-[0.25em] transition-all duration-300"
        style={{ 
          color: isHovered ? activeColor : (isDarkMode ? '#71717a' : '#3f3f46'),
        }}
      >
        {label}
      </span>
    </motion.a>
  );
};

export default SocialCard;