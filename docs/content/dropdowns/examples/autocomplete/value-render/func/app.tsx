import * as React from 'react';

import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
const countries: string[] = [
    'Brazil',
    'Bulgaria',
    'Canada',
    'China',
    'France',
    'Germany',
    'India',
    'Italy',
    'Japan',
    'Mexico',
    'United Kingdom',
    'United States'
];

const App = () => {
    const valueRender = (element) => {
        if (!element.props.value) {
            return element;
        }

        return (
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <span
                    key={1}
                    style={{
                        background: '#333',
                        color: '#fff',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        textAlign: 'center',
                        overflow: 'hidden',
                        float: 'left'
                    }}
                >
                    {element.props.value[0]}
                </span>

                <span style={{ display: 'inline-block', width: '75%' }}>{element}</span>
            </span>
        );
    };

    return (
        <div className="example-wrapper" style={{ minHeight: 80 }}>
            <Label>
                Select country <br />
                <AutoComplete
                    data={countries}
                    defaultValue={countries[0]}
                    valueRender={valueRender}
                    style={{ width: '210px' }}
                />
            </Label>
        </div>
    );
};

export default App;
