import * as React from 'react';
import { Spreadsheet, SpreadsheetHandle } from '@progress/kendo-react-spreadsheet';
import { NumericTextBox, NumericTextBoxHandle } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { sheets } from './shared-sp-sheets';

const App = (props: any) => {
    const spreadsheet = React.useRef<SpreadsheetHandle>(null);
    const rows = React.useRef<NumericTextBoxHandle>(null);
    const columns = React.useRef<NumericTextBoxHandle>(null);

    const onClick = React.useCallback(() => {
        if (spreadsheet.current && rows.current && columns.current) {
            const sheet = spreadsheet.current.activeSheet();
            if (sheet) {
                sheet.resize(rows.current.value || 0, columns.current.value || 0);
            }
        }
    }, []);

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
                        Rows count
                        <div className="k-form-field-wrap">
                            <NumericTextBox ref={rows} defaultValue={4} />
                        </div>
                    </span>
                    <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                        Columns count
                        <div className="k-form-field-wrap">
                            <NumericTextBox ref={columns} defaultValue={5} />
                        </div>
                    </span>
                    <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                        <div className="k-form-field-wrap">
                            <br />
                            <Button id="resize" onClick={onClick}>
                                Apply
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
                    style={{ width: '100%', height: 500 }}
                    defaultProps={{
                        sheets: sheets,
                        rows: 50,
                        columns: 15
                    }}
                />
            </div>
        </>
    );
};

export default App;
