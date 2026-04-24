import * as React from 'react';
import { Sankey, SankeyLinkDefaults, SankeyTooltip } from '@progress/kendo-react-charts';
import { data } from './data';

const links: SankeyLinkDefaults = {
    colorType: 'source'
};

const tooltip: SankeyTooltip = {
    visible: true,
    offset: 12,
    followPointer: true,
    delay: 0
};

const App: React.FC = () => {
    return (
        <Sankey style={{ maxWidth: 700, height: 250, margin: 'auto' }} data={data} links={links} tooltip={tooltip} />
    );
};

export default App;
