import * as React from 'react';
import { Spreadsheet, SpreadsheetHandle } from '@progress/kendo-react-spreadsheet';
import { Button } from '@progress/kendo-react-buttons';
import { data } from './shared-sp-basic-data';

const App = (props) => {
    const spreadsheet = React.useRef<SpreadsheetHandle>(null);
    const [value, setValue] = React.useState<string>('');
    const loadFromJSON = () => {
        if (spreadsheet.current) {
            spreadsheet.current.fromJSON({ sheets: data });
        }
    };

    const exportToJSON = () => {
        if (spreadsheet.current) {
            setValue(JSON.stringify(spreadsheet.current.toJSON()));
        }
    };

    const saveToJSONinPromise = () => {
        if (spreadsheet.current) {
            spreadsheet.current.saveJSON().then(function (data) {
                let json = JSON.stringify(data, null, 2);
                alert(json);
            });
        }
    };

    return (
        <>
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
                        justifyContent: 'space-between',
                        flexWrap: 'wrap'
                    }}
                >
                    {props.children}
                    <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                        <div className="k-form-field-wrap">
                            <Button id="fromJSONBtn" onClick={loadFromJSON}>
                                Load from JSON
                            </Button>
                        </div>
                    </span>
                    <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                        <div className="k-form-field-wrap">
                            <Button id="toJSONBtn" onClick={exportToJSON}>
                                Get JSON
                            </Button>
                        </div>
                    </span>
                    <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                        <div className="k-form-field-wrap">
                            <Button id="saveJSONBtn" onClick={saveToJSONinPromise}>
                                Save JSON in Promise
                            </Button>
                        </div>
                    </span>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Spreadsheet
                    ref={spreadsheet}
                    style={{
                        width: '100%',
                        height: 450
                    }}
                />
            </div>
            <div
                className="example-config"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    marginTop: 15,
                    height: 160,
                    overflow: 'auto',
                    marginBottom: 0
                }}
            >
                {value}
            </div>
        </>
    );
};

export default App;
