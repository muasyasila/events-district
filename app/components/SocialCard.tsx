"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const SocialCard = ({ href, icon: Icon, hoverGlow, className = "" }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
      className={`relative group flex items-center justify-center aspect-square w-full rounded-2xl 
        bg-zinc-50 dark:bg-zinc-900/50 
        border border-black/5 dark:border-white/10 
        transition-all duration-500 overflow-hidden ${className}`}
    >
      {/* Background Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ backgroundColor: hoverGlow }}
      />

      <Icon 
        size={20} 
        strokeWidth={1.5} 
        className="text-zinc-400 group-hover:scale-110 transition-all duration-500"
        style={{ color: isHovered ? hoverGlow : '' }}
      />
      
      {/* Tiny corner dot that glows */}
      <div 
        className="absolute top-2 right-2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: hoverGlow, boxShadow: `0 0 8px ${hoverGlow}` }}
      />
    </motion.a>
  );
};

export default SocialCard;