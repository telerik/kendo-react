---
title: Customization
description: 'Customize the KendoReact Animations in React projects.'
components: ["animation"]
slug: customizing_animation
position: 10
---

# Customization

Animations enable you to customize their behavior by configuring the [`Animation`]({% slug api_animation_animationprops %}) component.

To update the Animation effect, use the [`transitionName`]({% slug api_animation_animationprops %}#toc-transitionname) property. The property defines the class name that is added to the enter or exit elements.

## Entering Animations

To configure the entering animation, define the CSS classes by using the following syntax:

```scss
  .{transitionName}-enter {
    /* The class that will be added on initial render of the element */
  }

  .{transitionName}-enter-active {
    /* The class that will be added after one time-frame(~16ms) to initiate the transition */
  }
```

The following example demonstrates how to create a custom entering animation.

{% meta height:200 %}
{% embed_file customization/enter/func/app.tsx preview %}
{% embed_file customization/enter/func/main.tsx %}
{% embed_file customization/enter/func/styles.css %}
{% endmeta %}

## Exiting Animations

To configure the exiting animation, define the CSS classes by using the following syntax:

```scss
  .{transitionName}-exit {
    /* The class that will be added on initial render of the element */
  }

  .{transitionName}-exit-active {
    /* The class that will be added after one time-frame(~16ms) to initiate the transition */
  }
```

The following example demonstrates how to customize an exiting Slide Animation.

{% meta height:200 %}
{% embed_file customization/exit/func/app.tsx preview %}
{% embed_file customization/exit/func/main.tsx %}
{% embed_file customization/exit/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [Basic Configuration]({% slug configuration_animation %})
-   [API Reference of the Animation Component]({% slug api_animation_animationprops %})
