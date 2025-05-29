export const required = value => value ? undefined : 'Required*';
export const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
