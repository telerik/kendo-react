export const convertToRoman = function (tmp) {
    const Decimal = [1, 5, 10, 50, 100, 500, 1000];
    const Roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    let value = Math.min(2000, tmp);
    let text = '';
    for (let i = 6; i >= 0; i--) {
        while (value >= Decimal[i]) {
            text += Roman[i];
            value -= Decimal[i];
        }
        const leftIndex = i + (i % 2) - 2;
        if (leftIndex >= 0 && value >= Decimal[i] - Decimal[leftIndex]) {
            text += Roman[leftIndex] + Roman[i];
            value -= Decimal[i] - Decimal[leftIndex];
        }
    }
    return text;
};
