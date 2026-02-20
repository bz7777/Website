"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const images = [
  "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
]

export function Portfolio() {
  const t = useTranslations("portfolio")
  const items = t.raw("items") as {
    title: string
    category: string
    description: string
  }[]

  return (
    <section id="portfolio" className="py-24 px-6 bg-black">
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
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 hover:border-violet-500/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={images[i]}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <span className="absolute top-3 left-3 bg-violet-600/90 text-white text-xs px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <ExternalLink
                    size={16}
                    className="text-white/30 group-hover:text-violet-400 transition-colors mt-0.5 shrink-0"
                  />
                </div>
                <p className="mt-1.5 text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
