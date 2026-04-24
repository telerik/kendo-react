import * as React from 'react';
import {
    Sankey,
    SankeyLinkDefaults,
    SankeyTooltip,
    TooltipContentProps,
    SankeyLinkDataItem,
    SankeyNodeDataItem
} from '@progress/kendo-react-charts';
import { data } from './data';

const NodeTooltip: React.ComponentType<TooltipContentProps> = (props) => {
    const dataItem = props.dataItem as SankeyNodeDataItem;
    return <div style={{ backgroundColor: dataItem.color, color: 'white' }}>{dataItem.label.text}</div>;
};

const LinkTooltip: React.ComponentType<TooltipContentProps> = (props) => {
    const dataItem = props.dataItem as SankeyLinkDataItem;
    return (
        <div>
            <span style={{ backgroundColor: dataItem.source.color, color: 'white' }}>{dataItem.source.label.text}</span>
            {'->'}
            <span style={{ backgroundColor: dataItem.target.color, color: 'white' }}>{dataItem.target.label.text}</span>
        </div>
    );
};

const links: SankeyLinkDefaults = {
    colorType: 'source'
};

const tooltip: SankeyTooltip = {
    nodeComponent: NodeTooltip,
    linkComponent: LinkTooltip
};

const App: React.FC = () => {
    return (
        <Sankey style={{ maxWidth: 700, height: 250, margin: 'auto' }} data={data} links={links} tooltip={tooltip} />
    );
};

export default App;
