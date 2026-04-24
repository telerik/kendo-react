import * as React from 'react';

import { Calendar } from '@progress/kendo-react-dateinputs';
import { Switch } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [navigation, setNavigation] = React.useState<boolean>(false);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Label>
                Show Navigation Bar &nbsp;
                <Switch onChange={() => setNavigation(!navigation)} checked={navigation} />
            </Label>
            <Calendar navigation={navigation} />
        </div>
    );
};

export default App;
