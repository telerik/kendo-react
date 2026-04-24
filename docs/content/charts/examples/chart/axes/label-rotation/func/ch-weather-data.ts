const data = () => [
    {
        Timestamp: '2018-01-01T00:00:00.000',
        TMax: 3.3,
        TMin: -12,
        Wind: 5.5,
        Rain: 0
    },
    {
        Timestamp: '2018-01-02T00:00:00.000',
        TMax: 5.2,
        TMin: -10,
        Wind: 8.1,
        Rain: 0
    },
    {
        Timestamp: '2018-01-03T00:00:00.000',
        TMax: 3.2,
        TMin: -8,
        Wind: 8.1,
        Rain: 0
    },
    {
        Timestamp: '2018-01-04T00:00:00.000',
        TMax: 11,
        TMin: -7,
        Wind: 24.5,
        Rain: 0
    },
    {
        Timestamp: '2018-01-05T00:00:00.000',
        TMax: 9,
        TMin: 0,
        Wind: 21.7,
        Rain: 1.8
    },
    {
        Timestamp: '2018-01-06T00:00:00.000',
        TMax: 2,
        TMin: -1,
        Wind: 21.7,
        Rain: 19.7
    },
    {
        Timestamp: '2018-01-07T00:00:00.000',
        TMax: 2,
        TMin: -3,
        Wind: 24.5,
        Rain: 1.3
    },
    {
        Timestamp: '2018-01-08T00:00:00.000',
        TMax: 3,
        TMin: -2,
        Wind: 16.4,
        Rain: 0.8
    },
    {
        Timestamp: '2018-01-09T00:00:00.000',
        TMax: 3,
        TMin: -7,
        Wind: 13.6,
        Rain: 0.3
    },
    {
        Timestamp: '2018-01-10T00:00:00.000',
        TMax: 2.2,
        TMin: -8,
        Wind: 13.6,
        Rain: 0
    },
    {
        Timestamp: '2018-01-11T00:00:00.000',
        TMax: 4,
        TMin: -6,
        Wind: 16.4,
        Rain: 0
    },
    {
        Timestamp: '2018-01-12T00:00:00.000',
        TMax: 5.5,
        TMin: -6,
        Wind: 21.7,
        Rain: 0
    },
    {
        Timestamp: '2018-01-13T00:00:00.000',
        TMax: 2.7,
        TMin: -2,
        Wind: 27.1,
        Rain: 0
    },
    {
        Timestamp: '2018-01-14T00:00:00.000',
        TMax: 0,
        TMin: -6,
        Wind: 24.5,
        Rain: 0
    },
    {
        Timestamp: '2018-01-15T00:00:00.000',
        TMax: -1,
        TMin: -6,
        Wind: 27.1,
        Rain: 0
    },
    {
        Timestamp: '2018-01-16T00:00:00.000',
        TMax: 0,
        TMin: -7,
        Wind: 24.5,
        Rain: 0
    },
    {
        Timestamp: '2018-01-17T00:00:00.000',
        TMax: 1,
        TMin: -7,
        Wind: 21.7,
        Rain: 0
    },
    {
        Timestamp: '2018-01-18T00:00:00.000',
        TMax: 5,
        TMin: -6,
        Wind: 13.6,
        Rain: 0
    },
    {
        Timestamp: '2018-01-19T00:00:00.000',
        TMax: 6,
        TMin: -3,
        Wind: 13.6,
        Rain: 0
    },
    {
        Timestamp: '2018-01-20T00:00:00.000',
        TMax: 3,
        TMin: -3,
        Wind: 29.9,
        Rain: 7.2
    },
    {
        Timestamp: '2018-01-21T00:00:00.000',
        TMax: 2.2,
        TMin: -7,
        Wind: 19,
        Rain: 1.5
    },
    {
        Timestamp: '2018-01-22T00:00:00.000',
        TMax: 6.2,
        TMin: -8,
        Wind: 8.1,
        Rain: 0.3
    },
    {
        Timestamp: '2018-01-23T00:00:00.000',
        TMax: 6,
        TMin: -2,
        Wind: 16.4,
        Rain: 0
    },
    {
        Timestamp: '2018-01-24T00:00:00.000',
        TMax: 2.4,
        TMin: -2,
        Wind: 16.4,
        Rain: 5.1
    },
    {
        Timestamp: '2018-01-25T00:00:00.000',
        TMax: -1.4,
        TMin: -9,
        Wind: 16.4,
        Rain: 17.2
    },
    {
        Timestamp: '2018-01-26T00:00:00.000',
        TMax: 0,
        TMin: -8,
        Wind: 10.9,
        Rain: 5.9
    },
    {
        Timestamp: '2018-01-27T00:00:00.000',
        TMax: -2.7,
        TMin: -9,
        Wind: 16.4,
        Rain: 0
    },
    {
        Timestamp: '2018-01-28T00:00:00.000',
        TMax: -2.4,
        TMin: -14,
        Wind: 19,
        Rain: 0
    },
    {
        Timestamp: '2018-01-29T00:00:00.000',
        TMax: -5,
        TMin: -20,
        Wind: 13.6,
        Rain: 0
    },
    {
        Timestamp: '2018-01-30T00:00:00.000',
        TMax: -5.4,
        TMin: -22,
        Wind: 5.5,
        Rain: 0
    }
];

export const mockData = () =>
    data().map((p: any) => {
        p.Date = new Date(p.Timestamp);
        return p;
    });
