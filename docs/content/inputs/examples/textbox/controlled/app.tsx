import * as React from 'react';
import { TextBox, TextBoxChangeEvent } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [name, setName] = React.useState<string>('');

    const handleChange = (event: TextBoxChangeEvent) => {
        setName(event.value as string);
    };

    const handleSave = () => {
        console.log('Saved Name:', name);
        alert(`Profile name saved: ${name}`);
    };

    return (
        <div className="d-flex flex-wrap justify-content-center ">
            <div className="p-4 border rounded shadow" style={{ width: '300px' }}>
                <h3>Edit Profile</h3>
                <TextBox value={name} onChange={handleChange} placeholder="Enter your name" />
                <Button onClick={handleSave} className="mt-3" themeColor="primary">
                    Save
                </Button>
            </div>
        </div>
    );
};

export default App;
