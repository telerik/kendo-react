---
title: Appearance
description: 'Set the dimensions of the KendoReact Gauges and customize their color in React projects.'
components: ['arcgauge', 'circulargauge', 'lineargauge', 'radialgauge']
slug: styling_gauges
position: 40
---

# Appearance

The [React Gauge component](slug:overview_gauges) enables you to [set its width and height](#toc-dimensions-and-resizing), [customize its color](#toc-color), and [use CSS custom properties in color configurations](#toc-css-custom-properties).

## Dimensions and Resizing

By default, the ArcGauge is rendered in a 200x200 px size while the LinearGauge and RadialGauge expand to the full width of the container element. To set a different size, use the `style` attribute&mdash;for example, `style="width: 100%; height: 100%;"` accommodates the component in the container element.

The components automatically resize and redraw their content when the size of their elements changes&mdash;for example, as a result of a browser window resizing.

## Color

The colors of the Gauges are derived from the active [KendoReact theme](https://github.com/telerik/kendo-theme-default#customization). It is possible to customize them through the [theme variables](https://github.com/telerik/kendo-theme-default#customization) and the configuration.

## CSS Custom Properties

Instead of manually resolving CSS variables with `getComputedStyle()`, you can now pass CSS custom properties directly to gauge color configurations. The Gauges automatically resolve them from the component's DOM context. Existing color specifications using hex codes, RGB values, or named colors continue to work unchanged.

Use any of these formats to reference a custom property:

-   `"--success"` — Direct reference
-   `"var(--warning)"` — CSS `var()` function
-   `"var(--error, #ff0000)"` — CSS `var()` function with fallback value

CSS custom properties work with these gauge color settings:

| Component                | Property                          |
| ------------------------ | --------------------------------- |
| ArcGauge, CircularGauge  | `color` and `colors`              |
| LinearGauge, RadialGauge | `pointer.color` (single or array) |

The following demos show CSS custom properties across all gauge types.

### ArcGauge

<demo metaUrl="gauges/arc-gauge/css-variables/" height="370"></demo>

### CircularGauge

<demo metaUrl="gauges/circular-gauge/css-variables/" height="400"></demo>

### LinearGauge

<demo metaUrl="gauges/linear-gauge/css-variables/" height="400"></demo>

### RadialGauge

<demo metaUrl="gauges/radial-gauge/css-variables/" height="360"></demo>

## Suggested Links

-   [API Reference of the Gauges]({% slug api_gauges %})
-   [Creating Custom Styles]({% slug themebuilder %})
