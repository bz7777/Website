"use client";

import { useChat } from "@ai-sdk/react";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";

const LABELS: Record<string, { title: string; placeholder: string; welcome: string }> = {
  sq: {
    title: "Asistenti Virtual",
    placeholder: "Shkruani pyetjen tuaj...",
    welcome: "Pershendetje! Si mund t'ju ndihmoj sot? Pyeteni per sherbimet, cmimet ose projektin tuaj.",
  },
  en: {
    title: "Virtual Assistant",
    placeholder: "Type your question...",
    welcome: "Hello! How can I help you today? Ask me about our services, pricing, or your project.",
  },
  de: {
    title: "Virtueller Assistent",
    placeholder: "Ihre Frage eingeben...",
    welcome: "Hallo! Wie kann ich Ihnen helfen? Fragen Sie mich zu unseren Leistungen, Preisen oder Ihrem Projekt.",
  },
};

function getMessageText(msg: { parts?: Array<{ type: string; text?: string }>; content?: string }): string {
  if (msg.parts) {
    return msg.parts
      .filter((p) => p.type === "text")
      .map((p) => p.text ?? "")
      .join("");
  }
  return msg.content ?? "";
}

export function ChatWidget() {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const labels = LABELS[locale] ?? LABELS.sq;

  const { messages, sendMessage, status } = useChat({
    api: "/api/chat",
    body: { locale },
  });

  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] flex flex-col rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <Bot size={14} className="text-white" />
              </div>
              <span className="text-sm font-medium text-white">{labels.title}</span>
              <span className="flex items-center gap-1 text-xs text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Online
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-72">
            {/* Welcome message */}
            <div className="flex gap-2 items-start">
              <div className="w-6 h-6 shrink-0 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
                <Bot size={12} className="text-white" />
              </div>
              <p className="text-sm text-white/80 bg-white/5 rounded-2xl rounded-tl-sm px-3 py-2 leading-relaxed">
                {labels.welcome}
              </p>
            </div>

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 items-start ${m.role === "user" ? "flex-row-reverse" : ""}`}
              >
                {m.role === "assistant" && (
                  <div className="w-6 h-6 shrink-0 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
                    <Bot size={12} className="text-white" />
                  </div>
                )}
                <p
                  className={`text-sm leading-relaxed rounded-2xl px-3 py-2 max-w-[80%] ${
                    m.role === "user"
                      ? "bg-white text-black rounded-tr-sm"
                      : "bg-white/5 text-white/80 rounded-tl-sm"
                  }`}
                >
                  {getMessageText(m)}
                </p>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2 items-center">
                <div className="w-6 h-6 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                  <Bot size={12} className="text-white" />
                </div>
                <div className="flex gap-1 px-3 py-2 bg-white/5 rounded-2xl rounded-tl-sm">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 border-t border-white/10"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={labels.placeholder}
              disabled={isLoading}
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 disabled:opacity-30 hover:bg-white/90 transition-colors"
            >
              {isLoading ? (
                <Loader2 size={14} className="text-black animate-spin" />
              ) : (
                <Send size={14} className="text-black" />
              )}
            </button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform"
        aria-label="Open chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}
