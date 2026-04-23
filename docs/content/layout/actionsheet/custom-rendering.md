---
title: Custom Rendering
description: 'Learn more about the ActionSheet custom rendering options and customize the appearance of the items in React projects.'
slug: custom_rendering_actionsheet
position: 5
---

# Custom Rendering

The ActionSheet component contains the following building blocks:

-   `Header`—Rendered on top of the content. By default, it includes a [`title`]({% slug api_layout_actionsheetprops %}#toc-title) and a [`subTitle`]({% slug api_layout_actionsheetprops %}#toc-subtitle).
-   `Content`—Renders the main content area of the ActionSheet. By default, it contains a list of items that you can split into two groups. The content can be completely customized.
-   `Footer`—Rendered below the content if an `ActionSheetFooter` component is provided.

The ActionSheet allows you to use custom components to customize the appearance of its building blocks.

To render custom content, nest it inside the following components:

-   [`ActionSheetHeader`]({% slug api_layout_actionsheetheader %})—Specifies the header section of the ActionSheet.
-   [`ActionSheetContent`]({% slug api_layout_actionsheetcontent %})—Overrides the `Content` building block section.
-   [`ActionSheetFooter`]({% slug api_layout_actionsheetfooter %})—Specifies the footer area of the ActionSheet.

## Header Component

Use the `ActionSheetHeader` component to customize the header section of the ActionSheet.

> The `ActionSheetHeader` component overrides the ActionSheet `title` and `subTitle` options.

The following example demonstrates the `ActionSheetHeader` in action.

{% meta height:350 %}
{% embed_file actionsheet/custom-rendering/header/app.tsx preview %}
{% embed_file actionsheet/custom-rendering/header/main.tsx %}
{% endmeta %}

## Content Component

The `ActionSheetContent` component allows you to completely customize the main content area of the ActionSheet. This enables you to render custom content even when an [`items`]({% slug api_layout_actionsheet %}) collection is not provided.

The following example demonstrates the `ActionSheetContent` in action.

{% meta height:400 %}
{% embed_file actionsheet/custom-rendering/content/app.tsx preview %}
{% embed_file actionsheet/custom-rendering/content/main.tsx %}
{% endmeta %}

## Footer Component

Use the `ActionSheetFooter` component to render a footer below the `Content` ActionSheet area.

The following example demonstrates the `ActionSheetFooter` in action.

{% meta height:300 %}
{% embed_file actionsheet/custom-rendering/footer/app.tsx preview %}
{% embed_file actionsheet/custom-rendering/footer/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ActionSheet]({% slug api_layout_actionsheet %})
-   [API Reference of the ActionSheetItem]({% slug api_layout_actionsheetitem %})
