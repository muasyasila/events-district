"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Instagram, Youtube, MessageCircle, Send, Ghost, 
  Mail, Video, Moon, Sun, Calendar, AtSign 
} from "lucide-react";

// Import our new boxes!
import SocialCard from "./components/SocialCard";
import WhatsAppBubble from "./components/WhatsAppBubble";
import WaitlistInput from "./components/WaitlistInput";
import ScrollingTicker from "./components/ScrollingTicker";
import BackgroundLayers from "./components/BackgroundLayers";
import TimeGreeting from "./components/TimeGreeting";
import Countdown from "./components/Countdown";

export default function ComingSoon() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center py-12 px-4 md:px-6 bg-transparent transition-colors duration-500">
      
      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-black/10 dark:border-white/10 shadow-lg cursor-pointer"
        >
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-zinc-600" />}
        </button>
      </div>

      {/* Logo */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black dark:bg-white border-[3px] border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(147,51,234,0.5)] mb-12"
      >
        <h1 className="text-white dark:text-black text-xl md:text-3xl font-black italic tracking-tighter uppercase">
          EVENTS DISTRICT
        </h1>
      </motion.div>

      <div className="w-screen mb-12">
        <ScrollingTicker />
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12 px-4 text-black dark:text-white">
        <TimeGreeting />
        
        <motion.h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12">
          COMING <br /> SOON
        </motion.h2>

        <Countdown />

        {/* Updated Booking Button - Now a real link */}
        <div className="mt-8 flex flex-col items-center">
          <motion.a 
            href="https://wa.me/254768842000?text=Hi%20Events%20District!%20I'm%20planning%20an%20event%20and%20would%20love%20to%20discuss%20some%20ideas."
            target="_blank"
            animate={{ 
              scale: [1, 1.05, 1], 
              boxShadow: ["0px 0px 0px rgba(147,51,234,0)", "0px 0px 20px rgba(147,51,234,0.3)", "0px 0px 0px rgba(147,51,234,0)"] 
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-6 cursor-pointer transition-all active:scale-95 shadow-lg"
          >
            <Calendar size={18} /> Planning an Event?
          </motion.a>
          
          <p className="text-zinc-500 dark:text-zinc-400 font-medium text-lg italic">
            Reach out via our socials below.
          </p>
        </div>
      </div>
      
      {/* Lead Generation */}
      <WaitlistInput />

      {/* Bento Grid - Luxury Monochrome Version */}
    
      <div className="max-w-xl w-full px-4">
        <div className="flex items-center justify-between mb-6">
          <span className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800" />
          <span className="px-4 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
            Connect
          </span>
          <span className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          <SocialCard href="#" icon={Instagram} hoverGlow="#E1306C" />
          <SocialCard href="#" icon={Video} hoverGlow="#00f2ea" />
          <SocialCard href="#" icon={MessageCircle} hoverGlow="#25D366" />
          <SocialCard href="#" icon={Ghost} hoverGlow="#FFFC00" />
          <SocialCard href="#" icon={AtSign} hoverGlow="#ffffff" />
          <SocialCard href="#" icon={Youtube} hoverGlow="#FF0000" />
          <SocialCard href="#" icon={Send} hoverGlow="#1877F2" />
          <SocialCard href="mailto:info@eventsdistrict.com" icon={Mail} hoverGlow="#9333ea" />
        </div>

        <p className="mt-8 text-center text-[10px] text-zinc-500 font-bold uppercase tracking-widest opacity-50">
          Private Events • Corporate • Luxury
        </p>
      </div>

      <footer className="mt-20 pb-10 text-[10px] font-bold tracking-[0.3em] uppercase opacity-30 dark:text-white text-black text-center">
        © 2026 Events District
      </footer>

      {/* Background & Extras */}
      <BackgroundLayers />
      <WhatsAppBubble />
    </main>
  );
}