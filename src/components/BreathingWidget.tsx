import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Wind } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BreathingWidget: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale');
  const [countdown, setCountdown] = useState(4);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isActive) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev > 1) {
            return prev - 1;
          }

          // Cycle to next phase
          if (phase === 'Inhale') {
            setPhase('Hold');
            return 4;
          } else if (phase === 'Hold') {
            setPhase('Exhale');
            return 4;
          } else if (phase === 'Exhale') {
            setPhase('Rest');
            return 4;
          } else {
            setPhase('Inhale');
            setCyclesCompleted((c) => c + 1);
            return 4;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, phase]);

  const toggleBreathing = () => {
    setIsActive(!isActive);
  };

  const resetBreathing = () => {
    setIsActive(false);
    setPhase('Inhale');
    setCountdown(4);
    setCyclesCompleted(0);
  };

  const getPhaseColor = () => {
    switch (phase) {
      case 'Inhale':
        return 'from-teal-500 to-emerald-500';
      case 'Hold':
        return 'from-sky-500 to-indigo-500';
      case 'Exhale':
        return 'from-amber-500 to-rose-500';
      case 'Rest':
        return 'from-purple-500 to-teal-500';
    }
  };

  const getScale = () => {
    if (!isActive) return 1;
    switch (phase) {
      case 'Inhale':
        return 1.25;
      case 'Hold':
        return 1.25;
      case 'Exhale':
        return 0.85;
      case 'Rest':
        return 0.85;
    }
  };

  return (
    <div
      id="breathing-widget"
      className="p-5 rounded-2xl bg-gradient-to-br from-teal-50/70 via-white to-sky-50/70 dark:from-slate-800 dark:via-slate-800/80 dark:to-teal-950/30 border border-teal-100 dark:border-teal-900/40 shadow-xs"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300">
            <Wind className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Box Breathing Guide
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Calm nervous system • 4-4-4-4 technique
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 border border-slate-200 dark:border-slate-600">
          {cyclesCompleted} {cyclesCompleted === 1 ? 'cycle' : 'cycles'}
        </span>
      </div>

      {/* Visual Breathing Ring */}
      <div className="flex flex-col items-center justify-center my-4 py-2">
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Animated Ring */}
          <motion.div
            animate={{
              scale: getScale(),
            }}
            transition={{
              duration: 4,
              ease: 'easeInOut',
            }}
            className={`w-32 h-32 rounded-full bg-gradient-to-tr ${getPhaseColor()} opacity-25 blur-sm absolute`}
          />

          <motion.div
            animate={{
              scale: getScale(),
            }}
            transition={{
              duration: 4,
              ease: 'easeInOut',
            }}
            className={`w-28 h-28 rounded-full border-4 border-teal-500/80 dark:border-teal-400 flex flex-col items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs shadow-inner`}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              {isActive ? phase : 'Ready'}
            </span>
            <span className="text-2xl font-black text-teal-600 dark:text-teal-400">
              {isActive ? countdown : '4s'}
            </span>
          </motion.div>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center max-w-xs">
          {isActive ? (
            phase === 'Inhale' ? 'Breathe in slowly through your nose...' :
            phase === 'Hold' ? 'Gently hold your breath with relaxed shoulders...' :
            phase === 'Exhale' ? 'Exhale smoothly and slowly through your mouth...' :
            'Pause and rest before the next breath...'
          ) : (
            'Tap start to begin a 60-second vagus nerve relaxation rhythm.'
          )}
        </p>
      </div>

      {/* Action Controls */}
      <div className="flex items-center justify-center gap-3 pt-2">
        <button
          id="toggle-breathing-btn"
          onClick={toggleBreathing}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs shadow-xs transition active:scale-95 ${
            isActive
              ? 'bg-amber-500 hover:bg-amber-600 text-white'
              : 'bg-teal-600 hover:bg-teal-700 text-white'
          }`}
        >
          {isActive ? (
            <>
              <Pause className="w-3.5 h-3.5 fill-current" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Start Breathing</span>
            </>
          )}
        </button>

        <button
          id="reset-breathing-btn"
          onClick={resetBreathing}
          aria-label="Reset breathing"
          className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 transition"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
