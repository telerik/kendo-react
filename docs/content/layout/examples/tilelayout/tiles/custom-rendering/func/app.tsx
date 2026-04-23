import * as React from 'react';

import { TileLayout } from '@progress/kendo-react-layout';

const CustomItem = ({ order }) => {
    const styles: React.CSSProperties = {
        padding: 10
    }
    const content = [
        {
            src: 'https://demos.telerik.com/kendo-ui/content/web/cards/barcelona.jpg',
            text: 'Barselona',
        },
        {
            src: 'https://demos.telerik.com/kendo-ui/content/web/cards/rome.jpg',
            text: 'Rome',
        },
        {
            src: 'https://demos.telerik.com/kendo-ui/content/web/cards/sanfran.jpg',
            text: 'San Francisco',
        },
    ];
    return (
    <React.Fragment>
      <img src={content[order].src} alt="KendoReact TileLayout Content Image" style={{ width: '100%', height: 'auto' }} />
      <span style={styles}>{content[order].text}</span>
    </React.Fragment>
    )
};

const tiles = [
    { defaultPosition: { col: 1, colSpan: 1, rowSpan: 1 }, item: <CustomItem order={0} /> },
    { defaultPosition: { col: 2, colSpan: 1, rowSpan: 1 }, item: <CustomItem order={1} /> },
    { defaultPosition: { col: 3, colSpan: 1, rowSpan: 1 }, item: <CustomItem order={2} /> }
];

const App = () => {
    return (
    <div style={{ maxWidth: 690 }}>
      <TileLayout
        columns={3}
        items={tiles}
        rowHeight={200}
      />
    </div>
    );
};

export default App;
