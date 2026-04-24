---
title: Controlled Mode
description: "Control the value of the KendoReact ColorGradient in React projects."
components: ["colorgradient"]
slug: controlled_colorgradient
position: 3
---

# Controlled Mode

By default, the ColorGradient is in an uncontrolled state.

To manage the state of the ColorGradient:

1. Use its [`value`]({% slug api_inputs_colorgradientprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_colorgradientprops %}#toc-onchange) event.
1. Pass the new value through the props.



{% meta height:450 %}
{% embed_file colorgradient/controlled/func/app.tsx preview %}
{% embed_file colorgradient/controlled/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the ColorGradient]({% slug api_inputs_colorgradient %})
