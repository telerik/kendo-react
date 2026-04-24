---
title: Labels & Ticks
description: 'Manage the labels and ticks of the KendoReact Slider in React projects.'
components: ["slider"]
slug: labels_slider
position: 3
---

# Labels & Ticks

You can provide names for specific Slider values by defining labels along the track.

The labels are rendered by the [SliderLabel Component]({% slug api_inputs_sliderlabel %}). The [SliderLabel properties]({% slug api_inputs_sliderlabelprops %}) allow you to configure the content, position, title, and click handler of the Slider.

{% meta height:130 %}
{% embed_file slider/labels/func/app.tsx preview %}
{% embed_file slider/labels/func/main.tsx %}
{% endmeta %}

## Ticks

The Slider component provides the option to display ticks that doesn't have labels. To achieve this scenario you need to use the [SliderLabel Component]({% slug api_inputs_sliderlabel %}) component without defining content for it.

{% meta height:130 %}
{% embed_file slider/steps/app.tsx preview %}
{% embed_file slider/steps/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Slider Component]({% slug api_inputs_slider %})
-   [API Reference of the Slider Props]({% slug api_inputs_sliderprops %})
-   [API Reference of the SliderLabel Component]({% slug api_inputs_sliderlabel %})
-   [API Reference of the SliderLabel Props]({% slug api_inputs_sliderlabelprops %})
