export const userNameValidator = (value: string) =>
    !value ? 'User Name is required' : value.length < 5 ? 'User name should be at least 5 characters long.' : '';
