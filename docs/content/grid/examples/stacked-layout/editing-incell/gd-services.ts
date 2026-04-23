import sampleProducts from './gd-sample-products';

const data = [...sampleProducts];

export const insertItem = (item) => {
    data.unshift(item);
    return data;
};

export const getItems = () => {
    return data;
};

export const updateItem = (item) => {
    const index = data.findIndex((record) => record.ProductID === item.ProductID);
    data[index] = item;
    return data;
};

export const deleteItem = (item) => {
    const index = data.findIndex((record) => record.ProductID === item.ProductID);
    data.splice(index, 1);
    return data;
};

const generateId = (data) => data.reduce((acc, current) => Math.max(acc, current.ProductID), 0) + 1;

export { generateId };
