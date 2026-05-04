---
title: Forms Support
description: 'Use the native HTML5 forms implementation of the KendoReact MultiSelect component in React projects.'
components: ['multiselect']
slug: forms_multiselect
position: 80
---

# Forms Support

The MultiSelect supports a native KendoReact implementation of [HTML5 form validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation).

The forms supports enables you to validate input values and prevent the submission of forms which are in an invalid state.

## Functionality and Features

-   [Settings minimum validation requirements](#toc-setting-validation-requirements)
-   [Setting custom validation messages](#toc-setting-custom-validation-messages)
-   [Overriding the validity state](#toc-enforcing-the-validity-state)
-   [Disabling the visual representation of the validity state](#toc-disabling-the-validation-styling)

### Setting Validation Requirements

The MultiSelect supports props for setting basic validation requirements. The [`required`]({% slug api_dropdowns_multiselectprops %}#toc-required) property enables the user to pre-define a selection that is required for a successful form submission.

{% meta height:450 %}
{% embed_file multiselect/forms/basic/func/app.tsx preview %}
{% embed_file multiselect/forms/basic/func/main.tsx %}
{% embed_file multiselect/forms/basic/func/shop.ts %}
{% endmeta %}

### Setting Custom Validation Messages

You can implement custom error messages which will be displayed when the MultiSelect is in an invalid state and the user tries to submit the form. To render a custom validation message, set the [`validationMessage`]({% slug api_dropdowns_multiselectprops %}#toc-validationmessage) prop.

{% meta height:450 %}
{% embed_file multiselect/forms/custom-message/func/app.tsx preview %}
{% embed_file multiselect/forms/custom-message/func/main.tsx %}
{% embed_file multiselect/forms/custom-message/func/shop.ts %}
{% endmeta %}

### Enforcing the Validity State

The MultiSelect enables you to set its validity state by utilizing its exposed props. Setting the validity state allows for the implementation of complex validation scenarios that are based on multiple sources. To override the current validity state and apply the corresponding styles, use the [`valid`]({% slug api_dropdowns_multiselectprops %}#toc-valid) prop.

{% meta height:580 %}
{% embed_file multiselect/forms/override/func/app.tsx preview %}
{% embed_file multiselect/forms/override/func/main.tsx %}
{% embed_file multiselect/forms/override/func/shop.ts %}
{% endmeta %}

### Disabling the Validation Styling

By default, to achieve a visual representation of its invalid state, the MultiSelect applies the `k-invalid` class name to the wrapping component. To disable the utilization of `k-invalid`, set the [`validityStyles`]({% slug api_dropdowns_multiselectprops %}#toc-validityStyles) property to `false`.

{% meta height:580 %}
{% embed_file multiselect/forms/disable-styles/func/app.tsx preview %}
{% embed_file multiselect/forms/disable-styles/func/main.tsx %}
{% embed_file multiselect/forms/disable-styles/func/shop.ts %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the MultiSelect Props]({% slug api_dropdowns_multiselectprops %})
