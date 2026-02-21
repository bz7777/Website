"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Heart } from "lucide-react"

export function Footer() {
  const t = useTranslations("footer")
  const nav = useTranslations("nav")

  return (
    <footer className="bg-black/85 border-t border-white/10 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-3">
              <Image src="/logo.svg" alt="Bezati" width={180} height={45} />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {t("description")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
              {t("links_title")}
            </div>
            <ul className="space-y-2.5">
              {(["services", "portfolio", "pricing", "contact"] as const).map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="text-white/40 hover:text-white/80 text-sm transition-colors"
                  >
                    {nav(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
              {t("contact_title")}
            </div>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li>info@bezati.tech</li>
              <li>01622 123831</li>
              <li>Tirane, Shqiperi</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Bezati. {t("rights")}
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1.5">
            {t("made_with")} <Heart size={12} className="text-violet-400 fill-violet-400" /> Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
