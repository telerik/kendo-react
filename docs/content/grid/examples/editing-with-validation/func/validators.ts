export const nameValidator = (value: string) =>
    !value ? 'Full Name is required' : value.length < 3 ? 'Full Name should be at least 3 characters long.' : '';

export const unitsValidator = (value: number | null) =>
    value === null
        ? 'Units in stock is required'
        : value < 0
        ? 'Units should not be less than 0'
        : value > 100
        ? 'Units should not be more than 100'
        : '';

export const orderDateValidator = (value: string) => {
    return value
        ? (value as any).getTime() < new Date('1/1/1970').getTime()
            ? 'The date should be newer than 1/1/1970'
            : (value as any).getTime() >= new Date('1/1/2100').getTime()
            ? 'The date should be older than 1/1/2100'
            : ''
        : 'Order Date is required.';
};
