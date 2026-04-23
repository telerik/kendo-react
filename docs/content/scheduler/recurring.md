---
title: Recurring Events
description: 'Get started with the KendoReact Scheduler component and learn how to visualize recurring events.'
components: ["scheduler"]
slug: recurring_events_scheduler
position: 110
---

# Recurring Events

The KendoReact Scheduler provides support for recurring events on a daily, weekly, monthly, and annual basis, and allows for exceptions from these recurrence rules.

## Getting Started

To configure recurring behavior for a Scheduler event, use any of the following approaches:

-   [Using recurrence rules](#toc-using-recurrence-rules)
-   [Setting recurrence exceptions](#toc-setting-recurrence-exceptions)
-   [Configuring the recurrence ID](#toc-configuring-the-recurrence-id)

The following example demonstrates how to set a recurrence rule and a recurrence exception.

{% meta height:770 %}
{% embed_file recurring/overview/overview/func/app.tsx preview %}
{% embed_file recurring/overview/overview/func/main.tsx %}
{% embed_file recurring/overview/overview/func/data.ts %}
{% endmeta %}

## Using Recurrence Rules

The [`recurrenceRule`]({% slug api_scheduler_schedulermodelfields %}#toc-recurrencerule) field defines when an event occurs.

`recurrenceRule` is a string representation of the [iCalendar recurrence rule](https://tools.ietf.org/html/rfc5545#section-3.3.10) type. Each rule is separated by a semicolon (`;`) character.

The following table lists all recurrence rules that are supported by the Scheduler:

| Recurrence Rule | Description                                                                                                                                                                                                                     | Value                                                | Example                                         |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------- | :---------------------------------------------- |
| `FREQ`          | (Mandatory) Specifies the frequency of the occurrence.                                                                                                                                                                          | `HOURLY`, `DAILY`, `WEEKLY`, `MONTHLY`, `YEARLY`     | `FREQ=DAILY`                                    |
| `INTERVAL`      | Specifies the intervals at which the recurrence rule repeats.                                                                                                                                                                   | A positive integer. Defaults to `1`.                 | `FREQ=DAILY;INTERVAL=4`                         |
| `UNTIL`         | Bounds the recurrence rule in an inclusive manner. If neither the `UNTIL`, nor the `COUNT` rule is present, the recurrence rule will be considered that it repeats forever.                                                     | A valid `Date` string.                               | `FREQ=DAILY;UNTIL=2019-09-04T00:00:00.000Z`     |
| `COUNT`         | Defines the number of occurrences at which to range-bound the recurrence.                                                                                                                                                       | A positive integer number greater than `0`.          | `FREQ=DAILY;COUNT=2`                            |
| `BYHOUR`        | Defines a comma-separated list of hours of the day.                                                                                                                                                                             | An integer between `0` and `23`.                     | `FREQ=HOURLY;BYHOUR=2,4,6,8`                    |
| `BYDAY`         | Defines a comma-separated list of days of the week.                                                                                                                                                                             | `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`             | `FREQ=DAILY;BYDAY=SA,SU`                        |
| `BYMONTHDAY`    | (Do not use it when the `FREQ` rule is set to `WEEKLY`.) Defines a comma-separated list of days of the month. Negative values represent backward counting.                                                                      | An integer between `1` and `31`, or `-31` to `-1`.   | `FREQ=DAILY;BYMONTHDAY=10,20,30`                |
| `BYYEARDAY`     | (Do not use it when the `FREQ` rule is set to `DAILY`, `WEEKLY`, or `MONTHLY`.) Defines a comma-separated list of days of the year. Negative values represent backward counting.                                                | An integer between `1` and `366`, or `-366` to `-1`. | `FREQ=YEARLY;BYYEARDAY=252`                     |
| `BYWEEKNO`      | (Use it only when the `FREQ` rule is set to `YEARLY`.) Defines a comma-separated list of [ordinals](https://en.wikipedia.org/wiki/Ordinal_number) which specify weeks of the year. Negative values represent backward counting. | An integer between `1` and `53`, or `-53` to `-1`.   | `FREQ=YEARLY;BYWEEKNO=36`                       |
| `BYMONTH`       | Defines a comma-separated list of months of the year.                                                                                                                                                                           | An integer between `1` and `12`.                     | `FREQ=YEARLY;BYMONTH=9`                         |
| `WKST`          | Specifies the day on which the workweek starts.                                                                                                                                                                                 | `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`             | `FREQ=WEEKLY;BYDAY=TU,TH;INTERVAL=2;WKST=TH`    |
| `BYSETPOS`      | Defines a comma-separated list of values that corresponds to the `n`<sup>th</sup> occurrence within the set of recurrence instances.                                                                                            | A positive (`+n`) or negative (`-n`) integer.        | `FREQ=MONTHLY;BYDAY=MO,TU,WE,TH,FR;BYSETPOS=-2` |

## Setting Recurrence Exceptions

The [`recurrenceExceptions`]({% slug api_scheduler_schedulermodelfields %}#toc-recurrenceexceptions) field specifies exceptions from the recurrence rule.

`recurrenceExceptions` represents an array of JavaScript `Date` objects which define when an recurring event must not occur. For example, if the `FREQ=DAILY` recurrence rule is set, the event must not occur on 24 September, set the `recurrenceExceptions` field to an array with a single `Date` object.

```jsx-no-run
    const data = [
        {
            id: 0,
            title: 'Repeat every day, except for 24th of September',
            start: new Date("2019-09-04T08:00:00.000Z"),
            end: new Date("2019-09-04T08:30:00.000Z"),
            recurrenceRule: "FREQ=DAILY",
            recurrenceExceptions: [new Date('2019-09-24T08:00:00.000Z')]
        }
    ]
```

## Configuring the Recurrence ID

The [`recurrenceId`]({% slug api_scheduler_schedulermodelfields %}#toc-recurrenceid) field indicates if the `DataItem` is related to an already expanded recurring event.

If server-side expansion of the events occurs, the Scheduler will receive the event occurrences as multiple data items rather than a single `DataItem` with a `recurrenceRule`. To enable the Scheduler to detect that an recurring event was expanded, set the `recurrenceId` field to the expanded occurrences.

> In order for the editing to work correctly, you have to provide the original, non-expanded recurring event. The Scheduler will detect that this item was expanded and will not render it.

The following example simulates a server-side expansion of events by providing all of the occurrences together with the original recurring event.

{% meta height:770 %}
{% embed_file recurring/overview/id/func/app.tsx preview %}
{% embed_file recurring/overview/id/func/main.tsx %}
{% embed_file recurring/overview/id/func/server-data.ts %}
{% endmeta %}

## Suggested Links

-   [Data Binding]({% slug data_binding_scheduler %})
-   [Editing]({% slug editing_scheduler %})
-   [Timezones]({% slug timezones_scheduler %})
-   [API Reference of the KendoReact Scheduler]({% slug api_scheduler_schedulerprops %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
