import React, { useState, useEffect } from 'react';
import { Droplet, Plus, Minus, CheckCircle } from 'lucide-react';

export const HydrationWidget: React.FC = () => {
  const [glasses, setGlasses] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('selfcare_hydration_glasses');
      return saved ? parseInt(saved, 10) : 4;
    } catch {
      return 4;
    }
  });

  const target = 8;

  useEffect(() => {
    try {
      localStorage.setItem('selfcare_hydration_glasses', glasses.toString());
    } catch {
      // ignore
    }
  }, [glasses]);

  const addGlass = () => {
    if (glasses < 16) setGlasses(glasses + 1);
  };

  const removeGlass = () => {
    if (glasses > 0) setGlasses(glasses - 1);
  };

  const percentage = Math.min(100, Math.round((glasses / target) * 100));

  return (
    <div
      id="hydration-widget"
      className="p-5 rounded-2xl bg-gradient-to-br from-sky-50/70 via-white to-teal-50/70 dark:from-slate-800 dark:via-slate-800/80 dark:to-sky-950/30 border border-sky-100 dark:border-sky-900/40 shadow-xs"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300">
            <Droplet className="w-4 h-4 fill-sky-600" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Daily Hydration Tracker
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Target: 8 glasses (~2.0 Liters)
            </p>
          </div>
        </div>

        <span className="text-xs font-bold text-sky-600 dark:text-sky-400">
          {percentage}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-sky-500 to-teal-500 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Interactive Glasses Row */}
      <div className="grid grid-cols-8 gap-1.5 mb-4">
        {Array.from({ length: target }).map((_, i) => {
          const isFilled = i < glasses;
          return (
            <button
              key={i}
              onClick={() => setGlasses(i + 1)}
              title={`Glass ${i + 1}`}
              className={`h-10 rounded-lg flex flex-col items-center justify-center transition-all ${
                isFilled
                  ? 'bg-sky-500 text-white shadow-xs scale-100'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 hover:bg-sky-100 dark:hover:bg-slate-600'
              }`}
            >
              <Droplet className={`w-4 h-4 ${isFilled ? 'fill-white' : ''}`} />
            </button>
          );
        })}
      </div>

      {/* Action Controls & Summary */}
      <div className="flex items-center justify-between pt-1">
        <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
          <span>{glasses} of {target} glasses</span>
          {glasses >= target && (
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-bold">
              <CheckCircle className="w-3.5 h-3.5" /> Goal met!
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            id="remove-glass-btn"
            onClick={removeGlass}
            disabled={glasses <= 0}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 disabled:opacity-40 transition"
            aria-label="Remove one glass"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            id="add-glass-btn"
            onClick={addGlass}
            className="p-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold transition shadow-xs"
            aria-label="Add one glass"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
