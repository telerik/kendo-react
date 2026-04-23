import * as React from 'react';
import { Upload } from '@progress/kendo-react-upload';
import { IntlProvider, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';
import bgMessages from './shared-up-bg';
loadMessages(bgMessages, 'bg-BG');

const App = () => {
    return (
        <LocalizationProvider language="bg-BG">
            <IntlProvider locale="bg">
                <Upload
                    batch={false}
                    multiple={true}
                    defaultFiles={[]}
                    withCredentials={false}
                    saveUrl={'https://demos.telerik.com/service/v2/odata/upload/save'}
                    removeUrl={'https://demos.telerik.com/service/v2/odata/upload/remove'}
                />
            </IntlProvider>
        </LocalizationProvider>
    );
};

export default App;
