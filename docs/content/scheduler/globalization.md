---
title: Globalization
description: 'Get started with the KendoReact Scheduler which supports globalization by translating its messages and adapting them to specific cultures.'
components: ['scheduler']
slug: globalization_scheduler
position: 500
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific cultures.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

The following example demonstrates how to use the Spanish culture in the KendoReact Scheduler.

{% meta height:780 %}
{% embed_file globalization/overview/func/app.tsx preview %}
{% embed_file globalization/overview/func/main.tsx %}
{% embed_file globalization/overview/func/es.json %}
{% endmeta %}

## Internationalization

The internationalization (i18n) process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

Scheduler supports the localization of its messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key                                       | Default Value                                                           |
| :------------------------------------------------ | :---------------------------------------------------------------------- |
| `scheduler.allEvents`                             | `All events`                                                            |
| `scheduler.allDay`                                | `all day`                                                               |
| `scheduler.today`                                 | `Today`                                                                 |
| `scheduler.dayViewTitle`                          | `Day`                                                                   |
| `scheduler.timelineViewTitle`                     | `Timeline`                                                              |
| `scheduler.weekViewTitle`                         | `Week`                                                                  |
| `scheduler.workWeekViewTitle`                     | `Work Week`                                                             |
| `scheduler.agendaViewTitle`                       | `Agenda`                                                                |
| `scheduler.monthViewTitle`                        | `Month`                                                                 |
| `scheduler.deleteTitle`                           | `Delete`                                                                |
| `scheduler.nextTitle`                             | `Next`                                                                  |
| `scheduler.previousTitle`                         | `Previous`                                                              |
| `scheduler.showFullDay`                           | `Show full day`                                                         |
| `scheduler.showWorkDay`                           | `Show business hours`                                                   |
| `scheduler.editOccurrence`                        | `Edit current occurrence`                                               |
| `scheduler.editSeries`                            | `Edit the series`                                                       |
| `scheduler.editRecurringConfirmation`             | `Do you want to edit only this event occurrence or the whole series?`   |
| `scheduler.editRecurringDialogTitle`              | `Edit Recurring Item`                                                   |
| `scheduler.editSave`                              | `Save`                                                                  |
| `scheduler.editCancel`                            | `Cancel`                                                                |
| `scheduler.editorTitle`                           | `Event`                                                                 |
| `scheduler.editorEventTitle`                      | `Title`                                                                 |
| `scheduler.editorEventStart`                      | `Start`                                                                 |
| `scheduler.editorEventStartTimeZone`              | `Start Time Zone`                                                       |
| `scheduler.editorEventEnd`                        | `End`                                                                   |
| `scheduler.editorEventEndTimeZone`                | `End Time Zone`                                                         |
| `scheduler.editorEventAllDay`                     | `All Day`                                                               |
| `scheduler.editorEventDescription`                | `Description`                                                           |
| `scheduler.editorEventSeparateTimeZones`          | `End in different Time Zone`                                            |
| `scheduler.editorEventTimeZone`                   | `Specify Time Zone`                                                     |
| `scheduler.recurrenceEditorRepeat`                | `Repeats every`                                                         |
| `scheduler.recurrenceEditorDailyInterval`         | `day(s)`                                                                |
| `scheduler.recurrenceEditorDailyRepeatEvery`      | `Repeats every`                                                         |
| `scheduler.recurrenceEditorWeeklyInterval`        | `week(s)`                                                               |
| `scheduler.recurrenceEditorWeeklyRepeatEvery`     | `Repeats every`                                                         |
| `scheduler.recurrenceEditorWeeklyRepeatOn`        | `On`                                                                    |
| `scheduler.recurrenceEditorMonthlyDay`            | `Day`                                                                   |
| `scheduler.recurrenceEditorMonthlyInterval`       | `month(s)`                                                              |
| `scheduler.recurrenceEditorMonthlyRepeatEvery`    | `Repeats every`                                                         |
| `scheduler.recurrenceEditorMonthlyRepeatOn`       | `On`                                                                    |
| `scheduler.recurrenceEditorYearlyOf`              | `of`                                                                    |
| `scheduler.recurrenceEditorYearlyRepeatEvery`     | `Repeats every`                                                         |
| `scheduler.recurrenceEditorYearlyRepeatOn`        | `On`                                                                    |
| `scheduler.recurrenceEditorYearlyInterval`        | `year(s)`                                                               |
| `scheduler.recurrenceEditorFrequenciesDaily`      | `Day`                                                                   |
| `scheduler.recurrenceEditorFrequenciesMonthly`    | `Month`                                                                 |
| `scheduler.recurrenceEditorFrequenciesNever`      | `Never`                                                                 |
| `scheduler.recurrenceEditorFrequenciesWeekly`     | `Week`                                                                  |
| `scheduler.recurrenceEditorFrequenciesYearly`     | `Year`                                                                  |
| `scheduler.recurrenceEditorOffsetPositionsFirst`  | `First`                                                                 |
| `scheduler.recurrenceEditorOffsetPositionsSecond` | `Second`                                                                |
| `scheduler.recurrenceEditorOffsetPositionsThird`  | `Third`                                                                 |
| `scheduler.recurrenceEditorOffsetPositionsFourth` | `Fourth`                                                                |
| `scheduler.recurrenceEditorOffsetPositionsLast`   | `Last`                                                                  |
| `scheduler.recurrenceEditorWeekdaysDay`           | `Day`                                                                   |
| `scheduler.recurrenceEditorWeekdaysWeekday`       | `Weekday`                                                               |
| `scheduler.recurrenceEditorWeekdaysWeekendday`    | `Weekend Day`                                                           |
| `scheduler.recurrenceEditorEndAfter`              | `After`                                                                 |
| `scheduler.recurrenceEditorEndOccurrence`         | `occurrence(s)`                                                         |
| `scheduler.recurrenceEditorEndLabel`              | `Ends`                                                                  |
| `scheduler.recurrenceEditorEndNever`              | `Never`                                                                 |
| `scheduler.recurrenceEditorEndOn`                 | `On`                                                                    |
| `scheduler.recurrenceEditorWeeklyRepeatOnDays`    | `Repeat on days`                                                        |
| `scheduler.recurrenceEditorDialogTitle`           | `Recurrence`                                                            |
| `scheduler.recurrenceEditorRemoveRecurrence`      | `Remove recurrence`                                                     |
| `scheduler.editorDelete`                          | `Delete`                                                                |
| `scheduler.deleteConfirmation`                    | `Are you sure you want to delete this event?`                           |
| `scheduler.deleteSeriesConfirmation`              | `Are you sure you want to delete this series?`                          |
| `scheduler.deleteRecurringConfirmation`           | `Do you want to delete only this event occurrence or the whole series?` |
| `scheduler.deleteOccurrence`                      | `Delete current occurrence`                                             |
| `scheduler.deleteSeries`                          | `Delete the series`                                                     |
| `scheduler.deleteDialogTitle`                     | `Delete Event`                                                          |
| `scheduler.deleteSeriesDialogTitle`               | `Delete Series`                                                         |
| `scheduler.deleteRecurringDialogTitle`            | `Delete Recurring Item`                                                 |
| `scheduler.dateTitle`                             | `Date`                                                                  |
| `scheduler.timeTitle`                             | `Time`                                                                  |
| `scheduler.eventTitle`                            | `Event`                                                                 |
| `scheduler.editorValidationRequired`              | `Field is required.`                                                    |
| `scheduler.editorValidationStart`                 | `Start time must be before End time.`                                   |
| `scheduler.editorValidationEnd`                   | `End time must be after Start time.`                                    |
| `scheduler.noEvents`                              | `no events`                                                             |
| `scheduler.popoverEvents`                         | `Events`                                                                |
| `scheduler.moreEvents`                            | `more`                                                                  |
| `scheduler.editorMakeRecurring`                   | `Make recurring`                                                        |
| `scheduler.editorTimezoneButton`                  | `Time zone`                                                             |
| `scheduler.editorSetTimezoneTitle`                | `Set Timezone`                                                          |
| `scheduler.editorResetTimezoneTitle`              | `Reset Timezone`                                                        |
| `scheduler.editorResetTimezoneAriaLabel`          | `Reset timezone`                                                        |
| `scheduler.editorStartTimeAriaLabel`              | `Start time`                                                            |
| `scheduler.editorEndTimeAriaLabel`                | `End time`                                                              |
| `scheduler.editorDateConnectorFrom`               | `from`                                                                  |
| `scheduler.editorDateConnectorTo`                 | `to`                                                                    |
| `scheduler.editorNewEvent`                        | `New event`                                                             |
| `scheduler.editorEditEvent`                       | `Edit event`                                                            |
| `scheduler.resetTimezoneDialogTitle`              | `Reset time zone`                                                       |
| `scheduler.resetTimezoneConfirmation`             | `Do you want to reset the time zone?`                                   |
| `scheduler.resetTimezoneNo`                       | `No`                                                                    |
| `scheduler.resetTimezoneYes`                      | `Yes`                                                                   |
| `scheduler.removeRecurrenceConfirmation`          | `Do you want to remove the recurrence?`                                 |
| `scheduler.removeRecurrenceNo`                    | `No`                                                                    |
| `scheduler.removeRecurrenceYes`                   | `Yes`                                                                   |
| `scheduler.toolbarLabel`                          | `Toolbar`                                                               |

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Scheduler.

{% meta height:780 %}
{% embed_file globalization/rtl/func/app.tsx preview %}
{% embed_file globalization/rtl/func/main.tsx %}
{% endmeta %}

## Timezones Support

The Scheduler features built-in support for displaying events in different timezones around the world. For more information, refer to the article on [timezones]({% slug timezones_scheduler %}).

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
