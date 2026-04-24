import * as React from 'react';
import { RadioGroup } from '@progress/kendo-react-inputs';
import { KendoGrid } from './KendoGrid';
import { DataProvider } from './services';
import './styles.css';

const data = [
    { label: '2000 milliseconds', value: '2000' },
    { label: '500 milliseconds', value: '500' },
    { label: '50 milliseconds', value: '50' }
];

const App = () => {
    const [refreshRate, setRefreshRate] = React.useState(data[2].value);
    const handleChange = (e) => {
        setRefreshRate(e.value);
    };
    return (
        <div className="App">
            <div style={{ margin: '-30px -30px 30px -30px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span className="k-color-primary" style={{ textTransform: 'uppercase', padding: '4px 0' }}>
                        Configurator
                    </span>
                </div>
                <div
                    className="example-config"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}
                >
                    <div>
                        <b>Select data refresh rate:</b>
                        <RadioGroup data={data} value={refreshRate} onChange={handleChange} />
                    </div>
                </div>
            </div>

            <DataProvider>
                <KendoGrid refreshRate={refreshRate} />
            </DataProvider>
        </div>
    );
};

export default App;
