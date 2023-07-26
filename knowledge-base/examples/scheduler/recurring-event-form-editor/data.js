import { guid } from "@progress/kendo-react-common";
export const therapists = [{
    value: 'andr',
    name: "Dr. Anderson",
    color: "#7F96FF"
}, {
    value: 'bail',
    name: "Dr. Bailey",
    color: "#E56399"
}, {
    value: 'burg',
    name: "Dr. Burgess",
    color: '#A6CFD5'
}, {
    value: 'quin',
    name: "Dr. Quinn",
    color: '#320E3B'
}];
export const rooms = [{
    id: 1,
    title: 'Bedford'
}, {
    id: 2,
    title: 'Sofia'
}];
export const treatments = [{
    value: 138,
    text: 'Vital sign'
}, {
    value: 189,
    text: 'Blood test'
}, {
    value: 392,
    text: 'Electrooculography(EOG)'
}, {
    value: 491,
    text: 'Holter monitor(ECG)'
}];
export const patients = [{
    id: 0,
    name: 'Liam'
}, {
    id: 1,
    name: 'Olivia'
}, {
    id: 2,
    name: 'Finn'
}, {
    id: 3,
    name: 'Michael'
}, {
    id: 4,
    name: 'Michael'
}, {
    id: 5,
    name: 'Nora'
}];
const baseData = [{
    "Start": "2020-06-24T08:00:00.000Z",
    "End": "2020-06-24T08:30:00.000Z",
    "isAllDay": false,
    "Room": 1,
    "Therapist": "andr",
    "Patient": 0,
    "Treatment": 138,
    "AppointmentID": "6aa39025-019a-43b6-9270-3de34b7028ef"
}, {
    "Start": "2020-06-24T09:00:00.000Z",
    "End": "2020-06-24T09:30:00.000Z",
    "isAllDay": false,
    "Room": 2,
    "Therapist": "andr",
    "Patient": 1,
    "Treatment": 189,
    "AppointmentID": "b85d65b4-8580-49fd-bf95-7d4074d20948"
}, {
    "Start": "2020-06-24T09:30:00.000Z",
    "End": "2020-06-24T11:45:00.000Z",
    "isAllDay": false,
    "Room": 1,
    "Therapist": "bail",
    "Patient": 3,
    "Treatment": 491,
    "AppointmentID": "bb7c5576-e6dd-49fa-ba32-bd2a8f2b81eb"
}, {
    "Start": "2020-06-24T10:00:00.000Z",
    "End": "2020-06-24T10:45:00.000Z",
    "isAllDay": false,
    "Room": 1,
    "Therapist": "andr",
    "Patient": 5,
    "Treatment": 189,
    "AppointmentID": "e34e2cf7-b6ff-4efa-a6f0-853d642e2707"
}, {
    "Start": "2020-06-24T08:30:00.000Z",
    "End": "2020-06-24T11:00:00.000Z",
    "isAllDay": false,
    "Room": 1,
    "Therapist": "burg",
    "Patient": 2,
    "Treatment": 392,
    "AppointmentID": "fcc66c0d-c3a3-421a-84c6-12e2f12a60e6"
}, {
    "Start": "2020-06-24T08:00:00.000Z",
    "End": "2020-06-24T09:00:00.000Z",
    "isAllDay": false,
    "Room": 2,
    "Therapist": "bail",
    "Patient": 3,
    "Treatment": 189,
    "AppointmentID": "4c5a291e-2d7a-4c6c-8ea8-fd962f07c207"
}, {
    "Start": "2020-06-24T11:30:00.000Z",
    "End": "2020-06-24T14:00:00.000Z",
    "isAllDay": false,
    "Room": 2,
    "Therapist": "burg",
    "Patient": 1,
    "Treatment": 392,
    "AppointmentID": "cc5902d3-47bd-4002-aca8-40022a2c5f8a"
}, {
    "Start": "2020-06-24T12:00:00.000Z",
    "End": "2020-06-24T13:30:00.000Z",
    "isAllDay": false,
    "Room": 1,
    "Therapist": "quin",
    "Treatment": 392,
    "Patient": 5,
    "AppointmentID": "74022c9d-8f7e-435e-b24e-59db007eaf5d"
}, {
    "Start": "2020-06-24T08:00:00.000Z",
    "End": "2020-06-24T09:40:00.000Z",
    "isAllDay": false,
    "Room": 2,
    "Therapist": "quin",
    "Patient": 5,
    "Treatment": 189,
    "AppointmentID": "053415e1-88ca-4564-90d2-8fdaaba2449d"
}, {
    "Start": "2020-06-24T12:30:00.000Z",
    "End": "2020-06-24T13:00:00.000Z",
    "isAllDay": false,
    "Room": 2,
    "Therapist": "bail",
    "Treatment": 491,
    "Patient": 2,
    "AppointmentID": "e31b1cf3-cc2c-490d-8c5a-5106afeecbd9"
}, {
    "Start": "2020-06-24T11:30:00.000Z",
    "End": "2020-06-24T12:00:00.000Z",
    "isAllDay": false,
    "Room": 2,
    "Therapist": "andr",
    "Treatment": 491,
    "Patient": 5,
    "AppointmentID": "501cf356-3af0-400a-9ff9-76ea7aa0d3b2"
}];
export const customModelFields = {
    id: 'AppointmentID',
    description: 'Note',
    start: 'Start',
    end: 'End',
    title: 'Title',
    recurrenceRule: 'RecurrenceRule',
    recurrenceId: 'RecurrenceID',
    recurrenceExceptions: 'RecurrenceException'
};
const currentYear = new Date().getFullYear();
const parseAdjust = eventDate => {
    const date = new Date(eventDate);
    date.setFullYear(currentYear);
    return date;
};
export const displayDate = new Date(Date.UTC(currentYear, 5, 24));
export const sampleDataWithCustomSchema = baseData.map(dataItem => ({
    ...dataItem,
    AppointmentID: guid(),
    Start: parseAdjust(dataItem.Start),
    End: parseAdjust(dataItem.End)
}));