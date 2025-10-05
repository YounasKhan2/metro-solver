"use client";

import { useState } from "react";
import Image from "next/image";

export default function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-label="Chat"
        className="relative h-16 w-16 rounded-full grid place-items-center hover:scale-110 transition-transform z-10"
      >
        <Image
          src="/material/Frame 3.gif"
          alt="Chat Bot"
          width={64}
          height={64}
          className="h-16 w-16 object-contain"
          unoptimized
        />
      </button>

      {/* Chat Interface */}
      {isChatOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40" 
            onClick={() => setIsChatOpen(false)}
          />
          
          {/* Chat Window */}
          <div className="fixed inset-x-4 top-4 bottom-4 md:right-6 md:left-auto md:w-[375px] bg-black rounded-2xl z-50 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">AI</span>
                </div>
                <span className="text-white font-medium">Chat with Ai!</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-white/60 hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-white/60 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Support Message 1 */}
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white text-sm font-medium">Customer Support</span>
                    <span className="text-white/40 text-xs">2:30 PM</span>
                  </div>
                  <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-3 rounded-2xl rounded-tl-md max-w-[280px]">
                    <p className="text-sm">Welcome our Agency.</p>
                  </div>
                  <span className="text-white/40 text-xs mt-1 self-end">Seen</span>
                </div>
              </div>

              {/* User Message 1 */}
              <div className="flex justify-end">
                <div className="flex flex-col items-end max-w-[280px]">
                  <div className="bg-[#374151] text-white p-3 rounded-2xl rounded-tr-md">
                    <p className="text-sm">Hello</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-white/40 text-xs">Seen</span>
                    <span className="text-white/40 text-xs">2:25 PM</span>
                  </div>
                </div>
              </div>

              {/* Support Message 2 */}
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white text-sm font-medium">Customer Support</span>
                    <span className="text-white/40 text-xs">2:30 PM</span>
                  </div>
                  <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-3 rounded-2xl rounded-tl-md max-w-[280px]">
                    <p className="text-sm">Welcome our Agency.</p>
                  </div>
                  <span className="text-white/40 text-xs mt-1 self-end">Seen</span>
                </div>
              </div>

              {/* User Message 2 */}
              <div className="flex justify-end">
                <div className="flex flex-col items-end max-w-[280px]">
                  <div className="bg-[#374151] text-white p-3 rounded-2xl rounded-tr-md">
                    <p className="text-sm">Hello</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-white/40 text-xs">Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-3 bg-[#1f2937] rounded-full p-3">
                <button className="text-white/60 hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Write here..."
                  className="flex-1 bg-transparent text-white placeholder-white/50 outline-none text-sm"
                />
                <button className="text-white/60 hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}