---
title: Custom Functions
description: 'Get started with the KendoReact Spreadsheet and learn how to define custom functions.'
components: ["spreadsheet"]
slug: custom_functions_spreadsheet
position: 50
---

# Custom Functions

In formulas, you can create your own custom JavaScript functions (primitives) by calling `defineFunction(name, func)`. The first argument (string) is the name for your function in formulas (case-insensitive), and the second one is a JavaScript function (the implementation).

> The `defineFunction(name, func)` method does not support strict Content-Security-Policy (CSP) mode.

## Primitives

### Synchronous Primitives

The following example demonstrates how to define a function that calculates the distance between two points.

```jsx-no-run
defineFunction('distance', function(x1: number, y1: number, x2: number, y2: number) {
    const dx = Math.abs(x1 - x2);
    const dy = Math.abs(y1 - y2);
    const distance = Math.sqrt((dx * dx) + (dy * dy));
    return distance;
}).args([
    ['x1', 'number'],
    ['y1', 'number'],
    ['x2', 'number'],
    ['y2', 'number']
]);
```

If you include the above JavaScript code, you can then use `DISTANCE` in formulas. For example, to find the distance between coordinate points `(2,2)` and `(5,6)`, type in a cell `=DISTANCE(2, 2, 5, 6)`. Optionally, you can use the function in combined expressions such as `=DISTANCE(0, 0, 1, 1) + DISTANCE(2, 2, 5, 6)`. Below you will find a runnable example:

{% meta height:680 %}
{% embed_file custom-functions/func/app.tsx preview %}
{% embed_file custom-functions/func/main.tsx %}
{% embed_file custom-functions/func/sheets.ts %}
{% endmeta %}

In the above example, `defineFunction` returns an object that has an `args` method. You can use it to specify the expected types of arguments. If the function is called with mismatching argument types, the runtime of the Spreadsheet automatically returns an error and your implementation is not called. This spares the time for manually writing code that does argument type checking and provides a nice declarative syntax instead.

### Asynchronous Primitives

To retrieve currency information from a remote server, define a primitive to make this information available in formulas. To define an asynchronous function, call `argsAsync` instead of `args`.

```jsx-no-run
defineFunction("currency", function(callback, base, curr){
    // let's say we have this fetchCurrency function;
    // how it's implemented is not relevant for the goal of this document
    fetchCurrency(base, curr, function(value){
        callback(value);
    });
}).argsAsync([
    [ "base", "string" ],
    [ "curr", "string" ]
]);
```

&nbsp;

> The `argsAsync` passes a callback as the first argument to your implementation function, which you need to call with the return value.

It is possible to use new approaches in formulas such as `=CURRENCY("EUR", "USD")` and `=A1 * CURRENCY("EUR", "USD")`. Note that the callback is invisible in formulas. The second formula shows that even though the implementation itself is asynchronous, it can be used in formulas in a synchronous way—that is, the result yielded by `CURRENCY` is multiplied by the value in **A1**.

## Suggested Links

-   [Getting Started with KendoReact](https://www.telerik.com/try/kendo-react-ui)
-   [API Reference of the KendoReact Spreadsheet]({% slug api_spreadsheet %})
-   [KendoReact End User License Agreement](https://www.telerik.com/purchase/license-agreement/progress-kendoreact)
