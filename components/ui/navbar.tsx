"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { Menu, X, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const locales = [
  { code: "sq", label: "SQ", flag: "🇦🇱" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "de", label: "DE", flag: "🇩🇪" },
]

export function Navbar() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#services", label: t("services") },
    { href: "#portfolio", label: t("portfolio") },
    { href: "#pricing", label: t("pricing") },
    { href: "#contact", label: t("contact") },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="text-white font-bold text-xl tracking-tight">
          Web<span className="text-violet-400">Studio</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Globe size={15} />
              {locales.find((l) => l.code === locale)?.label}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-8 bg-zinc-900 border border-white/10 rounded-lg overflow-hidden shadow-xl">
                {locales.map((l) => (
                  <Link
                    key={l.code}
                    href={`/${l.code}`}
                    onClick={() => setLangOpen(false)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-white/10 transition-colors",
                      locale === l.code ? "text-white" : "text-white/60"
                    )}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="bg-violet-600 hover:bg-violet-500 text-white text-sm px-4 py-2 rounded-full transition-colors"
          >
            {t("cta")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white text-base transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            {locales.map((l) => (
              <Link
                key={l.code}
                href={`/${l.code}`}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border transition-colors",
                  locale === l.code
                    ? "border-violet-500 text-violet-400"
                    : "border-white/20 text-white/50 hover:border-white/40"
                )}
              >
                {l.flag} {l.label}
              </Link>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-violet-600 text-white text-sm px-4 py-2.5 rounded-full text-center transition-colors"
          >
            {t("cta")}
          </a>
        </div>
      )}
    </nav>
  )
}
