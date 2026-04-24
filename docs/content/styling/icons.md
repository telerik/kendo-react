---
title: Icons
description: 'Check out the full list of the web font icons for the KendoReact components.'
components: ["general"]
slug: icons
position: 30
---

# Icons

Kendo UI for React provides a large set of built-in icons. There are two ways to consume and render them: as [Font icons](https://www.telerik.com/design-system/docs/foundation/iconography/font-icons/) or as [SVG icons](https://www.telerik.com/design-system/docs/foundation/iconography/svg-icons/).
In general, font icons produce a smaller HTML footprint and the glyph can be overridden with CSS. SVG icons provide better accessibility and can use multiple colors in a single icon.

## Using Font Icons

You can add a Font Icon to your application page by using some of the approaches below:

### Icon Component

The [Icon component](https://www.telerik.com/kendo-react-ui/components/common/icon/) can show a [built-in Kendo React font icon](#icons-list).

### Render Font Icons with HTML

For more details on adding a KendoReact Font icon using just HTML and CSS (without the Icon component), read the [Font Icons Usage article in the Progress Design System documentation](https://www.telerik.com/design-system/docs/foundation/iconography/font-icons/#usage).

### Loading Icons through a CDN

Import the font icons by using the following CDN link in your `index.html` file.
`html
    <link
        rel="stylesheet"
        href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css"
    />
    `

### Rendering with Unicode Numbers

Even though the icon font provides [predefined CSS classes](#icons-list), you may want to use an icon with your own custom CSS class name. To do this, you can use the :before pseudo-element to insert the icon's Unicode character.

```html
<span class="k-icon k-font-icon my-custom-icon-class"></span>
<style>
    .my-custom-icon-class:before {
        content: '\e13a'; /* Adds a glyph using the Unicode character number */
    }
</style>
```

## Visual Adjustments

Read the [Iconography - Visual Adjustments for Icons on Progress Design System Kit website](https://www.telerik.com/design-system/docs/foundation/iconography/visual-adjustments/) for more information on how to customize the look of the font icons.

## Loading Indicator

To show a loading indicator, use the `k-i-loading` CSS class. You can adjust the size and color of the loading indicator in the same way you make adjustments to other icons.

```html
<span class="k-icon k-font-icon k-i-loading"></span>
```

## Using SVG Icons

To add a Kendo UI SVG icon to your page, use the [KendoReact Svg Icon component](slug:overview_svgicon).

## Icons List

The Progress Design System website provides a [list of all built-in icons in Kendo UI for React](https://www.telerik.com/design-system/docs/foundation/iconography/icon-list/).
Each icon box in the icon list is clickable and reveals the following details:

-   CSS class aliases, if such exist.
-   Unicode representation of the font icon glyph. For example, `\e11e` corresponds to the `plus` icon.
-   Ability to copy the glyph symbol of the font icon.
-   Ability to copy the HTML markup (`<svg>` tag) of the SVG icon.
    The icon list may contain icons which are not available in older versions of Telerik UI for Blazor or even in the latest one. Such icons will be added in the next product version.

## Suggested Links

-   [Themes and Styling in KendoReact](slug:themesandstyles)
-   [Getting Started with KendoReact](slug:getting_started)
-   [Browse the Components](https://www.telerik.com/kendo-react-ui/components)
