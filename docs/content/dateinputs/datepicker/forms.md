---
title: Forms Support
description: 'Use the native HTML5 forms implementation of the KendoReact DatePicker component in React projects.'
components: ["datepicker"]
slug: forms_datepicker
position: 17
---

# Forms Support

[The React DatePicker component]({% slug overview_datepicker %}) supports a native KendoReact implementation of [HTML5 form validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation).

The forms supports enables you to validate input values and prevent the submission of forms which are in an invalid state.

<div data-component="StartKendoReactFreeSection"></div>

## Functionality and Features

-   [Setting minimum validation requirements](#toc-setting-validation-requirements)
-   [Setting custom validation messages](#toc-setting-custom-validation-messages)
-   [Overriding the validity state](#toc-enforcing-the-validity-state)
-   [Disabling the visual representation of the validity state](#toc-disabling-the-validation-styling)

### Setting Validation Requirements

The DatePicker supports props for setting basic validation requirements&mdash;for example, the minimum and maximum date. The [`min`]({% slug api_dateinputs_datepickerprops %}#toc-min), [`max`]({% slug api_dateinputs_datepickerprops %}#toc-max), and [`required`]({% slug api_dateinputs_datepickerprops %}#toc-required) properties enable the user to pre-define minimum requirements which define the validity state of the component and allow a successful form submission.

{% meta height:530 %}
{% embed_file datepicker/forms/basic/func/app.tsx preview %}
{% embed_file datepicker/forms/basic/func/main.tsx %}
{% endmeta %}

### Setting Custom Validation Messages

You can implement custom error messages which will be displayed when the DatePicker is in an invalid state and the user tries to submit the form. To render a custom validation message, set the [`validationMessage`]({% slug api_dateinputs_datepickerprops %}#toc-validationmessage) prop.

{% meta height:530 %}
{% embed_file datepicker/forms/custom-message/func/app.tsx preview %}
{% embed_file datepicker/forms/custom-message/func/main.tsx %}
{% endmeta %}

### Enforcing the Validity State

The DatePicker enables you to set its validity state by utilizing its props. Setting the validity state allows for the implementation of complex validation scenarios that are based on multiple sources. To override the current validity state and apply the corresponding styles, use the [`valid`]({% slug api_dateinputs_datepickerprops %}#toc-valid) prop.

{% meta height:630 %}
{% embed_file datepicker/forms/override/func/app.tsx preview %}
{% embed_file datepicker/forms/override/func/main.tsx %}
{% endmeta %}

### Disabling the Validation Styling

By default, to achieve a visual representation of its invalid state, the DatePicker applies the `k-invalid` class name to the wrapping component. To disable the utilization of `k-invalid`, set the [`validityStyles`]({% slug api_dateinputs_datepickerprops %}#toc-validitystyles) property to `false`.

{% meta height:570 %}
{% embed_file datepicker/forms/disable-styles/func/app.tsx preview %}
{% embed_file datepicker/forms/disable-styles/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DatePicker Props]({% slug api_dateinputs_datepickerprops %})
-   [React Date Inputs](slug:overview_dateinputs)
