---
title: Unstyled Mode + Tailwind CSS
description: 'Learn how to combine KendoReact unstyled components with Tailwind CSS.'
components: ["general"]
slug: tailwind_unstyled
position: 30
---

# Using KendoReact Unstyled Mode with Tailwind CSS

The combination of KendoReact Unstyled Mode and Tailwind CSS provides the ultimate flexibility for styling your React components. This integration allows you to leverage Tailwind CSS utility classes while maintaining full control over component appearance through the unstyled mode.

## Why Combine Unstyled Mode with Tailwind CSS?

When you combine KendoReact's unstyled components with Tailwind CSS, you get:

-   Complete design control
-   Utility-first approach
-   Reduced bundle size
-   Enhanced developer experience

## How to Integrate Tailwind CSS with KendoReact Unstyled Mode

To style KendoReact components with Tailwind CSS, first enable the unstyled mode and then apply Tailwind utility classes in the preset CSS classes passed to the [`UnstyledContext`](slug:api_common_unstyledcontext) provider. For details on enabling unstyled mode, see the [KendoReact Unstyled Mode](slug:overview_unstyled) article. Once enabled, you can use Tailwind classes in your component configuration and markup for full styling control.

## Demo

The following example demonstrates a form built with [KendoReact unstyled components](slug:overview_unstyled) and styled using [Tailwind CSS](https://tailwindcss.com/docs/installation). The full source code is available in [this GitHub repository](https://github.com/telerik/kendo-react/tree/master/examples/kendo-unstyled-tailwind-v4).

<iframe src="https://telerik.github.io/kendo-react/kendo-unstyled-tailwind-v4/"  width="100%" height="880px" style="border: 1px solid rgba(0, 0, 0, 0.12);"></iframe>

## Suggested Links

-   [KendoReact Unstyled Mode Overview](slug:overview_unstyled)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [Sample Project: Unstyled + Tailwind CSS v3](https://github.com/telerik/kendo-react/tree/master/examples/kendo-unstyled-tailwind)
-   [Tailwind CSS and KendoReact Unstyled Mode](https://www.telerik.com/blogs/tailwind-css-kendoreact-unstyled-mode)
