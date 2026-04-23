import * as React from 'react';

import { TileLayout, TileLayoutItem } from '@progress/kendo-react-layout';

const tiles: Array<TileLayoutItem> = [
    {
        defaultPosition: { col: 1, colSpan: 2, rowSpan: 1 },
        body: "Some quick example text to build on the card title and make up the bulk of the card content.",
        header: "Card Title"
    },
    {
        defaultPosition: { col: 1, colSpan: 1, rowSpan: 2 },
        body: "Some quick example text to build on the card title and make up the bulk of the card content.",
        header: "Card Title"
    },
    {
        defaultPosition: { col: 3, colSpan: 1, rowSpan: 1 },
        body: "Some quick example text to build on the card title and make up the bulk of the card content.",
        header: "Card Title"
    },
    {
        defaultPosition: { col: 2, colSpan: 2, rowSpan: 1 },
        body: "Some quick example text to build on the card title and make up the bulk of the card content.",
        header: "Card Title"
    },
    {
        defaultPosition: { col: 2, colSpan: 2, rowSpan: 1 },
        body: "Some quick example text to build on the card title and make up the bulk of the card content.",
        header: "Card Title"
    }
];

const App = () => {
    return (
      <TileLayout items={tiles} />
    );
};

export default App;
