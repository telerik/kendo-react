import * as React from 'react';
import { Sankey, SankeyLinkDefaults, SankeyTitle, SankeyLegend } from '@progress/kendo-react-charts';
import { data } from './data';

const links: SankeyLinkDefaults = {
    colorType: 'source'
};

const title: SankeyTitle = {
    position: 'top',
    text: "WebSite Visits' Statistic",
    font: '500 18px sans-serif'
};

const legend: SankeyLegend = {
    visible: false
};

const App: React.FC = () => {
    return (
        <Sankey
            style={{ maxWidth: 700, height: 250, margin: 'auto' }}
            data={data}
            links={links}
            title={title}
            legend={legend}
        />
    );
};

export default App;
