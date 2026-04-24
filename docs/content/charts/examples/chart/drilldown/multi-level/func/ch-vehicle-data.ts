export const vehiclesByQuarter: { [model: string]: { period: string; count: number }[] } = {
    'Model 3': [
        {
            period: '2022 Q1',
            count: 97436
        },
        {
            period: '2022 Q2',
            count: 103436
        },
        {
            period: '2022 Q3',
            count: 113461
        }
    ],
    'Model Y': [
        {
            period: '2022 Q1',
            count: 7738
        },
        {
            period: '2022 Q2',
            count: 11932
        },
        {
            period: '2022 Q3',
            count: 20489
        }
    ],
    'ID.3': [
        {
            period: '2022 Q1',
            count: 18164
        },
        {
            period: '2022 Q2',
            count: 20087
        },
        {
            period: '2022 Q3',
            count: 22023
        }
    ],
    'ID.4': [
        {
            period: '2022 Q1',
            count: 5841
        },
        {
            period: '2022 Q2',
            count: 6715
        },
        {
            period: '2022 Q3',
            count: 7746
        }
    ]
};

export const vehiclesByModel: { [make: string]: { model: string; count: number }[] } = {
    Tesla: [
        {
            model: 'Model 3',
            count: 225350
        },
        {
            model: 'Model Y',
            count: 40159
        }
    ],
    VW: [
        {
            model: 'ID.3',
            count: 60274
        },
        {
            model: 'ID.4',
            count: 20302
        }
    ]
};

export const vehiclesByMake: { company: string; count: number }[] = [
    {
        company: 'Tesla',
        count: 314159
    },
    {
        company: 'VW',
        count: 112645
    }
];
