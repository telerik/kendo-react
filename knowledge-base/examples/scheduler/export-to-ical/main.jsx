import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Scheduler,
    WeekView,
    SchedulerHeader,
} from "@progress/kendo-react-scheduler";
import { sampleData, displayDate } from "./events-utc.js";


import ICAL from "ical.js";

import { ZonedDate } from "@progress/kendo-date-math";
import "@progress/kendo-date-math/tz/America/New_York";
import "@progress/kendo-date-math/tz/America/Los_Angeles";

import { formatDate } from "@progress/kendo-intl";

import { saveAs } from "@progress/kendo-file-saver";

const getISOString = (date, toUTC) => {
    if (toUTC) {
        const tzDate = ZonedDate.fromLocalDate(date, "America/New_York");
        date = tzDate.toTimezone("Etc/UTC");
    }
    return formatDate(date, "yyyy-MM-ddTHH:mm:ssZ");
};

const App = () => {
    const [data, setData] = React.useState(sampleData);giut

    const customHeader = props => {
        return (
            <SchedulerHeader>
                <button className='k-button' onClick={exportToIcal}>Export to iCal</button>
                {props.children}
            </SchedulerHeader>
        );
    };

    const exportToIcal = () => {
        var component = new ICAL.Component(["vcalendar", [], []]);
        component.updatePropertyWithValue("prodid", "iCal.js Example");
        component.updatePropertyWithValue("version", "2.0");

        var schedulerEvents = data;

        for (var i = 0; i < schedulerEvents.length; i++) {
            var schedulerEvent = schedulerEvents[i];
            var vevent = new ICAL.Component("vevent");
            var event = new ICAL.Event(vevent);

            event.uid = schedulerEvent.recurrenceId
                ? schedulerEvent.recurrenceId.toString()
                : schedulerEvent.id.toString();
            event.summary = schedulerEvent.title;
            event.description = schedulerEvent.description;
            event.startDate = ICAL.Time.fromDateTimeString(
                getISOString(schedulerEvent.start, true)
            );
            event.endDate = ICAL.Time.fromDateTimeString(
                getISOString(schedulerEvent.end, true)
            );

            if (schedulerEvent.recurrenceRule) {
                event.component.addProperty(
                    new ICAL.Property(
                        ICAL.parse.property("RRULE:" + schedulerEvent.recurrenceRule)
                    )
                );
            }

            if (schedulerEvent.recurrenceException) {
                event.component.addProperty(
                    new ICAL.Property(
                        ICAL.parse.property("EXDATE:" + schedulerEvent.recurrenceException)
                    )
                );
            }

            if (schedulerEvent.recurrenceId) {
                event.recurrenceId = ICAL.Time.fromDateTimeString(
                    getISOString(schedulerEvent.start, true)
                );
            }

            event.component.addPropertyWithValue(
                "dtstamp",
                ICAL.Time.fromDateTimeString(getISOString(new Date(), true))
            );
            component.addSubcomponent(vevent);
        }
        saveAs(
            "data:text/calendar," + component.toString(),
            "KendoSchedulerCal.ics"
        );
    };
    return (
        <Scheduler
            data={data}
            defaultDate={displayDate}
            header={customHeader}
        >
            <WeekView />
        </Scheduler>
    );
};

ReactDOM.render(<App />, document.querySelector("my-app"));
