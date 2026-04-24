---
title: Configuration
description: 'Get started with the basic configuration options of the KendoReact Animation components in React projects.'
components: ["animation"]
slug: configuration_animation
position: 2
---

# Configuration

To perform CSS transitions and animations when a React component enters or exits the DOM, the Animations use the [`ReactTransitionGroup`](https://github.com/reactjs/react-transition-group) add-on.

The Animations wrap all components which will be animated and enclose every child element in an `AnimationChild` component. The `AnimationChild` component implements the required [special life-cycle hooks](https://reactcommunity.org/react-transition-group/#TransitionGroup) and each child component is wrapped in an additional `div` element.

The [`TransitionGroup`](https://reactcommunity.org/react-transition-group/#TransitionGroup) component automatically detects the `enter` and `exit` state of the children. This means that to animate a child, you only need to add or remove it.

## Default Setup

The following example demonstrates how to animate a `CONTENT` element which is added to the Slide Animation with an entering effect. When `CONTENT` is removed, the element acquires a special animation effect.

{% meta height:200 %}
{% embed_file configuration/setup/func/app.tsx preview %}
{% embed_file configuration/setup/func/main.tsx %}
{% embed_file configuration/setup/func/styles.css %}
{% endmeta %}

## Animating Elements and Components

The Animations provide options for animating:

-   [Entering components](#toc-entering-components)
-   [Exiting components](#toc-exiting-components)
-   [Multiple elements](#toc-multiple-elements)

### Entering Components

To the child component which enters the animation, the Animations set a `{transitionName}-enter` CSS class. Then, to start the animation, they add a `{transitionName}-enter-active` CSS class to the child.

The naming convention of the CSS class names is inherited from the `TransitionGroup` component. For example, the Slide adds a `k-slide-down-enter` CSS class on enter and, in the next tick, adds a `k-slide-down-enter-active` to activate the transition.

### Exiting Components

To the child component which exits the animation, the Animations set a `{transitionName}-exit` CSS class. Then, to start the animation, they add a `{transitionName}-exit-active` CSS class to the child.

The naming convention of the CSS class names is inherited from the `TransitionGroup` component. For example, the Slide adds a `k-slide-down-exit` CSS class on exit and, in the next tick, adds a `k-slide-down-exit-active` to activate the transition.

> Exiting components are not available in the DOM. To apply reactive updates to a child which is exiting, use the [`childFactory`]({% slug api_animation_animationprops %}#toc-childfactory) function.

### Multiple Elements

The `enter` and `exit` animation state of multiple elements is automatically controlled by `TransitionGroup`. This means that whenever you add or remove an item, `TransitionGroup` detects through its `key` property which item is updated and then animates it.

{% meta height:300 %}
{% embed_file configuration/multiple/func/app.tsx preview %}
{% embed_file configuration/multiple/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Customizing the Animations]({% slug customizing_animation %})
-   [API Reference of the Animation Package]({% slug api_animation_animationprops %})
