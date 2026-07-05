## ADDED Requirements

### Requirement: Public site identity

The site SHALL present `cavalown.com` as the public home of the `cavalown` identity.

#### Scenario: Homepage hero renders public identity

- **WHEN** a visitor opens the homepage
- **THEN** the hero displays `I work for life.` and `Projects, studio notes, writings, and things I make along the way.`

#### Scenario: Real name is not shown on homepage

- **WHEN** a visitor opens the homepage
- **THEN** the homepage hero does not display the user's real name or `cavalown` as a separate hero line

### Requirement: First-version public navigation

The site SHALL provide first-version public navigation for Home, About, Projects, Studio, and Writing.

#### Scenario: Primary navigation shows v1 sections

- **WHEN** a visitor views the primary navigation
- **THEN** navigation links are available for About, Projects, Studio, and Writing

#### Scenario: Future sections are not empty primary items

- **WHEN** Products or Resume content is not ready
- **THEN** Products and Resume are not required to appear as primary navigation items

### Requirement: Content-light but complete pages

The site SHALL make each public v1 section feel complete even when real content is limited.

#### Scenario: Placeholder content is used

- **WHEN** real project, studio, or writing content is unavailable
- **THEN** the section displays realistic placeholder entries with titles, summaries, and metadata instead of empty states

#### Scenario: Public pages avoid construction messaging

- **WHEN** a visitor opens any v1 public section
- **THEN** the page does not rely on generic "coming soon" or "under construction" messaging as its main content

### Requirement: Projects section

The site SHALL provide a Projects section for selected work, experiments, and things built.

#### Scenario: Projects index lists entries

- **WHEN** a visitor opens the Projects page
- **THEN** the page lists project entries with a title, short description, and category or status metadata

### Requirement: Studio section

The site SHALL provide a Studio section for technical and making-related notes without naming the section Tech.

#### Scenario: Studio index lists making notes

- **WHEN** a visitor opens the Studio page
- **THEN** the page lists studio note entries related to software, interfaces, systems, development process, or making

### Requirement: Writing section

The site SHALL provide a Writing section for non-Studio personal writing.

#### Scenario: Writing index lists personal writing

- **WHEN** a visitor opens the Writing page
- **THEN** the page lists writing entries related to work reflections, books, films, music, life, or personal thoughts

### Requirement: About section

The site SHALL provide an About page for the person behind the `cavalown` identity.

#### Scenario: About page can include real identity

- **WHEN** a visitor opens the About page
- **THEN** the page may introduce the user's real name and explain the relationship to the `cavalown` identity

### Requirement: Japanese-inspired visual theme

The site SHALL use a low-saturation, Japanese-inspired `washi` theme as the initial visual direction.

#### Scenario: Theme tokens define the palette

- **WHEN** styles are loaded
- **THEN** color values are exposed through semantic tokens for background, surface, text, muted text, line, primary, accent, secondary, and cool accent

#### Scenario: Components use semantic tokens

- **WHEN** a component is styled
- **THEN** it uses semantic theme tokens rather than hard-coded palette names in component-level styles

### Requirement: Typography uses free/open fonts

The site SHALL use font families that are free/open and suitable for web use.

#### Scenario: Font stack is configured

- **WHEN** global typography styles are loaded
- **THEN** heading, body, and optional accent font stacks include open font options such as Noto Serif TC, Noto Sans TC, or Zen Kaku Gothic New with safe fallbacks

### Requirement: Astro and SCSS foundation

The site SHALL be implemented as an Astro static site with SCSS styling.

#### Scenario: Static build is available

- **WHEN** the project build command runs successfully
- **THEN** Astro produces a static output suitable for deployment

#### Scenario: SCSS styles are included

- **WHEN** the site renders
- **THEN** global SCSS styles provide base layout, typography, tokens, and reusable utilities

### Requirement: Cloudflare Pages readiness

The site SHALL be ready to deploy as a static site through Cloudflare Pages.

#### Scenario: Deployment settings are documented

- **WHEN** an implementer prepares deployment
- **THEN** the build command and output directory needed by Cloudflare Pages are clear from the project configuration or documentation
