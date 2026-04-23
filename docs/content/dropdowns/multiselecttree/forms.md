---
title: Forms Support
description: 'Use the native HTML5 forms implementation of the KendoReact MultiSelectTree component in React projects.'
components: ["multiselecttree"]
slug: forms_multiselecttree
position: 4
---

# Forms Support

The MultiSelectTree supports a native KendoReact implementation of [HTML5 form validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation).

The forms supports enables you to validate input values and prevent the submission of forms which are in an invalid state.

## Functionality and Features

-   [Settings minimum validation requirements](#toc-setting-validation-requirements)
-   [Setting custom validation messages](#toc-setting-custom-validation-messages)
-   [Overriding the validity state](#toc-enforcing-the-validity-state)
-   [Disabling the visual representation of the validity state](#toc-disabling-the-validation-styling)

### Setting Validation Requirements

The MultiSelectTree supports props for setting basic validation requirements. The [`required`]({% slug api_dropdowns_multiselecttreeprops %}#toc-required) property enables the user to pre-define a selection that is required for a successful form submission.

{% meta height:360 %}
{% embed_file multiselecttree/forms/basic/func/app.tsx preview %}
{% embed_file multiselecttree/forms/basic/func/main.tsx %}
{% endmeta %}

### Setting Custom Validation Messages

You can implement custom error messages which will be displayed when the MultiSelectTree is in an invalid state and the user tries to submit the form. To render a custom validation message, set the [`validationMessage`]({% slug api_dropdowns_multiselecttreeprops %}#toc-validationMessage) prop.

{% meta height:360 %}
{% embed_file multiselecttree/forms/custom-message/func/app.tsx preview %}
{% embed_file multiselecttree/forms/custom-message/func/main.tsx %}
{% endmeta %}

### Enforcing the Validity State

The MultiSelectTree enables you to set its validity state by utilizing its exposed props. Setting the validity state allows for the implementation of complex validation scenarios. To override the current validity state and apply the corresponding styles, use the [`valid`]({% slug api_dropdowns_multiselecttreeprops %}#toc-valid) prop.

{% meta height:360 %}
{% embed_file multiselecttree/forms/override/func/app.tsx preview %}
{% embed_file multiselecttree/forms/override/func/main.tsx %}
{% endmeta %}

### Disabling the Validation Styling

By default, to achieve a visual representation of its invalid state, the MultiSelectTree applies the `k-invalid` class name to the wrapping component. To disable the utilization of `k-invalid`, set the [`validityStyles`]({% slug api_dropdowns_multiselecttreeprops %}#toc-validityStyles) property to `false`.

{% meta height:360 %}
{% embed_file multiselecttree/forms/disable-styles/func/app.tsx preview %}
{% embed_file multiselecttree/forms/disable-styles/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiSelectTree Props]({% slug api_dropdowns_multiselecttreeprops %})
