---
title: Positioning
description: 'Learn how to position the KendoReact BottomNavigation component in relation to the page content.'
components: ['bottomnavigation']
slug: positioning_bottomnavigation
position: 3
---

# Positioning

The BottomNavigation enables you to specify different position modes in regard to the page content.

## Position Mode

To specify the type of positioning mode used for the BottomNavigation, use the [`positionMode`]({% slug api_layout_bottomnavigationprops %}#toc-positionMode) property.

The BottomNavigation provides the following options for setting the position mode:

-   `fixed`(Default) &mdash; The BottomNavigation always stays at the bottom of the viewport, regardless of the page scroll position.
-   `sticky` &mdash; Positions the BottomNavigation based on the user's scroll position. A sticky element toggles between static and fixed CSS [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) property, depending on the scroll position. It is positioned static until a given offset position is met in the viewport - then it "sticks" in place like `fixed` positionMode.

> When the BottomNavigation has `positionMode={'fixed'}`, there is no reserved space for the component with regard to the other page content. This can cause parts of the page to be invisible behind the BottomNavigation. In this case, either apply bottom padding to the page content or set a `sticky` position mode.

{% meta height:600 %}
{% embed_file bottomnavigation/position-mode/func/app.tsx preview %}
{% embed_file bottomnavigation/position-mode/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

*   [API Reference of the BottomNavigationProps]({% slug api_layout_bottomnavigationprops %})
*   [API Reference of the BottomNavigationItemProps]({% slug api_layout_bottomnavigationitemprops %})
