import * as React from 'react';

import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const data: string[] = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    return (
        <div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'small'}>Small</Label>
                <br />
                <MultiSelect
                    id={'small'}
                    data={data}
                    rounded={'small'}
                    placeholder="Please select ..."
                    style={{ width: '300px' }}
                />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'medium'}>Medium</Label>
                <br />
                <MultiSelect
                    id={'medium'}
                    data={data}
                    rounded={'medium'}
                    placeholder="Please select ..."
                    style={{ width: '300px' }}
                />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'large'}>Large</Label>
                <br />
                <MultiSelect
                    id={'large'}
                    data={data}
                    rounded={'large'}
                    placeholder="Please select ..."
                    style={{ width: '300px' }}
                />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'full'}>Full</Label>
                <br />
                <MultiSelect
                    id={'full'}
                    data={data}
                    rounded={'full'}
                    placeholder="Please select ..."
                    style={{ width: '300px' }}
                />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'none'}>None</Label>
                <br />
                <MultiSelect
                    id={'none'}
                    data={data}
                    rounded={'none'}
                    placeholder="Please select ..."
                    style={{ width: '300px' }}
                />
            </div>
        </div>
    );
};

export default App;
