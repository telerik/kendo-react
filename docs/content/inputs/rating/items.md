---
title: Number Of Items
description: "Sets the number of items of the KendoReact Rating in React projects."
components: ["rating"]
slug: items_rating
position: 3
---

# Default Items

By default, the Rating renders five items.

{% meta height:130 %}
{% embed_file rating/items/default-items/app.tsx preview %}
{% embed_file rating/items/default-items/main.tsx %}
{% endmeta %}


To set different number of items to the Rating component set it's [`max`]({% slug api_inputs_ratingprops %}#toc-max) or [`min`]({% slug api_inputs_ratingprops %}#toc-min) property to the desired amount of items.

The following example demonstrates the behavior in action.

{% meta height:160 %}
{% embed_file rating/items/func/app.tsx preview %}
{% embed_file rating/items/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [Rating Item customization]({% slug item_customization_ratingitem %})
* [API Reference of the RatingProps]({% slug api_inputs_ratingprops %})
