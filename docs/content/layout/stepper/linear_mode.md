---
title: "Linear Mode"
description: "Get started with the KendoReact Stepper and set its linear flow mode in React projects."
components: ["stepper"]
slug: linear_mode_stepper
position: 3
---

# Linear Mode

The Stepper enables you to set its steps flow using the [`linear`]({% slug api_layout_stepperprops %}#toc-linear) Boolean property. By default, `linear` is set to `false`.

When the `linear` property is set to `true`, the Stepper will require to complete the previous step before proceeding to the next one.

The following example demonstrates how to configure a linear flow of the Stepper:



{% meta height:150 %}
{% embed_file stepper/linear/func/app.tsx preview %}
{% embed_file stepper/linear/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the Stepper Props]({% slug api_layout_stepperprops %})

