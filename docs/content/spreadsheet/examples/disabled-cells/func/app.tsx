import * as React from 'react';
import { Sheet, Spreadsheet, SpreadsheetHandle } from '@progress/kendo-react-spreadsheet';
import { Button } from '@progress/kendo-react-buttons';
import { foodOrders } from './shared-sp-food-orders';

const App = () => {
    const [text, setText] = React.useState<string>("Disable 'Quantity' column");
    const ref = React.useRef<SpreadsheetHandle>(null);

    const onClick = React.useCallback(() => {
        const spreadshet = ref.current;
        if (spreadshet) {
            const sheet = spreadshet.activeSheet();
            const range = (sheet as Sheet).range('C2:C10');
            if (range) {
                let enabled = range.enable();

                // Enable / disable specified range
                range.enable(!enabled);

                setText(enabled ? "Enable 'Quantity' column" : "Disable 'Quantity' column");
            }
        }
    }, []);

    return (
        <>
            <Button onClick={onClick}>{text}</Button>
            <br />
            <br />
            <Spreadsheet
                ref={ref}
                style={{ width: '100%', height: 640 }}
                defaultProps={{
                    sheets: foodOrders
                }}
            />
        </>
    );
};

export default App;
