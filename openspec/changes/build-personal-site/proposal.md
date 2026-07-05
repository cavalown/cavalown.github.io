## Why

The existing personal website is tied to an older Hexo-era setup and no longer matches the intended role of `cavalown.com` as a long-term personal home. This change establishes a clean, extensible foundation for a personal site that can hold identity, projects, studio notes, writings, and future products without requiring content to be complete before the site can launch.

## What Changes

- Build a new Astro-based static website for `cavalown.com`.
- Use SCSS with design tokens so colors, typography, spacing, and themes are centralized.
- Create a first public version with complete but lightweight pages: Home, About, Projects, Studio, and Writing.
- Use placeholder content where real project, writing, and product content is not ready yet.
- Present the homepage as the `cavalown` identity, without showing the user's real name there.
- Reserve future structure for Products and Resume without requiring them in the first public navigation.
- Prepare the site to deploy through Cloudflare Pages from the GitHub repository.

## Capabilities

### New Capabilities

- `personal-site`: Defines the public personal website experience, including information architecture, homepage identity, content sections, visual direction, theme tokens, content handling, and deployment readiness.

### Modified Capabilities

- None.

## Impact

- Replaces the current Hexo-oriented website implementation with a new Astro + SCSS static site foundation.
- Introduces new source structure for pages, layouts, components, styles, and content collections.
- Adds project conventions for theme tokens, Japanese-inspired color palettes, and free/open font usage.
- Adds Cloudflare Pages compatibility for production deployment at `cavalown.com`.
