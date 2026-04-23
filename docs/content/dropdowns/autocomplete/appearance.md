---
title: Appearance
description: 'Add alternative styling options to the KendoReact AutoComplete in React projects.'
components: ['autocomplete']
slug: appearance_autocomplete
position: 8
---

# Appearance

The AutoComplete provides a predefined set of appearance options.

Apart from the default vision of the AutoComplete, these alternative styling options enable you to configure each individual aspect of the appearance of a AutoComplete.

## Size

You can set the size of the AutoComplete through the [`size`]({% slug api_dropdowns_autocompleteprops %}#toc-size) property. The AutoComplete component comes in three different sizes: `small`, `medium` (default), and `large`.

{% meta height:310 %}
{% embed_file autocomplete/appearance/size/func/app.tsx preview %}
{% embed_file autocomplete/appearance/size/func/main.tsx %}
{% endmeta %}

## Fill Mode

You can set the fill mode of the AutoComplete through the [`fillMode`]({% slug api_dropdowns_autocompleteprops %}#toc-fillmode) property. The AutoComplete provides three different fill mode options: `solid` (default), `outline`, and `flat`.

{% meta height:310 %}
{% embed_file autocomplete/appearance/fillMode/func/app.tsx preview %}
{% embed_file autocomplete/appearance/fillMode/func/main.tsx %}
{% endmeta %}

## Rounded

You can set the roundness of the AutoComplete through the [`rounded`]({% slug api_dropdowns_autocompleteprops %}#toc-rounded) property. The AutoComplete component supports five different degrees of roundness: `small`, `medium` (default), `large`, `full`, and `none`.

{% meta height:400 %}
{% embed_file autocomplete/appearance/rounded/func/app.tsx preview %}
{% embed_file autocomplete/appearance/rounded/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the AutoComplete]({% slug api_dropdowns_autocomplete %})
-   [AutoComplete `size` options]({% slug api_dropdowns_autocompleteprops %}#toc-size)
-   [AutoComplete `rounded` options]({% slug api_dropdowns_autocompleteprops %}#toc-rounded)
-   [AutoComplete `fillMode` options]({% slug api_dropdowns_autocompleteprops %}#toc-fillmode)
-   [Creating Custom Styles]({% slug themebuilder %})
