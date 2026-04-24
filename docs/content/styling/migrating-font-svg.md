---
title: Migrating Font Icons to SVG Icons
description: "Learn how to migrate from font icons to SVG icons when using the KendoReact components."
components: ["general"]
slug: font_svg_migration
position: 35
category: styling
level: 0
---

# Migrating Font Icons to SVG Icons

With the R2 2023 release, the default icon type in the KendoReact components and Kendo UI themes is changed from `font` to `svg`. This change marks the next milestone in a series of improvements related to Content Security Policy (CSP).

In this article, you will find more details about how to:

* [Switch to SVG Icons](#toc-switching-to-svg-icons)
* [Continue Using Font Icons](#toc-continue-using-font-icons)

For more information on using SVG and font icons, visit their dedicated articles:

* [SVG Icons](slug:overview_svgicon)
* [Font Icons](slug:overview_icon)

> With the R3 2023 release, the fonts will no longer be delivered with the KendoReact and Kendo UI themes.

## Switching to SVG Icons

Migration from font to SVG icon type requires some changes when:
* [Replacing Standalone Kendo Font Icons](#toc-replacing-standalone-kendo-font-icons)
* [Customizing Standalone Kendo Font Icons](#toc-customizing-standalone-kendo-font-icons)

### Replacing Standalone Kendo Font Icons

In case you have a standalone icon that uses an HTML element with a dedicated CSS icon class selector or [`Icon`](slug:api_common_icon) component like:

```jsx
<span class="k-icon k-i-camera"></span>
<Icon name="camera"></Icon>
```

In R2 2023 release and later versions, use the [`SvgIcon`](slug:api_common_svgicon) component instead.

```jsx
import { SvgIcon } from '@progress/kendo-react-common';
import * as svgIcons from '@progress/kendo-svg-icons';

const App = () => {
  const allIcons = svgIcons;
  
  return <SvgIcon icon={allIcons.cameraIcon} />;
};
```

### Customizing Standalone Kendo Font Icons

The following example demonstrates a standalone font icon with a CSS rule that customizes the color of the font icon prior R2 2023 release:

```html
<span class="k-icon k-i-camera"></span>
```

```css
.k-icon.k-i-camera {
    color: red;
}
```

To customize an SVG icon in R2 2023 and later versions, use `.k-svg-icon` CSS selector and the respective SVG icon selector.

```jsx
<SvgIcon icon={allIcons.cameraIcon} />
```

```css
.k-svg-icon.k-svg-i-camera {
    color: red;
}
```

## Continue Using Font Icons

To continue using Kendo font icons as the default icon type, use the KendoReact [`IconsContext`](slug:api_common_iconscontext) provider and set the icon type to `font`.

```jsx
import { IconsContext } from '@progress/kendo-react-common';

const App = () => {
  return (
    <IconsContext.Provider value={{ type: 'font' }}>
      {/* Your app code goes here */}
    </IconsContext.Provider>
  );
};
```

## Suggested Links

* [SVG Icons](slug:overview_svgicon)
* [Font Icons](slug:overview_icon)
* [IconsContext](slug:overview_svgicon#toc-switch-to-svg-or-font-icons)