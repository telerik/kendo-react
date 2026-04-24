import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const data: string[] = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    return (
        <div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'small'}>Small</Label>
                <br />
                <DropDownList
                    id={'small'}
                    data={data}
                    rounded={'small'}
                    defaultItem="Please select ..."
                    style={{ width: '300px' }}
                />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'medium'}>Medium</Label>
                <br />
                <DropDownList
                    id={'medium'}
                    data={data}
                    rounded={'medium'}
                    defaultItem="Please select ..."
                    style={{ width: '300px' }}
                />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'large'}>Large</Label>
                <br />
                <DropDownList
                    id={'large'}
                    data={data}
                    rounded={'large'}
                    defaultItem="Please select ..."
                    style={{ width: '300px' }}
                />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'full'}>Full</Label>
                <br />
                <DropDownList
                    id={'full'}
                    data={data}
                    rounded={'full'}
                    defaultItem="Please select ..."
                    style={{ width: '300px' }}
                />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'none'}>None</Label>
                <br />
                <DropDownList
                    id={'none'}
                    data={data}
                    rounded={'none'}
                    defaultItem="Please select ..."
                    style={{ width: '300px' }}
                />
            </div>
        </div>
    );
};

export default App;
