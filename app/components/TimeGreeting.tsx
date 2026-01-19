"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TimeGreeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      const city = "NAIROBI"; 
      
      if (hour < 12) {
        return `GOOD MORNING, WELCOME. THE DAY IS YOURS. WE ARE CRAFTING YOUR NEXT BIG MOMENT IN ${city}.`;
      }
      if (hour < 18) {
        return `GOOD AFTERNOON. YOUR VISION IS OUR BLUEPRINT. THE BEST OF ${city} IS YET TO COME.`;
      }
      if (hour < 23) {
        return `GOOD EVENING. STEP INSIDE. WE’RE DESIGNING AN EXTRAORDINARY NIGHT FOR YOU.`;
      }
      return `MIDNIGHT IN ${city}. WHILE YOU RELAX, WE BUILD THE IMPOSSIBLE.`;
    };

    setGreeting(getGreeting());
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="flex items-center justify-center gap-4 mb-10 px-4"
    >
      {/* Subtle lines to frame the greeting */}
      <span className="h-[1px] w-4 md:w-10 bg-purple-500/30" />
      
      <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 text-center leading-loose max-w-[280px] md:max-w-none">
        {greeting}
      </p>
      
      <span className="h-[1px] w-4 md:w-10 bg-purple-500/30" />
    </motion.div>
  );
};

export default TimeGreeting;