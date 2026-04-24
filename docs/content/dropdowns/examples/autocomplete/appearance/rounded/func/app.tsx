import * as React from 'react';

import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const data: string[] = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    return (
        <div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'small'}>Small</Label>
                <br />
                <AutoComplete
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
                <AutoComplete
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
                <AutoComplete
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
                <AutoComplete
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
                <AutoComplete
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
