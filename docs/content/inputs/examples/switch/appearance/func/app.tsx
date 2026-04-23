import * as React from 'react';

import { Switch } from '@progress/kendo-react-inputs';
import { SwitchStyleConfigurator } from './shared-in-switch-style-configurator';

const App = () => {
    const [size, setSize] = React.useState<'small' | 'medium' | 'large'>('medium');
    const [trackRounded, setTrackRounded] = React.useState<'small' | 'medium' | 'large' | 'full'>('full');
    const [thumbRounded, setThumbRounded] = React.useState<'small' | 'medium' | 'large' | 'full'>('full');

    return (
        <div>
            <SwitchStyleConfigurator
                size={size}
                onSizeChange={setSize}
                trackRounded={trackRounded}
                onTrackRoundedChange={setTrackRounded}
                thumbRounded={thumbRounded}
                onThumbRoundedChange={setThumbRounded}
            />
            <Switch size={size} trackRounded={trackRounded} thumbRounded={thumbRounded} />
        </div>
    );
};

export default App;
