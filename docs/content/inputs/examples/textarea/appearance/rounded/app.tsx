import * as React from 'react';

import { TextArea } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <div>
                <Label editorId="textarea-small">Small</Label>
                <TextArea id="textarea-small" rounded="small" defaultValue="Sample text content" />
            </div>
            <div>
                <Label editorId="textarea-medium">Medium</Label>
                <TextArea id="textarea-medium" rounded="medium" defaultValue="Sample text content" />
            </div>
            <div>
                <Label editorId="textarea-large">Large</Label>
                <TextArea id="textarea-large" rounded="large" defaultValue="Sample text content" />
            </div>
            <div>
                <Label editorId="textarea-full">Full</Label>
                <TextArea id="textarea-full" rounded="full" defaultValue="Sample text content" />
            </div>
            <div>
                <Label editorId="textarea-none">None</Label>
                <TextArea id="textarea-none" rounded="none" defaultValue="Sample text content" />
            </div>
        </div>
    );
};

export default App;
