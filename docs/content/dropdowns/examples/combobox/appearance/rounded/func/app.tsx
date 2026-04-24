import * as React from 'react';

import { ComboBox } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const data: string[] = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                <div className="k-col">
                    <Label editorId={'small'}>Small</Label>
                    <br />
                    <ComboBox
                        id={'small'}
                        data={data}
                        rounded={'small'}
                        placeholder="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'medium'}>Medium</Label>
                    <br />
                    <ComboBox
                        id={'medium'}
                        data={data}
                        rounded={'medium'}
                        placeholder="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'large'}>Large</Label>
                    <br />
                    <ComboBox
                        id={'large'}
                        data={data}
                        rounded={'large'}
                        placeholder="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'full'}>Full</Label>
                    <br />
                    <ComboBox
                        id={'full'}
                        data={data}
                        rounded={'full'}
                        placeholder="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'none'}>None</Label>
                    <br />
                    <ComboBox
                        id={'none'}
                        data={data}
                        rounded={'none'}
                        placeholder="Please select ..."
                        style={{ width: '300px' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default App;
