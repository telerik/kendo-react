import * as React from 'react';

import { Switch } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <div>
                <Label>
                    Small
                    <br />
                    <br />
                    <Switch size="large" thumbRounded="small" />
                </Label>
            </div>
            <div>
                <Label>
                    Medium
                    <br />
                    <br />
                    <Switch size="large" thumbRounded="medium" />
                </Label>
            </div>
            <div>
                <Label>
                    Large
                    <br />
                    <br />
                    <Switch size="large" thumbRounded="large" />
                </Label>
            </div>
            <div>
                <Label>
                    Full
                    <br />
                    <br />
                    <Switch size="large" thumbRounded="full" />
                </Label>
            </div>
            <div>
                <Label>
                    None
                    <br />
                    <br />
                    <Switch size="large" thumbRounded="none" />
                </Label>
            </div>
        </div>
    );
};

export default App;
