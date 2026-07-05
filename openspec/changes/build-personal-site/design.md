## Context

The current repository represents an older personal website. The new direction is to make `cavalown.com` a long-term personal home: a place for identity, selected projects, studio notes, writing, and later products or resume content. The first release should feel complete even with limited real content, so placeholder content is acceptable as long as every public page has a clear purpose and no empty "coming soon" areas.

The site should feel clean, warm, lightly Japanese-inspired, and personal. It should avoid a strongly "engineering blog" tone even though it will include technical and making-related content. The site chrome should present the `cavalown` identity; the user's real name belongs in About and future Resume content, not the home hero.

## Goals / Non-Goals

**Goals:**

- Build a static personal website using Astro and SCSS.
- Provide first-version public navigation for Home, About, Projects, Studio, and Writing.
- Use the homepage hero copy:
  - `I work for life.`
  - `Projects, studio notes, writings, and things I make along the way.`
- Keep the first release content-light but complete, using realistic placeholder content where needed.
- Define a reusable layout, typography system, and theme-token color system.
- Start with a Japanese-inspired `washi` color palette using warm paper, sumi ink, matcha, persimmon, muted gold, and indigo gray tones.
- Use only free/open fonts suitable for website use.
- Keep Products and Resume as future-ready concepts without requiring them in the first public navigation.
- Make the site compatible with Cloudflare Pages static deployment.

**Non-Goals:**

- Migrating every old Hexo article or preserving the old site structure.
- Building a CMS, database, login system, comments, newsletter, or search in the first version.
- Creating final product landing pages for the upcoming iOS game.
- Adding visitor theme switching UI in the first version.
- Implementing multilingual routing in the first version.

## Decisions

### Use Astro for the site foundation

Astro fits a personal content site because it supports static output, Markdown/MDX-style content, layouts, components, and lightweight pages without requiring a client-side application. It also deploys well to Cloudflare Pages.

Alternatives considered:

- Next.js: more powerful than needed for this static-first personal site.
- Keeping Hexo: preserves the old model but does not match the desired rebuild.
- Plain HTML/CSS: simple, but less comfortable for content collections and long-term growth.

### Use SCSS with semantic design tokens

SCSS will hold global styles, typography, layout utilities, and theme definitions. Components should use semantic tokens such as `--color-bg`, `--color-text`, `--color-primary`, and `--color-accent`, not direct color names like green or orange. This allows future palettes to replace `washi` without rewriting component styles.

Alternatives considered:

- Tailwind CSS: fast for utility styling, but the requested site benefits from quieter markup and a bespoke typographic system.
- CSS modules only: scoped styles are useful, but global theme tokens and typography rules are still needed.

### Start with the `washi` theme

The first palette should be low-saturation and Japanese-inspired without relying on obvious stereotypes. The initial token values should be close to:

- Background: `#F8F5EF` (washi paper)
- Surface: `#FFFEFB` (porcelain white)
- Text: `#2B2926` (sumi ink)
- Muted text: `#7B746A` (warm gray)
- Line: `#E6DED2` (pale sand)
- Primary: `#5F8D73` (matcha green)
- Accent: `#C86F5E` (persimmon)
- Secondary: `#D8B45A` (muted gold)
- Cool accent: `#6E7F8D` (indigo gray)

Colors should appear mostly as small accents, links, tags, hover states, and section signals rather than large decorative blocks.

### Use free/open web fonts

The implementation should use fonts available under open licenses suitable for web use. Preferred font families are:

- Noto Serif TC for hero and expressive headings.
- Noto Sans TC for body and UI.
- Zen Kaku Gothic New as an optional accent or fallback.

Fonts may be self-hosted later for stability and privacy. System fonts may be used as fallbacks.

### Keep first navigation small

The public v1 navigation should include:

- Home
- About
- Projects
- Studio
- Writing

Products and Resume should be supported by architecture and future content modeling, but they should not appear as empty primary navigation items until there is meaningful content.

### Separate Projects, Studio, and Writing by intent

Projects are selected work, experiments, and things built. Studio is for making notes, technical writing, development process, design decisions, and small systems. Writing is for personal essays, work reflections, books, films, music, and everyday life.

This keeps technical content from feeling like a generic "Tech" section while still giving it a distinct home.

### Use placeholder content deliberately

Because the first goal is to establish the website container and tone, placeholder content is acceptable. Placeholder entries should be named and written like real content, not generic lorem ipsum, so the site feels complete and testable.

## Risks / Trade-offs

- Placeholder content could feel unfinished -> Use realistic titles, summaries, dates, and tags, and avoid "coming soon" messaging in public sections.
- Theme support could be overbuilt -> Implement only token-based structure and a single active `washi` theme for v1; defer UI switching.
- Products and Resume could be forgotten if hidden -> Keep them documented as reserved future areas and avoid hardcoding assumptions that prevent adding them later.
- Font files can increase payload size -> Start with a small set of weights and rely on fallbacks where appropriate.
- Japanese-inspired design could become stereotyped -> Use subtle color, spacing, and typography rather than decorative motifs.
- Replacing the Hexo setup may lose old routes -> Treat old-route migration as a later decision unless a specific legacy URL must be preserved.
