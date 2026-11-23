import React, { useEffect } from 'react';
import { ArrowLeft, X } from 'lucide-react';

interface PanelShellProps {
  title: string;
  subtitle?: string;
  onClose: () => void;
  variant?: 'warm' | 'investigative';
  maxWidthClass?: string;
  children: React.ReactNode;
}

export const PanelShell: React.FC<PanelShellProps> = ({
  title,
  subtitle,
  onClose,
  variant = 'warm',
  maxWidthClass = 'max-w-3xl',
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const isDark = variant === 'investigative';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6 bg-[#1C1613]/75"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={`w-full ${maxWidthClass} max-h-[90vh] sm:max-h-[86vh] flex flex-col animate-room-enter ${
          isDark
            ? 'bg-[#1F1A18] text-[#F2E5D3] pixel-frame-dark'
            : 'bg-[#F2E5D3] text-[#382D29] pixel-frame'
        }`}
      >
        {/* Top Panel Bar */}
        <div
          className={`flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5 border-b-2 ${
            isDark
              ? 'bg-[#2A221F] border-[#594438]'
              : 'bg-[#E6D4BC] border-[#382D29]'
          }`}
        >
          <div className="min-w-0">
            <h2
              className={`font-pixel text-sm sm:text-base truncate ${
                isDark ? 'text-[#D7AF67]' : 'text-[#382D29]'
              }`}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className={`text-xs truncate mt-0.5 ${
                  isDark ? 'text-[#D6BFA5]' : 'text-[#594438]'
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                isDark
                  ? 'bg-[#382D29] text-[#F2E5D3] border border-[#594438] hover:bg-[#4B3B35]'
                  : 'bg-[#F2E5D3] text-[#382D29] pixel-btn'
              }`}
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Back to Room</span>
              <span className="sm:hidden">Back</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close panel"
              className={`p-1.5 cursor-pointer transition-colors ${
                isDark
                  ? 'text-[#D6BFA5] hover:text-[#F2E5D3]'
                  : 'text-[#594438] hover:text-[#382D29]'
              }`}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          className={`flex-1 overflow-y-auto p-5 sm:p-7 ${
            isDark ? 'panel-scroll-dark' : 'panel-scroll'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
