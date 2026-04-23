import * as React from 'react';

import { PanelBar, PanelBarExpandMode, PanelBarItem } from '@progress/kendo-react-layout';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';
import { RadioButton } from '@progress/kendo-react-inputs';

const App = () => {
    const [expandMode, setExpandMode] = React.useState<PanelBarExpandMode>('multiple');

    const handleExpandModeChange = (e) => {
        setExpandMode(e.value);
    };

    return (
        <div>
            <div className="example-config row">
                <div className="col-sm-4">
                    <h5>Expand modes:</h5>
                    <RadioButton
                        id="single"
                        name="expandModeGroup"
                        value="single"
                        checked={expandMode === 'single'}
                        onChange={handleExpandModeChange}
                        label="Single expand mode"
                    />
                    <br />
                    <RadioButton
                        id="multiple"
                        name="expandModeGroup"
                        value="multiple"
                        checked={expandMode === 'multiple'}
                        onChange={handleExpandModeChange}
                        label="Multiple expand mode"
                    />
                </div>
            </div>
            <PanelBar expandMode={expandMode}>
                <PanelBarItem title={'Invasion Games'} expanded={true}>
                    <PanelBarItem title={'Hockey'} />
                    <PanelBarItem title={'Soccer'} />
                    <PanelBarItem title={'Rugby'} />
                    <PanelBarItem title={'Basketball'} />
                    <PanelBarItem title={'Water polo'} />
                    <PanelBarItem title={'Netball'} />
                </PanelBarItem>
                <PanelBarItem title={'Striking & Fielding Games'}>
                    <PanelBarItem title={'Cricket'} />
                    <PanelBarItem title={'Softball'} />
                    <PanelBarItem title={'Baseball'} />
                </PanelBarItem>
                <PanelBarItem title={'Net & Court Games'} expanded={true}>
                    <PanelBarItem title={'Badminton'} />
                    <PanelBarItem title={'Squash'} />
                    <PanelBarItem title={'Tennis'} />
                    <PanelBarItem title={'Table Tennis'} />
                    <PanelBarItem title={'Volleyball'} />
                </PanelBarItem>
                <PanelBarItem title={'Target Games'}>
                    <PanelBarItem title={'Golf'} />
                    <PanelBarItem title={'Lawn bowls'} />
                    <PanelBarItem title={'Tenpin bowling'} />
                </PanelBarItem>
            </PanelBar>
        </div>
    );
};

export default App;
