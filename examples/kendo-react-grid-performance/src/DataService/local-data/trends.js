export const negative = (rowData) => {
    return rowData['Change(%)'] < 0;
};

export const positive = (rowData) => {
    return rowData['Change(%)'] > 0;
};

export const changeNegative = (rowData) => {
    return rowData['Change(%)'] < 0 && rowData['Change(%)'] > -1;
};

export const changePositive = (rowData) => {
    return rowData['Change(%)'] > 0 && rowData['Change(%)'] < 1;
};

export const strongPositive = (rowData) => {
    return rowData['Change(%)'] >= 1;
};

export const strongNegative = (rowData) => {
    return rowData['Change(%)'] <= -1;
};
