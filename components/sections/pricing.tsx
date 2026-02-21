"use client"

import { useTranslations } from "next-intl"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function Pricing() {
  const t = useTranslations("pricing")
  const plans = t.raw("plans") as {
    name: string
    price: string
    description: string
    features: string[]
  }[]

  return (
    <section id="pricing" className="py-24 px-6 bg-black/85">
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const isPro = i === 1
            return (
              <div
                key={i}
                className={cn(
                  "relative rounded-2xl p-7 border transition-all",
                  isPro
                    ? "border-violet-500 bg-violet-950 scale-105"
                    : "border-white/10 bg-zinc-900"
                )}
              >
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-violet-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {t("popular")}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-white font-bold text-xl">{plan.name}</h3>
                  <p className="text-white/40 text-sm mt-1">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-white">
                    €{plan.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check
                        size={16}
                        className={cn(
                          "mt-0.5 shrink-0",
                          isPro ? "text-violet-400" : "text-green-500"
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "block text-center py-3 rounded-full text-sm font-medium transition-colors",
                    isPro
                      ? "bg-violet-600 hover:bg-violet-500 text-white"
                      : "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                  )}
                >
                  {t("cta")}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
