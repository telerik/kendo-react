export const gridDimensions = { width: '1200px', height: '700px' };

const EXISTING_COLUMNS_COUNT = 7;

// Predefined data arrays for simple random generation
const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Tom', 'Emily', 'Chris', 'Anna'];
const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Brown',
    'Jones',
    'Garcia',
    'Miller',
    'Davis',
    'Rodriguez',
    'Martinez'
];
const descriptions = [
    'Premium Product',
    'High Quality',
    'Best Seller',
    'Limited Edition',
    'New Arrival',
    'Customer Favorite',
    'Top Rated',
    'Special Offer'
];

// Simple random number generator
const randomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// Simple random date generator (within last 2 years)
const randomDate = () => {
    const now = new Date();
    const pastDate = new Date(now.getFullYear() - 2, 0, 1);
    const timeDiff = now.getTime() - pastDate.getTime();
    return new Date(pastDate.getTime() + Math.random() * timeDiff);
};

export function getRows(rows: number, columns: number = 100) {
    return Array.from({ length: rows }).map((_, rowIndex) => {
        const extraColumns = Array.from(
            { length: Math.max(0, columns - EXISTING_COLUMNS_COUNT) },
            (_, i) => `column-${i + EXISTING_COLUMNS_COUNT}`
        );

        return {
            id: `ID-${rowIndex + 1}`,
            name: `${firstNames[randomNum(0, firstNames.length - 1)]} ${lastNames[randomNum(0, lastNames.length - 1)]}`,
            price: randomNum(10, 1000) + Math.random(),
            startDate: randomDate(),
            unitsInStock: randomNum(0, 100),
            discontinued: Math.random() > 0.5,
            description: descriptions[randomNum(0, descriptions.length - 1)],
            ...Object.fromEntries(extraColumns.map((column) => [column, `Data-${randomNum(100, 999)}`]))
        };
    });
}

export function getColumns(count: number, args = {}) {
    const columns = ['id', 'name', 'price', 'startDate', 'unitsInStock', 'discontinued', 'description'];

    return (
        count < columns.length
            ? columns.slice(0, count)
            : [...columns, ...Array.from({ length: count - columns.length }, (_, i) => `column-${i + columns.length}`)]
    ).map((column) => ({
        field: column,
        ...args
    }));
}

export const getData = (count: number, columns: number = 100) => {
    const data = getRows(count, columns);
    return data;
};

export const getDataWithTiming = (count: number, columns: number = 100): { data: any[]; loadTime: number } => {
    const startTime = performance.now();
    const data = getRows(count, columns);
    const endTime = performance.now();

    return {
        data,
        loadTime: endTime - startTime
    };
};
