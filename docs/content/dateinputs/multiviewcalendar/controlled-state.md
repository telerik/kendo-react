---
title: Controlled Mode
description: 'Control the KendoReact MultiViewCalendar in React projects by setting its default values, controlling its state, or dynamically changing its selected value.'
components: ["multiviewcalendar"]
slug: controlled_multiviewcalendar
position: 4
---

# Controlled Mode

By default, the MultiViewCalendar is in an uncontrolled state.

The MultiViewCalendar provides options for:

-   [Setting default values for the uncontrolled state](#toc-setting-default-values)
-   [Controlling the state](#toc-controlling-the-state)
-   [Dynamically changing the selected value](#toc-dynamically-chaning-the-value)

## Setting Default Values

The MultiViewCalendar enables you to provide the initial values without the need to fully control its state by using the [`defaultValue`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-defaultvalue), [`focusedDate`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-focuseddate), and [`defaultActiveView`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-defaultactiveview) properties.

```jsx
const App = () => (
    <MultiViewCalendar
        defaultValue={new Date(2018, 8, 8)}
        focusedDate={new Date(2018, 9, 8)}
        defaultActiveView={'year'}
    />
);
```

## Controlling the State

To manage the state of the MultiViewCalendar, use its [`value`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-value) and [`onChange`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-onchange) properties.

```jsx
import * as React from 'react';

const App = () => {
    const [value, setValue] = React.useState(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return <MultiViewCalendar value={value} onChange={handleChange} />;
};
```

## Dynamically Changing the Value

Each time the user selects a date, the MultiViewCalendar calls the `onChange` handler. To change the selected value based on external user interaction, pass the new `value` to the MultiViewCalendar component.

{% meta height:440 %}
{% embed_file multiviewcalendar/switch/func/app.tsx preview %}
{% embed_file multiviewcalendar/switch/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiViewCalendar]({% slug api_dateinputs_multiviewcalendarprops %})
-   [React Date Inputs](slug:overview_dateinputs)
