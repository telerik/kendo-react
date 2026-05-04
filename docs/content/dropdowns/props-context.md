---
title: Props Context
description: 'Learn how to provide a global configuration for all instances of a DropDown component in a React Application'
components:
    [
        'autocomplete',
        'combobox',
        'dropdownlist',
        'dropdowntree',
        'multicolumncombobox',
        'multiselect',
        'multiselecttree'
    ]
slug: props-context_dropdowns
position: 40
---

# DropDowns Props Context

The `PropsContext` allows you to configure the props of all `@progress/kendo-react-dropdowns` components inside of it.

This is useful if a component from the `@progress/kendo-react-dropdowns` package is wrapped inside another component (for example, KendoReact [Grid]({% slug overview_grid %}) or [Scheduler]({% slug overview_scheduler %})) and a specific component configuration is not exposed.

The following example shows how to configure the DropDownList props in a Grid by using `DropDownListPropsContext`:

{% meta height:490 %}
{% embed_file props-context/overview/func/app.tsx preview %}
{% embed_file props-context/overview/func/main.tsx %}
{% embed_file props-context/overview/func/grid-with-filtering.tsx %}
{% embed_file props-context/overview/func/sample-products.tsx %}
{% endmeta %}

## Available Contexts

The following components from the `@progress/kendo-react-dropdowns` package support passing `props` through `context`:

| Component           | Context                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------- |
| AutoComplete        | [`AutoCompletePropsContext`]({% slug api_dropdowns_autocompletepropscontext %})               |
| ComboBox            | [`ComboBoxPropsContext`]({% slug api_dropdowns_comboboxpropscontext %})                       |
| DropDownList        | [`DropDownListPropsContext`]({% slug api_dropdowns_dropdownlistpropscontext %})               |
| DropDownTree        | [`DropDownTreePropsContext`]({% slug api_dropdowns_dropdowntreepropscontext %})               |
| MultiColumnComboBox | [`MultiColumnComboBoxPropsContext`]({% slug api_dropdowns_multicolumncomboboxpropscontext %}) |
| MultiSelect         | [`MultiSelectPropsContext`]({% slug api_dropdowns_multiselectpropscontext %})                 |
| MultiSelectTree     | [`MultiSelectTreePropsContext`]({% slug api_dropdowns_multiselecttreepropscontext %})         |

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [AutoComplete Overview]({% slug overview_autocomplete %})
-   [ComboBox Overview]({% slug overview_combobox %})
-   [DropDownList Overview]({% slug overview_dropdownlist %})
-   [DropDownTree Overview]({% slug overview_dropdowntree %})
-   [MultiColumnComboBox Overview]({% slug overview_multicolumncombobox %})
-   [MultiSelect Overview]({% slug overview_multiselect %})
-   [MultiSelectTree Overview]({% slug overview_multiselecttree %})
