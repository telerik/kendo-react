---
title: Layout
description: 'Learn more about how to arrange the form controls inside the KendoReact Form and change the gaps between them.'
components: ["form"]
slug: layout_form
position: 7
tag: updated
---

# KendoReact Form Layout

The Form component provides comprehensive layout control to create professional, user-friendly forms. You can arrange form fields using a flexible grid system, control spacing, choose label orientations, and organize content with groupings and separators.

With form layouts, you can transform basic single-column forms into sophisticated, responsive, and user-friendly interfaces that adapt to your content and users' needs. You can use the available layout capabilities to create various forms&mdash;from compact registration forms and multi-section data entry screens, to mobile-friendly surveys.

## Multi-Column Layout

The column system uses [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) and involves two key properties working together:

-   `cols`&mdash;Sets the number of columns in a container (Form or FormFieldSet)
-   `colSpan`&mdash;Controls how many columns an element spans (FormFieldSet or Field)

The following example demonstrates the column system with Form, FormFieldSet, and Field components working together.

{% meta height:320 %}
{% embed_file layout/multi-col/app.tsx preview %}
{% embed_file layout/multi-col/main.tsx %}
{% endmeta %}

The column system works hierarchically as follows:

1. [`Form`](slug://api_form_formelement) level&mdash;The Form's [`cols`](slug://api_form_formelementprops#cols) property defines the main grid structure.
2. [`FormFieldSet`](slug://api_form_formfieldset) level&mdash;Can define its own [`cols`](slug://api_form_formfieldsetprops#cols) (internal columns) and [`colSpan`](slug://api_form_formfieldsetprops#colspan) (how many Form columns it spans).
3. [`Field`](slug://api_form_field) level&mdash;Uses [`colSpan`](slug://api_form_fieldprops#colspan) to span across columns within its container.

All column-related properties (`cols` and `colSpan`) support responsive behavior that adapts to different screen sizes. For detailed information on creating responsive layouts, see the [Form Responsiveness](slug://responsive_form) documentation.

## Setting the Gutters

You can control the space between the form fields using the [`Form's gutters`](slug://api_form_formelementprops#gutters) and [`FormFieldSet's gutters`](slug://api_form_formfieldsetprops#gutters) properties.

The gutters can be set to any of the following options:

-   Fixed pixels&mdash;Set a fixed gutter size by providing a number that represents the size in pixels.
-   Responsive pixels&mdash;Allowing you to set gutters that adapt to different screen sizes. See the [Form Responsiveness](slug://responsive_form) documentation article.

The following example demonstrates the supported gutter configurations in the Form component.

{% meta height:320 %}
{% embed_file layout/gutters/app.tsx preview %}
{% embed_file layout/gutters/main.tsx %}
{% endmeta %}

## Setting the Orientation

The KendoReact Form package provides the FormElement and FieldWrapper components that allow creating horizontal and vertical form orientations. They are designed to work with the components from the Label package and any editors.

### Vertical Orientation

To enable vertical orientation, wrap the form content inside the FormElement component and each of the editors inside the FieldWrapper component. The following example uses the components from the Labels package to enhance the editor with label, error, and hint texts.

{% meta height:320 %}
{% embed_file orientation/vertical/func/app.tsx preview %}
{% embed_file orientation/vertical/func/main.tsx %}
{% endmeta %}

### Horizontal Orientation

Horizontal orientation can be enabled by using the setup from the vertical orientation and setting the [`horizontal`]({% slug api_form_formelementprops %}#toc-horizontal) option of the FormElement component to `true`. Additionally, if you use the Label component to label the edtor, you need to wrap the editor and error messages in a `div` element with the `k-form-field-wrap` CSS class.

{% meta height:300 %}
{% embed_file orientation/horizontal/func/app.tsx preview %}
{% embed_file orientation/horizontal/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Form](slug://overview_form)
-   [API Reference of the FormElement](slug://api_form_formelementprops)
-   [Labels package](slug://overview_labels)
