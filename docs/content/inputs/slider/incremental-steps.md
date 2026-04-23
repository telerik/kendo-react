---
title: Incremental Steps
description: "Learn more on the Slider incremental steps and how to use them in React projects."
components: ["slider"]
slug: incremental_steps_slider
position: 1
---

# Incremental Steps

You can configure the way the Slider divides its range and updates the value by using the step options.

## Step

To specify the value by which the Slider increases or decreases, use the [`step`]({% slug api_inputs_sliderprops %}#toc-step) property. The following example demonstrates how to adjust the step value, allowing increments of `5`

{% meta height:150 %}
{% embed_file slider/incremental-steps/steps/app.tsx preview %}
{% embed_file slider/incremental-steps/steps/main.tsx %}
{% endmeta %}

## Large Steps

To define the large step of the Slider, use the [`largeStep`]({% slug api_inputs_sliderprops %}#toc-largestep) property. The `largeStep` value determines the step with which the Slider will be updated when the `Page U`p and `Page Down` arrow keys are pressed,

{% meta height:400 %}
{% embed_file slider/incremental-steps/large-steps/app.tsx preview %}
{% embed_file slider/incremental-steps/large-steps/main.tsx %}
{% endmeta %}

## Suggested Links

* [Getting Started with the KendoReact Inputs]({% slug getstarted_inputs %})
* [Getting Started with KendoReact](https://www.telerik.com/kendo-react-ui/components/getting-started/)
* [API Reference of the Slider Component]({% slug api_inputs_slider %})
