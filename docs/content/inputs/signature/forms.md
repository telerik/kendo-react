---
title: Forms Support
description: "Use the native HTML5 forms implementation of the KendoReact Signature component in React projects."
components: ["signature"]
slug: forms_signature
position: 3
---

# Forms Support

The Signature component can be easily integrated with our [KendoReact Form]({% slug overview_form %}) as well as the [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) (or other third-party solutions).

The forms supports enables you to validate input values and prevent the submission of forms which are in an invalid state.

## Using with KendoReact Form

The [KendoReact Form component](https://www.telerik.com/kendo-react-ui/components/form/custom-components/) integrates with all KendoReact components.

You can display error messages and fully customize the behavior of the rendered component by using the additional properties of the Field component.

The following example demonstrates how to render a required Signature within a KendoReact Form component.

{% meta height:450 %}
{% embed_file signature/forms/kendo/func/app.tsx preview %}
{% embed_file signature/forms/kendo/func/main.tsx %}
{% endmeta %}

## Suggested Links

* [API Reference of the Signature Props]({% slug api_inputs_signatureprops %})
