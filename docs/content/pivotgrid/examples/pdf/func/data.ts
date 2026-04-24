const continents = ['Asia', 'Africa', 'Europe', 'North America', 'South America'];
const countries = {
    'Africa': [{ countryName: 'Algeria' }, { countryName: 'Egypt' }],
    'Asia': [{ countryName: 'China' }, { countryName: 'Russia' }],
    'Europe': [{ countryName: 'Germany' }, { countryName: 'Italy' }],
    'North America': [{ countryName: 'United States' }, { countryName: 'Canada' }],
    'South America': [{ countryName: 'Argentina' }, { countryName: 'Brazil' }]
};

const products = [
    { 'Product':'Chai', 'Category':'Beverages', 'Price':18 },
    { 'Product':'Chang', 'Category':'Beverages', 'Price':19 },
    { 'Product':'Ikura', 'Category':'Seafood', 'Price':31 },
    { 'Product':'Konbu', 'Category':'Seafood', 'Price':6 },
    { 'Product':'Spegesild', 'Category':'Seafood', 'Price':12 }
];

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export interface DataItem {
    Region: string;
    Country: string;
    Category: string;
    Product: string;
    Price: Number;
}

export function createData(count): DataItem[] {
    const data = new Array(count);
    for (let i = 0; i < count; i++) {
        const continentIndex = randomNum(0, 4);
        const continentCountries = countries[continents[continentIndex]];
        const country = continentCountries[randomNum(0, continentCountries.length - 1)];

        data[i] = {
            ...products[randomNum(0, products.length - 1)],
            Region: continents[continentIndex],
            Country: country.countryName
        };
    }
    return data;
}
