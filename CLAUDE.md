# Website Services — Prompt per Claude / AI

## Rreth Projektit
Krijon nje website profesional per nje freelancer / agjensi qe ofron sherbime dixhitale.
Faqja eshte **treguheshe** (Shqip / English / Deutsch) — perdorues zgjedh gjuhen nga menu.

## Sherbimet Kryesore
- **Web Creator** — Dizajn dhe zhvillim faqesh web statike dhe dinamike
- **Web App Creator** — Aplikacione web me funksionalitet te plote (full-stack)
- **UI/UX Design** — Nderfaqe moderne dhe te perdorshme
- **E-Commerce** — Dyqane online me sisteme pagese
- **SEO & Performance** — Optimizim per motoret e kerkimit dhe shpejtesi

## Gjuhet e Mbeshtetura
| Gjuha   | Kodi | Route            |
|---------|------|------------------|
| Shqip   | sq   | /sq/sherbimet    |
| English | en   | /en/services     |
| Deutsch | de   | /de/leistungen   |

- Gjuha default: Shqip (sq)
- Perkthimet ruhen ne: messages/sq.json, messages/en.json, messages/de.json
- Perdor next-intl per i18n

## Stack Teknologjik
- Framework: Next.js 14+ (App Router)
- Styling: Tailwind CSS
- i18n: next-intl
- Animacione: Framer Motion
- Backend/DB: Supabase
- Email: Resend ose EmailJS
- Hosting: Vercel

## Stili Vizual
- Minimaliste dhe moderne
- Dark mode support
- Mobile-first & responsive
- Font: Inter ose Geist
- Ngjyrat kryesore: [vendos ngjyrat tua]

## Seksionet e Faqes
1. Hero — Titull kryesor me CTA buton
2. Sherbimet — Kartat e sherbimeve (ikona + pershkrim)
3. Portfolio — Punime te meparshme me screenshot
4. Cmime — 3 paketa: Basic / Pro / Premium
5. Testimoniale — Komente klientesh
6. Kontakt — Form + email + WhatsApp link

## Toni i Komunikimit
Profesional, i qarte dhe bindas.
Synon biznese te vogla, startup-e dhe individe qe kerkojne prezence online.

## Shembull Strukture Perkthimesh

### messages/sq.json
{
  "hero": {
    "title": "Krijojme Faqe Web & Aplikacione Moderne",
    "subtitle": "Zgjidhje dixhitale per biznesin tuaj",
    "cta": "Shiko Sherbimet"
  },
  "nav": {
    "services": "Sherbimet",
    "portfolio": "Portfolio",
    "pricing": "Cmimet",
    "contact": "Kontakt"
  }
}

### messages/en.json
{
  "hero": {
    "title": "We Build Modern Websites & Web Apps",
    "subtitle": "Digital solutions for your business",
    "cta": "View Services"
  },
  "nav": {
    "services": "Services",
    "portfolio": "Portfolio",
    "pricing": "Pricing",
    "contact": "Contact"
  }
}

### messages/de.json
{
  "hero": {
    "title": "Wir erstellen moderne Webseiten & Web-Apps",
    "subtitle": "Digitale Loesungen fuer Ihr Unternehmen",
    "cta": "Leistungen ansehen"
  },
  "nav": {
    "services": "Leistungen",
    "portfolio": "Portfolio",
    "pricing": "Preise",
    "contact": "Kontakt"
  }
}

## Kerkesat Teknike
- Route-based i18n: /sq/..., /en/..., /de/...
- Language switcher ne navbar (flamuj ose tekst)
- SEO per cdo gjuhe: hreflang tags, meta titles/descriptions te perkthyera
- Contact form me email notification
- Analytics: Google Analytics ose Plausible
- Mobile-first & responsive
- Animacione te lehta (Framer Motion)
