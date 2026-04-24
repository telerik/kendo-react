---
title: Overview
description: 'Learn about the KendoReact Window which is delivered by the Dialogs package.'
components: ["window"]
slug: overview_window
position: 0
---

# KendoReact Window Overview

The KendoReact Window displays content in a non-modal HTML window which can be moved and resized.

The KendoReact Window is distributed through the [kendo-react-dialogs NPM package](https://www.npmjs.com/package/@progress/kendo-react-dialogs).

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the Window in action.

{% meta height:450 %}
{% embed_file window/overview/func/app.tsx preview %}
{% embed_file window/overview/func/main.tsx %}
{% endmeta %}

> The Window is part of the [KendoReact Dialogs]({% slug overview_dialogs %}) component library. The procedures for installing, importing, and using the Dialogs are identical for all components in the package. To learn how to use the Window and the rest of the Window, see the [Getting Started with the KendoReact Dialogs]({% slug get_started_dialogs %}) guide.

## Key Features

-   [Controlled Window]({% slug controlled_mode_window %})&mdash;You can control the Window size on position directly from the application state.
-   [Title]({% slug title_window %})&mdash;You can customize the title of the Window.
-   [Visibility]({% slug visibility_window %})&mdash;You can control when the Window is visible on the page.
-   [Dimensions and resizing]({% slug dimensionsresizing_window %})&mdash;You can enable or disable the Window resizing.
-   [Positioning and dragging]({% slug positioningdragging_window %})&mdash;You can enable or disable the Window dragging.
-   [Minimizing and maximizing]({% slug windowstage_window %})&mdash;You can control the `minimized`, `default`, and `full screen` state of the Window.
-   [Action Buttons]({% slug actionbuttons_window %})&mdash;You can add different actions buttons to the Window.
-   [Globalization]({% slug globalization_dialog %})&mdash;The built-in globalization support allows you to create apps that are ready to be implemented worldwide.
-   [Keyboard navigation]({% slug keyboard_navigation_window %})&mdash;The Window supports various keyboard shortcuts.

## Suggested Links

-   [API Reference of the Window]({% slug api_dialogs_window %})
-   [Globalization of the Dialogs]({% slug globalization_dialog %})
