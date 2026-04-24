const conversions: Array<any> = [
    { value: 2000, date: new Date(2020, 3, 1) },
    { value: 80000, date: new Date(2020, 3, 5) },
    { value: 130000, date: new Date(2020, 3, 10) },
    { value: 170000, date: new Date(2020, 3, 15) },
    { value: 190000, date: new Date(2020, 3, 20) },
    { value: 190000, date: new Date(2020, 3, 30) }
];

const channelUsers: Array<any> = [
    { channel: "Organic Search", conversion: 8232, users: 70500 },
    { channel: "Direct", conversion: 6574, users: 24900 },
    { channel: "Referral", conversion: 4932, users: 20000 },
    { channel: "Social Media", conversion: 2928, users: 19500 },
    { channel: "Email", conversion: 2456, users: 18100 },
    { channel: "Support", conversion: 4234, users: 2934 },
    { channel: "Other", conversion: 1172, users: 16540 }
];

const pageViews: Array<any> = [
    { value: 2000, date: new Date(2020, 2, 30) },
    { value: 80000, date: new Date(2020, 3, 5) },
    { value: 130000, date: new Date(2020, 3, 10) },
    { value: 170000, date: new Date(2020, 3, 15) },
    { value: 190000, date: new Date(2020, 3, 20) },
    { value: 150000, date: new Date(2020, 3, 25) },
    { value: 160000, date: new Date(2020, 3, 30) }
];

const visitors: Array<any> = [{ value: 70, type: "New" }, { value: 30, type: "Returning" }];

export { conversions, channelUsers, pageViews, visitors };
