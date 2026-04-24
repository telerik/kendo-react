import * as React from 'react';
import { Checkbox } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Checkbox id={'chb1'}>
                <Label
                    editorId={'chb1'}
                    className={'k-checkbox-label text-center'}
                    style={{ display: 'block', marginLeft: '10px' }}
                >
                    By clicking <a href="#">Sign Up</a>, you agree to our Terms and Conditions.
                </Label>
            </Checkbox>
        </div>
    );
};

export default App;
