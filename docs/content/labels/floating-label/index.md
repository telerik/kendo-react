---
title: Overview
description: 'Get an overview of the features the KendoReact FloatingLabel delivers and use the component in React projects.'
components: ["floatinglabel"]
slug: floating_label_labels
position: 0
---

# FloatingLabel Overview

The FloatingLabel component enables you to provide a floating label functionality to React components. It supports labelling both form elements (e.g.: `input` element) and custom focusable elements. It can contain Kendo React Input components such as KendoReact `DropDownList` and `NumericTextBox`, or HTML elements like `input`.

<CtaPanelOverview></CtaPanelOverview>

The following example shows how to set up the FloatingLabel component:

1. Wrap the component within a FloatingLabel component.
1. Set the [`label`]({% slug api_labels_floatinglabelprops %}#toc-label), [`editorValue`]({% slug api_labels_floatinglabelprops %}#toc-editorvalue) and [`editorId`]({% slug api_labels_floatinglabelprops %}#toc-editorid) properties of the FloatingLabel.

{% meta height:140 %}
{% embed_file floatinglabel/basic/func/app.tsx preview %}
{% embed_file floatinglabel/basic/func/main.tsx %}
{% endmeta %}

> The FloatingLabel is part of the [KendoReact Labels]({% slug overview_labels %}) component library. All KendoReact Labels are freely available for use without a commercial license. The procedures for installing, importing, and using the Labels are identical for all components in the package. To learn how to use the FloatingLabel and the rest of the Labels, see the [Getting Started with the KendoReact Labels]({% slug get_started_labels %}) guide.

## Key Features

-   [Editors with Invalid State]({% slug invalid_state_floating_label %})&mdash;You can set the FloatingLabel in invalid state.
-   [Optional]({% slug optional_floating_label %})&mdash;You can make the FloatingLabel as option.
-   [Placeholder]({% slug placeholder_floating_label %})&mdash;You can use FloatingLabel together with a placeholder.
-   [Without Form Element]({% slug without_form_floating_label %})&mdash;You can associate the FloatingLabel with DOM elements that are `not` form elements.

## Suggested Links

-   [API Reference of the FloatingLabel Component]({% slug api_labels_floatinglabelprops %})
