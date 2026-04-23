import * as React from 'react';
import { Sankey, SankeyLinkDefaults, SankeyTitle } from '@progress/kendo-react-charts';
import { data } from './data';

const links: SankeyLinkDefaults = {
    colorType: 'source'
};

const title: SankeyTitle = {
    position: 'top',
    text: "WebSite Visits' Statistic",
    font: '500 18px sans-serif'
};

const App: React.FC = () => (
    <Sankey style={{ maxWidth: 700, height: 250, margin: 'auto' }} data={data} links={links} title={title} />
);

export default App;
