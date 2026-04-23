---
title: Creating a Color Gradient on RangeSlider in KendoReact
description: Learn how to style the RangeSlider component to display a color gradient representing a controlled color temperature range.
type: how-to
page_title: How to Add a Color Gradient to RangeSlider in React Applications
slug: rangeslider-with-color-gradient
tags: rangeslider, react, color-gradient, styling, custom-styles
res_type: kb
ticketid: 1663769
components: ["rangeslider"]
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>9.0.0</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact RangeSlider</td>
        </tr>
    </tbody>
</table>

## Description

This KB article answers the following questions:

-   How to customize the RangeSlider in React with a color gradient?
-   How to represent a color temperature range using the RangeSlider in React?
-   How to style the RangeSlider track and selection with custom colors in React?

## Solution

You can display a color gradient on the [RangeSlider](https://www.telerik.com/kendo-react-ui/components/inputs/range-slider/) component in a React application by customizing its default CSS styles. Apply a linear gradient to the slider's element and adjust the drag handle and selection background for a cohesive look. Here's how to achieve this styling:

```css
.k-slider.myRangeSlider {
    .k-slider-track {
        background: rgb(255, 199, 37);
        background: linear-gradient(90deg, rgba(255, 199, 37, 1) 19%, rgba(154, 208, 223, 1) 84%);
    }
    div.k-slider-selection {
        background-color: transparent;
    }

    .k-draghandle {
        background-color: white;
        border-width: 2px;
    }
}
```

By following these steps, you can successfully add a color gradient to the RangeSlider component in your React application as demonstrated in the following demo:

{% meta height:200 %}
{% embed_file inputs/rangeslider-color-gradient/app.jsx preview %}
{% embed_file inputs/rangeslider-color-gradient/main.jsx %}

{% endmeta %}

## See Also

-   [Official RangeSlider Documentation](https://www.telerik.com/kendo-react-ui/components/inputs/range-slider/)
-   [Customizing Component Styles in React](https://www.telerik.com/kendo-react-ui/components/styling/)
-   [React RangeSlider API](https://www.telerik.com/kendo-react-ui/components/inputs/api/RangeSlider/)
