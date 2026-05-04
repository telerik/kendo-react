---
title: Popup Context Props
description: 'Set global props to all Popups inside PopupPropsContext.'
components: ['popup']
slug: context_popup
position: 9
---

# Popup Context Props

The [PopupPropsContext]({% slug api_popup_popuppropscontext %}) allows you to configure the props of all Popup components inside of it.

This is useful if the Popup component is inside another component (e.g. KendoReact [Grid]({% slug overview_grid %}) or [Editor]({% slug overview_editor %})) and the Popup configuration is not exposed.

The following example shows how to configure the Popup props through `PopupPropsContext`:

{% meta height:150 %}
{% embed_file context/func/app.tsx preview %}
{% embed_file context/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the Popup]({% slug api_popup %})
-   [PopupPropsContext]({% slug api_popup_popuppropscontext %})
