import * as React from 'react';
import { Spreadsheet } from '@progress/kendo-react-spreadsheet';
import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';
import { sheets } from './shared-sp-sheets';
import deMessages from './de.json';
loadMessages(deMessages, 'de');

const App = () => {
    return (
        <LocalizationProvider language="de">
            <Spreadsheet
                style={{
                    width: '100%',
                    height: 680
                }}
                defaultProps={{ sheets: sheets }}
            />
        </LocalizationProvider>
    );
};

export default App;
