import * as React from 'react';
import { ComboBox } from '@progress/kendo-react-dropdowns';

const sports = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball'
];

const valueRender = (element) => {
    if (!element.props.value) {
        return element;
    }
    return <span style={{ color: 'red', width: '100%' }}>{element}</span>;
};

const App = () => {
    return (
        <div className="example-wrapper" style={{ minHeight: 80 }}>
            <div>ComboBox</div>
            <ComboBox
                style={{
                    width: '300px'
                }}
                data={sports}
                valueRender={valueRender}
            />
        </div>
    );
};

export default App;
