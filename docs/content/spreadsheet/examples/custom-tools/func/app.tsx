import * as React from 'react';
import {
    Spreadsheet,
    SpreadsheetTab,
    Bold,
    Italic,
    Underline,
    Open,
    SpreadsheetToolProps,
    SpreadsheetHandle
} from '@progress/kendo-react-spreadsheet';
import { Button, ToolbarSeparator } from '@progress/kendo-react-buttons';
import { codeIcon } from '@progress/kendo-svg-icons';
import { sheets } from './shared-sp-sheets';

const alertJSON: React.FunctionComponent<SpreadsheetToolProps> = (props) => {
    const { spreadsheetRef } = props;

    const onClick = () => {
        if (spreadsheetRef.current) {
            alert(JSON.stringify(spreadsheetRef.current.toJSON()));
        }
    };

    return <Button className="k-toolbar-button" title={'Alert JSON...'} svgIcon={codeIcon} onClick={onClick} />;
};

const customTabs: SpreadsheetTab[] = [
    {
        text: 'Custom Tab',
        selected: true,
        tools: [[Bold, Italic, Underline], ToolbarSeparator, Open, ToolbarSeparator, alertJSON]
    }
];

const App = () => {
    const spreadsheet = React.useRef<SpreadsheetHandle>(null);

    const onBold = React.useCallback(() => {
        if (spreadsheet.current) {
            const options = {
                command: 'PropertyChangeCommand',
                options: { property: 'bold', value: true }
            };

            spreadsheet.current.executeCommand(options);
        }
    }, []);

    return (
        <>
            <Button onClick={onBold} style={{ marginBottom: 15 }}>
                Bold
            </Button>
            <Spreadsheet
                ref={spreadsheet}
                style={{
                    width: '100%',
                    height: 650
                }}
                defaultProps={{ sheets: sheets }}
                toolbar={customTabs}
            />
        </>
    );
};

export default App;
