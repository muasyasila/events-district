"use client";
import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// This part only re-animates if the 'value' actually changes
const TimeUnit = memo(({ value, label }: { value: number, label: string }) => {
  return (
    <div className="flex flex-col items-center w-20 md:w-28 h-20 md:h-24 justify-center">
      <div className="relative h-10 md:h-14 w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 40,
              duration: 0.2 
            }}
            className="absolute text-3xl md:text-5xl font-black tabular-nums tracking-tighter text-black dark:text-white"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-purple-600 mt-2">
        {label}
      </span>
    </div>
  );
});

// Set display name for memoized component
TimeUnit.displayName = "TimeUnit";

const Countdown = () => {
  const targetDate = new Date("2026-03-01T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center divide-x divide-purple-500/10 mb-16">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <TimeUnit value={timeLeft.seconds} label="Sec" />
    </div>
  );
};

export default Countdown;