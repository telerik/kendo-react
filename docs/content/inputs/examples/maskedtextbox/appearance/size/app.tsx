import * as React from 'react';

import { MaskedTextBox } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <div>
                <Label editorId="maskedtextbox-small">Small</Label>
                <MaskedTextBox
                    id="maskedtextbox-small"
                    mask="(999) 000-00-00"
                    size="small"
                    defaultValue="555 123 4567"
                />
            </div>
            <div>
                <Label editorId="maskedtextbox-medium">Medium</Label>
                <MaskedTextBox
                    id="maskedtextbox-medium"
                    mask="(999) 000-00-00"
                    size="medium"
                    defaultValue="555 123 4567"
                />
            </div>
            <div>
                <Label editorId="maskedtextbox-large">Large</Label>
                <MaskedTextBox
                    id="maskedtextbox-large"
                    mask="(999) 000-00-00"
                    size="large"
                    defaultValue="555 123 4567"
                />
            </div>
        </div>
    );
};

export default App;
