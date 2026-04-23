import * as React from 'react';
import { Sankey, SankeyLinkDefaults } from '@progress/kendo-react-charts';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { data } from './data';

const links: SankeyLinkDefaults = {
    colorType: 'source'
};

const App: React.FC = () => {
    const [autoLayout, setAutoLayout] = React.useState(true);

    const onLayoutChange = React.useCallback((event: SwitchChangeEvent) => {
        setAutoLayout(event.target.value);
    }, []);

    return (
        <>
            <div className="k-display-flex k-justify-content-center k-mb-4">
                <Switch checked={autoLayout} onChange={onLayoutChange} onLabel="On" offLabel="Off" />
            </div>
            <Sankey
                style={{ maxWidth: 700, height: 250, margin: 'auto' }}
                data={data}
                links={links}
                disableAutoLayout={!autoLayout}
            />
        </>
    );
};

export default App;
