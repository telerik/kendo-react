---
title: Overview
description: 'Learn more about the KendoReact BottomNavigation component and learn how to use it in a React project.'
components: ["bottomnavigation"]
slug: overview_bottomnavigation
position: 1
---

# KendoReact BottomNavigation Overview

The KendoReact BottomNavigation allows movement among primary destinations in an application. The main purpose of the component is to offer a navigation element where each option is represented by an icon and optional text.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the BottomNavigation in action.

{% meta height:700 %}
{% embed_file bottomnavigation/basic-usage/func/NavigationContainer.tsx %}
{% embed_file bottomnavigation/basic-usage/func/app.tsx preview %}
{% embed_file bottomnavigation/basic-usage/func/main.tsx %}
{% embed_file bottomnavigation/basic-usage/func/Inbox.tsx %}
{% embed_file bottomnavigation/basic-usage/func/Calendar.tsx %}
{% embed_file bottomnavigation/basic-usage/func/Profile.tsx %}
{% endmeta %}

> The BottomNavigation is part of the [KendoReact Layout]({% slug overview_layout %}) component library. The procedures for installing, importing, and using all components in the library are identical. To learn how to use the BottomNavigation and the rest of the components in the package, see the [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %}) guide.

## Key Features

-   [Content Types]({% slug content_types_bottomnavigation %})&mdash;With the BottomNavigation component you can specify the icons and text labels for the rendered buttons based on their content. You can also choose if the icon and the text are on the same line or below each other.
-   [Positioning Mode]({% slug positioning_bottomnavigation %})&mdash;You can choose between the `fixed` and `sticky` position modes.
-   [Appearance]({% slug appearance_bottomnavigation %})&mdash;The BottomNavigation comes with predefined option that allow you to set its theme colors and fill options.
-   [Routing]({% slug routing_bottomnavigation %})&mdash;You can use the BottomNavigation as a container for navigational components with any router library.
-   [Custom Rendering]({% slug custom_rendering_bottomnavigation %})&mdash;You can override the default rendering of the BottomNavigation items.
-   [Globalization]({% slug rtl_layout %})&mdash;The BottomNavigation has built-in globalization support.

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the BottomNavigation]({% slug api_layout_bottomnavigation %})
-   [API Reference of the BottomNavigationProps]({% slug api_layout_bottomnavigationprops %})
-   [API Reference of the BottomNavigationItemProps]({% slug api_layout_bottomnavigationitemprops %})
