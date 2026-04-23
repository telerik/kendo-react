import * as React from 'react';

import { Upload, UploadActionsLayout } from '@progress/kendo-react-upload';
import { Label } from '@progress/kendo-react-labels';
import { RadioButton } from '@progress/kendo-react-inputs';

const App = () => {
    const [actionsLayout, setActionsLayout] = React.useState<UploadActionsLayout>('end');

    const handleChange = (e) => {
        setActionsLayout(e.target.value);
    };

    return (
        <div className="example">
            <div className="upload">
                <Upload
                    autoUpload={false}
                    actionsLayout={actionsLayout}
                    defaultFiles={[]}
                    withCredentials={false}
                    saveUrl={'https://demos.telerik.com/service/v2/odata/upload/save'}
                    removeUrl={'https://demos.telerik.com/service/v2/odata/upload/remove'}
                />
            </div>
            <div className="example-config">
                <h5>Actions Layout</h5>
                <RadioButton
                    id="start"
                    name="layout"
                    value="start"
                    defaultChecked={actionsLayout === 'start'}
                    onClick={handleChange}
                    label="Start"
                />
                <br />
                <RadioButton
                    id="center"
                    name="layout"
                    value="center"
                    defaultChecked={actionsLayout === 'center'}
                    onClick={handleChange}
                    label="Center"
                />
                <br />
                <RadioButton
                    id="end"
                    name="layout"
                    value="end"
                    defaultChecked={actionsLayout === 'end'}
                    onClick={handleChange}
                    label="End"
                />
                <br />
                <RadioButton
                    id="stretched"
                    name="layout"
                    value="stretched"
                    defaultChecked={actionsLayout === 'stretched'}
                    onClick={handleChange}
                    label="Stretched"
                />
                <span className="k-form-hint">*Please, select files to view the action buttons.</span>
            </div>
            <style>{`
        .example {
            display: flex;
            gap: 20px;
        }
        .upload { flex: 1 0 60%; }
        .example-config { flex: 1 0 30%; }
        `}</style>
        </div>
    );
};

export default App;
