import * as React from 'react';
import { Sankey, SankeyNode, SankeyData, SankeyLinkDefaults } from '@progress/kendo-react-charts';
import { data } from './sankey-data';

const links: SankeyLinkDefaults = {
    colorType: 'source'
};

const sankeyData: SankeyData = {
    ...data,
    nodes: data.nodes.map((node: SankeyNode) => {
        if ((node.id as number) % 2 === 0) {
            node.color = 'lightblue';
        } else {
            node.color = 'lightgreen';
        }
        return node;
    })
};

const App: React.FC = () => {
    return <Sankey style={{ maxWidth: 700, height: 250, margin: 'auto' }} data={sankeyData} links={links} />;
};

export default App;
