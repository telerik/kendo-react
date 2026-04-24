import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const data: string[] = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                <div className="k-col">
                    <Label editorId={'small'}>Small</Label>
                    <br />
                    <DropDownList
                        id={'small'}
                        data={data}
                        size={'small'}
                        defaultItem="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'medium'}>Medium</Label>
                    <br />
                    <DropDownList
                        id={'medium'}
                        data={data}
                        size={'medium'}
                        defaultItem="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'large'}>Large</Label>
                    <br />
                    <DropDownList
                        id={'large'}
                        data={data}
                        size={'large'}
                        defaultItem="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default App;
