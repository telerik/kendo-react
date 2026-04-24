export const gridDimensions = { width: '1200px', height: '700px' };
import { faker } from '@faker-js/faker';

const EXISTING_COLUMNS_COUNT = 7;

export function getRows(rows: number, columns: number = 100) {
    return Array.from({ length: rows }).map(() => {
        const extraColumns = Array.from(
            { length: Math.max(0, columns - EXISTING_COLUMNS_COUNT) },
            (_, i) => `column-${i + EXISTING_COLUMNS_COUNT}`
        );

        return {
            id: faker.string.uuid().slice(0, 8),
            name: faker.person.fullName(),
            price: faker.number.float({ min: 0, max: 1000 }),
            startDate: faker.date.past(),
            unitsInStock: faker.number.int({ min: 0, max: 100 }),
            discontinued: faker.datatype.boolean(),
            description: faker.company.catchPhrase(),
            ...Object.fromEntries(extraColumns.map((column) => [column, faker.string.alpha(5)]))
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

// Generate large dataset optimized for performance testing
export const generateLargeDataset = (count: number = 1000000): { data: any[]; generationTime: number } => {
    const startTime = performance.now();

    console.log(`Generating ${count.toLocaleString()} rows in memory...`);

    const data = Array.from({ length: count }, (_, i) => {
        // Show progress for large datasets
        if (i % 100000 === 0 && i > 0) {
            console.log(`Progress: ${((i / count) * 100).toFixed(1)}% (${i.toLocaleString()} rows)`);
        }

        return {
            id: i,
            name: `User ${i}`,
            price: +(Math.random() * 1000).toFixed(2),
            startDate: new Date(2024, 0, 1),
            unitsInStock: Math.floor(Math.random() * 100),
            discontinued: i % 2 === 0,
            description: `Category ${i % 10}`,
            // Add some extra columns for variety
            'column-7': `A${i % 100}`,
            'column-8': `B${i % 50}`,
            'column-9': `C${i % 25}`
        };
    });

    const endTime = performance.now();
    const generationTime = endTime - startTime;

    console.log(`✅ Generated ${count.toLocaleString()} rows in ${generationTime.toFixed(0)}ms`);

    return {
        data,
        generationTime
    };
};
