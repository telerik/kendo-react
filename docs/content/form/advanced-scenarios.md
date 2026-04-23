---
title: Advanced Scenarios
description: 'Get started with the KendoReact Form component and use its configuration options to implement advanced use-case scenarios.'
components: ["form"]
slug: common_scenarios_form
position: 4
---

# Advanced Scenarios

The Form enables you to implement advanced use-case scenarios by using the [`FormRenderProps`]({% slug api_form_formrenderprops %}) that are passed to the rendered component.

-   [Reading the Field State](#reading-the-field-state)
-   [Changing the Field Value](#changing-the-field-value)

## Reading the Field State

You can read the field state without using the KendoReact Field component by utilizing the [`valueGetter`]({% slug api_form_formrenderprops %}#toc-valuegetter) function in the [`FormRenderProps`]({% slug api_form_formrenderprops %}).

{% meta height:280 %}
{% embed_file advanced/reading/func/app.tsx preview %}
{% embed_file advanced/reading/func/main.tsx %}
{% endmeta %}

## Changing the Field Value

You can emit the field changes without using the KendoReact Field component by utilizing the [`onChange`]({% slug api_form_formrenderprops %}#toc-onchange) callback in the [`FormRenderProps`]({% slug api_form_formrenderprops %}).

{% meta height:260 %}
{% embed_file advanced/changing/func/app.tsx preview %}
{% embed_file advanced/changing/func/main.tsx %}
{% endmeta %}

## Resetting the Form Initial State

You can dynamically reset (update) the Form initial value, by setting a key to the Form component and updating it.

This is very useful when we have to dynamically populate the Form with a new information.

In the following example we will dynamically load a new user information.

{% meta height:520 %}
{% embed_file advanced/dynamic-reset/func/app.tsx preview %}
{% embed_file advanced/dynamic-reset/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Form](slug://overview_form)
-   [API Reference of the Form]({% slug api_form %})
