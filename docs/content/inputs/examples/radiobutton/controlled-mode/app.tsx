import * as React from 'react';
import { RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [selectedRole, setSelectedRole] = React.useState<string>('admin');

    const handleChange = React.useCallback(
        (e: RadioButtonChangeEvent) => {
            setSelectedRole(e.value);
        },
        [setSelectedRole]
    );

    return (
        <div className="k-d-flex k-justify-content-center k-align-items-center">
            <div>
                <Label>Select Your Role</Label>
                <br />
                <RadioButton
                    name={'userRole'}
                    value={'admin'}
                    checked={selectedRole === 'admin'}
                    label={'Admin'}
                    onChange={handleChange}
                />
                <br />
                <RadioButton
                    name={'userRole'}
                    value={'editor'}
                    checked={selectedRole === 'editor'}
                    label={'Editor'}
                    onChange={handleChange}
                />
                <br />
                <RadioButton
                    name={'userRole'}
                    value={'viewer'}
                    checked={selectedRole === 'viewer'}
                    label={'Viewer'}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default App;
