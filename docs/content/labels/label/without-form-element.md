---
title: Without Form Element
description: "Define the KendoReact Label without a form element in React projects."
components: ["label"]
slug: without_form_label
position: 1
---

# Labelling components without form element

By default the target editor is associated with the `label` element only if it's a form element (e.g.: `input`, `select` element). Custom components that do not contain form element (e.g.: KendoReact `DropDownList`) would require setting additional properties to allow screen readers to correcly read the label. These properties are:
* [`id`]({% slug api_labels_labelprops %}#toc-id) property of the Label
* `aria-labelledby` attribute of the editor (KendoReact components provide it as `ariaLabelledBy` property)

Additionally you can forward the `click` events from the Label to the editor by setting the [`editorRef`]({% slug api_labels_labelprops %}#toc-editorref) property. On `click` events the Label component will look for `focus` method or `activeElement` property (to call its `click` method) on the editor ref. This functionality is already supported on all KendoReact form components (e.g.: `DropDownList`).

{% meta height:280 %}
{% embed_file label/custom/func/app.tsx preview %}
{% embed_file label/custom/func/main.tsx %}
{% endmeta %}

## Suggested Links

* [API Reference of the Label Component]({% slug api_labels_labelprops %})
