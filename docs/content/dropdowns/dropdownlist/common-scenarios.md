---
title: Common Scenarios
description: 'Some of the supported common scenarios provided by the KendoReact DropDownList.'
components: ["dropdownlist"]
slug: common_scenarios_dropdownlist
position: 8
---

# Common Scenarios

You can use the configuration options of the DropDownList to achieve the implementation of common scenarios.

-   [Controlling the value of the DropDownList](#toc-controlling-the-dropdownlist-value)
-   [Implementing cascading DropDownLists](#toc-implementing-cascading-dropdownlists)
-   [Using a DropDownList data field for a value](#toc-using-data-fields-for-values)

## Controlling the DropDownList Value

You can use the DropDownList as the so-called "controlled component" in React which is similar to the behavior of the native `<select>` element.

{% meta height:320 %}
{% embed_file dropdownlist/controlled/func/app.tsx preview %}
{% embed_file dropdownlist/controlled/func/main.tsx %}
{% endmeta %}

## Implementing Cascading DropDownLists

The cascading DropDownList is a series of two or more DropDownLists where each DropDownList is filtered based on the selected option from the previous DropDownList.

{% meta height:450 %}
{% embed_file dropdownlist/cascading/func/app.tsx preview %}
{% embed_file dropdownlist/cascading/func/main.tsx %}
{% embed_file dropdownlist/cascading/func/data.ts %}
{% endmeta %}

## Using Data Fields for Values

The following example demonstrates how to use a [React hook](https://react.dev/learn/reusing-logic-with-custom-hooks) to allow the DropDownList to work with a data field as the value.

{% meta height:320 %}
{% embed_file dropdownlist/value-field/func/app.tsx preview %}
{% embed_file dropdownlist/value-field/func/useValueField.ts %}
{% embed_file dropdownlist/value-field/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
-   [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)
