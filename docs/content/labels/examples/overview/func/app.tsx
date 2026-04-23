import * as React from 'react';
import { FloatingLabel, Label, Hint, Error } from '@progress/kendo-react-labels';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState<string | undefined>(undefined);
    const editorId = 'firstName';

    const handleChange = (event: InputChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div className="row">
            <div className="col-12 col-md-6 example-col">
                <FloatingLabel
                    label={'Floating Label'}
                    editorId={editorId}
                    editorValue={value}
                    style={{ width: '100%', marginTop: '0.5rem' }}
                >
                    <Input id={editorId} value={value} onChange={handleChange} />
                </FloatingLabel>
            </div>
            <div className="col-12 col-md-6 example-col">
                <Label editorId={editorId}>Label&nbsp;</Label>
                <Input id={editorId} value={value} onChange={handleChange} />
            </div>
            <div className="col-12 col-md-6 example-col">
                <Input id={editorId} value={value} ariaDescribedBy={'firstNameHint'} onChange={handleChange} />
                <Hint id={'firstNameHint'}>Hint</Hint>
            </div>
            <div className="col-12 col-md-6 example-col">
                <Input id={editorId} value={value} ariaDescribedBy={'firstNameError'} onChange={handleChange} />
                {!value && <Error id={'firstNameError'}>Error</Error>}
            </div>
        </div>
    );
};

export default App;
