import * as React from 'react';
import { Sankey, SankeyLinkDefaults, SankeyLegend } from '@progress/kendo-react-charts';
import { data } from './data';

const links: SankeyLinkDefaults = {
    colorType: 'source'
};

const legend: SankeyLegend = {
    position: 'top'
};

const App: React.FC = () => {
    return <Sankey style={{ maxWidth: 700, height: 250, margin: 'auto' }} data={data} links={links} legend={legend} />;
};

export default App;
