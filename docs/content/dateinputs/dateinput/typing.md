---
title: Typing
description: 'Control the typing user experience of the KendoReact DateInput in React projects.'
components: ["dateinput"]
slug: typing_dateinput
position: 9
---

# Typing

You can control the parameters, which affect the typing user experience in the DateInput.

## Allow Caret Mode

Setting the [`allowCaretMode`](slug:api_dateinputs_dateinputprops#allowcaretmode) option to `true` will show a blinking caret inside the DateInput, either when a date segment is partially complete, or when [`autoSwitchParts`](slug:api_dateinputs_dateinputprops#autoswitchparts) is `false`. By default the `allowCaretMode` is set to `false`.

{% meta height:150 %}
{% embed_file dateinput/typing/allow-caret-mode/func/app.tsx preview %}
{% embed_file dateinput/typing/allow-caret-mode/func/main.tsx %}
{% endmeta %}

## Auto Correct Parts

The DateInput component automatically corrects the date segments when an invalid value is entered in the currently edited part. For example, if the value is `January 31` and the user changes the month to `February`, the component will autocorrect the day to `28`. By default, this functionality is enabled. To disable it, set the [`autoCorrectParts`](slug:api_dateinputs_dateinputprops#autocorrectparts) option to `false`.

{% meta height:150 %}
{% embed_file dateinput/typing/auto-correct-parts/func/app.tsx preview %}
{% embed_file dateinput/typing/auto-correct-parts/func/main.tsx %}
{% endmeta %}

## Auto Switch Parts

The DateInput component allows you to automatically move to the next segment once a valid value is entered in the currently edited part. By default, this functionality is enabled. You can disable it by setting the [`autoSwitchParts`](slug:api_dateinputs_dateinputprops#autoswitchparts) option to `false`.

{% meta height:150 %}
{% embed_file dateinput/typing/auto-switch-parts/func/app.tsx preview %}
{% embed_file dateinput/typing/auto-switch-parts/func/main.tsx %}
{% endmeta %}

## Auto Switch Keys

You can configure the keys that can be used to move to the next segment. The example below demonstrates how different keys can be added in the [`autoSwitchKeys`](slug:api_dateinputs_dateinputprops#autoswitchkeys) array.

> The left and right arrows always change the focused segment, regardless of this parameter value.

The following demo lets you move to the next segment using the Enter key.

{% meta height:150 %}
{% embed_file dateinput/typing/auto-switch-keys/func/app.tsx preview %}
{% embed_file dateinput/typing/auto-switch-keys/func/main.tsx %}
{% endmeta %}

## Enable Mouse Wheel

By default when a segment is selected its value can be increased or decreased using the mouse wheel. This behavior can be disabled by setting the [`enableMouseWheel`](slug:api_dateinputs_dateinputprops#enablemousewheel) option to `false`.

{% meta height:150 %}
{% embed_file dateinput/typing/enable-mouse-wheel/func/app.tsx preview %}
{% embed_file dateinput/typing/enable-mouse-wheel/func/main.tsx %}
{% endmeta %}

## Auto-fill

Setting the [`autoFill`](slug:api_dateinputs_dateinputprops#autofill) option to `true` will autofill the rest of the date to the current date when the component loses focus. For example, entering only the date, month or year portion of the date and blurring the component, the missing sections will be automatically completed.

{% meta height:150 %}
{% embed_file dateinput/typing/auto-fill/func/app.tsx preview %}
{% embed_file dateinput/typing/auto-fill/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
-   [React Date Inputs](slug:overview_dateinputs)
