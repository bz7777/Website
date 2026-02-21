import { WebGLShader } from "@/components/ui/web-gl-shader"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Navbar } from "@/components/ui/navbar"
import { Services } from "@/components/sections/services"
import { Portfolio } from "@/components/sections/portfolio"
import { Pricing } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/ui/footer"
import { getTranslations } from "next-intl/server"

export default async function Home() {
  const t = await getTranslations("hero")

  return (
    <main>
      <WebGLShader />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-green-400 text-sm">{t("badge")}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight mb-6">
            {t("title")}
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LiquidButton
              size="xl"
              className="text-white border border-white/20 rounded-full"
            >
              <a href="#services">{t("cta_primary")}</a>
            </LiquidButton>
            <a
              href="#portfolio"
              className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors"
            >
              {t("cta_secondary")} →
            </a>
          </div>
        </div>
      </section>

      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
