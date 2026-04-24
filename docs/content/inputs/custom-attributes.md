---
title: Custom attributes
description: 'Implement custom attributes in the KendoReact Inputs components.'
components: ["checkbox", "colorgradient", "colorpalette", "colorpicker", "flatcolorpicker", "input", "maskedtextbox", "numerictextbox", "radiobutton", "radiogroup", "rangeslider", "rating", "signature", "slider", "switch", "textarea", "textbox"]
slug: custom_attr_inputs
position: 40
---

# Custom Attributes

The following code demonstrates how to add another [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes) to any of the input components. The first step is to implement the ref of the component. Having the ref, use the `setAttribute` functionality on it and add the desired attribute and value.

The example includes adding `form` attribute in the Input, Rating and RangeSlider components.

{% meta height:250 %}
{% embed_file attribute/func/app.tsx preview %}
{% embed_file attribute/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Input Component]({% slug api_inputs_inputprops %})
-   [Get Started with the Rating]({% slug overview_rating %})
-   [Get Started with the RangeSlider]({% slug overview_rangeslider %})
