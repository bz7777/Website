"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const t = useTranslations("contact")
  const subjects = t.raw("subjects") as string[]
  const info = t.raw("info") as { email: string; phone: string; location: string }

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    await new Promise((r) => setTimeout(r, 1500))
    setStatus("sent")
  }

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950">
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/5">
              <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-violet-400" />
              </div>
              <div>
                <div className="text-white/40 text-xs mb-0.5">Email</div>
                <div className="text-white text-sm">{info.email}</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/5">
              <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-violet-400" />
              </div>
              <div>
                <div className="text-white/40 text-xs mb-0.5">Phone</div>
                <div className="text-white text-sm">{info.phone}</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/5">
              <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-violet-400" />
              </div>
              <div>
                <div className="text-white/40 text-xs mb-0.5">Location</div>
                <div className="text-white text-sm">{info.location}</div>
              </div>
            </div>

            <a
              href={`https://wa.me/35569123456`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 rounded-xl border border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors text-sm font-medium"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("whatsapp")}
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === "sent" ? (
              <div className="h-full flex items-center justify-center p-10 rounded-2xl border border-green-500/30 bg-green-500/10">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-green-400" />
                  </div>
                  <p className="text-green-400 font-medium">{t("success")}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t("name")}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={t("email")}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                </div>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-violet-500 transition-colors appearance-none"
                >
                  <option value="" disabled>{t("subject")}</option>
                  {subjects.map((s) => (
                    <option key={s} value={s} className="bg-zinc-900">
                      {s}
                    </option>
                  ))}
                </select>
                <textarea
                  placeholder={t("message")}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-violet-600 hover:bg-violet-500 disabled:opacity-60 text-white font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Send size={16} />
                  {status === "sending" ? t("sending") : t("send")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
