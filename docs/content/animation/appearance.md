---
title: Appearance
description: 'Style the appearance of the KendoReact Animations in React projects.'
components: ["animation"]
slug: appearance_animation
position: 11
tag: updated
---

# Appearance

The KendoReact Animations enable you to use their default styling options or to set custom CSS classes both to all wrapper Animation elements and to all their child elements.

## Default CSS Classes

By default, the parent component renders a `k-animation-container` CSS class and the child component renders a `k-child-animation-container` CSS class. You can use these CSS classes to style the components without the need to specify separate CSS classes.

{% meta height:320 %}
{% embed_file appearance/default/func/app.tsx preview %}
{% embed_file appearance/default/func/main.tsx %}
{% embed_file appearance/default/func/styles.css %}
{% endmeta %}

## Customizing the Styles

By using custom CSS classes, you can customize:

-   [Parent components](#toc-decorating-the-parent)
-   [Child elements](#toc-decorating-the-child)

### Decorating the Parent

To set a custom CSS class to the parent Animation component, use either:

-   The `className` property, or
-   The `style` property.

{% meta height:380 %}
{% embed_file appearance/parent/func/app.tsx preview %}
{% embed_file appearance/parent/func/main.tsx %}
{% embed_file appearance/parent/func/styles.css %}
{% endmeta %}

### Decorating the Child

To set a custom CSS class to the child Animation element, use either:

-   The `componentChildClassName` property, or
-   The `componentChildStyle` property.

{% meta height:300 %}
{% embed_file appearance/child/func/app.tsx preview %}
{% embed_file appearance/child/func/main.tsx %}
{% embed_file appearance/child/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [Basic Configuration]({% slug configuration_animation %})
-   [API Reference of the Animation Package]({% slug api_animation_animationprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
