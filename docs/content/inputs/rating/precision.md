---
title: Precision
description: 'Sets the precision mode of the KendoReact Rating in React projects.'
components: ['rating']
slug: precision_rating
position: 2
---

# Precision Mode

By default, the Rating precision is set to `item`.

To change the component precision, set its [`precision`]({% slug api_inputs_ratingprops %}#toc-precision) property to `half`. Setting the new value enables the user to select half value on the component icons.

{% meta height:290 %}
{% embed_file rating/precision/func/app.tsx preview %}
{% embed_file rating/precision/func/main.tsx %}
{% endmeta %}

## Enabling First Item Half Selection

The `min` value is represented by the first rendered `item`. Because of this the component does not allow selecting the first half of the fist `item` since it's value is out of the defined `min-max` range.

The Rating does support first item half selection when the defined `min-max` range enables `even` number of possible selections.

For Example, the following configurations allows for a total of `5` possible values, which is an `odd` number of possible selection. This means that the `Rating` should disable `half` selection for one of the items.

```jsx-no-run
    <Rating
        min={1}
        max={3}
        precision={"half"}
    />
```

The possible values in the range of `[1-3]` are: `1`, `1.5`, `2`, `2.5` and `3`

If the application design requires us to enable `first-item half-selection`, it can be achieved by adding a sixth possible value for `0.5`.

```jsx-no-run
    <Rating
        min={0.5}
        max={3}
        precision={"half"}
    />
```

Now, the possible values in the range of `[0.5-3]` are: `0.5`, `1`, `1.5`, `2`, `2.5` and `3`
The `Rating` component will detect such use-cases when the `precision` is set to `half` and render the `0.5` value as the first-half of the first-item.

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

*   [API Reference of the RatingProps]({% slug api_inputs_ratingprops %})
