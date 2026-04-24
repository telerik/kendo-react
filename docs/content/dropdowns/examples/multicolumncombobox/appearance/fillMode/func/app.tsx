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
                    <Label editorId={'solid'}>Solid</Label>
                    <br />
                    <MultiColumnComboBox
                        id={'solid'}
                        style={{ width: '300px' }}
                        fillMode={'solid'}
                        data={employees}
                        columns={columns}
                        textField={'name'}
                        placeholder="Please select ..."
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'outline'}>Outline</Label>
                    <br />
                    <MultiColumnComboBox
                        id={'outline'}
                        style={{ width: '300px' }}
                        fillMode={'outline'}
                        data={employees}
                        columns={columns}
                        textField={'name'}
                        placeholder="Please select ..."
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'flat'}>Flat</Label>
                    <br />
                    <MultiColumnComboBox
                        id={'flat'}
                        style={{ width: '300px' }}
                        fillMode={'flat'}
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
