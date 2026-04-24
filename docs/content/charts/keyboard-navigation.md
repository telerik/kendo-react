---
title: Keyboard Navigation
description: 'Get started with the Kendo React Charts and learn how to enable keyboard navigation.'
components: ["chart"]
slug: keyboard_navigation_charts
position: 80
---

# Keyboard Navigation

The Chart comes with keyboard navigation enabled out of the box. The main interactive parts of the Chart are reachable through the keyboard - the Chart area and Legend area. You can also enable the navigation by setting the `navigable={true}` prop of the component.

## Basic Concepts

Once the element receives focus, there will be two main focusable areas the user can be in - the main chart area and the legend (if one is present). Moving focus between the chart area and legend area is done with the `Tab` and `Shift` & `Tab` keys. Once focus in in one of the two areas, the user can navigate through the items using the arrow keys.

> The only focusable element of the Chart is the main wrapper element itself. Focusing individual points or legend items is implemented through the `aria-activedescendant` attribute. This works in the same way for both `SVG` and `Canvas` render modes.

{% meta height:470 %}
{% embed_file keyboard-navigation/app.tsx preview %}
{% embed_file keyboard-navigation/main.tsx %}
{% endmeta %}

## Available Shortcuts

When the legend area is focused, the following keyboard commands are available:

| SHORTCUT        | DESCRIPTION                                                                                                                              |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `Right Arrow`   | Moves focus to the next legend item. If we're already at the last item, focus cycles to the first item.                                  |
| `Left Arrow`    | Moves focus to the previous legend item. If we're already at the first item, focus cycles to the last item.                              |
| `Down Arrow`    | Moves focus to the next legend item. If we're already at the last item, focus cycles to the first item.                                  |
| `Up Arrow`      | Moves focus to the previous legend item. If we're already at the first item, focus cycles to the last item.                              |
| `Tab`           | Moves the focus to the next focusable element on the page. If the legend position is `top` or `left`, moves focus to the chart area.     |
| `Shift` & `Tab` | Moves the focus to the chart area. If the legend position is `top` or `left`, moves focus to the previous focusable element on the page. |

When the chart area is focused, the following keyboard commands are available:

| SHORTCUT        | DESCRIPTION                                                                                                                                                        |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Right Arrow`   | Moves focus to the next point in the series. If focus is on the last point of the series, moves focus to the first point of the next series.                       |
| `Left Arrow`    | Moves focus to the previous point in the series. If focus is on the first point of the series, moves focus to the last point of the previous series.               |
| `Down Arrow`    | Moves focus to the next series.                                                                                                                                    |
| `Up Arrow`      | Moves focus to the previous series.                                                                                                                                |
| `Tab`           | Moves the focus to the legend area. If the legend is not visible, or if legend position is `top` or `left`, moves focus to the next focusable element on the page. |
| `Shift` & `Tab` | Moves the focus to the previous focusable element on the page. If legend position is `top` or `left`, moves focus to the legend area.                              |

## Suggested Links

-   [API Reference of the KendoReact Charts]({% slug api_charts %})
