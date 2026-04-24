---
title: Responsive Design
description: 'Get started with the KendoReact Form and use its responsive grid layout support.'
components: ["form"]
slug: responsive_form
position: 8
tag: new
---

# KendoReact Form Responsive Design

The Form component and its internal elements support responsive web design by adapting its layout based on the set width or the available screen size.

To create a responsive layout, you can specify arrays of values for certain props, which are applied at different breakpoints. This is achieved using the [`ResponsiveFormBreakPoint`](slug://api_form_responsiveformbreakpoint) array, which enables you to define how the layout should behave on various screen sizes.

-   **Form `cols` and `gutters` props**:
    You can pass an array to the [`cols`](slug://api_form_formelementprops#cols) and [`gutters`](slug://api_form_formelementprops#gutters) props of the `Form` component. Each value in the array corresponds to a specific breakpoint, allowing the number of columns and the gutter size to change responsively.

-   **FormFieldSet `cols`, `colSpan`, and `gutters` props**:
    Similarly, the `FormFieldSet` component accepts arrays for its [`cols`](slug://api_form_formfieldsetprops#cols), [`colSpan`](slug://api_form_formfieldsetprops#colspan), and [`gutters`](slug://api_form_formfieldsetprops#gutters) props. This enables you to control the number of columns, the span of the fieldset, and the gutter size at each breakpoint.

-   **FieldWrapper `colSpan` prop**:
    The [`colSpan`](slug://api_form_fieldwrapperprops#colspan) prop of the `FieldWrapper` component can also be set as an array. This allows each field to span a different number of columns depending on the screen size.

-   **FormSeparator `colSpan` prop**:
    The `FormSeparator` component supports a responsive [`colSpan`](slug://api_form_formseparatorprops#colspan) prop, letting you control how much space the separator occupies at each breakpoint.

By using arrays for these props, you can create highly flexible and adaptive form layouts that look great on any device.

The following example demonstrates how the Form adapts to different screen sizes. Use the device setting panel to choose the desired screen size and observe how the layout responds accordingly.

{% meta height:600 %}
{% embed_file responsive/app.tsx preview %}
{% embed_file responsive/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the FormElement Props](slug://api_form_formelementprops)
-   [API Reference of the FormFieldSet Props](slug://api_form_formfieldsetprops)
-   [API Reference of the FormFieldWrapper Props](slug://api_form_fieldwrapperprops)
-   [Form Layout](slug://layout_form)
