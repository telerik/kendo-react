---
title: Controlled Mode
description: "Control the state of the KendoReact Tooltip in React projects and open and close it programmatically."
components: ["tooltip"]
slug: controlledmode_tooltip
position: 2
---

# Controlled Mode

By default, the Tooltip is in an uncontrolled state and is displayed as the built-in browser Tooltip on `mouseover`.

The KendoReact Tooltip provides options for you to show it programmatically by using the [`open`]({% slug api_tooltip_tooltipprops %}#toc-open) and the [`targetElement`]({% slug api_tooltip_tooltipprops %}#toc-targetElement) properties.

The following example demonstrates how to show and hide the Tooltip programmatically.

{% meta height:250 %}
{% embed_file tooltip/controlled-mode/func/app.tsx preview %}
{% embed_file tooltip/controlled-mode/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the Tooltip]({% slug api_tooltip %})
