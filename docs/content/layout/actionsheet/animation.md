---
title: Animation
description: 'Enable or disable the opening or closing animations of the KendoReact ActionSheet in React projects.'
components: ["actionsheet"]
slug: animation_actionsheet
position: 3
---

# ActionSheet Animation

The ActionSheet allows you to control its opening and closing animation.

To enable or disable the animation behavior, set the [`animation`](slug://api_layout_actionsheetprops#animation) property.

By default, the animation duration is set to `300ms`. You can adjust the duration by setting the [`openDuration`](slug://api_layout_actionsheetanimationduration) and [`closeDuration`](slug://api_layout_actionsheetanimationduration) of the [`animationDuration`](slug://api_layout_actionsheetprops#animationduration) property.

{% meta height:400 %}
{% embed_file actionsheet/animation/func/app.tsx preview %}
{% embed_file actionsheet/animation/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ActionSheet](slug://api_layout_actionsheet)
