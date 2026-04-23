---
title: Keyboard Navigation
page_title: KendoReact Chart Documentation | Keyboard Navigation
description: "Get started with the KendoReact Chart and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_chart
position: 110
---

# Keyboard Navigation


## Managing the Focus


This feature aims to add keyboard support to the Chart widget. Keyboard navigation will be enabled for points of the chart series, as well as legend items. Moving focus along these points allows screen readers to access the points accessibility attributes.


The method by which focus is moved through the points will be consistent with other big Kendo widgets, such as the Grid and Scheduler. The only focusable element will be the chart itself, so that users can quickly tab in and out of the component. Moving through points will be done using the arrow keys (and tab/shift+tab between the chart and legend area), and updating an `aria-activedescendant` attribute on the focused chart element. The individual points will not be focusable. Clicking on a point or legend item will move the focus inside the chart, and focus the clicked item.

## Keyboard Navigation


Once the element receives focus, there will be `focusable areas` the user can be in. Initially focus is set on the first point in the series. If the user hits `Tab` focus is moved to the legend items. Hitting `Tab` again moves focus out of the chart and onto the next focusable element on the page. If the chart doesn't have a legend, hitting `Tab` the first time moves focus out of the chart directly.


Note: if the legend position is `top` or `left`, the order is reversed - the legend will be the first to receive focus, and the chart second.


So there are two contexts, in which the user can navigate:

### Focus is in the chart area


When going through the items of a series with the arrow keys, when you reach the end of the series you will be moved to the first item of the next series (and vice versa). This will allow going through all items in the chart using only one arrow key - for instance in a bar chart pressing `Right Arrow` will move through all items of series A, then all items of series B, then all items of series C, and only then loop back to series A.

| Shortcut | Behavior |
| -------- | -------- |
| `Tab` | Moves focus to the Legend items, focusing the first legend item. If legend is not available, moves focus to the next focusable element on the page. |
| `Shift + Tab` | Moves focus to the previous focusable element on the page. |
| `Arrow` keys | Based on the chart type, the arrow keys move through points or series. |
| `Enter` key | Triggers the click action for the series point or legend item. |
| `Escape` key | Closes the series tooltip if it was open. A second press will move the focus to the root element of the chart. |

#### Categorical charts


These include `Area`, `RangeArea`, `Bar`, `Column`, `RangeBar`, `Bullet`, `Waterfall`, `Line`, `CandleStick`, `BoxPlot`.


They can be either horizontal (bar), or vertical (column). The orientation is determined by the first series type. All other charts adhere to this orientation.


Charts in this category can also have several panes, oriented below each other. This is only supported in the `column/vertical` orientation.


When the charts are grouped in several panes, the `Up/Down arrow` keys should move between series taking the panes into consideration first. That is to say, pressing `Down arrow` should loop through all series from the top pane before going to the series in the bottom pane, regardless of the points value. Since panes apply only to vertical charts, there is no equivalent requirement for the `Left/Right arrow` keys in the vertical horizontal charts.


When the chart is horizontal, the flow if items in the series is inverted - instead of points going from left to right, they go from top to bottom. So to preserve the natural flow of the keyboard navigation, the `Up/Down` and `Left/Right` keys are swapped (`Up/Down arrow` goes through items of a series, while `Left/Right arrow` goes through different series).

| Shortcut | Behavior |
| -------- | -------- |
| `Up/Down` arrow keys | Move through the different series. The order in which this occurs determines the action of the arrow keys. For stacked `Bar/Column` charts and `Line/Area` charts `Up/Down arrow` keys will move focus to next/previous series item, based on its coordinates. Thus moving the the closest point available. If several series are present on a single pane, the focus first moves through all items of series of the same type, before jumping on the next. Thus if you have a stacked bar with two series and a single line series, the focus will first traverse all bar series before moving to the line, regardless of the line point coordinates. Regular `Bar` charts and it's derivatives (`Waterfall`, `Candlestick` etc.) will move focus according to the database order. |
| `Left/Right` arrow keys | Move through the points in the series. |

#### Donut charts


Only the `Donut` chart type lives here. You can have several series, which become nested in the plot area.

| Shortcut | Behavior |
| -------- | -------- |
| `Up` arrow key | Move to the outer series. |
| `Down` arrow key | Move to inner series. |
| `Right` arrow key | Move through the points of the series in a clockwise direction. |
| `Left` arrow key | Move through the points of the series in a anti-clockwise direction. |

#### Pie charts


Only the `Pie` chart type lives here. Each pie chart can display only one series.

| Shortcut | Behavior |
| -------- | -------- |
| `Right` arrow key | Move through the points of the series in a clockwise direction. |
| `Left` arrow key | Move through the points of the series in a anti-clockwise direction. |

#### Scatter charts


The scatter charts are `Scatter`, `ScatterLine` and `Bubble`. You can have multiple series of each on the same plot area.

| Shortcut | Behavior |
| -------- | -------- |
| `Up/Down` arrow keys | Move through the series. Since the scatter chart is chaotic by design, the only natural and predictable order is the one from the datasource. Several competitors have tried to follow a visual order for these keys, which results in broken and unexpected navigation (going up through items follows a different order than going down, several points are unaccessible etc.). |
| `Left/Right` arrow keys | Move through items in the current series. |

#### Funnel charts


Here are the `Funnel` and `Pyramid` charts. Only one series can be displayed at a time.

| Shortcut | Behavior |
| -------- | -------- |
| `Up/Down` arrow keys | Move through the items in the chart. |

#### Radar charts


Here you have `RadarLine`, `RadarBar` and `RadarArea`. Radar charts are basically categorical charts. You can have multiple series of each on the same plot area.

| Shortcut | Behavior |
| -------- | -------- |
| `Up/Down` arrow keys | Here we have a difference between the `RadarColumn` and `RadarLine/Area` charts. In the `RadarColumn` chart series are placed next to each other, and thus `Up/Down arrow` is expected to move in a clockwise/anti-clockwise manner, moving through them respectively. `RadarLine/Area` charts however place the series on top of each other, and therefore each point is visually above or below the respective points in the other series based on it's value. Here the `Up/Down arrow` keys move relative to the value of the points, and move the next/previous series point based on the value, rather than the datasource order. In essence pressing `Up arrow` will move to points away from the center of the chart, and pressing `Down arrow` will move towards the center. |
| `Right` arrow key | Move through the points of the series in a clockwise direction. |
| `Left` arrow key | Move through the points of the series in a anti-clockwise direction. |

#### Polar charts


Here you have `PolarLine`, `PolarArea` and `PolarScatter`. Radar charts are basically scatter charts. You can have multiple series of each on the same plot area.


Since the charts are basically scatter charts, they follow the same keboard navigation logic.

| Shortcut | Behavior |
| -------- | -------- |
| `Up/Down` arrow keys | Move through the series. Since the scatter chart is chaotic by design, the only natural and predictable order is the one from the datasource. |
| `Left/Right` arrow keys | Move through items in the current series. |

#### Heatmap


The heatmap will resemble a grid or excel table when navigating. The arrow keys will move through items in the respective direction, skipping over empty spaces.

#### Stock Chart


The stock chart is basically a regular chart, with the addition of a navigator. Only the regular chart series will be included in the tab order, while the navigator will not be accessible.

### Focus is in the legend area

| Shortcut | Behavior |
| -------- | -------- |
| `Tab` key | Move focus to the next focusable element on the page. |
| `Shift + Tab` key | Move focus to the chart area, focusing the first point in the first series. |
| `Up/Left` arrow key | Move focus to the previous legend item. If we're already at the first item, focus cycles to the last item. |
| `Down/Right` arrow key | Move focus to the next legend item. If we're already at the last item, focus cycles to the first item. |
| `Enter` key | Toggles the series visibility similar to the click action. |
| `Escape` key | Moves the focus to the root element of the chart. |

## Interactions

### Hover and inactive states


The chart has a functionality where upon hovering a point or a legend item, the other points in the series or other series become faded (inactive). Here's how this feature will work alongside focus, and the focused state:


 - While a point or legend item is focused, if the mouse hovers over a point/series, the behavior will be the same as it is currently - the inactive points will be faded. If the focused point is also a part of the inactive points, it will receive the lower opacity look. It will not however lose the focused styles and state.
 - When the focused item changes through the arrow/tab keys, it's series will become active again, and focus will move accordingly. The other series will be marked as inactive, as if the focused point was hovered.

### Series tooltips


Focusing a series point with the keyboard will also open the tooltip, if configured. To close the tooltip, press Escape or use Tab to move the focus to a different element.



## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
