---
title: Appearance
description: 'Add alternative styling options to the KendoReact Switch in React projects.'
components: ['switch']
slug: appearance_switch
position: 6
tag: updated
---

# Appearance

The Switch component provides a predefined set of appearance options.

Apart from the default vision of the Switch, these alternative styling options enable you to configure each individual aspect of the appearance of a Switch.

-   [Size](#size)
-   [Track Border Radius](#track-border-radius)
-   [Thumb Border Radius](#thumb-border-radius)

## Size

The KendoReact Switch enables you to configure its [`size`](slug:api_inputs_switchprops#size).

-   `small`
-   `medium` (Default)
-   `large`

The following example demonstrates how to set the size of the Switch.

{% meta height:150 %}
{% embed_file switch/appearance/size/app.tsx preview %}
{% embed_file switch/appearance/size/main.tsx %}
{% embed_file switch/appearance/size/styles.css %}
{% endmeta %}

## Track Border Radius

The Switch enables you to apply different `border radius` to the track through the [`trackRounded`](slug:api_inputs_switchprops#trackrounded) property.

The [`trackRounded`](slug:api_inputs_switchprops#trackrounded) option supports the following values:

-   `small`
-   `medium`
-   `large`
-   `full` (Default)
-   `none` - Does not set a `className` for trackRounded

The following example demonstrates how to define the track border radius of the Switch.

{% meta height:150 %}
{% embed_file switch/appearance/trackRounded/app.tsx preview %}
{% embed_file switch/appearance/trackRounded/main.tsx %}
{% embed_file switch/appearance/trackRounded/styles.css %}
{% endmeta %}

## Thumb Border Radius

The Switch enables you to apply different `border radius` to the thumb through the [`thumbRounded`](slug:api_inputs_switchprops#thumbrounded) property.

The [`thumbRounded`](slug:api_inputs_switchprops#thumbrounded) option supports the following values:

-   `small`
-   `medium`
-   `large`
-   `full` (Default)
-   `none` - Does not set a `className` for thumbRounded

The following example demonstrates how to define the thumb border radius of the Switch.

{% meta height:150 %}
{% embed_file switch/appearance/thumbRounded/app.tsx preview %}
{% embed_file switch/appearance/thumbRounded/main.tsx %}
{% embed_file switch/appearance/thumbRounded/styles.css %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the Switch](slug:api_inputs_switchprops)
-   [Switch `size` options](slug:api_inputs_switchprops#size)
-   [Switch `trackRounded` options](slug:api_inputs_switchprops#trackrounded)
-   [Switch `thumbRounded` options](slug:api_inputs_switchprops#thumbrounded)
-   [Creating Custom Styles](slug:themebuilder)
