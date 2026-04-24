---
title: Customization
description: 'Learn how to customize the Rating component and use it in React projects.'
components: ["rating"]
slug: item_customization_ratingitem
position: 9
---

# RatingItem and Rating component

The KendoReact RatingItem enables the user to implement different styles for the RatingItem children.

## RatingItem customization

The RatingItem component could be used for customization of the existing rating item. The following example demonstrates the RatingItem in action, changing the icon visualization to `heartIcon` SvgIcon, based on the existing RatingItem rendering.

{% meta height:130 %}
{% embed_file rating/rating-item/overview/func/app.tsx preview %}
{% embed_file rating/rating-item/overview/func/main.tsx %}
{% endmeta %}

## RatingItem override

The RatingItem look can be also completely changed and override the existing RatingItem rendering. The following example uses new custom rendering for the RatingItem - overwriting the old look. It also sets new custom labels.

{% meta height:150 %}
{% embed_file rating/rating-item/advanced/func/app.tsx preview %}
{% embed_file rating/rating-item/advanced/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [Rating icon prop]({% slug icon_rating %})
-   [KendoReact Icons Article]({% slug icons %})
-   [API Reference of the Rating props]({% slug api_inputs_ratingprops %})
-   [API Reference of the Rating Component]({% slug api_inputs_rating %})
