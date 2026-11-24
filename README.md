# 💧 AquaBuddy — Project Showcase Website

A portfolio case-study and interactive showcase website for [AquaBuddy](https://github.com/Bithyakter/aqua-buddy) — a cross-platform desktop hydration and wellness companion for **Windows**, **macOS**, and **Linux**.

Built to present the engineering, interaction design, and product decisions behind the app. Every feature, interaction, and technical note on the site reflects actual production code in the AquaBuddy repository.

---

## 🌟 What This Showcase Features

- **Cross-Platform Showcase**: Highlights native multi-platform packaging for Windows (`.exe`), macOS (`.dmg`, `.zip`), and Linux (`.AppImage`, `.deb`, `.tar.gz`) with OS-tailored click-through windowing.
- **Interactive Character Skin Switcher**: Live browser showcase allowing visitors to toggle between **Classic AquaBuddy** and **Character 2 (Male Companion)** and preview all 7 interaction scenes:
  - Idle
  - Reminders (with real wrist-pivot layered hand-wave animations)
  - Celebrations ("I Drank")
  - Snooze reactions
  - Shoulder stretching
  - 20-20-20 eye breaks
  - Mindful deep breathing
- **Continuous Work Detection for Breaks**: Explains the idle detection architecture — stress-relief breaks monitor active keyboard and mouse input, prompting only after continuous desk work and auto-resetting if the user steps away, goes to lunch, or puts the computer to sleep.
- **True-to-Code Technical Deep Dives**: Outlines Electron's multi-process architecture, strict `contextBridge` sandboxing, border-flood-fill Jimp sprite extraction, and local JSON persistence.

---

## 🛠️ Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **Language**: TypeScript (strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme` design tokens in `app/globals.css`)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for micro-interactions, spring transitions, and character wrist-pivot simulations
- **Icons**: [Lucide React](https://lucide.dev)

---

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout, theme provider, and font configuration
├── page.tsx            # Composition of showcase sections
├── globals.css         # Tailwind v4 theme tokens and animations
├── sitemap.ts          # Search engine sitemap
├── robots.ts           # Crawler directives
└── opengraph-image.tsx # Dynamic Open Graph card generation

components/
├── Hero.tsx            # Main value proposition, interactive bubble reaction, and CTAs
├── AppShowcase.tsx     # In-browser desktop replica with skin switcher (Classic & Character 2)
├── Features.tsx        # Core features grid and interactive schedule & break cards
├── WavingCharacter.tsx # Layered sprite animation engine supporting multi-character wrist pivots
├── HowItWorks.tsx      # Step-by-step user interaction loop
├── Solution.tsx        # Problem vs. Desktop Companion architectural rationale
├── TechStack.tsx       # Layered runtime, packaging, and asset tooling breakdown
├── FutureImprovements.tsx # Directional product roadmap
└── ui/                 # Reusable UI primitives (Container, SectionHeading, Reveal, MagneticButton)

data/
├── features.ts         # Verified feature specifications
├── highlights.ts       # Engineering highlights
├── techStack.ts        # Runtime, security, and packaging breakdown
├── workflow.ts         # User journey and activity detection loop
├── future.ts           # Product roadmap ideas
└── nav.ts              # Navigation items

public/
└── images/
    ├── character/      # Classic AquaBuddy sprites (standing, waving, breaks, celebration)
    ├── character-2/    # Character 2 (Male) sprites and waving layers
    └── logo.png        # Brand asset
```

> **Data-Driven Architecture**: Section copy lives in structured `data/*.ts` files, decoupling content from UI components and making updates seamless without altering layout JSX.

---

## 🚀 Getting Started Locally

```bash
# Install dependencies
npm install

# Start development server with Turbopack
npm run dev

# Build production bundle and run type checking
npm run build

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 🌐 Deployment

The project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your changes to GitHub or your Git provider.
2. Import the repository into Vercel.
3. Next.js will automatically detect the build settings (`next build`).
4. To configure your custom domain, update `url` in `lib/site.ts` so Open Graph tags, canonical URLs, and the sitemap resolve correctly.

---

## 📄 License

MIT © [Bithy Akter](https://github.com/Bithyakter)
