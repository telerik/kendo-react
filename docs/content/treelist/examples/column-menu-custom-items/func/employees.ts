export const expandField = 'expanded';
export const subItemsField = 'employees';

export const employees = [
    {
        "id": 1,
        "name": "Daryl Sweeney",
        "reportsTo": null,
        "phone": "(555) 924-9726",
        "extension": 8253,
        "hireDate": new Date(2012, 2, 7),
        "fullTime": true,
        "position": "CEO",
        "timeInPosition": 2,
        [expandField]: true,
        [subItemsField]: [{
            "id": 2,
            "name": "Guy Wooten",
            "reportsTo": 1,
            "phone": "(438) 738-4935",
            "extension": 1155,
            "hireDate": new Date(2010, 3, 3),
            "fullTime": true,
            "position": "Chief Technical Officer",
            "timeInPosition": 1
        }, {
            "id": 32,
            "name": "Buffy Weber",
            "reportsTo": 1,
            "phone": "(699) 838-6121",
            "extension": 8933,
            "hireDate": new Date(2011, 7, 11),
            "fullTime": true,
            "position": "VP, Engineering",
            "timeInPosition": 2
        }, {
            "id": 11,
            "name": "Hyacinth Hood",
            "reportsTo": 1,
            "phone": "(889) 345-2438",
            "extension": 8564,
            "hireDate": new Date(2014, 2, 3),
            "fullTime": false,
            "position": "Team Lead",
            "timeInPosition": 1
        }, {
            "id": 60,
            "name": "Akeem Carr",
            "reportsTo": 1,
            "phone": "(738) 136-2814",
            "extension": 9353,
            "hireDate": new Date(2011, 4, 21),
            "fullTime": false,
            "position": "Junior Software Developer",
            "timeInPosition": 2
        },
        {
            "id": 78,
            "name": "Rinah Simon",
            "reportsTo": 1,
            "phone": "(285) 912-5271",
            "extension": 7795,
            "hireDate": new Date(2012, 10, 11),
            "fullTime": false,
            "position": "Software Developer",
            "timeInPosition": 4
        }, {
            "id": 42,
            "name": "Gage Daniels",
            "reportsTo": 1,
            "phone": "(107) 290-6260",
            "extension": 896,
            "hireDate": new Date(2013, 5, 16),
            "fullTime": true,
            "position": "Software Architect",
            "timeInPosition": 5
        }, {
            "id": 43,
            "name": "Constance Vazquez",
            "reportsTo": 1,
            "phone": "(800) 301-1978",
            "extension": 5141,
            "hireDate": new Date(2011, 6, 7),
            "fullTime": true,
            "position": "Director, Engineering",
            "timeInPosition": 1
        }]
    }
];
