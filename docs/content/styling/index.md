---
title: Overview
description: 'Use themes to style the appearance of your project with KendoReact.'
components: ["general"]
slug: themesandstyles
position: 10
---

# KendoReact Styling Overview

KendoReact comes with a set of built-in CSS themes that control the visual appearance of the components. Each theme determines the components' colors, borders, backgrounds, size, layout, position, font size and sometimes the font family.

Applying a custom design system is available through the [Unstyled Mode](#unstyled-mode).

<CtaPanelOverview></CtaPanelOverview>

## Built-in Themes

Explore the built-in themes available for the KendoReact components on the [Themes - Get Started Page.](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes)

### Swatches

A theme swatch is a color variation of a theme. All [swatches of a given theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/swatches/) use the same fonts, sizes, and layouts. On the other hand, the text colors, background colors and border colors are different. For example, _Default Ocean Blue_ and _Bootstrap Nordic_ are two built-in swatch names.

## Installing a Theme

To install a KendoReact theme, run `npm i @progress/kendo-theme-` followed by one of the theme names:

-   [`default`](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/)
-   [`bootstrap`](https://www.telerik.com/design-system/docs/themes/kendo-themes/bootstrap/)
-   [`material`](https://www.telerik.com/design-system/docs/themes/kendo-themes/material/)
-   [`fluent`](https://www.telerik.com/design-system/docs/themes/kendo-themes/fluent/)
-   [`classic`](https://www.telerik.com/design-system/docs/themes/kendo-themes/classic/)

## Including a Theme

You can include a theme in your project in either of the following ways:

-   [Using External (CDN) Link](https://www.telerik.com/design-system/docs/themes/get-started/installation/#using-external-cdn-link)
-   [Using Precompiled CSS](https://www.telerik.com/design-system/docs/themes/get-started/installation/#using-precompiled-css)
-   [Using the Build Process of the Application](https://www.telerik.com/design-system/docs/themes/get-started/installation/#using-the-build-process-of-the-application)

## Customizing a Theme

You can customize the look of the KendoReact Themes. Read more about [Customizing Themes...]({% slug customizingthemes %})

## Unstyled Mode

Many components in the KendoReact library offer an [Unstyled mode](slug:overview_unstyled), which allows developers to remove default styles and apply their own design systems. This mode provides maximum flexibility for customizing the appearance of components, ensuring they align perfectly with any design language or branding guidelines. By leveraging unstyled mode, you can fully control the visual presentation of components such as buttons, form elements, animations, and date inputs, seamlessly blending them into your unique user interface.

## Integrating Tailwind CSS

You can choose between two approaches for [integrating Tailwind CSS with KendoReact](slug:tailwind_overview). You can map the Kendo UI Theme design tokens to Tailwind CSS classes and utilize them across your application for layout and custom styling, or you can enable [Unstyled mode](slug:overview_unstyled) to get completely unstyled components and style them with Tailwind CSS classes.

## Using ThemeBuilder

To take full control over the appearance of the KendoReact components, you can create your own styles by using [ThemeBuilder](slug:themebuilder).

ThemeBuilder is a web application that enables you to create new themes and customize existing ones. Every change that you make is visualized almost instantly. Once you are done styling the React components, you can export a zip file with the styles for your theme and use them in your React app.

## Compatibility and Maintenance

The Kendo Themes are decoupled from the Kendo UI for React components, which leads to the following usage requirements:

-   When using a CSS theme as a local npm package, make sure that the `kendo-themes packages` are also updated to the latest in order to have properly styled components and avoid any version incompatibility
-   When using a CSS theme from a CDN, make sure that the theme version is compatible with the Kendo UI for React version. Our [ChangeLog](https://www.telerik.com/kendo-react-ui/components/changelogs/ui-for-react/) provides theme compatibility information for each components version.

## Suggested Links

-   [Web Font Icons in KendoReact]({% slug icons %})
-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Browse the Components](https://www.telerik.com/kendo-react-ui/components)
