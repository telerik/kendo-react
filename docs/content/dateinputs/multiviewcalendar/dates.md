---
title: Focused and Selected Dates
description: 'Handle the focused and selected dates of the KendoReact MultiViewCalendar in React projects.'
components: ["multiviewcalendar"]
slug: dates_multiviewcalendar
position: 3
---

# Dates

The MultiViewCalendar enables you to handle the configuration of its [focused](#focused-dates) and [selected](#selected-dates) dates.

## Focused Dates

The MultiViewCalendar always displays a focused date and, by default, the focused date is today's date. To change the initial focused date, use the [`focusedDate`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-focuseddate) property by setting it to a specific `Date` value. The `Date` value has to be a valid JavaScript `Date` object.

```jsx
const App = () => {
    return <MultiViewCalendar focusedDate={new Date(2010, 10, 10)} />;
};
```

## Selected Dates

By default, the selected date is not set and the MultiViewCalendar displays only the focused date. To define the selected date, use the [`value`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-value) property.

The MultiViewCalendar accepts the following values that you can set as selected:

-   [A single date](#toc-single-dates)
-   [Multiple dates](#toc-multiple-dates)
-   [Range date selections](#toc-range-date-selections)

### Single Dates

To set a single date as selected, pass the JavaScript `Date` object as a value.

```jsx
const App = () => {
    return <MultiViewCalendar value={new Date(2010, 10, 10)} />;
};
```

### Multiple Dates

To set multiple dates as selected, pass an array of JavaScript `Date` objects as a value.

```jsx
const App = () => {
    return <MultiViewCalendar value={[new Date(2010, 10, 10), new Date(2010, 10, 11), new Date(2010, 10, 12)]} />;
};
```

### Range Date Selections

To set a range of dates as selected, pass an object with `start` and `end` keys which represent the selected range.

```jsx
const App = () => {
    return (
        <MultiViewCalendar
            value={{
                start: new Date(2010, 10, 10),
                end: new Date(2010, 10, 20)
            }}
        />
    );
};
```

## Suggested Links

-   [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
-   [React Date Inputs](slug:overview_dateinputs)
