---
title: Overview
description: 'Get an overview of the features that the KendoReact PanelBar delivers, and learn about using the component in React projects.'
components: ["panelbar"]
slug: overview_panelbar
position: 1
---

# KendoReact PanelBar Overview

The KendoReact PanelBar displays hierarchical data as a multi-level, expandable component.

You can describe the children items by:

-   Using nested `PanelBarItem` components, or
-   [Binding a data collection]({% slug databinding_panelbar %}) to the `PanelBarItem` components.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the PanelBar in action.

{% meta height:650 %}
{% embed_file panelbar/overview/basic/func/app.tsx preview %}
{% embed_file panelbar/overview/basic/func/main.tsx %}
{% embed_file panelbar/overview/basic/func/styles.css %}
{% endmeta %}

> The PanelBar is part of the [KendoReact Layout]({% slug overview_layout %}) component library. The procedures for installing, importing, and using all components in the library are identical. To learn how to use the PanelBar and the rest of the components in the package, see the [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %}) guide.

## Key Features

-   [Data binding]({% slug databinding_panelbar %})&mdash;You can bind the PanelBar to local arrays of data or to remote data.
-   [Items]({% slug items_panelbar %})&mdash;The PanelBar items provide a number of configuration options for their titles, states, and custom properties.
-   [Expand modes]({% slug expandmodes_panelbar %})&mdash;The PanelBar `supports` the `single` and multiple expand modes.
-   [State management]({% slug controlling_state_panelbar %})&mdash;The PanelBar allows you to set an initial selection, expansion, or focus state to the PanelBarItem and override the selection every time a PanelBarItem is selected.
-   [Customization]({% slug customization_panelbar %})&mdash;The PanelBar allows you to render collections, custom elements, and items with custom properties.
-   [Animations]({% slug animations_panelbar %})&mdash;The PanelBar comes with built-in show and hide animations.
-   [Routing]({% slug routing_panelbar %})&mdash;You can use the PanelBar as a container for navigational components with any router library.
-   [Globalization]({% slug rtl_layout %})&mdash;The PanelBar has built-in globalization support.
-   [Keyboard navigation]({% slug keyboard_navigation_panelbar %})&mdash;The Menu supports various keyboard shortcuts.
-   [Accessibility]({% slug accessibility_panelbar %})&mdash;The PanelBar is accessible by screen readers and provides full WAI-ARIA support.
-   [Events]({% slug events_panelbar %})&mdash;You can tailor the behavior of the PanelBar by using the variety of generated events.

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
-   [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
