import * as React from 'react';
import { Rating, RatingItem, Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [readonly, setReadonly] = React.useState(true);

    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setReadonly(event.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: 20 }}>
                <Label>
                    Toggle Readonly&nbsp;&nbsp;
                    <Switch onChange={handleSwitchChange} checked={readonly} />
                </Label>
            </div>

            <Rating defaultValue={3} readonly={readonly} max={5} />
        </div>
    );
};

export default App;
