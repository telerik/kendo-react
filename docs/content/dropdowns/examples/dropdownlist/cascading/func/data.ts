const dataStates = [
    { stateName: 'California', stateId: 1 },
    { stateName: 'Texas', stateId: 2 },
    { stateName: 'Florida', stateId: 3 },
    { stateName: 'New York', stateId: 4 }
];

const dataCities = [
    // California
    { cityName: 'Los Angeles', cityId: 1, stateId: 1 },
    { cityName: 'San Francisco', cityId: 2, stateId: 1 },
    { cityName: 'San Diego', cityId: 3, stateId: 1 },
    { cityName: 'Sacramento', cityId: 4, stateId: 1 },
    { cityName: 'San Jose', cityId: 5, stateId: 1 },

    // Texas
    { cityName: 'Houston', cityId: 6, stateId: 2 },
    { cityName: 'Dallas', cityId: 7, stateId: 2 },
    { cityName: 'Austin', cityId: 8, stateId: 2 },
    { cityName: 'San Antonio', cityId: 9, stateId: 2 },
    { cityName: 'Fort Worth', cityId: 10, stateId: 2 },

    // Florida
    { cityName: 'Miami', cityId: 11, stateId: 3 },
    { cityName: 'Orlando', cityId: 12, stateId: 3 },
    { cityName: 'Tampa', cityId: 13, stateId: 3 },
    { cityName: 'Jacksonville', cityId: 14, stateId: 3 },
    { cityName: 'Fort Lauderdale', cityId: 15, stateId: 3 },

    // New York
    { cityName: 'New York City', cityId: 16, stateId: 4 },
    { cityName: 'Buffalo', cityId: 17, stateId: 4 },
    { cityName: 'Rochester', cityId: 18, stateId: 4 },
    { cityName: 'Albany', cityId: 19, stateId: 4 },
    { cityName: 'Syracuse', cityId: 20, stateId: 4 }
];

const dataOffices = [
    // Los Angeles
    { officeName: 'DHL Express LA', officeId: 1, cityId: 1 },
    { officeName: 'FedEx Hub LA', officeId: 2, cityId: 1 },
    { officeName: 'UPS Store - Downtown LA', officeId: 3, cityId: 1 },
    { officeName: 'USPS Main - Los Angeles', officeId: 4, cityId: 1 },

    // San Francisco
    { officeName: 'DHL Express SF', officeId: 5, cityId: 2 },
    { officeName: 'FedEx Market St.', officeId: 6, cityId: 2 },
    { officeName: 'UPS Golden Gate', officeId: 7, cityId: 2 },

    // San Diego
    { officeName: 'FedEx San Diego Central', officeId: 8, cityId: 3 },
    { officeName: 'DHL Express San Diego', officeId: 9, cityId: 3 },
    { officeName: 'UPS Mission Valley', officeId: 10, cityId: 3 },

    // Sacramento
    { officeName: 'UPS Store Sacramento', officeId: 11, cityId: 4 },
    { officeName: 'USPS Sacramento Main', officeId: 12, cityId: 4 },

    // San Jose
    { officeName: 'DHL Express San Jose', officeId: 13, cityId: 5 },
    { officeName: 'FedEx Downtown SJ', officeId: 14, cityId: 5 },

    // Houston
    { officeName: 'DHL Express Houston', officeId: 15, cityId: 6 },
    { officeName: 'FedEx Houston Center', officeId: 16, cityId: 6 },
    { officeName: 'UPS Houston West', officeId: 17, cityId: 6 },

    // Dallas
    { officeName: 'FedEx Hub Dallas', officeId: 18, cityId: 7 },
    { officeName: 'UPS Store Dallas', officeId: 19, cityId: 7 },
    { officeName: 'DHL Express Dallas', officeId: 20, cityId: 7 },

    // Austin
    { officeName: 'DHL Express Austin', officeId: 21, cityId: 8 },
    { officeName: 'FedEx Austin Central', officeId: 22, cityId: 8 },

    // San Antonio
    { officeName: 'UPS San Antonio Main', officeId: 23, cityId: 9 },
    { officeName: 'FedEx Alamo Plaza', officeId: 24, cityId: 9 },

    // Fort Worth
    { officeName: 'DHL Express Fort Worth', officeId: 25, cityId: 10 },
    { officeName: 'FedEx Fort Worth Central', officeId: 26, cityId: 10 },

    // Miami
    { officeName: 'DHL Express Miami', officeId: 27, cityId: 11 },
    { officeName: 'UPS Store Miami Beach', officeId: 28, cityId: 11 },

    // Orlando
    { officeName: 'FedEx Orlando Downtown', officeId: 29, cityId: 12 },
    { officeName: 'UPS Orlando Airport', officeId: 30, cityId: 12 },

    // Tampa
    { officeName: 'DHL Express Tampa', officeId: 31, cityId: 13 },
    { officeName: 'FedEx Tampa West', officeId: 32, cityId: 13 },

    // Jacksonville
    { officeName: 'UPS Store Jacksonville', officeId: 33, cityId: 14 },
    { officeName: 'USPS Jacksonville Main', officeId: 34, cityId: 14 },

    // Fort Lauderdale
    { officeName: 'DHL Express Fort Lauderdale', officeId: 35, cityId: 15 },
    { officeName: 'FedEx Fort Lauderdale', officeId: 36, cityId: 15 },

    // New York City
    { officeName: 'DHL Express Manhattan', officeId: 37, cityId: 16 },
    { officeName: 'UPS Brooklyn Hub', officeId: 38, cityId: 16 },
    { officeName: 'USPS Times Square', officeId: 39, cityId: 16 },

    // Buffalo
    { officeName: 'FedEx Buffalo', officeId: 40, cityId: 17 },
    { officeName: 'DHL Express Buffalo', officeId: 41, cityId: 17 },

    // Rochester
    { officeName: 'UPS Store Rochester', officeId: 42, cityId: 18 },
    { officeName: 'FedEx Rochester Central', officeId: 43, cityId: 18 },

    // Albany
    { officeName: 'UPS Albany Downtown', officeId: 44, cityId: 19 },
    { officeName: 'USPS Albany Main', officeId: 45, cityId: 19 },

    // Syracuse
    { officeName: 'DHL Express Syracuse', officeId: 46, cityId: 20 },
    { officeName: 'FedEx Syracuse Hub', officeId: 47, cityId: 20 }
];

export { dataStates, dataCities, dataOffices };
