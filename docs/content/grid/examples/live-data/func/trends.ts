export const negative = (rowData: any) => {
    return rowData['Change(%)'] < 0;
};

export const positive = (rowData: any) => {
    return rowData['Change(%)'] > 0;
};

export const changeNegative = (rowData: any) => {
    return rowData['Change(%)'] < 0 && rowData['Change(%)'] > -1;
};

export const changePositive = (rowData: any) => {
    return rowData['Change(%)'] > 0 && rowData['Change(%)'] < 1;
};

export const strongPositive = (rowData: any) => {
    return rowData['Change(%)'] >= 1;
};

export const strongNegative = (rowData: any) => {
    return rowData['Change(%)'] <= -1;
};
