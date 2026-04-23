---
title: IconThemeColor
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the IconThemeColor."
api_reference: true
type: inner_api
slug: api_common_iconthemecolor
---

# IconThemeColor
Specifies the theme color of the Icon.

The possible values are:
* `inherit` (Default)&mdash;Applies coloring based on the current color.
* `primary` &mdash;Applies coloring based on primary theme color.
* `secondary`&mdash;Applies coloring based on secondary theme color.
* `tertiary`&mdash; Applies coloring based on tertiary theme color.
* `info`&mdash;Applies coloring based on info theme color.
* `success`&mdash; Applies coloring based on success theme color.
* `warning`&mdash; Applies coloring based on warning theme color.
* `error`&mdash; Applies coloring based on error theme color.
* `dark`&mdash; Applies coloring based on dark theme color.
* `light`&mdash; Applies coloring based on light theme color.
* `inverse`&mdash; Applies coloring based on inverse theme color.

If the property is not set, the icon inherits the color from its parent.

You can use the `style` prop to apply custom color related properties to the icon.

`type` IconThemeColor = "inherit" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "error" | "dark" | "light" | "inverse";
