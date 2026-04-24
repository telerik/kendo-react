---
title: Controlled Mode
description: "Control the value of the KendoReact ColorPalette in React projects."
components: ["colorpalette"]
slug: controlled_colorpalette
position: 3
---

# Controlled Mode

By default, the ColorPalette is in an uncontrolled state.

To manage the state of the ColorPalette:

1. Use its [`value`]({% slug api_inputs_colorpaletteprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_colorpaletteprops %}#toc-onchange) event.
1. Pass the new value through the props.



{% meta height:200 %}
{% embed_file colorpalette/controlled/func/app.tsx preview %}
{% embed_file colorpalette/controlled/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the ColorPalette]({% slug api_inputs_colorpalette %})
