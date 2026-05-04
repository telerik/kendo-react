---
title: Forms Support
description: 'Use the native HTML5 forms implementation of the KendoReact TextArea component in React projects.'
components: ['textarea']
slug: forms_support_textarea
position: 4
---

# Forms Support

The TextArea component can be easily integrated with [HTML5 form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) as well as [KendoReact Form]({% slug overview_form %}) (or other third-party solutions).

The form enables you to validate textarea value and prevent the submission of forms which are in an invalid state.

### Support for KendoReact Form

The KendoReact Form component [integrates with all KendoReact form components](https://www.telerik.com/kendo-react-ui/components/form/guidelines-with-examples/).

You can display error messages and fully customize the behavior of the rendered component by using the additional properties of the Field component.

The following example demonstrates how to render a required TextArea within a KendoReact Form component.

{% meta height:550 %}
{% embed_file textarea/forms/kendo-react-form/func/app.tsx preview %}
{% embed_file textarea/forms/kendo-react-form/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the TextArea]({% slug api_inputs_textarea %})
-   [API Reference of the TextAreaProps]({% slug api_inputs_textareaprops %})
