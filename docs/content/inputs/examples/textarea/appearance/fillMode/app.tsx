import * as React from 'react';

import { TextArea } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <div>
                <Label editorId="textarea-solid">Solid</Label>
                <TextArea id="textarea-solid" fillMode="solid" defaultValue="Sample text content" />
            </div>
            <div>
                <Label editorId="textarea-outline">Outline</Label>
                <TextArea id="textarea-outline" fillMode="outline" defaultValue="Sample text content" />
            </div>
            <div>
                <Label editorId="textarea-flat">Flat</Label>
                <TextArea id="textarea-flat" fillMode="flat" defaultValue="Sample text content" />
            </div>
        </div>
    );
};

export default App;
