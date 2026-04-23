---
title: Appearance
description: 'Learn how to customize the appearance of the KendoReact SpeechToTextButton component.'
components: ['speechtotextbutton']
slug: appearance_speechtotextbutton
position: 7
---

# Appearance

The KendoReact SpeechToTextButton provides a variety of options to customize its appearance to match your application's design.

You can configure each individual aspect of the appearance of the SpeechToTextButton.

-   [Configure the size](#size)
-   [Configure the border radius](#border-radius)
-   [Configure the fill mode](#fill-mode)
-   [Configure the theme color](#theme-color)
-   [Customizing further the button's styling](#custom-styling)
-   [Customizing the active state styling](#active-state-styling)

The following example demonstrates all available appearance options of the SpeechToTextButton in action.

{% meta height:630 %}
{% embed_file speechtotextbutton/button-appearance/app.tsx preview %}
{% embed_file speechtotextbutton/button-appearance/main.tsx %}
{% embed_file speechtotextbutton/button-appearance/styles.css %}
{% endmeta %}

## Size

The [`size`](slug://api_buttons_speechtotextbuttonprops#size) property controls the size of the SpeechToTextButton. The available options are:

-   `small`&mdash;A smaller-sized button
-   `medium` (default)&mdash;A medium-sized button
-   `large`&mdash;A larger-sized button

{% meta height:200 %}
{% embed_file speechtotextbutton/size/app.tsx preview %}
{% embed_file speechtotextbutton/size/main.tsx %}
{% embed_file speechtotextbutton/size/styles.css %}
{% endmeta %}

## Border Radius

The [`rounded`](slug://api_buttons_speechtotextbuttonprops#rounded) property controls the corner radius of the button. The available options are:

-   `small`&mdash;Slightly rounded corners
-   `medium` (default)&mdash;Moderately rounded corners
-   `large`&mdash;Prominently rounded corners
-   `full`&mdash;Fully rounded corners (creates a circular or pill-shaped button)
-   `none`&mdash;No rounded corners (sharp corners)

{% meta height:200 %}
{% embed_file speechtotextbutton/rounded/app.tsx preview %}
{% embed_file speechtotextbutton/rounded/main.tsx %}
{% embed_file speechtotextbutton/rounded/styles.css %}
{% endmeta %}

## Fill Mode

The [`fillMode`](slug://api_buttons_speechtotextbuttonprops#fillmode) property determines how the button is filled with color. The available options are:

-   `solid` (default)&mdash;Button with a solid background color
-   `outline`&mdash;Button with a colored outline and transparent background
-   `flat`&mdash;Button with no background or border, but colored text
-   `link`&mdash;Button that appears like a link but maintains button behavior

{% meta height:200 %}
{% embed_file speechtotextbutton/fill-mode/app.tsx preview %}
{% embed_file speechtotextbutton/fill-mode/main.tsx %}
{% embed_file speechtotextbutton/fill-mode/styles.css %}
{% endmeta %}

## Theme Colors

The [`themeColor`](slug://api_buttons_speechtotextbuttonprops#themecolor) property determines the color scheme of the button. The available options are:

-   `base` (default)&mdash;The base theme color
-   `primary`&mdash;The primary theme color
-   `secondary`&mdash;The secondary theme color
-   `tertiary`&mdash;The tertiary theme color
-   `info`&mdash;The information theme color (typically blue)
-   `success`&mdash;The success theme color (typically green)
-   `warning`&mdash;The warning theme color (typically yellow/orange)
-   `error`&mdash;The error theme color (typically red)

{% meta height:200 %}
{% embed_file speechtotextbutton/theme-color/app.tsx preview %}
{% embed_file speechtotextbutton/theme-color/main.tsx %}
{% embed_file speechtotextbutton/theme-color/styles.css %}
{% endmeta %}

## Custom Styling

You can apply custom styles to the SpeechToTextButton using the [`style`](slug://api_buttons_speechtotextbuttonprops#style) and [`className`](slug://api_buttons_speechtotextbuttonprops#classname) properties:

{% meta height:160 %}
{% embed_file speechtotextbutton/custom-styling/app.tsx preview %}
{% embed_file speechtotextbutton/custom-styling/main.tsx %}
{% embed_file speechtotextbutton/custom-styling/styles.css %}
{% endmeta %}

## Active State Styling

When speech recognition is active, the SpeechToTextButton automatically adds the `k-listening` CSS class and changes its icon to a stop icon. You can use this class to apply custom styles for the active state:

{% meta height:350 %}
{% embed_file speechtotextbutton/active-state/app.tsx preview %}
{% embed_file speechtotextbutton/active-state/main.tsx %}
{% embed_file speechtotextbutton/active-state/styles.css %}
{% endmeta %}

## Suggested Links

-   [SpeechToTextButton Icons](slug://icons_speechtotextbutton)
-   [SpeechToTextButton Disabled State](slug://states_speechtotextbutton)
-   [SpeechToTextButton API Reference](slug://api_buttons_speechtotextbuttonprops)
-   [Kendo UI Themes](slug://themesandstyles)
