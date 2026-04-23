import * as React from 'react';
import { RadioGroup } from '@progress/kendo-react-inputs';

const data = [
    { label: 'Car', value: 'car' },
    { label: 'Public Transport', value: 'public-transport' },
    { label: 'Cycling', value: 'cycling' },
    { label: 'Walking', value: 'walking' }
];

const App = () => {
    const radioGroupRef = React.useRef<any>(null);

    React.useEffect(() => {
        if (radioGroupRef.current) {
            radioGroupRef.current.focus();
        }
    }, []);

    return (
        <div className="k-d-flex k-justify-content-center k-align-items-center">
            <RadioGroup data={data} ref={radioGroupRef} layout="vertical" />
        </div>
    );
};

export default App;
