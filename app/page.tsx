"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  MessageCircle, Mail, Moon, Sun, Calendar, AtSign,
  Youtube, Facebook, Ghost 
} from "lucide-react";

// Components
import SocialCard from "./components/SocialCard";
import WhatsAppBubble from "./components/WhatsAppBubble";
import ScrollingTicker from "./components/ScrollingTicker";
import BackgroundLayers from "./components/BackgroundLayers";
import TimeGreeting from "./components/TimeGreeting";
import Countdown from "./components/Countdown";
import { FacebookIcon, TikTokIcon, SnapchatIcon, InstagramIcon } from "./components/BrandIcons";

export default function ComingSoon() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center py-6 px-4 md:px-6 bg-transparent transition-colors duration-500 overflow-x-hidden">
      
      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-black/10 dark:border-white/10 shadow-lg cursor-pointer transition-transform hover:scale-110 active:scale-95"
        >
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-zinc-600" />}
        </button>
      </div>

      {/* Logo */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black dark:bg-white border-[3px] border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(147,51,234,0.5)] mb-6"
      >
        <h1 className="text-white dark:text-black text-xl md:text-3xl font-black italic tracking-tighter uppercase">
          EVENTS DISTRICT
        </h1>
      </motion.div>

      <div className="w-screen mb-6">
        <ScrollingTicker />
      </div>

      {/* --- HERO SECTION --- */}
      <div className="text-center mb-4 px-4 text-black dark:text-white flex flex-col items-center">
        <TimeGreeting />
        
        <div className="relative mt-2 mb-6 px-6">
          {/* 1. Base Layer */}
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic text-zinc-800/20 dark:text-white/10 select-none">
            COMING <br /> SOON
          </h2>

          {/* 2. Shine Layer (Metallic Beam) */}
          <motion.h2 
            className="absolute inset-0 text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic pointer-events-none select-none px-6"
            style={{
              backgroundImage: 'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.9) 50%, transparent 60%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              backgroundSize: '250% 100%',
            }}
            animate={{
              backgroundPosition: ['120% 0%', '-120% 0%', '120% 0%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            COMING <br /> SOON
          </motion.h2>

          {/* 3. Highlight Layer */}
          <motion.h2 
            className="absolute inset-0 text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic text-black dark:text-white pointer-events-none select-none px-6"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 40%, black 60%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%, black 60%, transparent)',
              maskSize: '200% 100%',
              WebkitMaskSize: '200% 100%',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
            } as any}
            animate={{
              maskPosition: ['150% 0%', '-100% 0%', '150% 0%'],
              WebkitMaskPosition: ['150% 0%', '-100% 0%', '150% 0%'],
            } as any}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            COMING <br /> SOON
          </motion.h2>
        </div>

        <Countdown />

        {/* --- TIGHTER GAP HERE (mt-4) --- */}
        <div className="mt-4 flex flex-col items-center">
          <motion.a 
            href="https://wa.me/254768842000"
            target="_blank"
            animate={{ 
              scale: [1, 1.05, 1], 
              boxShadow: [
                "0px 0px 0px rgba(147,51,234,0)", 
                "0px 0px 25px rgba(147,51,234,0.4)", 
                "0px 0px 0px rgba(147,51,234,0)"
              ] 
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-3 cursor-pointer transition-all active:scale-95 shadow-lg"
          >
            <Calendar size={18} /> Planning an Event?
          </motion.a>

          <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm md:text-base italic whitespace-normal md:whitespace-nowrap mb-4">
            Click above or reach out via our socials below.
          </p>
        </div>
      </div>

      {/* Social Grid */}
      <div className="max-w-2xl w-full px-4 mb-4">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-x-4 gap-y-4">
          <SocialCard href="https://www.instagram.com/events_district254" icon={InstagramIcon} label="Instagram" hoverGlow="#E1306C" />
          <SocialCard href="https://www.tiktok.com/@muasya_sila" icon={TikTokIcon} label="Tiktok" hoverGlow="#25F4EE" />
          <SocialCard href="https://www.facebook.com/share/16xwfXhRBx/" icon={FacebookIcon} label="Facebook" hoverGlow="#1877F2" />
          <SocialCard href="https://www.threads.net/@events_district254" icon={AtSign} label="Threads" hoverGlow="#ffffff" />
          <SocialCard href="https://www.snapchat.com/add/khatis4" icon={SnapchatIcon} label="Snapchat" hoverGlow="#FFFC00" />
          <SocialCard href="https://youtube.com/@eventsdistrict" icon={Youtube} label="Youtube" hoverGlow="#FF0000" />
          <SocialCard href="https://wa.me/254768842000" icon={MessageCircle} label="Whatsapp" hoverGlow="#25D366" />
          <SocialCard href="mailto:eventsdistrictkenya@gmail.com" icon={Mail} label="Email" hoverGlow="#9333ea" />
        </div>
      </div>

      <footer className="mt-auto pb-6 text-[10px] font-bold tracking-[0.3em] uppercase opacity-30 dark:text-white text-black text-center">
        © 2026 Events District
      </footer>

      <BackgroundLayers />
      <WhatsAppBubble />
    </main>
  );
}