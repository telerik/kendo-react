---
title: Form Support
description: "Learn how to use the KendoReact RadioButton in forms"
components: ["radiobutton"]
slug: formsupport_radiobutton
position: 4
---

# Form Support

The RadioButton component can be easily integrated with [HTML5 form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) as well as [KendoReact Form]({% slug overview_form %}) (or other third-party solutions).

The form enables you to validate checkbox values and prevent the submission of forms which are in an invalid state.

{% meta height:600 %}
{% embed_file radiobutton/form-support/app.tsx preview %}
{% embed_file radiobutton/form-support/main.tsx %}
{% endmeta %}

## Validation Control

The [`valid`]({% slug api_inputs_radiobuttonprops %}#toc-valid) property allows you to manually control whether a field appears valid or invalid. If `valid` is set, the `required` property will be ignored.

The following example demonstrates how the `valid` prop works. To submit the form, enter the `FREESHIP ` code.

{% meta height:500 %}
{% embed_file radiobutton/form-support/valid/app.tsx preview %}
{% embed_file radiobutton/form-support/valid/main.tsx %}
{% endmeta %}
