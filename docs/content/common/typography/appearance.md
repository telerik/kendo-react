---
title: Appearance
description: 'Specify the appearance of the KendoReact Typography component in React projects.'
components: ["typography"]
slug: appearance_typography
position: 2
---

# Appearance

The Typography component provides many predefined appearance options, such as the ability to configure the alignment, size, weight, and color of the text.

## Font Size

To set the font size of the element, use the [`fontSize`]({% slug api_common_typographyprops %}#toc-fontSize) property.

The possible values are:

-   `xsmall`
-   `small`
-   `medium`
-   `large`
-   `xlarge`

{% meta height:230 %}
{% embed_file typography/appearance/font-size/func/app.tsx preview %}
{% embed_file typography/appearance/font-size/func/main.tsx %}
{% endmeta %}

## Font Weight

To set the font weight of the element, use the [`fontWeight`]({% slug api_common_typographyprops %}#toc-fontweight) property.

The possible values are:

-   `light`&mdash;font-weight: 300
-   `normal`&mdash;font-weight: 400
-   `bold`&mdash;For Default and Bootstrap themes&mdash;font-weight: 700. For Material theme&mdash;font-weight: 500.

{% meta height:170 %}
{% embed_file typography/appearance/font-weight/func/app.tsx preview %}
{% embed_file typography/appearance/font-weight/func/main.tsx %}
{% endmeta %}

## Text Alignment

To set the text alignment of the element, use the [`textAlign`]({% slug api_common_typographyprops %}#toc-textalign) property.

The possible values are:

-   `left`&mdash;Applies text-align: left
-   `right`&mdash;Applies text-align: right
-   `center`&mdash;Applies text-align: center
-   `justify`&mdash;Applies text-align: justify

{% meta height:550 %}
{% embed_file typography/appearance/text-align/func/app.tsx preview %}
{% embed_file typography/appearance/text-align/func/main.tsx %}
{% endmeta %}

## Text Transformation

To set the text transformation of the element, use the [`textTransform`]({% slug api_common_typographyprops %}#toc-texttransform) property.

The possible values are:

-   `lowercase`&mdash;Applies text-transform: lowercase
-   `uppercase`&mdash;Applies text-transform: uppercase
-   `capitalize`&mdash;Applies text-transform: capitalize

{% meta height:170 %}
{% embed_file typography/appearance/text-transform/func/app.tsx preview %}
{% embed_file typography/appearance/text-transform/func/main.tsx %}
{% endmeta %}

## Theme Color

To set the color of the element, use the [`themeColor`]({% slug api_common_typographyprops %}#toc-themecolor) property.

The possible values are:

-   `inherit`&mdash;Applies coloring based on the current color.
-   `primary` &mdash;Applies coloring based on primary theme color.
-   `secondary`&mdash;Applies coloring based on secondary theme color.
-   `tertiary`&mdash; Applies coloring based on tertiary theme color.
-   `info`&mdash;Applies coloring based on info theme color.
-   `success`&mdash; Applies coloring based on success theme color.
-   `warning`&mdash; Applies coloring based on warning theme color.
-   `error`&mdash; Applies coloring based on error theme color.
-   `dark`&mdash; Applies coloring based on dark theme color.
-   `light`&mdash; Applies coloring based on light theme color.
-   `inverse`&mdash; Applies coloring based on inverse theme color.

You can use the `style` property to apply custom color related properties to the element.

{% meta height:470 %}
{% embed_file typography/appearance/theme-color/func/app.tsx preview %}
{% embed_file typography/appearance/theme-color/func/main.tsx %}
{% endmeta %}

## Margin

To set the margin of the element or its side margins, use the [`margin`]({% slug api_common_typographyprops %}#toc-margin) property.

The possible values are:

-   `xsmall`
-   `small`
-   `medium`
-   `large`
-   `xlarge`
-   `thin`
-   `hair`
-   [`number`]({% slug api_common_marginenum %})&mdash;The minimum number value is 0 and the maximum is 24.
    > When using the Default or Material themes, passing a number will apply a margin of 4 times the passed number in pixels.
    > When using the Bootstrap theme the applied margin will be equal to the passed number divided by 4 in rem units.

{% meta height:410 %}
{% embed_file typography/appearance/margin/func/app.tsx preview %}
{% embed_file typography/appearance/margin/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Typography]({% slug api_common_typography %})
-   [API Reference of the TypographyProps]({% slug api_common_typographyprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
