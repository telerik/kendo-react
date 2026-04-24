---
title: Forms support
description: "Use the native HTML5 forms implementation of the KendoReact Switch component in React projects."
components: ["switch"]
slug: forms_support_switch
position: 9
---

# Forms Support

The Switch component can be easily integrated with [HTML5 form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) as well as [KendoReact Form]({% slug overview_form %}) (or other third-party solutions).

The forms supports enables you to validate switch values and prevent the submission of forms which are in an invalid state.

> In addition to the exposed form support settings, the [Switch]({% slug api_inputs_switch %}) provides the same properties and behaves in the same way as a native HTML [`input[type=checkbox]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) element.

## Functionality and Features

* [Support for KendoReact Form and Setting Custom Behavior](#toc-support-for-kendoreact-form)
* [Setting Validation Requirements](#toc-setting-validation-requirements)
* [Setting Custom Validation Messages](#toc-setting-custom-validation-messages)

### Support for KendoReact Form and  Setting Custom Behavior
The KendoReact Form component [integrates with all KendoReact components](https://www.telerik.com/kendo-react-ui/components/form/custom-components/).

You can display error messages and fully customize the behavior of the rendered component by using the additional properties of the Field component.

The following example demonstrates how to render a required custom switch.



{% meta height:570 %}
{% embed_file switch/forms/kendo-react-form/func/app.tsx preview %}
{% embed_file switch/forms/kendo-react-form/func/main.tsx %}
{% endmeta %}



### Setting Validation Requirements

The Switch supports props for setting basic validation requirements. For example, the [`required`]({% slug api_inputs_switchprops %}#toc-required) property which enables the successful form submission.



{% meta height:600 %}
{% embed_file switch/forms/disable-styles/func/app.tsx preview %}
{% embed_file switch/forms/disable-styles/func/main.tsx %}
{% endmeta %}



### Setting Custom Validation Messages

You can implement custom error messages which will be displayed if the Switch is not turned on and the user tries to submit the form. To render a custom validation message, set the [`validationMessage`]({% slug api_inputs_switchprops %}#toc-validationmessage) prop.



{% meta height:600 %}
{% embed_file switch/forms/custom-message/func/app.tsx preview %}
{% embed_file switch/forms/custom-message/func/main.tsx %}
{% endmeta %}



## Suggested Links

* [API Reference of the Switch Props]({% slug api_inputs_switchprops %})
