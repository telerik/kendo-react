---
title: Visibility
description: 'Show or hide the KendoReact Window in React projects.'
components: ["window"]
slug: visibility_window
position: 90
---

# Visibility

By default, the Window is visible.

To control its visibility, use a variable based on which the Window will be shown or hidden.

```jsx-no-run
    {this.state.visible && <Window/>}
```

The following example demonstrates how to show and hide the Window based on its state.

{% meta height:450 %}
{% embed_file window/overview/func/app.tsx preview %}
{% embed_file window/overview/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the Window]({% slug api_dialogs_window %})
