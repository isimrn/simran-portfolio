import React, { useState } from 'react';
import { Check, Copy, ExternalLink, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { PanelShell } from './PanelShell';

interface ContactPanelProps {
  onClose: () => void;
}

export const ContactPanel: React.FC<ContactPanelProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback if restricted
      setCopied(false);
    }
  };

  const handleOpenEmailDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      senderName.trim()
        ? `Hello Simran — from ${senderName.trim()}`
        : 'Hello Simran — Portfolio Inquiry',
    );
    const body = encodeURIComponent(message.trim() || 'Hi Simran,\n\nI came across your portfolio...');
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <PanelShell
      title="Open Letter — Contact"
      subtitle="Direct ways to get in touch"
      onClose={onClose}
    >
      <div className="space-y-6">
        {/* Letter Header */}
        <div className="bg-[#FAF1E4] border-2 border-[#382D29] p-5 sm:p-6">
          <h3 className="font-pixel text-lg sm:text-xl text-[#382D29] text-balance">
            Let&apos;s build something interesting.
          </h3>
          <p className="mt-2 text-sm text-[#594438] leading-relaxed">
            I&apos;m always interested in learning, collaborating, and exploring meaningful ideas.
          </p>

          {/* Direct Verified Channels */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#F2E5D3] border-2 border-[#382D29] p-3.5 flex items-center justify-between gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2.5 min-w-0 text-sm font-medium text-[#382D29] hover:text-[#A87955] transition-colors"
              >
                <Mail size={16} className="shrink-0 text-[#A87955]" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="px-2 py-1 text-[11px] font-medium bg-[#FAF1E4] text-[#382D29] border border-[#382D29] hover:bg-[#D7AF67] transition-colors shrink-0 inline-flex items-center gap-1 cursor-pointer"
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <a
              href={PERSONAL_INFO.phoneHref}
              className="bg-[#F2E5D3] border-2 border-[#382D29] p-3.5 flex items-center gap-2.5 text-sm font-medium text-[#382D29] hover:bg-[#EAD9C2] transition-colors"
            >
              <Phone size={16} className="shrink-0 text-[#A87955]" />
              <span className="font-mono tabular-nums">{PERSONAL_INFO.phone}</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F2E5D3] border-2 border-[#382D29] p-3.5 flex items-center justify-between gap-2 text-sm font-medium text-[#382D29] hover:bg-[#EAD9C2] transition-colors"
            >
              <span>GitHub · @isimrn</span>
              <ExternalLink size={15} className="shrink-0 text-[#594438]" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F2E5D3] border-2 border-[#382D29] p-3.5 flex items-center justify-between gap-2 text-sm font-medium text-[#382D29] hover:bg-[#EAD9C2] transition-colors"
            >
              <span>LinkedIn · Simran Rana</span>
              <ExternalLink size={15} className="shrink-0 text-[#594438]" />
            </a>
          </div>
        </div>

        {/* Frontend-Only Email Draft Composer */}
        <form
          onSubmit={handleOpenEmailDraft}
          className="bg-[#EAD9C2] border-2 border-[#382D29] p-5 space-y-3"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="font-pixel text-xs text-[#382D29]">
              Draft a Quick Email
            </h4>
            <span className="text-[11px] text-[#594438]">
              Frontend-only · opens your default email app
            </span>
          </div>

          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-medium text-[#382D29] mb-1"
            >
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="e.g. Ananya"
              className="w-full px-3 py-2 text-sm bg-[#FAF1E4] border-2 border-[#382D29] text-[#382D29] placeholder:text-[#A87955]/70 focus:outline-none focus:ring-2 focus:ring-[#D7AF67]"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-medium text-[#382D29] mb-1"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about an opportunity, project, or idea..."
              className="w-full px-3 py-2 text-sm bg-[#FAF1E4] border-2 border-[#382D29] text-[#382D29] placeholder:text-[#A87955]/70 focus:outline-none focus:ring-2 focus:ring-[#D7AF67]"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-[#D7AF67] hover:bg-[#E2BE7C] text-[#382D29] font-pixel text-xs pixel-btn cursor-pointer whitespace-nowrap"
          >
            Open in Email App
          </button>
        </form>
      </div>
    </PanelShell>
  );
};
