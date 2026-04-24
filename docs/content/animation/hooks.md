---
title: Life-Cycle Hooks
description: 'Use the life-cycle hooks which the KendoReact Animations call when children components are declaratively added or removed in React projects.'
components: ["animation"]
slug: lifecyclehooks_animation
position: 6
---

# Life-Cycle Hooks

When you declaratively add or remove a child element, all Animations call specific hooks during the entering or exiting of the element.

## Adding Child Elements

Each time you add a component to an entering animation, the Animations call the following hooks:

-   [`onEnter`]({% slug api_animation_animationprops %}#toc-onenter)&mdash;Called before the animation starts.
-   [`onEntering`]({% slug api_animation_animationprops %}#toc-onentering)&mdash;Called after the animation started.
-   [`onEntered`]({% slug api_animation_animationprops %}#toc-onentered)&mdash;Called when the animation completes.

## Removing Child Elements

Each time you remove a component from an existing animation, the Animations call the following hooks:

-   [`onExit`]({% slug api_animation_animationprops %}#toc-onexit)&mdash;Called before the animation starts.
-   [`onExiting`]({% slug api_animation_animationprops %}#toc-onexiting)&mdash;Called after the animation started.
-   [`onExited`]({% slug api_animation_animationprops %}#toc-onexited)&mdash;Called when the animation completes.

> At this point, the animated child is not available in the DOM. For DOM operations, pass a [`childFactory`]({% slug api_animation_animationprops %}#toc-childfactory) function.

## Suggested Links

-   [Basic Configuration]({% slug configuration_animation %})
-   [API Reference of the Animation Package]({% slug api_animation_animationprops %})
