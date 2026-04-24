---
title: React Form Guidelines
description: 'KendoReact makes building web forms easy: just use the feature-rich React Form component and follow these design guidelines with examples and best practices.'
slug: forms_guideline
position: 2
---

# React Form Guidelines

We created this Form Guidelines document to help React developers build gorgeous and functional forms. The knowledge we are sharing here comes from years of experience with building forms, interacting with other developers building forms, and keeping up with industry best practices.

Some concepts that we cover include how to structure horizontal or vertical form layouts, how to handle form validation, how to automatically display content based on the state of a form element, and many, many more.

These examples showcase how to build forms not only with KendoReact components, but also with native HTML elements, so the guidance provided here can be used by anyone.

We hope that you will find this guide useful! Now, let's kick things off by diving into various form controls.

## Form Components

Forms consist of form components (such as inputs, buttons, checkboxes, dropdowns, color pickers), their labels, hints and error messages. KendoReact provides comprehensive support for building forms with the [`Form`]({% slug overview_form %}), and [`Labels`]({% slug overview_labels %}) packages. In this article we share valuable best practices.

Here’s an example of the Form and Labels packages in action, so you can get an idea of how they work.

{% meta height:840 %}
{% embed_file guideline/formcomponents/func/app.tsx preview %}
{% embed_file guideline/formcomponents/func/main.tsx %}
{% endmeta %}

### KendoReact Form Package

The React Form package provides components for form state management, form validation and form layout creation. For form state management, the `Form` package uses the following components:

-   [`Form component`]({% slug api_form_form %}) and [`FormRenderProps`]({% slug api_form_formrenderprops %}) interface.
-   [`Field component`]({% slug api_form_field %}) and [`FieldRenderProps`]({% slug api_form_fieldrenderprops %}) interface.
-   [`FieldArray component`]({% slug api_form_fieldarray %}) and [`FieldArrayRenderProps`]({% slug api_form_fieldarrayrenderprops %}) interface.

For creating form layouts, the `Form` package provides following components:

-   [`FormElement component`]({% slug api_form_formelement %}) enables creating horizontal and vertical form layouts. It's designed to work with the `FieldWrapper` component, components from the [`Labels`]({% slug overview_labels %}) package and any editor.
-   [`FieldWrapper component`]({% slug api_form_fieldwrapper %}) enable you to group, align, and control form-related content, such as KendoReact components, or HTML input elements.

> Except for components representing a group (such as radio buttons), each `FieldWrapper` component can contain a single component element, a label, and multiple hint or error messages.

### React Form Inputs

The following example demonstrates the KendoReact Inputs within a form in action:

{% meta height:980 %}
{% embed_file guideline/inputs/func/app.tsx preview %}
{% embed_file guideline/inputs/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

### Checkboxes & RadioButtons

The following example demonstrates the KendoReact Checkbox and RadioGroup components within a form in action:

{% meta height:380 %}
{% embed_file guideline/checkboxes/func/app.tsx preview %}
{% embed_file guideline/checkboxes/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

### Uploads

The following example demonstrates the KendoReact Upload within a form in action:

{% meta height:360 %}
{% embed_file guideline/uploads/func/app.tsx preview %}
{% embed_file guideline/uploads/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

### DropDowns

The following example demonstrates the KendoReact DropDowns within a form in action:

{% meta height:570 %}
{% embed_file guideline/dropdowns/func/app.tsx preview %}
{% embed_file guideline/dropdowns/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

### DateInputs

The following example demonstrates the KendoReact DateInputs within a form in action:

{% meta height:620 %}
{% embed_file guideline/datepickers/func/app.tsx preview %}
{% embed_file guideline/datepickers/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

### Sizing

By default, all form components nested in a `FormElement` will take `100%` of their parent element’s width, except for the ColorPicker, Switch and Slider components.

## Labeling

Labels are not just visually associated with form elements, but programmatically as well. Assistive technologies will read the label content when the form element is focused. Additionally, on label click, the form element will receive focus and click, providing an increased hit area to activate it.

### Labels

The [`Label`]({% slug api_labels_label %}) component associates a label with a component using its props. When the form component is a plain HTML element or simple component like `Input`, only the `editorId` prop of the `Label` and `id` prop of the editor is used to associate the pair. For complex components without a form element, additional properties are required to enable screen readers to correctly read the label, forward the focus, and click events. Refer to the [Label overview]({% slug label_labels %}) for further details and runnable demos.

### Floating Labels

Тhe [`FloatingLabel`]({% slug api_labels_floatinglabel %}) is an inline label that moves above the input when the user focuses the form field or enters a value. One of its benefits is that it looks good, and the resolved animation when moving to the next field gives users a sense of completion.

{% meta height:300 %}
{% embed_file guideline/floating/func/app.tsx preview %}
{% embed_file guideline/floating/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

### Optional Labels

The way we visualize a form field has a strong implication for how users perceive and complete forms. As an example, instead of marking every field as required, you can only mark the optional fields. This results in less visual noise, since there will be fewer red marks across your user interface. This will lead to users completing the form faster.

Both the `Label` and `FloatingLabel` components have an `optional` Boolean property. When set to `true`, it renders “(Optional)” text inside the label element of the form component. The text is localizable via the KendoReact Localization package. Refer to the [article on Globalization]({% slug overview_intl %}) for further details and runnable demos.

{% meta height:310 %}
{% embed_file guideline/optional/func/app.tsx preview %}
{% embed_file guideline/optional/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

### Placeholder Texts

The placeholder text typically has a lighter color treatment to indicate that it is a suggestion for what kind of input will be valid.

{% meta height:160 %}
{% embed_file guideline/placeholder/func/app.tsx preview %}
{% embed_file guideline/placeholder/func/main.tsx %}
{% endmeta %}

### Hint Messages

Hint messages provide additional context about the expected value of a form component. For example, in a registration form where users have to provide a password containing at least 3 characters, a hint message aligned under the input could avoid any confusion. To associate the `Hint` message with the editor for screen readers, set the `id` property of the component to the `ariaDescribedBy` property of the editor.

{% meta height:320 %}
{% embed_file guideline/hints/func/app.tsx preview %}
{% embed_file guideline/hints/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

## React Form Validation

We use form validation to make sure that users provide correct information in terms of format, content length, etc. For example, is the phone number an actual number, did the user put info in all of the required fields, and so on.

### How it Works?

KendoReact supports handling user input in the UI, and displays useful validation messages using the `Form`, `Field`, and `Error` components. Refer to the [article on form validation]({% slug validation_form %}) for further details and runnable demos.

### Field-level Form Validation

Field-level validation ensures that the value entered in the field is in accordance with the application requirements. If the validation rules are not satisfied, error messages for each field are displayed.

To keep the form UI clean, the error messages of an invalid component are usually not shown until specific user interaction. There are several states of the edited field which can be used to display a validation message:

-   The component was edited&mdash;[`modified`]({% slug api_form_fieldrenderprops %}#toc-modified) state
-   The component was focused&mdash;[`visited`]({% slug api_form_fieldrenderprops %}#toc-visited) state
-   The component was blurred&mdash;[`touched`]({% slug api_form_fieldrenderprops %}#toc-touched) state
-   Aways&mdash;Show error messages regardless of user interaction

The [`Field`]({% slug api_form_field %}) component and its [`FieldRenderProps`]({% slug api_form_fieldrenderprops %}) enable you to control when and how validation messages are shown.

#### Error Messages

For instant validation, error messages are the best way to alert users that they have made a mistake while filling out a form. Applying only error-specific styles does not convey enough information about what the user should do to provide valid data. Error messages should specify exactly why the user input is not accepted. Error messages for different fields should appear one by one. KendoReact provides an [`Error`]({% slug api_labels_error %}) component for that use. To associate it with the editor for screen readers, set the `id` property of the component to the `ariaDescribedBy` property of the editor.

{% meta height:270 %}
{% embed_file guideline/errormessages/func/app.tsx preview %}
{% embed_file guideline/errormessages/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

### Form-level Validation

Form-level validation is used to show validation summary of all fields or complex validation constraints between several fields. It is usually shown when the user is ready to proceed to another step or clicks the Submit button.

#### Validation Summary

The validation summary displays a list of all validation errors in a single place. You can also use it to display complex validations messages. This approach can be useful when dealing with large forms, especially if the form contains parts that are temporarily hidden.

{% meta height:420 %}
{% embed_file guideline/formvalidation/func/app.tsx preview %}
{% embed_file guideline/formvalidation/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

### Read-only & Disabled Components

Rendering the component in a `readonly` state makes it immutable and the user cannot edit it. The read-only components are still responsive to interaction, participate in constraint validation, and can be focused.

Rendering the component in a `disabled` state makes it immutable. The disabled components are not responsive to user interaction and do not participate in constraint validation.

Defining a disabled component can be accomplished in KendoReact components by adding `disabled` property. Making the component `readonly` can done via `readonly` property of the component.

{% meta height:320 %}
{% embed_file guideline/disabled/func/app.tsx preview %}
{% embed_file guideline/disabled/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

## Form Orientation

When it comes to filling out a form, users want to move through it as quickly as possible without having to overthink anything. A great form orientation leads to seamless completion and improves the speed of the submission process. Using a single column with horizontal orientation has been shown to result in significantly better user understanding, fewer errors and higher overall rates of conversion.

### Horizontal & Vertical

By default, most KendoReact components are `100%` wide when placed inside the `FieldWrapper`. As a result, components inside KendoReact `FormElement` are stacked vertically.

To apply horizontal form orientation and position form components along with their labels on the same row, set the `horizontal` option of the `FormElement` component to `true`. Additionally, if you use the `Label` component to label the editor, you need to wrap the editor and error messages in a `div` element with a `k-form-field-wrap` CSS class.

{% meta height:370 %}
{% embed_file guideline/horizontal/func/app.tsx preview %}
{% embed_file guideline/horizontal/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

### Groups & Separators

Grouping form components in a meaningful way makes for a cleaner and more concise form content. Using the `legend` and `fieldset` structures allows showing a relation between form components, which is especially useful when it comes to large and complex forms.

Separators add a line break to the layout and improve the form conversion rate. The separation of sections allows you to make compound forms more approachable. To add a separator, add the `k-form-separator` class on a `span` element.

{% meta height:520 %}
{% embed_file guideline/groups/func/app.tsx preview %}
{% embed_file guideline/groups/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

### Form Buttons

By default, the buttons placed inside `div` elements with `k-form-buttons` are aligned to the left side of the form. Adding the `k-buttons-end` class to the buttons' wrapper element allows positioning them on the right.

{% meta height:450 %}
{% embed_file guideline/formbuttons/func/app.tsx preview %}
{% embed_file guideline/formbuttons/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Form](slug://overview_form)
-   [API Reference of the Form]({% slug api_form %}) and [FormRenderProps]({% slug api_form_formrenderprops %})
-   [API Reference of the Field]({% slug api_form_field %}) and [FieldRenderProps]({% slug api_form_fieldrenderprops %})
-   [API Reference of the FormElement]({% slug api_form_formelement %})
-   [API Reference of the FieldWrapper]({% slug api_form_fieldwrapper %})
-   [Labels package]({% slug overview_labels %})
