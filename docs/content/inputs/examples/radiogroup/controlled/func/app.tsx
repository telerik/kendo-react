import * as React from 'react';
import { RadioGroup } from '@progress/kendo-react-inputs';

const data = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python' },
    { label: 'C++', value: 'cpp' },
    { label: 'Go', value: 'go' },
    { label: 'Rust', value: 'rust' }
];

const App = () => {
    const [checked, setChecked] = React.useState(data[0].value);

    const handleChange = (e: { value: string }) => {
        setChecked(e.value);
    };

    return (
        <div>
            <h3>Select Your Preferred Programming Language</h3>
            <br />
            <RadioGroup data={data} value={checked} onChange={handleChange} />
            <br />
            <div>
                <span>
                    Selected Language: <strong>{checked}</strong>
                </span>
            </div>
        </div>
    );
};

export default App;
