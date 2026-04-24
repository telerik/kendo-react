import { employeesInterface, equipmentInterface, gendersInterface } from './shared-fm-interfaces';

export const genders: Array<gendersInterface> = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
];

export const countries: Array<string> = [
    'Albania',
    'Andorra',
    'Armenia',
    'Austria',
    'Azerbaijan',
    'Belarus',
    'Belgium',
    'Bosnia & Herzegovina',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Ireland',
    'Italy',
    'Kosovo',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Malta',
    'Moldova',
    'Monaco',
    'Montenegro',
    'Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'San Marino',
    'Serbia',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'Turkey',
    'Ukraine',
    'United Kingdom',
    'Vatican City'
];

export const sizes: Array<string> = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];

export const sports: Array<string> = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball'
];

export const equipment: Array<equipmentInterface> = [
    {
        text: 'Furniture',
        id: 1,
        items: [
            { text: 'Tables & Chairs', id: 2 },
            { text: 'Sofas', id: 3 },
            { text: 'Occasional Furniture', id: 4 }
        ]
    },
    {
        text: 'Decor',
        id: 5,
        items: [
            { text: 'Bed Linen', id: 6 },
            { text: 'Curtains & Blinds', id: 7 },
            { text: 'Carpets', id: 8 }
        ]
    }
];

export const employees: Array<employeesInterface> = [
    {
        id: 1,
        name: 'Daryl Sweeney',
        reportsTo: null,
        phone: '(555) 924-9726',
        extension: 8253,
        hireDate: new Date('2012-02-07T20:00:00.000Z'),
        fullTime: true,
        position: 'CEO',
        timeInPosition: 2
    },
    {
        id: 2,
        name: 'Guy Wooten',
        reportsTo: 1,
        phone: '(438) 738-4935',
        extension: 1155,
        hireDate: new Date('2010-03-03T20:00:00.000Z'),
        fullTime: true,
        position: 'Chief Technical Officer',
        timeInPosition: 1
    },
    {
        id: 3,
        name: 'Priscilla Frank',
        reportsTo: 1,
        phone: '(278) 927-2684',
        extension: 4183,
        hireDate: new Date('2014-11-30T00:00:00.000Z'),
        fullTime: true,
        position: 'Chief Product Officer',
        timeInPosition: 2
    },
    {
        id: 4,
        name: 'Ursula Holmes',
        reportsTo: 3,
        phone: '(302) 760-2034',
        extension: 2226,
        hireDate: new Date('2011-06-06T00:00:00.000Z'),
        fullTime: true,
        position: 'EVP, Product Strategy',
        timeInPosition: 4
    },
    {
        id: 5,
        name: 'Anika Vega',
        reportsTo: 1,
        phone: '(910) 714-1802',
        extension: 6353,
        hireDate: new Date('2010-02-25T00:00:00.000Z'),
        fullTime: true,
        position: 'Chief Process Officer',
        timeInPosition: 5
    },
    {
        id: 6,
        name: 'Moses Duncan',
        reportsTo: 64,
        phone: '(421) 611-4814',
        extension: 669,
        hireDate: new Date('2010-05-24T00:00:00.000Z'),
        fullTime: true,
        position: 'Software Developer',
        timeInPosition: 6
    },
    {
        id: 7,
        name: 'Nevada Hart',
        reportsTo: 1,
        phone: '(254) 220-1576',
        extension: 6649,
        hireDate: new Date('2015-08-17T00:00:00.000Z'),
        fullTime: true,
        position: 'Chief Financial Officer',
        timeInPosition: 6
    },
    {
        id: 8,
        name: 'Hunter Fry',
        reportsTo: 1,
        phone: '(766) 358-9858',
        extension: 3741,
        hireDate: new Date('2011-02-12T00:00:00.000Z'),
        fullTime: false,
        position: 'General Counsel',
        timeInPosition: 3
    },
    {
        id: 9,
        name: 'Kuame Carrillo',
        reportsTo: 8,
        phone: '(192) 383-1305',
        extension: 9228,
        hireDate: new Date('2011-02-22T00:00:00.000Z'),
        fullTime: true,
        position: 'Associate General Councel',
        timeInPosition: 0
    },
    {
        id: 10,
        name: 'Vernon Ballard',
        reportsTo: 5,
        phone: '(702) 185-8890',
        extension: 9242,
        hireDate: new Date('2015-06-26T00:00:00.000Z'),
        fullTime: true,
        position: 'Director Facilities',
        timeInPosition: 2
    }
];
