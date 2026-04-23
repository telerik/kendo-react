---
title: Labels
description: "Set the labels of the KendoReact RadioButton in React projects."
components: ["radiobutton"]
slug: labels_radiobutton
position: 5
---

# Labels

The RadioButton enables you to add label next to the input, either before or after it.

## Setting Up the Label

To set the label, use the [`label`]({% slug api_inputs_radiobuttonprops %}#toc-label) property, which accepts `string`. To set position of the label, use the [`labelPlacement`]({% slug api_inputs_radiobuttonprops %}#toc-labelPlacement) property, which accepts `before` and `after` values.

{% meta height:220 %}
{% embed_file radiobutton/labels/func/app.tsx preview %}
{% embed_file radiobutton/labels/func/main.tsx %}
{% endmeta %}


## Custom labels

To create a custom labels, set `id` prop of the RadioButton and provide custom markup for the label, including the `for` attribute for it.

{% meta height:350 %}
{% embed_file radiobutton/custom-labels/func/app.tsx preview %}
{% embed_file radiobutton/custom-labels/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the RadioButtonProps]({% slug api_inputs_radiobuttonprops %})
