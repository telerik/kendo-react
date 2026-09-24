---
version: 1
name: Coffee Warehouse Next.js
theme: meridian
description: Meridian-based design tokens for the Coffee Warehouse Next.js sample.
tokens:
  colors:
    app-surface: "#D4D6E4"
    primary: "#53D2FA"
    info: "#71A6FF"
    series-a: "#FF6358"
    series-b: "#FFD246"
    series-c: "#55AB1D"
    series-d: "#28B4C8"
  typography:
    font-family: '"Roboto", sans-serif'
  translucency:
    base: "28%"
    blur-base: "12px"
    blur-step: "3px"
---

# Coffee Warehouse Design Notes

## Theme

- Use **Kendo Theme Meridian** as the styling base.
- Import the compiled CSS entry: `@progress/kendo-theme-meridian/dist/all.css`.

## App customizations layered on Meridian

- Keep the application background aligned to `--kendo-color-app-surface: #D4D6E4`.
- Keep the marketing accent aligned to `--kendo-color-primary: #53D2FA`.
- Keep the informational/link accent aligned to `--kendo-color-info: #71A6FF`.
- Keep team colors bound to the Kendo series tokens:
  - `--kendo-color-series-a: #FF6358`
  - `--kendo-color-series-b: #FFD246`
  - `--kendo-color-series-c: #55AB1D`
  - `--kendo-color-series-d: #28B4C8`
- Keep the UI font family aligned to `--kendo-font-family: "Roboto", sans-serif`.

## Token usage rules

- Reuse Kendo color, spacing, typography, radius, elevation, and motion tokens in custom styles.
- Prefer semantic app classes over JSX-applied `k-*` utility classes.
- Use translucency subtly on elevated surfaces. Readability wins over effect strength.
