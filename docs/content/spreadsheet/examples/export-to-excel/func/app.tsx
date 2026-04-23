import * as React from 'react';
import { Spreadsheet, SpreadsheetHandle } from '@progress/kendo-react-spreadsheet';
import { Button } from '@progress/kendo-react-buttons';
import { invoices } from './shared-sp-invoices';

const App = () => {
    const spreadsheet = React.useRef<SpreadsheetHandle>(null);

    const exportToExcel = () => {
        if (spreadsheet.current) {
            spreadsheet.current.saveAsExcel({ fileName: 'exportedFileName.xlsx' });
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
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <div className="k-form-field" style={{ flex: '1 1 0px' }}>
                        <div className="k-form-field-wrap">
                            <Button id="exportBtn" onClick={exportToExcel}>
                                Export to Excel
                            </Button>
                        </div>
                    </div>
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
                        height: 560
                    }}
                    defaultProps={{ sheets: invoices }}
                />
            </div>
        </>
    );
};

export default App;
