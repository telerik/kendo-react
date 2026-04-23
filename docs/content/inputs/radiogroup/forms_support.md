---
title: Forms support
description: "Use the native HTML5 forms implementation of the KendoReact RadioGroup component in React projects."
components: ["radiogroup"]
slug: forms_support_radiogroup
position: 5
---

# Forms Support

The RadioGroup component can be easily integrated with our [KendoReact Form]({% slug overview_form %}) as well as the [HTML5 form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) (or other third-party solutions).

The form enables you to validate the radio group and prevent the submission of forms which are in an invalid state.


### Support for KendoReact Form
The KendoReact Form component [integrates with all KendoReact components](https://www.telerik.com/kendo-react-ui/components/form/custom-components/).

You can display error messages and fully customize the behavior of the rendered component by using the additional properties of the Field component.

The following example demonstrates how to render a required RadioGroup within a KendoReact Form component.

{% meta height:550 %}
{% embed_file radiogroup/forms/func/app.tsx preview %}
{% embed_file radiogroup/forms/func/main.tsx %}
{% endmeta %}

## Suggested Links

* [API Reference of the RadioGroupProps]({% slug api_inputs_radiogroupprops %})
