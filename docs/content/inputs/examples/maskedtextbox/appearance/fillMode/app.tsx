import * as React from 'react';

import { MaskedTextBox } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <div>
                <Label editorId="maskedtextbox-solid">Solid</Label>
                <MaskedTextBox
                    id="maskedtextbox-solid"
                    mask="(999) 000-00-00"
                    fillMode="solid"
                    defaultValue="555 123 4567"
                />
            </div>
            <div>
                <Label editorId="maskedtextbox-outline">Outline</Label>
                <MaskedTextBox
                    id="maskedtextbox-outline"
                    mask="(999) 000-00-00"
                    fillMode="outline"
                    defaultValue="555 123 4567"
                />
            </div>
            <div>
                <Label editorId="maskedtextbox-flat">Flat</Label>
                <MaskedTextBox
                    id="maskedtextbox-flat"
                    mask="(999) 000-00-00"
                    fillMode="flat"
                    defaultValue="555 123 4567"
                />
            </div>
        </div>
    );
};

export default App;
