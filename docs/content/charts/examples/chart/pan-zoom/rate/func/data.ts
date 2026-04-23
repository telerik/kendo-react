type Record = { value: number; category: Date };

export function randomData(): Record[] {
    let data: Record[] = [];

    for (let idx = 0; idx < 300; idx++) {
        data.push({
            value: Math.floor(Math.random() * 100) + 1,
            category: new Date(2021, 0, idx)
        });
    }

    return data;
}
