const tableMap = (table: HTMLTableElement) => {
    const rows = Array.from(table.rows);
    const colsCount = Array.from((rows && rows[0] && rows[0].cells) || [])
        .map((c) => c.colSpan)
        .reduce((prev, cur) => prev + cur, 0);

    const map: HTMLTableCellElement[][] = rows.map(() => new Array(colsCount));

    rows.forEach((row, rowIndex) => {
        let curColSpan = 0;
        Array.from(row.cells).forEach((cell) => {
            for (let colSpan = 0; colSpan < cell.colSpan; colSpan++) {
                for (let rowSpan = 0; rowSpan < cell.rowSpan; rowSpan++) {
                    const index = map[rowIndex + rowSpan].findIndex((val, curInd) => curInd >= curColSpan && !val);
                    map[rowIndex + rowSpan][index] = cell;
                }
                curColSpan++;
            }
        });
    });
    return map;
};

const getTargetPos = (map: HTMLElement[][], target: HTMLElement): [number, number] => {
    for (let r = 0; r < map.length; r++) {
        for (let c = 0; c < map[r].length; c++) {
            if (map[r][c] === target) {
                return [r, c];
            }
        }
    }

    return [-1, -1];
};

export const cellAt = (root: HTMLTableElement, target: HTMLElement, pos: [number, number]) => {
    const map = tableMap(root);
    const targetPos: [number, number] = getTargetPos(map, target);
    let nextPos = [targetPos[0] + pos[0], targetPos[1] + pos[1]];
    let next = map[nextPos[0]] && map[nextPos[0]][nextPos[1]];
    while (next && next === target) {
        nextPos = [nextPos[0] + pos[0], nextPos[1] + pos[1]];
        next = map[nextPos[0]] && map[nextPos[0]][nextPos[1]];
    }
    return next;
};
