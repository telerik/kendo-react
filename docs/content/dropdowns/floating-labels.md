---
title: Floating Labels
description: 'Implement floating labels in the KendoReact Dropdowns components.'
components: ["autocomplete", "combobox", "dropdownlist", "dropdowntree", "multicolumncombobox", "multiselect", "multiselecttree"]
slug: floatinglabels_dropdowns
position: 20
---

# Floating Labels

Floating labels are part of the [Material Design Guidelines](https://material.io/guidelines/) and are fully supported by the KendoReact Dropdowns components.

## Basic Usage

To enable the floating label functionality, pass a `label` property to the [AutoComplete]({% slug api_dropdowns_autocompleteprops %}#toc-label), [ComboBox]({% slug api_dropdowns_comboboxprops %}#toc-label), [MultiColumnComboBox]({% slug api_dropdowns_multicolumncomboboxprops %}), [DropDownList]({% slug api_dropdowns_dropdownlistprops %}#toc-label) or [MultiSelect]({% slug api_dropdowns_multiselectprops %}#toc-label) component.

The following example demonstrates how to implement floating labels in the Dropdowns and style them with the [KendoReact Material theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/material/).

{% meta height:470 %}
{% embed_file label/func/data.ts %}
{% embed_file label/func/app.tsx preview %}
{% embed_file label/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
-   [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
-   [API Reference of the MultiColumnComboBox]({% slug api_dropdowns_multicolumncomboboxprops %})
-   [Material Design Guidelines](https://material.io/guidelines/)
