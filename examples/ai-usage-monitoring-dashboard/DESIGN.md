---
version: alpha
name: AI Usage Monitoring Dashboard
theme: meridian
description: Meridian-based AI operations dashboard with soft violet branding, translucent elevated surfaces, and light/dark runtime token overrides.
colors:
  light:
    app-surface: "#f5f1ff"
    on-app-surface: "#1a1233"
    subtle: "#8b7bb8"
    surface: "rgba(255, 255, 255, 0.82)"
    surface-alt: "rgba(240, 234, 254, 0.64)"
    border: "rgba(168, 85, 247, 0.25)"
    border-alt: "rgba(168, 85, 247, 0.4)"
    base: "rgba(240, 234, 254, 0.58)"
    primary: "#7c3aed"
    secondary: "#a78bfa"
    info: "#7c3aed"
    series: "#8b5cf6"
  dark:
    app-surface: "#0f0a1a"
    on-app-surface: "#f3e8ff"
    subtle: "#c4b5fd"
    surface: "rgba(18, 13, 36, 0.72)"
    surface-alt: "rgba(31, 24, 56, 0.56)"
    border: "rgba(168, 85, 247, 0.28)"
    border-alt: "rgba(216, 180, 254, 0.42)"
    base: "rgba(31, 24, 56, 0.76)"
    primary: "#a78bfa"
    secondary: "#d8b4fe"
    info: "#c4b5fd"
    series: "#c084fc"
typography:
  font-family:
    base: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
  font-size:
    base: 1rem
  line-height:
    base: 1.5
rounded:
  base: 0.375rem
  panel: 1.25rem
spacing:
  base: 0.25rem
effects:
  translucency:
    base: 28%
    blur-base: 14px
    blur-step: 6px
---

# Kendo Design System

## Overview

This app uses **Meridian** as the theme foundation and keeps the original soft-violet dashboard identity as a runtime token layer on top of it. The UI should feel polished, data-dense, and slightly atmospheric without losing contrast or readability.

## Token rules

1. **Theme foundation:** `@progress/kendo-theme-meridian`
2. **Runtime theming:** override only Meridian base tokens in CSS custom properties for light and dark mode.
3. **Derived variants:** do not hand-author `primary-hover`, `primary-active`, `primary-subtle`, or similar variants unless there is a specific visual bug that cannot be solved from the base token.
4. **Custom app surfaces:** dashboard shells, cards, filters, and tables may layer app-scoped variables on top of Kendo tokens, but those app variables should resolve back to Meridian token values.

## Visual direction

- **Surface model:** luminous light canvas in light mode, deep ink violet canvas in dark mode
- **Accent system:** violet primary with lavender secondary support
- **Elevation:** soft shadows plus translucency for cards, filters, toolbars, popups, and other raised surfaces
- **Typography:** Inter-first sans serif throughout the app
- **Corner treatment:** Meridian defaults for controls; 1.25rem rounded treatment for dashboard panels

## Component guidance

- Prefer Kendo token usage over hardcoded component colors.
- Keep chart, grid, popup, and picker surfaces translucent and aligned with the dashboard glass treatment.
- Preserve strong text contrast before increasing blur or translucency.
