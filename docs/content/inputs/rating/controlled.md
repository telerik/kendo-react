---
title: Controlled Mode
description: 'Control the value of the KendoReact Rating in React projects.'
components: ['rating']
slug: controlled_rating
position: 9
---

# Controlled Mode

By default, the Rating is in an uncontrolled state.

Set the [defaultValue]({% slug api_inputs_ratingprops %}#toc-defaultValue) property if you want to stay in uncontrolled mode.

To control the state of the Rating:

1. Use its [`value`]({% slug api_inputs_ratingprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_ratingprops %}#toc-onchange) event.
1. Pass the new value through the props.

{% meta height:160 %}
{% embed_file rating/controlled/func/app.tsx preview %}
{% embed_file rating/controlled/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

*   [API Reference of the Rating]({% slug api_inputs_rating %})
