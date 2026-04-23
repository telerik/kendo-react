import * as React from 'react';
import { FloatingLabel } from '@progress/kendo-react-labels';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [firstName, setFirstName] = React.useState<string | undefined>(undefined);
    const [lastName, setLastName] = React.useState<string | undefined>(undefined);
    return (
        <div>
            <FloatingLabel label={'First Name'} editorId={'firstName'} editorValue={firstName}>
                <Input id={'firstName'} value={firstName} onChange={(e: InputChangeEvent) => setFirstName(e.value)} />
            </FloatingLabel>
            <br />
            <FloatingLabel
                style={{ marginTop: '10px' }}
                optional={true}
                label={'Last Name'}
                editorId={'lastName'}
                editorValue={lastName}
            >
                <Input id={'lastName'} value={lastName} onChange={(e: InputChangeEvent) => setLastName(e.value)} />
            </FloatingLabel>
        </div>
    );
};

export default App;
