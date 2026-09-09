import React from 'react';
import { LogOut, AlertTriangle } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const { t } = useApp();

  if (!isOpen) return null;

  return (
    <div
      id="logout-confirmation-modal"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-5 text-center">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 mx-auto flex items-center justify-center border border-rose-200 dark:border-rose-900">
          <LogOut className="w-7 h-7 stroke-[2.2]" />
        </div>

        {/* Content */}
        <div className="space-y-1.5">
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.logoutConfirmTitle}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {t.logoutConfirmMessage}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition cursor-pointer"
          >
            {t.btnCancel}
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 px-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 active:scale-[0.98] transition cursor-pointer"
          >
            {t.btnLogout}
          </button>
        </div>
      </div>
    </div>
  );
};
