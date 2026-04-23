import * as React from 'react';
import {
    Sankey,
    SankeyLinkDefaults,
    SankeyNodeDefaults,
    SankeyTitle,
    FocusHighlight
} from '@progress/kendo-react-charts';

import { data } from './data';

const focusHighlight: FocusHighlight = {
    border: {
        color: 'red',
        width: 2,
        dashType: 'dash'
    }
};

const links: SankeyLinkDefaults = {
    colorType: 'source',
    focusHighlight
};

const title: SankeyTitle = {
    position: 'top',
    text: "WebSite Visits' Statistic",
    font: '500 18px sans-serif'
};

const nodes: SankeyNodeDefaults = { focusHighlight };

const App: React.FC = () => (
    <Sankey
        style={{ maxWidth: 700, height: 250, margin: 'auto' }}
        data={data}
        links={links}
        nodes={nodes}
        title={title}
    />
);

export default App;
