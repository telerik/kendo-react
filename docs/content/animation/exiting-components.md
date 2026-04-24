---
title: Exiting Child Components
description: 'Apply reactive updates to child components as they exit the KendoReact Animations in React projects.'
components: ["animation"]
slug: exitingchildcomponents_animation
position: 9
---

# Exiting Child Components

While an exiting child component is rendered because it still exists in the [React Virtual DOM](https://react.dev/learn/preserving-and-resetting-state), it is no longer available in the DOM.

To apply reactive updates to an exiting child element, pass a [`childFactory`]({% slug api_animation_animationprops %}#toc-childfactory) function. The function controls the entering and exiting child components based on the provided props.

{% meta height:200 %}
{% embed_file exiting/func/app.tsx preview %}
{% embed_file exiting/func/main.tsx %}
{% embed_file exiting/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [Basic Configuration]({% slug configuration_animation %})
-   [API Reference of the Animation Package]({% slug api_animation_animationprops %})
