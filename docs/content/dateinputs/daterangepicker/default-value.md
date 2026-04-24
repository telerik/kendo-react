---
title: Default Value
description: 'Set the default value of the KendoReact DateRangePicker in React projects.'
components: ["daterangepicker"]
slug: default_value_daterangepicker
position: 3
---

# Default Value

By default, the DateRangePicker value is `null` and the Calendar popup is hidden.

The DateRangePicker provides options for:

-   [Setting its default value](#toc-setting-the-default-value)
-   [Setting the default state of its popup](#toc-setting-the-default-popup-state)

## Setting the Default Value

To set the initial value that is rendered by the DateRangePicker, set the [`defaultValue`]({% slug api_dateinputs_daterangepickerprops %}#toc-defaultvalue) property. This approach allows the component to display a value upon its initial render while remaining in an uncontrolled state.

{% meta height:450 %}
{% embed_file daterangepicker/default/value/func/app.tsx preview %}
{% embed_file daterangepicker/default/value/func/main.tsx %}
{% endmeta %}

## Setting the Default Popup State

To display the calendar popup when the DateRangePicker initially renders, set the [`defaultShow`]({% slug api_dateinputs_daterangepickerprops %}#toc-defaultshow) property to `true`. This approach allows the component to show an open calendar popup while remaining in an uncontrolled state.

```jsx
const App = () => {
    return (
        <div className="row">
            <div className="col-xs-12 col-md-6 example-col">
                <p>DateRangePicker with default shown state</p>
                <DateRangePicker defaultShow={true} />
            </div>
        </div>
    );
};
```

## Suggested Links

-   [API Reference of the DateRangePicker]({% slug api_dateinputs_daterangepickerprops %})
-   [React Date Inputs](slug:overview_dateinputs)
