import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const data: string[] = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                <div className="k-col">
                    <Label editorId={'solid'}>Solid</Label>
                    <br />
                    <DropDownList
                        id={'solid'}
                        data={data}
                        fillMode={'solid'}
                        defaultItem="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'flat'}>Flat</Label>
                    <br />
                    <DropDownList
                        id={'flat'}
                        data={data}
                        fillMode={'flat'}
                        defaultItem="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'outline'}>Outline</Label>
                    <br />
                    <DropDownList
                        id={'outline'}
                        data={data}
                        fillMode={'outline'}
                        defaultItem="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default App;
