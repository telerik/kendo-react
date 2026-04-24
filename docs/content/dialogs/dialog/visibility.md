---
title: Visibility
description: 'Show or hide the KendoReact Dialog in React projects.'
components: ["dialog"]
slug: visibilitty_dialog
position: 2
---

# Visibility

By default, the Dialog is visible.

To control its visibility, use a variable based on which the Dialog will be shown or hidden.

```jsx-no-run
{this.state.visible && <Dialog/>}
```

The following example demonstrates how to show and hide the Dialog based on its state.

{% meta height:450 %}
{% embed_file dialog/overview/func/app.tsx preview %}
{% embed_file dialog/overview/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Dialog]({% slug api_dialogs_dialog %})
