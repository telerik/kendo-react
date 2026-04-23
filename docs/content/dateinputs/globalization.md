---
title: Globalization
description: 'Globalize the KendoReact Date Inputs in React projects by adapting to specific cultures, loading translated messages, or using the RTL support.'
components: ["calendar", "dateinput", "datepicker", "daterangepicker", "datetimepicker", "multiviewcalendar", "timepicker"]
slug: globalization_dateinputs
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

The following example demonstrates how to use the Spanish date format and month names in the available Date Inputs and how to localize their built-in messages.

{% meta height:750 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% endmeta %}

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Date Inputs support the localization of their messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key                             | Default Value               |
| :-------------------------------------- | :-------------------------- |
| `dateinput.increment`                   | `Increase value`            |
| `dateinput.decrement`                   | `Decrease value`            |
| `calendar.today`                        | `TODAY`                     |
| `datepicker.toggleCalendar`             | `Toggle calendar`           |
| `daterangepicker.swapStartEnd`          | `Swap start and end values` |
| `daterangepicker.start`                 | `Start`                     |
| `daterangepicker.end`                   | `End`                       |
| `daterangepicker.separator`             | `' '`                       |
| `daterangepicker.cancel`                | `Cancel`                    |
| `daterangepicker.set`                   | `Set`                       |
| `datetimepicker.date`                   | `Date`                      |
| `datetimepicker.time`                   | `Time`                      |
| `datetimepicker.toggleDateTimeSelector` | `Toggle date-time selector` |
| `datetimepicker.cancel`                 | `Cancel`                    |
| `datetimepicker.set`                    | `Set`                       |
| `timepicker.now`                        | `NOW`                       |
| `timepicker.selectNow`                  | `Select Now`                |
| `timepicker.cancel`                     | `Cancel`                    |
| `timepicker.set`                        | `Set`                       |
| `timepicker.toggleTimeSelector`         | `Toggle TimeSelector`       |
| `timepicker.toggleClock`                | `Toggle Clock`              |
| `multiviewcalendar.prevView`            | `Navigate to previous view` |
| `multiviewcalendar.nextView`            | `Navigate to next view`     |

## Right-to-Left Support

The Date Inputs do not provide RTL support.

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
-   [React Date Inputs](slug:overview_dateinputs)
