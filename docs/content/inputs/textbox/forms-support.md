---
title: Forms Support
description: 'Integrate the KendoReact Form with the KendoReact TextBox component.'
components: ["textbox"]
slug: forms_support_textbox
position: 4
---

# Forms Support

The KendoReact TextBox component can be easily integrated with our [KendoReact Form]({% slug overview_form %}).
The form enables you to validate the TextBox and prevent the submission of the forms which are in an invalid state.

By utilizing the KendoReact Form component we can take advantage of the [Validation]({% slug validation_form %}) functionality and render additional custom component depending on the form's validity state.

{% meta height:520 %}
{% embed_file textbox/forms-support/validation/func/app.tsx preview %}
{% embed_file textbox/forms-support/validation/func/main.tsx %}
{% embed_file textbox/forms-support/validation/func/custom-text-box.tsx %}
{% embed_file textbox/forms-support/validation/func/validators.ts %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TextBox Props]({% slug api_inputs_textboxprops %})
-   [API Reference of the Form Component]({% slug api_form_form %})
