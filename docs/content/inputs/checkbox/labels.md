---
title: Labels
description: "Set the labels of the KendoReact Checkbox in React projects."
components: ["checkbox"]
slug: labels_checkbox
position: 5
---

# Labels

The Checkbox enables you to add label next to the input, either before or after it.

## Setting Up the Label

To set the label, use the [`label`]({% slug api_inputs_checkboxprops %}#toc-label) property, which accept `string`. To set position of the label, use the [`labelPlacement`]({% slug api_inputs_checkboxprops %}#toc-labelPlacement) property, which accept `before` and `after` values.



{% meta height:150 %}
{% embed_file checkbox/labels/setup/func/app.tsx preview %}
{% embed_file checkbox/labels/setup/func/main.tsx %}
{% endmeta %}


## Custom labels

To create a custom labels, set `id` prop of the Checkbox and provide custom markup for the label, including the `for` attribute for it.



{% meta height:130 %}
{% embed_file checkbox/labels/custom/func/app.tsx preview %}
{% embed_file checkbox/labels/custom/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the Checkbox]({% slug api_inputs_checkbox %})
