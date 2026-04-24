---
title: Selection Mode
description: 'Use the selection mode of the KendoReact ChipList in React projects.'
components: ["chiplist"]
slug: selectionmode_chiplist
position: 2
---

# Selection Mode

The ChipList provides options for different selection modes.
The supported selection modes are `single`, `multiple` or `none`(default).

-   [None Selection](#toc-none-selection)
-   [Single Selection](#toc-single-selection)
-   [Multiple Selection](#toc-multiple-selection)

## Default Selection

The ChipList component supports initial selection of specified chip items. This can be achieved by using the [`defaultValue`]({% slug api_buttons_chiplistprops %}#toc-selection) property and specifying the values for the initial selection.

{% meta height:130 %}
{% embed_file chiplist/selection/default/func/app.tsx preview %}
{% embed_file chiplist/selection/default/func/main.tsx %}
{% endmeta %}

## None Selection

To set the selection mode of the ChipList to `none` and disable all selections leave the default `selection` value which is set to `none` or set it manually - [`selection`]({% slug api_buttons_chiplistprops %}#toc-selection) property to be equal to `none`.

{% meta height:130 %}
{% embed_file chiplist/selection/none/func/app.tsx preview %}
{% embed_file chiplist/selection/none/func/main.tsx %}
{% endmeta %}

## Single Selection

To enable the single selection mode of the ChipList set the [`selection`]({% slug api_buttons_chiplistprops %}#toc-selection) property to be equal to `single`.

{% meta height:130 %}
{% embed_file chiplist/selection/single/func/app.tsx preview %}
{% embed_file chiplist/selection/single/func/main.tsx %}
{% endmeta %}

## Multiple Selection

To enable the multiple selection mode of the ChipList set the [`selection`]({% slug api_buttons_chiplistprops %}#toc-selection) property to be equal to `multiple`.

{% meta height:130 %}
{% embed_file chiplist/selection/multiple/func/app.tsx preview %}
{% embed_file chiplist/selection/multiple/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ChipList]({% slug api_buttons_chiplistprops %})
