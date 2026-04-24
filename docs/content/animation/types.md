---
title: Types
description: 'Learn about and use the Fade, Expand, Push, Reveal, Slide, and Zoom types of animations in the KendoReact library.'
components: ["animation"]
slug: animationtypes_animation
position: 3
---

# Types

The Animation components animate their content by using various animation effects.

The Animation package delivers the following types of animations:

-   [Fade](#toc-fade)
-   [Expand](#toc-expand)
-   [Push](#toc-push)
-   [Reveal](#toc-reveal)
-   [Slide](#toc-slide)
-   [Zoom](#toc-zoom)

## Fade

The Fade Animation animates newly added children by using a fade-in effect.

{% meta height:200 %}
{% embed_file types/fade/func/app.tsx preview %}
{% embed_file types/fade/func/main.tsx %}
{% embed_file types/fade/func/styles.css %}
{% endmeta %}

## Expand

The Expand Animation animates the `scaleY()` or `scaleX()` CSS property of the container element.

{% meta height:200 %}
{% embed_file types/expand/func/app.tsx preview %}
{% embed_file types/expand/func/main.tsx %}
{% embed_file types/expand/func/styles.css %}
{% endmeta %}

## Push

The Push Animation slides the new component by pushing the old one out.

{% meta height:200 %}
{% embed_file types/push/func/app.tsx preview %}
{% embed_file types/push/func/main.tsx %}
{% embed_file types/push/func/styles.css %}
{% endmeta %}

## Reveal

The Reveal Animation animates the `height` or `width` CSS property of the container element.

{% meta height:200 %}
{% embed_file types/reveal/func/app.tsx preview %}
{% embed_file types/reveal/func/main.tsx %}
{% embed_file types/reveal/func/styles.css %}
{% endmeta %}

## Slide

The Slide Animation slides a single piece of content in a predefined direction.

{% meta height:200 %}
{% embed_file types/slide/func/app.tsx preview %}
{% embed_file types/slide/func/main.tsx %}
{% embed_file types/slide/func/styles.css %}
{% endmeta %}

## Zoom

The Zoom animation displays its content by applying a zoom-in or zoom-out transition effect.

{% meta height:200 %}
{% embed_file types/zoom/func/app.tsx preview %}
{% embed_file types/zoom/func/main.tsx %}
{% embed_file types/zoom/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [Basic Configuration]({% slug configuration_animation %})
-   [API Reference of the Animation Package]({% slug api_animation_animationprops %})
