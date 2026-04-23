const continents = ['Asia', 'Africa', 'Europe', 'North America', 'South America'];
const countries = {
    'Africa': [
        { country: 'Algeria', cities: ['Bechar', 'Oran'] },
        { country: 'Egypt', cities: ['Aswan', 'Cairo'] }
    ],
    'Asia': [
        { country: 'China', cities: ['Beijing', 'Shanghai'] },
        { country: 'Russia', cities: ['Moscow', 'Saint Petersburg'] }
    ],
    'Europe': [
        { country: 'Germany', cities: ['Berlin', 'Frankfurt'] },
        { country: 'Italy', cities: ['Rome', 'Parma'] }
    ],
    'North America': [
        { country: 'United States', cities: ['New York', 'Boston'] },
        { country: 'Canada', cities: ['Ottawa', 'Victoria'] }
    ],
    'South America': [
        { country: 'Argentina', cities: ['Buenos Aires', 'Córdoba'] },
        { country: 'Brazil', cities: ['Rio de Janeiro', 'São Paulo'] }
    ]
};

const categories = ['Accessories', 'Bikes', 'Clothing', 'Components'];

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const products = new Array(100).fill(0).map((_p, i) => ({ ProductName: ('Product' + i), Price: randomNum(1, 100) }));
const day = () => randomNum(1, 28);
const month = () => randomNum(1, 12);
const year = () => [2013, 2014, 2015][randomNum(0, 2)];
const createDate = () => new Date(year(), month(), day());

export function createData(count) {
    const data = new Array(count);
    for (let i = 0; i < count; i++) {
        const continentIndex = randomNum(0, 4);
        const continentCountries = countries[continents[continentIndex]];
        const country = continentCountries[randomNum(0, continentCountries.length - 1)];
        const City = country.cities[randomNum(0, country.cities.length - 1)];

        data[i] = {
            Id: i + 1,
            ...products[randomNum(0, 99)],
            Category: categories[randomNum(0, 3)],
            Date: createDate(),
            Region: continents[continentIndex],
            Country: country.country,
            City
        };
    }
    return data;
}
