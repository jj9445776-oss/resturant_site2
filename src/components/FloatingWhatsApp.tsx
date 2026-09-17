import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { restaurantConfig } from '../config/restaurant';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const sendCustomMessage = () => {
    const text = quickMsg.trim() 
      ? quickMsg 
      : 'Salam! I have a question regarding Dastaan Restaurant menu & table availability.';
    const url = `https://wa.me/${restaurantConfig.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div id="floating-whatsapp-widget" className="fixed bottom-6 right-6 z-40">
      {/* Floating Chat Popup Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-3xl bg-[#14100C] border border-amber-500/30 shadow-2xl shadow-black/80 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-emerald-900/60 p-4 border-b border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold">
                <MessageCircle className="w-5 h-5 text-black" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  {restaurantConfig.name} Concierge
                </h4>
                <span className="text-[10px] text-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Typically replies in minutes
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Body */}
          <div className="p-4 space-y-3 text-xs bg-[#0F0D0B]">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-neutral-300 leading-relaxed">
              Salam! Welcome to <strong className="text-amber-400">{restaurantConfig.name}</strong>. How may we assist your dining experience today?
            </div>

            {/* Quick Action Prompt Chips */}
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => {
                  window.open(restaurantConfig.orderingUrl, '_blank');
                  setIsOpen(false);
                }}
                className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 text-[11px]"
              >
                🍛 Place a Food Order
              </button>
              <button
                onClick={() => {
                  const url = `https://wa.me/${restaurantConfig.whatsAppNumber}?text=${encodeURIComponent("Salam! I would like to check table availability for tonight.")}`;
                  window.open(url, '_blank');
                  setIsOpen(false);
                }}
                className="px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-500/30 text-amber-300 hover:bg-amber-900/60 text-[11px]"
              >
                📅 Reserve Table
              </button>
            </div>

            {/* Input message */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                value={quickMsg}
                onChange={(e) => setQuickMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendCustomMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-xl bg-black/60 border border-amber-500/20 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-400"
              />
              <button
                onClick={sendCustomMessage}
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="px-4 py-2 bg-black/40 text-center border-t border-white/5 text-[10px] text-neutral-500 font-mono">
            Directly connected to: {restaurantConfig.whatsAppDisplay}
          </div>
        </div>
      )}

      {/* Floating Button with unread pulse */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/80 transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/20"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-[#0B0907] flex items-center justify-center text-[9px] font-black text-black">
          1
        </span>
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-20 group-hover:animate-ping" />
        <MessageCircle className="w-7 h-7 fill-white/10 text-white" />
      </button>
    </div>
  );
};
