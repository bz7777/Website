"use client"

import { useTranslations } from "next-intl"
import { Star } from "lucide-react"

export function Testimonials() {
  const t = useTranslations("testimonials")
  const items = t.raw("items") as {
    name: string
    role: string
    text: string
  }[]

  return (
    <section className="py-24 px-6 bg-black/85">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">
            {t("badge")}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-white/10 bg-zinc-900 hover:border-white/20 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-600/30 flex items-center justify-center text-violet-300 font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{item.name}</div>
                  <div className="text-white/40 text-xs">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
