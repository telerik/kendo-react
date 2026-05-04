---
title: Controlled Window
description: 'Control the state, dimensions, and position of the KendoReact Window in React projects.'
components: ['window']
slug: controlled_mode_window
position: 20
---

# Controlled Window

By default, the Window is in an uncontrolled state and can be resized or moved depending on its internal logic.

The Window provides options for:

-   Controlling its state by handling the [`onMove`]({% slug api_dialogs_windowprops %}#toc-onmove), [`onClose`]({% slug api_dialogs_windowprops %}#toc-onclose) and [`onResize`]({% slug api_dialogs_windowprops %}#toc-onresize) events.
-   Controlling its dimensions by using the [`width`]({% slug api_dialogs_windowprops %}#toc-width) and [`height`]({% slug api_dialogs_windowprops %}#toc-height) properties.
-   Controlling its position by using the [`left`]({% slug api_dialogs_windowprops %}#toc-left) and [`top`]({% slug api_dialogs_windowprops %}#toc-top) properties.
-   Controlling the [`stage`]({% slug api_dialogs_windowprops %}#toc-stage) of the window though a custom minimize button.

The following example demonstrates how to control the Window functionality.

{% meta height:450 %}
{% embed_file window/controlled/func/app.tsx preview %}
{% embed_file window/controlled/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the Window]({% slug api_dialogs_window %})
