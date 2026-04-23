---
title: Loading Remote Data
description: 'Learn how to display loading indicators when loading remote data to the KendoReact TreeList component'
components: ["treelist"]
slug: loading_treelist
position: 90
---

# Loading Remote Data

Load remote data to the TreeList component by either showing a loading indicator over the whole component when expanding a row, or by replacing the expand icon with a loading icon until the data finishes loading using custom cells.

## Loading indicator above the whole component

You can check when an item is expanded by checking if `event.value` if set to `false` in the `onExpandChange` event. In this case, set the `loading` state variable to `true` and set it to `null` when the data finishes its loading. Additionally, conditionally render the loading panel component when loading is true.

{% meta height:580 %}
{% embed_file loading/loading-component/app.tsx preview %}
{% embed_file loading/loading-component/main.tsx %}
{% endmeta %}

## Loading the expanded item

In this demo, we are also checking if an item is being expanded using the same approach. However, we are replacing the expanded icon with a loading icon for the expanded item using a [custom cell]({% slug cells_treelist %}) based on the value of `loadingID`.

{% meta height:580 %}
{% embed_file loading/loading-item/app.tsx preview %}
{% embed_file loading/loading-item/main.tsx %}
{% endmeta %}

## Suggested Links

-   [TreeList Cells]({% slug cells_treelist %})
-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
