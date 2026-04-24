---
title: Forms Support
description: 'Use the native HTML5 forms implementation of the KendoReact MaskedTextBox component in React projects.'
components: ["maskedtextbox"]
slug: forms_maskedtextbox
position: 7
---

# Forms Support

The MaskedTextBox supports a native KendoReact implementation of [HTML5 form validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation).

The forms supports enables you to validate input values and prevent the submission of forms which are in an invalid state.

## Functionality and Features

-   [Setting the validation requirements](#toc-setting-validation-requirements)
-   [Setting custom validation messages](#toc-setting-custom-validation-messages)
-   [Overriding the validity state](#toc-enforcing-the-validity-state)
-   [Disabling the visual representation of the validity state](#toc-disabling-the-validation-styling)

### Setting Validation Requirements

The MaskedTextBox provides an option for setting validation requirements. The [`required`]({% slug api_inputs_maskedtextboxprops %}#toc-required) property defines the validity state of the component and allows a successful form submission.

{% meta height:450 %}
{% embed_file maskedtextbox/forms/basic/func/app.tsx preview %}
{% embed_file maskedtextbox/forms/basic/func/main.tsx %}
{% endmeta %}

### Setting Custom Validation Messages

You can implement custom error messages which will be displayed when the MaskedTextBox is in an invalid state and the user tries to submit the form. To render a custom validation message, set the [`validationMessage`]({% slug api_inputs_maskedtextboxprops %}#toc-validationMessage) prop.

{% meta height:450 %}
{% embed_file maskedtextbox/forms/custom-message/func/app.tsx preview %}
{% embed_file maskedtextbox/forms/custom-message/func/main.tsx %}
{% endmeta %}

### Enforcing the Validity State

The MaskedTextBox enables you to set its validity state by utilizing its props. Setting the validity state allows for the implementation of complex validation scenarios that are based on multiple sources. To override the current validity state and apply the corresponding styles, use the [`valid`]({% slug api_inputs_maskedtextboxprops %}#toc-valid) prop.

{% meta height:450 %}
{% embed_file maskedtextbox/forms/override/func/app.tsx preview %}
{% embed_file maskedtextbox/forms/override/func/main.tsx %}
{% endmeta %}

### Disabling the Validation Styling

By default, to achieve a visual representation of its invalid state, the MaskedTextBox applies the `k-invalid` class name to the wrapping component. To disable the utilization of `k-invalid`, set the [`validityStyles`]({% slug api_inputs_maskedtextboxprops %}#toc-validityStyles) property to `false`.

{% meta height:450 %}
{% embed_file maskedtextbox/forms/disable-styles/func/app.tsx preview %}
{% embed_file maskedtextbox/forms/disable-styles/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

*   [API Reference of the MaskedTextBox Props]({% slug api_inputs_maskedtextboxprops %})
