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
                    rounded="small"
                    defaultValue="555 123 4567"
                />
            </div>
            <div>
                <Label editorId="maskedtextbox-medium">Medium</Label>
                <MaskedTextBox
                    id="maskedtextbox-medium"
                    mask="(999) 000-00-00"
                    rounded="medium"
                    defaultValue="555 123 4567"
                />
            </div>
            <div>
                <Label editorId="maskedtextbox-large">Large</Label>
                <MaskedTextBox
                    id="maskedtextbox-large"
                    mask="(999) 000-00-00"
                    rounded="large"
                    defaultValue="555 123 4567"
                />
            </div>
            <div>
                <Label editorId="maskedtextbox-full">Full</Label>
                <MaskedTextBox
                    id="maskedtextbox-full"
                    mask="(999) 000-00-00"
                    rounded="full"
                    defaultValue="555 123 4567"
                />
            </div>
            <div>
                <Label editorId="maskedtextbox-none">None</Label>
                <MaskedTextBox
                    id="maskedtextbox-none"
                    mask="(999) 000-00-00"
                    rounded="none"
                    defaultValue="555 123 4567"
                />
            </div>
        </div>
    );
};

export default App;
