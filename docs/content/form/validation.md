---
title: Validation
description: 'Get started with the KendoReact Form and validation.'
components: ["form"]
slug: validation_form
position: 5
---

# Validation

The KendoReact Form provides comprehensive validation capabilities through different approaches:

-   [Validation with errors and onChange](#validation-with-errors-and-onchange)
-   [Async Validation with Debouncing](#async-validation-with-debouncing)
-   [Field Validation](#field-validation)
-   [FieldArray Validation](#fieldarray-validation)
-   [Form Validation](#form-validation)

## Validation with errors and onChange

The [`errors`]({% slug api_form_formprops %}#toc-errors) and [`onChange`]({% slug api_form_formprops %}#toc-onChange) props provide a flexible validation approach for various scenarios:

- Client-side validation
- Server-side validation
- Async validation with debouncing
- Cross-field validation
- Progressive validation states (loading, error, success)

The `errors` prop accepts an object mapping field names to error messages and takes precedence over all other validation mechanisms. The `onChange` prop provides a centralized handler that fires whenever any field value changes, receiving the field name, new value, and a function to access other field values.

To use validation with `errors` and `onChange`, follow these steps:

1. Define a state to store validation errors using the `useState` hook.
1. Set the [`errors`]({% slug api_form_formprops %}#toc-errors) prop of the Form to pass the validation errors.
1. Handle the [`onChange`]({% slug api_form_formprops %}#toc-onChange) event to clear errors as users modify fields.
1. Perform validation in your submit handler and update the errors state with results from server or client validation.

The following example demonstrates both client-side and server-side validation using the `errors` and `onChange` props. To trigger server-side validation, enter `admin` in the username field and `test@blocked.com` in the email field.

{% meta height:600 %}
{% embed_file client-server-validation/app.tsx preview %}
{% embed_file client-server-validation/serverMock.ts %}
{% embed_file client-server-validation/main.tsx %}
{% endmeta %}

## Async Validation with Debouncing

The `errors` and `onChange` props enable asynchronous validation patterns without modifying the existing validator system. This is particularly useful for:

- Real-time availability checks (usernames, email addresses)
- API-based validation that requires network calls
- Debounced validation to reduce server load
- Progressive validation states (loading, error, success)

To implement async validation with debouncing, follow these steps:

1. Create a state to store validation errors and a ref to track the debounce timer.
1. Handle the [`onChange`]({% slug api_form_formprops %}#toc-onChange) event and check if the changed field requires async validation.
1. Clear any existing debounce timer to reset the delay on subsequent changes.
1. Set a new timer using `setTimeout` to delay the validation call.
1. Perform the async validation (API call) when the timer expires.
1. Update the [`errors`]({% slug api_form_formprops %}#toc-errors) prop with the validation results.

The following example demonstrates async validation with debouncing for username availability checks.

{% meta height:380 %}
{% embed_file async-validators-with-debounce/app.tsx preview %}
{% embed_file async-validators-with-debounce/main.tsx %}
{% endmeta %}

## Field Validation

Field level validation is useful for synchronous validation of single field values (e.g., checking if a field is a valid email). The validation function receives `value` as the first argument and returns a validation message if the value is not valid.

You can setup field validation using the [`validator`]({% slug api_form_fieldprops %}#toc-validator) property of the [Field component]({% slug api_form_field %}).

{% meta height:260 %}
{% embed_file fieldvalidation/func/app.tsx preview %}
{% embed_file fieldvalidation/func/main.tsx %}
{% endmeta %}

> For async validation or server-side validation scenarios, see [Validation with errors and onChange](#validation-with-errors-and-onchange).

## FieldArray Validation

Field array level validation is useful for synchronous validation of arrays (e.g., ensuring an array has at least one record). The validation function receives `value` as the first argument and returns a validation message if the value is not valid.

You can setup field array validation using the [`validator`]({% slug api_form_fieldarrayprops %}#toc-validator) property of the [FieldArray component]({% slug api_form_fieldarray %}).

{% meta height:360 %}
{% embed_file fieldarrayvalidation/func/app.tsx preview %}
{% embed_file fieldarrayvalidation/func/main.tsx %}
{% endmeta %}

> For async validation or server-side validation scenarios, see [Validation with errors and onChange](#validation-with-errors-and-onchange).

## Form Validation

Form validation can be used for synchronous, cross-field validation between multiple fields, where using field level validation is not convenient.

You can setup form validation using the [`validator`]({% slug api_form_formprops %}#toc-validator) property of the [Form component]({% slug api_form_form %}).

{% meta height:400 %}
{% embed_file formvalidation/func/app.tsx preview %}
{% embed_file formvalidation/func/main.tsx %}
{% endmeta %}

> The `validator` prop only supports synchronous validation. For async validation or server-side validation, see [Validation with errors and onChange](#validation-with-errors-and-onchange).

## Suggested Links

-   [React Form Overview](slug://overview_form)
-   [API Reference of the Form]({% slug api_form %})
-   [FormProps API - errors property]({% slug api_form_formprops %}#toc-errors)
-   [FormProps API - onChange property]({% slug api_form_formprops %}#toc-onChange)
