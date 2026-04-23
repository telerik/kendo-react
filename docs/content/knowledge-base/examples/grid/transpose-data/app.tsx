import React, { useMemo } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

interface PhaseData {
    [key: string]: number[];
    phaseMinimumGreen: number[];
    phasePassage: number[];
    phaseMaximum1: number[];
    phaseMaximum2: number[];
    phaseYellowChange: number[];
    phaseRedClear: number[];
}

const data: PhaseData = {
    phaseMinimumGreen: [10, 15, 10, 15, 10, 15, 10, 15, 0, 0, 0, 0, 0, 0, 0, 0],
    phasePassage: [40, 50, 40, 50, 40, 50, 40, 50, 0, 0, 0, 0, 0, 0, 0, 0],
    phaseMaximum1: [25, 35, 25, 35, 25, 35, 25, 35, 0, 0, 0, 0, 0, 0, 0, 0],
    phaseMaximum2: [30, 50, 30, 50, 30, 50, 30, 50, 0, 0, 0, 0, 0, 0, 0, 0],
    phaseYellowChange: [40, 40, 40, 40, 40, 40, 40, 40, 0, 0, 0, 0, 0, 0, 0, 0],
    phaseRedClear: [20, 20, 20, 20, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0]
};

const transformData = (src: Record<string, number[]>) => {
    const transpose: any[] = [];
    for (const key in src) {
        const row: any = { item: key };
        src[key].forEach((v, i) => {
            row[i + 1] = v;
        });
        transpose.push(row);
    }
    return transpose;
};

const App = () => {
    const parsedData = useMemo(() => transformData(data), []);
    return (
        <Grid data={parsedData}>
            <Column field="item" title="Phase" width="200px" />
            <Column field="1" width="50px" />
            <Column field="2" width="50px" />
            <Column field="3" width="50px" />
            <Column field="4" width="50px" />
            <Column field="5" width="50px" />
            <Column field="6" width="50px" />
            <Column field="7" width="50px" />
            <Column field="8" width="50px" />
            <Column field="9" width="50px" />
            <Column field="10" width="50px" />
            <Column field="11" width="50px" />
            <Column field="12" width="50px" />
            <Column field="13" width="50px" />
            <Column field="14" width="50px" />
            <Column field="15" width="50px" />
            <Column field="16" width="50px" />
        </Grid>
    );
};

export default App;
