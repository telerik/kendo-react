---
title: Controlled Mode
description: 'Control the value of the KendoReact Input in React projects.'
components: ["input"]
slug: controlled_input
tag: new
position: 1
---

## Controlled Mode

By default, the React Input, part of KendoReact, is in an uncontrolled mode.

## Controlling the Value

1. Use its [`value`]({% slug api_inputs_inputprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_inputprops %}#toc-onchange) event.

The following example showcases the controlled mode in action.

{% meta height:230 %}
{% embed_file input/controlled-mode/app.tsx preview %}
{% embed_file input/controlled-mode/main.tsx %}
{% embed_file input/controlled-mode/styles.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Input]({% slug api_inputs_inputprops %})
