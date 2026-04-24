---
title: Appearance
description: 'Add alternative styling options to the KendoReact SegmentedControl in React projects.'
components: ['segmentedcontrol']
slug: appearance_segmentedcontrol
position: 2
---

# Appearance

The SegmentedControl provides a set of built-in options to control its visual presentation.

-   [Size](#segmentedcontrol-size)
-   [Icons](#segmentedcontrol-icons)
-   [Icon Class](#segmentedcontrol-icon-class)

## SegmentedControl Size

The SegmentedControl provides the [`size`](slug:api_buttons_segmentedcontrolprops#size) property that enables you to control how big or small the rendered control will be.

The available size options are:

-   `small`
-   `medium` (default)
-   `large`

<demo metaUrl="buttons/segmentedcontrol/sizes/" height="320"></demo>

## SegmentedControl Icons

Each item in the SegmentedControl accepts the [`svgIcon`](slug:api_buttons_segmenteditemprops#svgIcon) property to display an SVG icon. You can combine icons with text, use icons alone (with a `title` for accessibility), or render text-only items.

<demo metaUrl="buttons/segmentedcontrol/icons/" height="380"></demo>

## SegmentedControl Icon Class

The [`iconClassName`](slug:api_buttons_segmenteditemprops#iconClassName) property applies a custom CSS class to the icon element **only when the item is selected**. This allows you to style the active icon differently from unselected ones—for example, changing its color or applying a transform.

The following demo shows how selecting an item applies a custom CSS class that changes the icon color of the active segment:

<demo metaUrl="buttons/segmentedcontrol/icon-class/" height="200"></demo>

## Suggested Links

-   [Layout Mode](slug:layout_mode_segmentedcontrol)
-   [Customization](slug:customization_segmentedcontrol)
-   [Keyboard Navigation](slug:keyboard_navigation_segmentedcontrol)
-   [API Reference of the SegmentedControl](slug:api_buttons_segmentedcontrolprops)
-   [API Reference of the SegmentedItemProps](slug:api_buttons_segmenteditemprops)
