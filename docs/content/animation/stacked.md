---
title: Stacked Animations
description: 'Stack child KendoReact Animation components upon entering or exiting React projects.'
components: ["animation"]
slug: stacked_animation
position: 5
---

# Stacked Animations

All Animations extend the [`Animation`]({% slug api_animation_animationprops %}) component.

However, the Push and Zoom Animations further extend `Animation` by using the [`stackChildren`]({% slug api_animation_pushprops %}#toc-stackchildren) options and enable you to stack animations.

## Entering and Exiting Child Elements

To stack entering and exiting child elements within the same block container, set the `stackChildren` property to `true`. The stack effect is most suitable for replacing an existing child element with a new one.

{% meta height:200 %}
{% embed_file stacked/enter-exit/func/app.tsx preview %}
{% embed_file stacked/enter-exit/func/main.tsx %}
{% embed_file stacked/enter-exit/func/styles.css %}
{% endmeta %}

## Dynamic Calculation of Container Size

When `stackChildren` is set to `true`, the Push and Zoom Animations dynamically calculate the size of their animation container based on the size of the entering child, while rendering both animations in the same container.

{% meta height:200 %}
{% embed_file stacked/dynamic/func/app.tsx preview %}
{% embed_file stacked/dynamic/func/main.tsx %}
{% embed_file stacked/dynamic/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [Basic Configuration]({% slug configuration_animation %})
-   [API Reference of the Animation Package]({% slug api_animation_animationprops %})
