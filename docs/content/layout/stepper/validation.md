---
title: "Validation"
description: "Get started with the KendoReact Stepper and configure steps validity in React projects."
components: ["stepper"]
slug: validation_stepper
position: 5
---

# Validation

The Stepper enables you to set validation logic for each step. Based on it, a success or error icon will be rendered. Validation icons are rendered either in the step indicator or as part of the step label, depending on the current Stepper configuration options.

## Setup

To set the step validation, use the [`isValid`]({% slug api_layout_stepprops %}#toc-isValid) property.



{% meta height:250 %}
{% embed_file stepper/validation/basic/func/app.tsx preview %}
{% embed_file stepper/validation/basic/func/main.tsx %}
{% endmeta %}


## Custom Validation Icons

The Stepper allows you to customize the rendered validation icons. To achieve this specify the [`successIcon`]({% slug api_layout_stepperprops %}#toc-successIcon) and [`errorIcon`]({% slug api_layout_stepperprops %}#toc-errorIcon) properties of the Stepper and provide the CSS classes (font icon classes) that should be applied to the icons.



{% meta height:250 %}
{% embed_file stepper/validation/icons/func/app.tsx preview %}
{% embed_file stepper/validation/icons/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the Stepper Props]({% slug api_layout_stepperprops %})
* [API Reference of the Step Props]({% slug api_layout_stepprops %})
