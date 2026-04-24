---
title: Controlled Mode
description: "Control the value of the KendoReact Slider in React projects."
components: ["slider"]
slug: controlled_slider
position: 5
---

# Controlled Mode

By default, the Slider is in an uncontrolled state.

To manage the state of the Slider:

1. Use its [`value`]({% slug api_inputs_sliderprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_sliderprops %}#toc-onchange) event.
1. Pass the new value through the props.



{% meta height:480 %}
{% embed_file slider/controlled/func/app.tsx preview %}
{% embed_file slider/controlled/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the Slider]({% slug api_inputs_slider %})
