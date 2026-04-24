---
title: Disabled Animations
description: 'Enable or disable any of the KendoReact Animation components in React projects.'
components: ["animation"]
slug: disabledstate_animation
position: 4
---

# Disabled Animations

The Animations allow you to enable or disable their showing or hiding effect.

The control over the disabled animation state results in an instant element display or its disappearance. By default, the Expand, Push, Reveal, Slide, and Zoom animations apply the showing or hiding effect. To disable these effects, set the [`enter`]({% slug api_animation_animationprops %}#toc-enter) or, respectively, the [`exit`]({% slug api_animation_animationprops %}#toc-exit) property to `false`.

{% meta height:230 %}
{% embed_file disabled/func/app.tsx preview %}
{% embed_file disabled/func/main.tsx %}
{% embed_file disabled/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [Basic Configuration]({% slug configuration_animation %})
-   [API Reference of the Animation Package]({% slug api_animation_animationprops %})
