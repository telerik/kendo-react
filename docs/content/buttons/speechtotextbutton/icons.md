---
title: Icons
description: 'Learn how to customize the icons of the KendoReact SpeechToTextButton component.'
components: ["speechtotextbutton"]
slug: icons_speechtotextbutton
position: 5
---

# SpeechToTextButton Icons

You can customize the icon appearance of the KendoReact SpeechToTextButton.

You can leverage the available props to:

-   [Customize the icon inside the button](#custom-icon)
-   [Change the icon size](#icon-size)

## Custom Icon

You can replace the default microphone icon with a custom SVG icon from the KendoReact icon library or your own custom SVG icon through the [`svgIcon`](slug://api_buttons_speechtotextbuttonprops#svgIcon) property.

The following example demonstrates how to change the default microphone icon with different SVG icons:

{% meta height:150 %}
{% embed_file speechtotextbutton/custom-icon/app.tsx preview %}
{% embed_file speechtotextbutton/custom-icon/main.tsx %}
{% embed_file speechtotextbutton/custom-icon/styles.css %}
{% endmeta %}

> When the SpeechToTextButton is active, it will still switch to the stop icon regardless of the custom icon you provide for the inactive state.

## Icon Size

The SpeechToTextButton allows you to adjust the size of the icon through the [`iconSize`](slug://api_buttons_speechtotextbuttonprops#iconSize) property. Available options are:

-   `small` (default)&mdash;A smaller-sized icon
-   `medium`&mdash;A medium-sized icon
-   `large`&mdash;A larger-sized icon

The following example demonstrates how to change the icon size of the SpeechToTextButton:

{% meta height:150 %}
{% embed_file speechtotextbutton/icon-size/app.tsx preview %}
{% embed_file speechtotextbutton/icon-size/main.tsx %}
{% embed_file speechtotextbutton/icon-size/styles.css %}
{% endmeta %}

## See Also

-   [SpeechToTextButton Appearance](slug://appearance_speechtotextbutton)
-   [SpeechToTextButton API Reference](slug://api_buttons_speechtotextbuttonprops)
-   [Kendo UI SVG Icons](slug://overview_svgicon)
