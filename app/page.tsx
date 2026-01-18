"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Instagram, Youtube, MessageCircle, Send, Ghost, 
  Mail, Video, Moon, Sun, Calendar, AtSign 
} from "lucide-react";

// Updated SocialCard to accept a custom text color class
const SocialCard = ({ href, icon: Icon, label, bgColor, textColor = "text-white", className = "" }: any) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // This handles the "Magnetic" movement
  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * -20, y: x * 20 });
  };

  const onMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.a
      href={href}
      target="_blank"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      whileTap={{ scale: 0.95 }}
      style={{ perspective: 1000 }} // Important for 3D depth
      className={`flex flex-col items-center justify-center p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] ${bgColor} ${textColor} shadow-2xl transition-all border border-black/5 dark:border-white/10 ${className}`}
    >
      <motion.div
        animate={{ y: rotate.x * 0.5, x: rotate.y * 0.5 }} // Icon moves slightly with the tilt
      >
        <Icon size={32} strokeWidth={2.5} className={textColor} />
      </motion.div>
      <span className={`mt-3 font-black text-xs md:text-sm uppercase tracking-[0.2em] text-center ${textColor}`}>
        {label}
      </span>
    </motion.a>
  );
};

export default function ComingSoon() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center py-12 px-4 md:px-6 bg-transparent transition-colors duration-500">
      
      {/* 1. DARK MODE TOGGLE */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-black/10 dark:border-white/10 shadow-lg cursor-pointer"
        >
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-zinc-600" />}
        </button>
      </div>

      {/* 2. CENTERED LOGO - Adaptive Colors */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black dark:bg-white border-[3px] border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(147,51,234,0.5)] mb-12"
      >
        <h1 className="text-white dark:text-black text-xl md:text-3xl font-black italic tracking-tighter uppercase">
          EVENTS DISTRICT
        </h1>
      </motion.div>

      {/* 3. HERO TEXT */}
      <div className="text-center mb-16 px-4">
        <motion.h2 
          className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8 dark:text-white text-black"
        >
          COMING <br /> SOON
        </motion.h2>

        <motion.div 
  animate={{ 
    scale: [1, 1.05, 1],
    boxShadow: [
      "0px 0px 0px rgba(147, 51, 234, 0)", 
      "0px 0px 20px rgba(147, 51, 234, 0.5)", 
      "0px 0px 0px rgba(147, 51, 234, 0)"
    ] 
  }}
  transition={{ 
    duration: 2, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }}
  className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-4 cursor-default"
>
  <Calendar size={16} />
  Planning an Event?
</motion.div>
        <p className="text-zinc-500 dark:text-zinc-400 font-medium text-lg italic">
          Reach out via our socials below.
        </p>
      </div>

      {/* 4. RESPONSIVE BENTO GRID */}
      <div className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Instagram */}
        <div className="col-span-2">
          <SocialCard 
            href="#" 
            icon={Instagram} 
            label="Instagram" 
            bgColor="bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" 
          />
        </div>

        {/* TikTok - Forced White Content */}
        <SocialCard 
            href="#" 
            icon={Video} 
            label="TikTok" 
            bgColor="bg-zinc-950" 
            textColor="text-white!" 
        />

        <SocialCard 
            href="#" 
            icon={MessageCircle} 
            label="WhatsApp" 
            bgColor="bg-[#25D366]" 
        />
        
        <SocialCard 
            href="#" 
            icon={Ghost} 
            label="Snapchat" 
            bgColor="bg-[#FFFC00]" 
            textColor="text-black!" 
        />

        {/* Threads - Forced White Content */}
        <SocialCard 
            href="#" 
            icon={AtSign} 
            label="Threads" 
            bgColor="bg-zinc-900" 
            textColor="text-white!" 
        />

        <SocialCard 
            href="#" 
            icon={Youtube} 
            label="YouTube" 
            bgColor="bg-[#FF0000]" 
        />

        <SocialCard 
            href="#" 
            icon={Send} 
            label="Facebook" 
            bgColor="bg-[#1877F2]" 
        />

        {/* Email - FULL WIDTH ALWAYS */}
        <div className="col-span-2 md:col-span-4 mt-2">
          <SocialCard 
            href="mailto:info@eventsdistrict.com" 
            icon={Mail} 
            label="Get in Touch via Email" 
            bgColor="bg-zinc-100 dark:bg-zinc-800" 
            textColor="text-zinc-800! dark:text-white!" 
          />
        </div>
      </div>

      <footer className="mt-20 pb-10 text-[10px] font-bold tracking-[0.3em] uppercase opacity-30 dark:text-white text-black text-center">
        © 2026 Events District
      </footer>
      {/* Background Layer: Blobs and Grain */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-white dark:bg-[#0a0a0a]">
        {/* Top Left Purple Blob */}
        <motion.div
          animate={{
            x: [-40, 40, -40],
            y: [-40, 40, -40],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-purple-600/30 dark:bg-purple-900/40 rounded-full blur-[120px]"
        />

        {/* Bottom Right Blue Blob */}
        <motion.div
          animate={{
            x: [40, -40, 40],
            y: [40, -40, 40],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-blue-600/20 dark:bg-blue-900/30 rounded-full blur-[150px]"
        />

        {/* Film Grain Texture */}
       {/* Film Grain Texture Overlay */}
<div 
  className="fixed inset-0 z-[60] pointer-events-none opacity-[0.04] dark:opacity-[0.07] mix-blend-overlay"
  style={{ 
    backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
    filter: 'contrast(120%) brightness(120%)'
  }}
></div>
      </div>
    </main>
  );
}