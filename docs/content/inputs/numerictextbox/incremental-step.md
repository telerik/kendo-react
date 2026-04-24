---
title: Incremental Steps
description: 'Manage the incremental steps of the KendoReact NumericTextBox in React projects.'
components: ["numerictextbox"]
slug: predefinedsteps_numerictextbox
position: 2
---

# Incremental Steps

You can define the step of the NumericTextBox through the [`step`]({% slug api_inputs_numerictextboxprops %}#toc-step) property.

When `step` is set, you can increase or decrease the value of the component that adopts the increment step by using the spin buttons or the `Up` and `Down` arrow keys. The example below showcases how to change the value with increments of `3` from it's current state.

{% meta height:200 %}
{% embed_file numerictextbox/step/func/app.tsx preview %}
{% embed_file numerictextbox/step/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

*   [API Reference of the NumericTextBox Props]({% slug api_inputs_numerictextboxprops %})
