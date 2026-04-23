---
title: Keyboard Navigation
description: 'Use the KendoReact Timeline and take advantage of the built-in and always available keyboard navigation of the component for your React projects.'
components: ["timeline"]
slug: keyboard_navigation_timeline
position: 4
---

# Timeline Keyboard Navigation

The keyboard navigation of the Timeline can be enabled by setting the `navigatable` prop to `true`.

## Vertical mode:

The Vertical Timeline supports the following keyboard shortcuts:

| SHORTCUT         | DESCRIPTION                                 |
| :--------------- | :------------------------------------------ |
| `Tab`            | Sets the focus on the first or next item.   |
| `Enter`, `Space` | Toggles the open state of the focused item. |

{% meta height:1140 %}
{% embed_file timeline/keyboard-nav-vertical/func/app.tsx preview %}
{% embed_file timeline/keyboard-nav-vertical/func/main.tsx %}
{% embed_file timeline/keyboard-nav-vertical/func/events.ts %}
{% endmeta %}

## Horizontal mode:

The Horizontal Timeline supports the following keyboard shortcuts:

| SHORTCUT      | DESCRIPTION                                                            |
| :------------ | :--------------------------------------------------------------------- |
| `Arrow left`  | Selects the previous item.                                             |
| `Arrow right` | Selects the next item.                                                 |
| `Home`        | Selects the first item.                                                |
| `End`         | Selects the last item.                                                 |
| `Tab`         | When the focus is on the Timeline tabs, focuses the current item card. |

{% meta height:860 %}
{% embed_file timeline/keyboard-nav-horizontal/func/app.tsx preview %}
{% embed_file timeline/keyboard-nav-horizontal/func/main.tsx %}
{% embed_file timeline/keyboard-nav-horizontal/func/events.ts %}
{% endmeta %}

## Suggested Links

-   [React Timeline](slug://overview_timeline)
-   [API Reference of the KendoReact Timeline]({% slug api_layout_timeline %})
-   [API Reference of the TimeLineProps]({% slug api_layout_timelineprops %})
