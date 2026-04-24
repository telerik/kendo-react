---
title: Forms Support
description: 'Use the native HTML5 forms implementation of the KendoReact TimePicker component in React projects.'
components: ["timepicker"]
slug: forms_timepicker
position: 9
---

# Forms Support

The TimePicker supports a native KendoReact implementation of [HTML5 form validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation).

The forms supports enables you to validate input values and prevent the submission of forms which are in an invalid state.

## Functionality and Features

-   [Setting minimum validation requirements](#toc-setting-validation-requirements)
-   [Setting custom validation messages](#toc-setting-custom-validation-messages)
-   [Overriding the validity state](#toc-enforcing-the-validity-state)
-   [Disabling the visual representation of the validity state](#toc-disabling-the-validation-styling)

### Setting Validation Requirements

The TimePicker supports props for setting basic validation requirements&mdash;for example, the minimum and maximum time. The [`min`]({% slug api_dateinputs_timepickerprops %}#toc-min), [`max`]({% slug api_dateinputs_timepickerprops %}#toc-max), and [`required`]({% slug api_dateinputs_timepickerprops %}#toc-required) properties enable the user to pre-define minimum requirements which define the validity state of the component and allow a successful form submission.

{% meta height:550 %}
{% embed_file timepicker/forms/basic/func/app.tsx preview %}
{% embed_file timepicker/forms/basic/func/main.tsx %}
{% endmeta %}

### Setting Custom Validation Messages

You can implement custom error messages which will be displayed when the TimePicker is in an invalid state and the user tries to submit the form. To render a custom validation message, set the [`validationMessage`]({% slug api_dateinputs_timepickerprops %}#toc-validationmessage) prop.

{% meta height:550 %}
{% embed_file timepicker/forms/custom-message/func/app.tsx preview %}
{% embed_file timepicker/forms/custom-message/func/main.tsx %}
{% endmeta %}

### Enforcing the Validity State

The TimePicker enables you to set its validity state by utilizing its props. Setting the validity state allows for the implementation of complex validation scenarios that are based on multiple sources. To override the current validity state and apply the corresponding styles, use the [`valid`]({% slug api_dateinputs_timepickerprops %}#toc-valid) prop.

{% meta height:550 %}
{% embed_file timepicker/forms/override/func/app.tsx preview %}
{% embed_file timepicker/forms/override/func/main.tsx %}
{% endmeta %}

### Disabling the Validation Styling

By default, to achieve a visual representation of its invalid state, the TimePicker applies the `k-invalid` class name to the wrapping component. To disable the utilization of `k-invalid`, set the [`validityStyles`]({% slug api_dateinputs_timepickerprops %}#toc-validitystyles) property to `false`.

{% meta height:550 %}
{% embed_file timepicker/forms/disable-styles/func/app.tsx preview %}
{% embed_file timepicker/forms/disable-styles/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Time Picker](slug://overview_timepicker)
-   [API Reference of the TimePicker Props]({% slug api_dateinputs_timepickerprops %})
-   [React Date Inputs](slug:overview_dateinputs)
