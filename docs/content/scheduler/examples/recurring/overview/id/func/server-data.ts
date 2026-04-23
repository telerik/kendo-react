export const serverData = [
    // The original event, which will be used for editing
    {
        id: 24,
        title: 'Breakfast with Tom',
        start: new Date("2019-09-02T08:30:00.000Z"),
        end: new Date("2019-09-02T09:00:00.000Z"),
        recurrenceRule: "FREQ=DAILY"
    },
    // The multiple occurrences, relating to the original event trough the `recurrenceId` field.
    {
        id: 1,
        title: 'Breakfast with Tom',
        start: new Date("2019-09-02T08:30:00.000Z"),
        end: new Date("2019-09-02T09:00:00.000Z"),
        recurrenceId: 24,
        recurrenceRule: "FREQ=DAILY"
    },
    {
        id: 2,
        title: 'Breakfast with Tom',
        start: new Date("2019-09-03T08:30:00.000Z"),
        end: new Date("2019-09-03T09:00:00.000Z"),
        recurrenceId: 24,
        recurrenceRule: "FREQ=DAILY"
    },
    {
        id: 3,
        title: 'Breakfast with Tom',
        start: new Date("2019-09-04T08:30:00.000Z"),
        end: new Date("2019-09-04T09:00:00.000Z"),
        recurrenceId: 24,
        recurrenceRule: "FREQ=DAILY"
    },
    {
        id: 4,
        title: 'Breakfast with Tom',
        start: new Date("2019-09-05T08:30:00.000Z"),
        end: new Date("2019-09-05T09:00:00.000Z"),
        recurrenceId: 24,
        recurrenceRule: "FREQ=DAILY"
    },
    {
        id: 5,
        title: 'Breakfast with Tom',
        start: new Date("2019-09-06T08:30:00.000Z"),
        end: new Date("2019-09-06T09:00:00.000Z"),
        recurrenceId: 24,
        recurrenceRule: "FREQ=DAILY"
    }
];
