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

export const getData = (count) => {
    const data = getRows(count);
    return data;
};
