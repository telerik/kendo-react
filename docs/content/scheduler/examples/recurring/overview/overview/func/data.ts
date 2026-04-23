export const displayDate = new Date('2019-09-04T08:00:00.000Z')

export const data = [
    {
        id: 0,
        title: 'Breakfast at home',
        start: new Date("2019-09-02T07:30:00.000Z"),
        end: new Date("2019-09-02T08:30:00.000Z"),
        recurrenceRule: "FREQ=DAILY;BYDAY=TU,TH",
        recurrenceExceptions: [new Date("2019-09-25T07:30:00.000Z"),new Date("2019-09-26T07:30:00.000Z")]
    },
    {
        id: 1,
        title: 'Breakfast at the office',
        start: new Date("2019-09-02T08:30:00.000Z"),
        end: new Date("2019-09-02T09:00:00.000Z"),
        recurrenceRule: "FREQ=DAILY;BYDAY=MO,WE,FR",
        recurrenceExceptions: [new Date("2019-09-25T08:30:00.000Z"),new Date("2019-09-26T08:30:00.000Z")]
    },
    {
        id: 2,
        title: 'Team Lunch',
        start: new Date("2019-09-02T12:00:00.000Z"),
        end: new Date("2019-09-02T13:00:00.000Z"),
        recurrenceRule: "FREQ=WEEKLY;BYDAY=WE",
        recurrenceExceptions: [new Date("2019-09-25T12:00:00.000Z"),new Date("2019-09-26T12:00:00.000Z")]
    },
    {
        id: 3,
        title: 'Vacation',
        start: new Date("2019-09-25T12:00:00.000Z"),
        end: new Date("2019-09-26T12:00:00.000Z"),
        isAllDay: true
    }
]
