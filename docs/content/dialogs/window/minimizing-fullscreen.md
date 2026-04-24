---
title: Minimizing and Maximizing
description: 'Control the minimized, default, and full screen states of the KendoReact Window.'
components: ["window"]
slug: windowstage_window
position: 60
---

# Minimizing and Maximizing

The Window enables you to control its minimized, default, and maximized state through the title bar commands.

To place the Window in a controlled mode:

1. Set the [`stage`]({% slug api_dialogs_windowprops %}#toc-stage) property.
1. Utilize the [`onStageChange`]({% slug api_dialogs_windowprops %}#toc-onstagechange) event.

{% meta height:450 %}
{% embed_file window/minimize-fullscreen/func/app.tsx preview %}
{% embed_file window/minimize-fullscreen/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the Window]({% slug api_dialogs_windowprops %})
