import * as React from 'react';
import { Breadcrumb } from '@progress/kendo-react-layout';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

interface DataModel {
    id: string;
    text?: string;
    icon?: React.ReactNode;
    iconClass?: string;
}

const items: DataModel[] = [
    { id: 'home', text: 'Home', iconClass: 'k-i-home' },
    { id: 'products', text: 'Products' },
    { id: 'computer', text: 'Computer' },
    { id: 'gaming', text: 'Gaming' },
    { id: 'keyboard', text: 'Keyboard' }
];

const App = () => {
    const [disabled, setDisabled] = React.useState(false);

    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setDisabled(event.value);
    };

    return (
        <div>
            <Label>
                Disabled&nbsp;&nbsp;
                <Switch onChange={handleSwitchChange} />
            </Label>
            <br />
            <br />
            <Breadcrumb data={items} disabled={disabled} />
        </div>
    );
};

export default App;
