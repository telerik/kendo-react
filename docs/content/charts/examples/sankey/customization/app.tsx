import * as React from 'react';
import { Sankey, SankeyLinkDefaults, SankeyNodeDefaults, SankeyLabelDefaults } from '@progress/kendo-react-charts';
import { data } from './data';

const nodes: SankeyNodeDefaults = {
    color: 'red',
    opacity: 0.5
};

const links: SankeyLinkDefaults = {
    colorType: 'static',
    color: 'green'
};

const labels = {
    color: 'blue',
    opacity: 0.5
};

const App: React.FC = () => {
    return (
        <Sankey
            style={{ maxWidth: 700, height: 250, margin: 'auto' }}
            data={data}
            nodes={nodes}
            links={links}
            labels={labels}
        />
    );
};

export default App;
