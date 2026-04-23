import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import countries from './shared-dd-countries';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const valueRender = (element: React.ReactElement<HTMLSpanElement>, value: any) => {
        if (!value) {
            return element;
        }

        const children = [
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
                {value[0]}
            </span>,
            <span key={2}>&nbsp; {element.props.children as any}</span>
        ];

        return React.cloneElement(element, { ...element.props }, children);
    };

    return (
        <div className="example-wrapper" style={{ minHeight: 80 }}>
            <Label editorId="country">Select country</Label>
            <br />
            <DropDownList
                id="country"
                data={countries}
                defaultValue={countries[0]}
                valueRender={valueRender}
                style={{ width: '210px' }}
            />
        </div>
    );
};

export default App;
