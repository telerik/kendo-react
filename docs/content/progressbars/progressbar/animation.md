---
title: Animation
description: "Get started with the KendoReact ProgressBar and configure its animation in React projects."
components: ["progressbar"]
slug: progressbar_animation
position: 7
---

# Animation

To enable the ProgressBar animation, set the [`animation`]({% slug api_progressbars_progressbarprops %}#toc-animation) option to `true`.

By default, `animation` is set to `false`.

{% meta height:180 %}
{% embed_file progressbar/animation/func/app.tsx preview %}
{% embed_file progressbar/animation/func/main.tsx %}
{% endmeta %}


By default, the animation duration is `400ms`. To provide a different duration, set the `duration` option of `ProgressBarAnimation` to the desired value.

{% meta height:180 %}
{% embed_file progressbar/animation-2/func/app.tsx preview %}
{% embed_file progressbar/animation-2/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the ProgressBar]({% slug api_progressbars_progressbar %})
* [API Reference of the ProgressBarProps]({% slug api_progressbars_progressbarprops %})
