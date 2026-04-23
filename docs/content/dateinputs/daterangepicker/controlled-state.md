---
title: Controlled Mode
description: 'Control the value and popup state of the KendoReact DateRangePicker in React projects.'
components: ["daterangepicker"]
slug: controlled_daterangepicker
position: 2
---

# Controlled Mode

By default, the DateRangePicker is in an uncontrolled state.

The DateRangePicker provides options for:

-   [Controlling its value](#toc-controlling-the-value)
-   [Controlling its popup state](#toc-controlling-the-popup-state)

## Controlling the Value

To manage the date value of the DateRangePicker:

1. Use its [`value`]({% slug api_dateinputs_daterangepickerprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_dateinputs_daterangepickerprops %}#toc-onchange) event.
1. Pass the new value through the props.

{% meta height:600 %}
{% embed_file daterangepicker/controlled/func/app.tsx preview %}
{% embed_file daterangepicker/controlled/func/main.tsx %}
{% endmeta %}

## Controlling the Popup State

To manage the popup state of the DateRangePicker and define whether the calendar will be displayed, use its [`show`]({% slug api_dateinputs_daterangepickerprops %}#toc-show) property.

```jsx
import * as React from 'react';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';

export function App() {
    const [show, setShow] = React.useState(false);

    const handleClick = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <div className="row">
            <div className="col-xs-12 col-md-12 example-col">
                <p>Controlled DateRangePicker</p>
                <DateRangePicker show={show} />
                &nbsp;
                <Button onClick={handleClick}>Toggle</Button>
            </div>
            <div className="col-xs-12 col-md-12 example-col">
                <p>Always shown</p>
                <DateRangePicker show={true} />
            </div>
        </div>
    );
}
```

## Suggested Links

-   [API Reference of the DateRangePicker]({% slug api_dateinputs_daterangepickerprops %})
-   [React Date Inputs](slug:overview_dateinputs)
