"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppBubble = () => {
  return (
    <motion.a
      href="https://wa.me/254768842000"
      target="_blank"
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      // Kept left-6 and full styling. Added z-[100] to ensure it is always on top.
      className="fixed bottom-6 left-6 z-[100] flex items-center gap-3 bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 p-2 pr-6 rounded-full shadow-2xl cursor-pointer group"
    >
      <div className="relative">
        <div className="bg-[#25D366] p-3 rounded-full text-white shadow-lg">
          <MessageCircle size={24} fill="currentColor" />
        </div>
        <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white dark:ring-zinc-900 animate-pulse" />
      </div>
      
      {/* Full wording kept for both Mobile and Desktop */}
      <div className="flex flex-col text-left">
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Ask us anything</span>
        <span className="text-sm font-black text-black dark:text-white">Chat with an Expert</span>
      </div>
    </motion.a>
  );
};

export default WhatsAppBubble;