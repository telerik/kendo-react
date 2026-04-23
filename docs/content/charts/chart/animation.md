---
title: Animation
description: 'Learn how the KendoReact Charts animate on initial render and how to customize or disable their motion.'
slug: animation_charts
position: 40
tag: new
---

# Animation

The KendoReact Charts animate on initial render to help users perceive the data as it appears on screen. The animation can be toggled per Chart through the [`transitions`]({% slug api_charts_chartprops %}#toc-transitions) prop, while its timing and easing are driven by the **theme** through CSS variables that align with the [Telerik Design System motion tokens](https://www.telerik.com/design-system/docs/foundation/motion/).

## Basic Usage

By default, every Chart plays its initial-render animation. To turn it off for a specific Chart, set the `transitions` prop to `false`. The following example lets you toggle the prop and see the animation replay with each change.

<demo metaUrl="charts/chart/animation/basic/" height="610"></demo>

## Motion CSS Variables

KendoReact Charts provide built-in support for animations through CSS custom properties that control animation durations and easing functions. These settings are used throughout chart rendering and affect the initial chart loading. By customizing these CSS variables, developers can align animations with their design system for a consistent and engaging user experience.

The following CSS custom properties control how the Charts animate. They are defined by the Kendo themes and can be overridden at any level of the DOM — globally on `:root` or scoped to a specific chart container.

| CSS Variable                | Description                                                                 | Typical Value                            | Applied To                      |
| --------------------------- | --------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------- |
| `--kendo-duration-steady`   | Duration for longer, steady animations (in milliseconds).                   | `600ms`                                  | Initial chart series segments   |
| `--kendo-duration-rapid`    | Duration for quick, rapid animations (in milliseconds).                     | `200ms`                                  | Initial chart series labels     |
| `--kendo-easing-standard`   | Cubic-bezier easing for standard, natural-feeling animations.               | `cubic-bezier(0.42, 0, 0.58, 1)`         | Most standard transitions       |
| `--kendo-easing-stretchy`   | Cubic-bezier easing for elastic, bouncy animations.                         | `cubic-bezier(0.07, 1.81, 0.3, 0.81)`    | Bouncy / elastic animations     |
| `--kendo-easing-linear`     | Cubic-bezier easing for linear, constant-speed animations.                  | `cubic-bezier(0, 0, 1, 1)`               | Linear transitions              |

## Customizing Chart Motion

To adjust Chart animations, override the CSS variables at the scope you need. For example, to change motion globally:

```css
:root {
    --kendo-duration-steady: 800ms;
    --kendo-duration-rapid: 300ms;
    --kendo-easing-stretchy: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

To scope the override to a single chart, apply the variables to a wrapper element:

```css
.my-animated-chart {
    --kendo-duration-steady: 1200ms;
    --kendo-easing-stretchy: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

The following example demonstrates a Chart rendered with customized motion tokens. Pick a preset to see it re-render with the new motion applied.

<demo metaUrl="charts/chart/animation/customizing-chart-motion/" height="620"></demo>

## Suggested Links

-   [Telerik Design System — Motion](https://www.telerik.com/design-system/docs/foundation/motion/)
-   [Charts Overview]({% slug overview_chart_charts %})

