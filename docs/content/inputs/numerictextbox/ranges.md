---
title: Ranges
description: 'Control the ranges of the KendoReact NumericTextBox in React projects.'
components: ["numerictextbox"]
slug: ranges_numerictextbox
position: 13
---

You can control the value ranges by providing values for the [`min`]({% slug api_inputs_numerictextboxprops %}#toc-min)  and [`max`]({% slug api_inputs_numerictextboxprops %}#toc-max)  properties of the NumericTextBox. The component cannot hold a value that is greater than max and smaller than min.

The following example showcases how to set a value between `0` and `5`

{% meta height:200 %}
{% embed_file numerictextbox/ranges/app.tsx preview %}
{% embed_file numerictextbox/ranges/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the NumericTextBox Props]({% slug api_inputs_numerictextboxprops %})
