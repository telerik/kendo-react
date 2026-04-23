---
title: Getting Started
description: 'Get an overview of the features the KendoReact SvgIcon delivers and use the component in React projects.'
components: ["svgicon"]
slug: overview_svgicon
position: 1
---

# KendoReact SvgIcon Overview

The KendoReact SVGIcon component is used to display SVG icons; it includes more than 500 icon options.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the SvgIcon component in action.

{% meta height:160 %}
{% embed_file svg-icon/overview/func/app.tsx preview %}
{% embed_file svg-icon/overview/func/main.tsx %}
{% endmeta %}

> The SvgIcon is part of the [KendoReact Common Utilities]({% slug overview_common %}) component library. The procedures for installing, importing, and using the Common Utilities are identical for all components in the package. To learn how to use the SvgIcon and the rest of the Common Utilities, see the [Getting Started with the KendoReact Common Utilities]({% slug overview_common %}) guide.

## Key Features

-   [Appearance]({% slug appearance_svgicon %})&mdash;You can quickly style the SvgIcon by choosing from the predefined styling options.
-   [Unstyled Mode]({% slug overview_unstyled %})&mdash;You can remove all default visual effects and style the KendoReact SvgIcon in a way that matches your application design perfectly.
-   [Custom SVG Icons]({% slug customization_svgicon %})&mdash;You can render custom SVG icons inside the KendoReact SvgIcon component.

## SVG Icons List

{% meta height:500 %}
{% embed_file svg-icon/all/func/app.tsx preview %}
{% embed_file svg-icon/all/func/main.tsx %}
{% endmeta %}

## Switch to SVG or Font Icons

You can use the KendoReact [IconsContext]({% slug api_common_iconscontext %}) to switch the [type]({% slug api_common_iconscontexttype %}) of the icons in your app.

The following code snippet shows how to change the icons type to SVG.

```jsx-no-run
import { IconsContext } from '@progress/kendo-react-common';

const App = () => {
    return (
        <IconsContext.Provider value={{ type: 'svg' }}>
            {/* Your app code goes here */}
        </IconsContext.Provider>
    );
};
```

## Suggested Links

-   [API Reference of the SvgIcon]({% slug api_common_svgicon %})
-   [API Reference of the SvgIconProps]({% slug api_common_svgiconprops %})
-   [API Reference of the Common Utilities]({% slug api_common %})
