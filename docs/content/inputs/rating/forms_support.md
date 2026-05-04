---
title: Forms Support
description: 'Integrate the KendoReact Form with the KendoReact Rating.'
components: ['rating']
slug: forms_support_rating
position: 10
---

# Forms Support

The Rating component can be easily integrated with our [KendoReact Form]({% slug overview_form %}) as well as the [HTML5 form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) (or other third-party solutions).

The form enables you to validate the rating and prevent the submission of forms which are in an invalid state.

### Support for KendoReact Form

The KendoReact Form component [integrates with all KendoReact components](https://www.telerik.com/kendo-react-ui/components/form/custom-components/).

You can display error messages and fully customize the behavior of the rendered component by using the additional properties of the Field component.

The following example demonstrates how to render a required Rating within a KendoReact Form component.

{% meta height:500 %}
{% embed_file rating/forms/func/app.tsx preview %}
{% embed_file rating/forms/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

*   [API Reference of the Rating Component]({% slug api_inputs_rating %})
*   [API Reference of the Rating props]({% slug api_inputs_ratingprops %})
*   [Keyboard Navigation]({% slug keyboard_navigation_rating %})
