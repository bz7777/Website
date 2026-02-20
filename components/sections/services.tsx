"use client"

import { useTranslations } from "next-intl"
import {
  Globe,
  AppWindow,
  Palette,
  ShoppingCart,
  Search,
  Wrench,
} from "lucide-react"

const icons = [Globe, AppWindow, Palette, ShoppingCart, Search, Wrench]

export function Services() {
  const t = useTranslations("services")
  const items = t.raw("items") as { title: string; description: string }[]

  return (
    <section id="services" className="py-24 px-6 bg-zinc-950">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center mb-5 group-hover:bg-violet-600/30 transition-colors">
                  <Icon size={22} className="text-violet-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
