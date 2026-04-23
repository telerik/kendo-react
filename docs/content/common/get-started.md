---
title: Getting Started
description: 'Get started with the React Common Utilities package by KendoReact and learn how to use the free React components'
slug: get_started_common
position: 1
---

# Getting Started with the KendoReact Common Utilities

This guide provides essential information about using the KendoReact Common Utilities package&mdash;you will learn how to install the package and add free Common Utilities to your project. The steps demonstrated in this guide are applicable to all KendoReact Common Utilities [(free and premium)](slug://overview_common).

<div data-component="StartKendoReactFreeSection"></div>

{% meta height:120 %}
{% embed_file get-started/func/app.tsx preview %}
{% embed_file get-started/func/main.tsx %}
{% endmeta %}

## Install the Components

```sh
npm i @progress/kendo-react-common
```

## Import the Components

```tsx
import { SvgIcon } from '@progress/kendo-react-common';
import { paletteIcon } from '@progress/kendo-svg-icons';
```

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project. Note that the steps for installing and importing all Common Utilities components are identical.

## Use the Components

> Using the free KendoReact Common Utilities components does not require a license, even in production. To work with the premium Draggable utility, you need a [commercial license key or an active trial license key](slug://my_license).

1. After installing the Common Utilities package and importing the components, add the Icon's tags to the App component file of your React project (for example, `src/App.tsx`).

    ```tsx
    <SvgIcon icon={paletteIcon} size="xlarge" />
    ```

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

To use the built-in styling of the components start by installing a theme:

```sh
npm i @progress/kendo-theme-default
```

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

Additionally, the SvgIcons provide built-in appearance properties which let you control the size, flip, and theme color of the component. Try to play around with the [appearance](slug://appearance_svgicon) of your SvgIcon.

```tsx
<SvgIcon icon={paletteIcon} size="xlarge" themeColor="primary" />
```

## Next Steps

Now try to add another component from the Common Utilities package yourself. The procedures for [installing](#install-the-components) and [importing](#import-the-components) the Common Utilities components are identical for all components in the package.

The Common Utilities package provides the following components:

-   [Adaptive Mode](slug://overview_adaptive_mode)
-   [Icon](slug://overview_icon)
-   [SvgIcon](slug://overview_svgicon)
-   [Typography](slug://overview_typography)
-   [Drag&Drop](slug://overview_drag-and-drop) (premium)
-   [Keyboard Navigation](slug://overview_navigation)

## KendoReact Common Utilities APIs

[Common Utilities API](slug://api_common)

## Common Utilities Dependencies

The Common Utilities package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name              | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| react 18.0.0\*            | Contains the functionality necessary to define React components. |
| react-dom                 | Contains the React renderer for the web.                         |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing.       |
| @progress/kendo-svg-icons | Contains the KendoReact SVG icons.                               |

## Activating Your License Key

**Important**: The KendoReact Common Utilities have both free and premium features that require a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the premium features will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.
