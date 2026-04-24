---
title: Without Form Element
description: 'Define the KendoReact FloatingLabel without a form element in React projects.'
components: ["floatinglabel"]
slug: without_form_floating_label
position: 1
---

# Labelling Components Without Form Element

By default the wrapped element is associated with the `label` element only if it's a form element (e.g.: `input`, `select` element). Custom components that do not contain form element (e.g.: KendoReact `DropDownList`) would require setting additional properties to allow screen readers to correcly read the label. These properties are:

-   [`id`]({% slug api_labels_floatinglabelprops %}#toc-id) property of the FloatingLabel
-   `aria-labelledby` attribute of the nested editor (KendoReact components provide it as `ariaLabelledBy` property)

{% meta height:280 %}
{% embed_file floatinglabel/custom/func/app.tsx preview %}
{% embed_file floatinglabel/custom/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

*   [API Reference of the FloatingLabel Component]({% slug api_labels_floatinglabelprops %})
