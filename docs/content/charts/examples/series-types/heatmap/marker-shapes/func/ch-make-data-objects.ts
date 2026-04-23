interface DataObject {
    a: string;
    b: string;
    value: number;
}

export function makeDataObjects(rows, cols): DataObject[] {
    const data: DataObject[] = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        Array.from(Array(cols)).map((_, colIndex) => {
            data.push({
                a: `А${rowIndex + 1}`,
                b: `B${colIndex + 1}`,
                value: cols + rowIndex * colIndex
            });
        });
    }

    return data;
}
