---
title: Color Contrast Tool
description: "Use the KendoReact ColorGradient to check the color contrast of two colors in React projects."
components: ["colorgradient"]
slug: colorcontrast_colorgradient
position: 5
---


# Color Contrast Tool

The ColorGradient component provides options for checking the color contrast ratio between two colors. Color contrast between text and background is important on web pages. It affects some people’s ability to perceive the information.

This tool follows the Web Content Accessibility Guidelines (WCAG), which are a series of recommendations for making the web more accessible.

Regarding colors, the WCAG standard defines two levels of contrast ratio:
* `AA (minimum contrast)`&mdash;The level AA requires a contrast ratio of at least 4.5:1 for normal text.
* `AAA (enhanced contrast)`&mdash;The level AAA requires a contrast ratio of at least 7:1 for normal text.

To enable the functionality, set its [`backgroundColor`]({% slug api_inputs_colorpickergradientsettings %}#toc-backgroundColor) property.

The following example demonstrates how to display the Color Contrast tool in the ColorGradient.

{% meta height:550 %}
{% embed_file colorgradient/colorcontrast/func/app.tsx preview %}
{% embed_file colorgradient/colorcontrast/func/main.tsx %}
{% endmeta %}

## Suggested Links

* [API Reference of the ColorGradient]({% slug api_inputs_colorgradient %})
