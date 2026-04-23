---
title: Controlled Mode
description: "Control the value of the KendoReact RangeSlider in React projects."
components: ["rangeslider"]
slug: controlled_rangeslider
position: 6
---

# Controlled Mode

By default, the RangeSlider is in an uncontrolled state.

To manage the state of the RangeSlider:

1. Use its [`value`]({% slug api_inputs_rangesliderprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_rangesliderprops %}#toc-onchange) event.
1. Pass the new value through the props.



{% meta height:130 %}
{% embed_file rangeslider/controlled/func/app.tsx preview %}
{% embed_file rangeslider/controlled/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the RangeSlider]({% slug api_inputs_rangeslider %})
