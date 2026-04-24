import * as React from 'react';

import { TextArea } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <div>
                <Label editorId="textarea-small">Small</Label>
                <TextArea id="textarea-small" size="small" defaultValue="Sample text content" />
            </div>
            <div>
                <Label editorId="textarea-medium">Medium</Label>
                <TextArea id="textarea-medium" size="medium" defaultValue="Sample text content" />
            </div>
            <div>
                <Label editorId="textarea-large">Large</Label>
                <TextArea id="textarea-large" size="large" defaultValue="Sample text content" />
            </div>
        </div>
    );
};

export default App;
