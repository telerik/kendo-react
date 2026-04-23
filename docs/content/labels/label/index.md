---
title: Overview
description: 'Get an overview of the features the KendoReact Label delivers and use the component in React projects.'
components: ["label"]
slug: label_labels
position: 0
---

# Label Overview

The Label component enables you to provide a label functionality to React components. It supports labelling both form elements (e.g.: `input` element) and custom focusable elements. It can contain Kendo React Input components such as KendoReact `DropDownList` and `NumericTextBox`, or HTML elements like `input`.

<CtaPanelOverview></CtaPanelOverview>

The following example shows how to set up the Label component:

1. Add the Label component and the desired editor next to it.
1. Set the [`editorId`]({% slug api_labels_labelprops %}#toc-editorid) property of the Label and the `id` property of the editor.

{% meta height:140 %}
{% embed_file label/basic/func/app.tsx preview %}
{% embed_file label/basic/func/main.tsx %}
{% endmeta %}

> The Label is part of the [KendoReact Labels]({% slug overview_labels %}) component library. All KendoReact Labels are freely available for use without a commercial license. The procedures for installing, importing, and using the Labels are identical for all components in the package. To learn how to use the Label and the rest of the Labels, see the [Getting Started with the KendoReact Labels]({% slug get_started_labels %}) guide.

## Key Features

-   [Editors with Invalid State]({% slug invalid_state_label %})&mdash;You can set the Label in invalid state.
-   [Optional]({% slug optional_label %})&mdash;You can make the Label as option.
-   [Without Form Element]({% slug without_form_label %})&mdash;You can associate the Label with DOM elements that are `not` form elements.

## Suggested Links

-   [API Reference of the Label Component]({% slug api_labels_labelprops %})
