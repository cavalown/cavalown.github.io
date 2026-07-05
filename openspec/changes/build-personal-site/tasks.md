## 1. Project Foundation

- [x] 1.1 Inspect the current repository state and confirm the active branch/worktree before changing implementation files
- [x] 1.2 Create or switch to the `personal-site` branch for the rebuild work
- [x] 1.3 Replace the old site implementation with an Astro static site foundation
- [x] 1.4 Add project scripts for development, build, preview, and validation
- [x] 1.5 Add SCSS support and connect the global stylesheet to the base layout

## 2. Site Architecture

- [x] 2.1 Create the Astro page structure for Home, About, Projects, Studio, and Writing
- [x] 2.2 Create shared layouts for base pages and article/detail pages
- [x] 2.3 Create shared components for navigation, footer, section headers, content cards, and metadata labels
- [x] 2.4 Configure site metadata for `cavalown.com`, including title, description, and canonical base URL

## 3. Design System

- [x] 3.1 Define semantic CSS custom properties for colors, spacing, typography, borders, radii, and motion
- [x] 3.2 Implement the initial `washi` theme tokens using warm paper, sumi ink, matcha, persimmon, muted gold, and indigo gray tones
- [x] 3.3 Configure open/free font stacks for headings, body text, and optional accent text
- [x] 3.4 Implement global typography, page rhythm, link styling, focus states, and responsive layout rules
- [x] 3.5 Add subtle hover and transition behavior without introducing heavy client-side JavaScript

## 4. Content Model

- [x] 4.1 Define content collections or equivalent structured content for Projects, Studio, and Writing
- [x] 4.2 Add realistic placeholder project entries with titles, summaries, dates, categories, and status metadata
- [x] 4.3 Add realistic placeholder studio note entries related to making software, interfaces, or small systems
- [x] 4.4 Add realistic placeholder writing entries related to work, books, films, music, life, or reflection
- [x] 4.5 Ensure Products and Resume remain future-ready without appearing as empty primary navigation sections

## 5. Page Implementation

- [x] 5.1 Implement the homepage hero with `cavalown`, `I work for life.`, and the agreed supporting sentence
- [x] 5.2 Ensure the homepage does not display the user's real name
- [x] 5.3 Implement homepage entry points for Projects, Studio, Writing, and About
- [x] 5.4 Implement the About page as the place where the real identity may be introduced
- [x] 5.5 Implement the Projects index with complete placeholder entries and no generic empty-state copy
- [x] 5.6 Implement the Studio index with complete placeholder entries and no generic empty-state copy
- [x] 5.7 Implement the Writing index with complete placeholder entries and no generic empty-state copy

## 6. Deployment Readiness

- [x] 6.1 Configure the Astro build output for static Cloudflare Pages deployment
- [x] 6.2 Document the Cloudflare Pages build command and output directory
- [x] 6.3 Add any necessary static metadata files such as favicon placeholders, robots policy, or sitemap support

## 7. Verification

- [x] 7.1 Run the project build and fix any build errors
- [x] 7.2 Run formatting or linting if configured
- [x] 7.3 Preview the site locally and verify the v1 navigation, homepage copy, and placeholder content
- [x] 7.4 Check responsive behavior for mobile and desktop layouts
- [x] 7.5 Confirm the final implementation satisfies the `personal-site` spec scenarios
