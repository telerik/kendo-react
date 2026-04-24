import * as React from 'react';

import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const employees = [
    { id: 1, name: 'Daryl Sweeney', position: 'CEO' },
    { id: 2, name: 'Guy Wooten', position: 'Chief Technical Officer' },
    { id: 3, name: 'Priscilla Frank', position: 'Chief Product Officer' },
    { id: 4, name: 'Ursula Holmes', position: 'EVP, Product Strategy' },
    { id: 5, name: 'Anika Vega', position: 'Chief Process Officer' }
];

const columns = [
    { field: 'id', header: 'ID', width: '70px' },
    { field: 'name', header: 'Name', width: '200px' },
    { field: 'position', header: 'Position', width: '200px' }
];

const App = () => {
    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                <div className="k-col">
                    <Label editorId={'small'}>Small</Label>
                    <br />
                    <MultiColumnComboBox
                        id={'small'}
                        style={{ width: '300px' }}
                        rounded={'small'}
                        data={employees}
                        columns={columns}
                        textField={'name'}
                        placeholder="Please select ..."
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'medium'}>Medium</Label>
                    <br />
                    <MultiColumnComboBox
                        id={'medium'}
                        style={{ width: '300px' }}
                        rounded={'medium'}
                        data={employees}
                        columns={columns}
                        textField={'name'}
                        placeholder="Please select ..."
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'large'}>Large</Label>
                    <br />
                    <MultiColumnComboBox
                        id={'large'}
                        style={{ width: '300px' }}
                        rounded={'large'}
                        data={employees}
                        columns={columns}
                        textField={'name'}
                        placeholder="Please select ..."
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'full'}>Full</Label>
                    <br />
                    <MultiColumnComboBox
                        id={'full'}
                        style={{ width: '300px' }}
                        rounded={'full'}
                        data={employees}
                        columns={columns}
                        textField={'name'}
                        placeholder="Please select ..."
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'none'}>None</Label>
                    <br />
                    <MultiColumnComboBox
                        id={'none'}
                        style={{ width: '300px' }}
                        rounded={'none'}
                        data={employees}
                        columns={columns}
                        textField={'name'}
                        placeholder="Please select ..."
                    />
                </div>
            </div>
        </section>
    );
};

export default App;
