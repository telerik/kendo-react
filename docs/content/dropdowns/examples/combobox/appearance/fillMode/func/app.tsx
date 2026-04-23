import * as React from 'react';

import { ComboBox } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const data: string[] = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                <div className="k-col">
                    <Label editorId={'solid'}>Solid</Label>
                    <br />
                    <ComboBox
                        id={'solid'}
                        data={data}
                        fillMode={'solid'}
                        placeholder="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'outline'}>Outline</Label>
                    <br />
                    <ComboBox
                        id={'outline'}
                        data={data}
                        fillMode={'outline'}
                        placeholder="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'flat'}>Flat</Label>
                    <br />
                    <ComboBox
                        id={'flat'}
                        data={data}
                        fillMode={'flat'}
                        placeholder="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default App;
