---
title: Labels and Ticks
description: 'Manage the labels of the KendoReact RangeSlider in React projects.'
components: ["rangeslider"]
slug: labels_rangeslider
position: 3
---

# Labels and Ticks

You can provide names for specific RangeSlider values by defining labels along the track.

The labels are rendered by the [SliderLabel Component]({% slug api_inputs_sliderlabel %}). The [SliderLabel properties]({% slug api_inputs_sliderlabelprops %}) allow you to configure the content, position, title, and click handler of the RangeSlider.

{% meta height:130 %}
{% embed_file rangeslider/labels/func/app.tsx preview %}
{% embed_file rangeslider/labels/func/main.tsx %}
{% endmeta %}

## Ticks

The RangeSlider component provides the option to display ticks that doesn't have labels. To achieve this scenario you need to use the [SliderLabel Component]({% slug api_inputs_sliderlabel %}) component without defining content for it.

{% meta height:130 %}
{% embed_file rangeslider/steps/app.tsx preview %}
{% embed_file rangeslider/steps/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the RangeSlider Component]({% slug api_inputs_rangeslider %})
-   [API Reference of the RangeSlider Props]({% slug api_inputs_rangesliderprops %})
-   [API Reference of the SliderLabel Component]({% slug api_inputs_sliderlabel %})
-   [API Reference of the SliderLabel Props]({% slug api_inputs_sliderlabelprops %})
