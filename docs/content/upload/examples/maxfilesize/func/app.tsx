import * as React from 'react';
import { Upload } from '@progress/kendo-react-upload';

const App = () => {
    return (
        <Upload
            batch={false}
            restrictions={{
                maxFileSize: 4000000
            }}
            defaultFiles={[]}
            withCredentials={false}
            saveUrl={'https://demos.telerik.com/service/v2/odata/upload/save'}
            removeUrl={'https://demos.telerik.com/service/v2/odata/upload/remove'}
        />
    );
};

export default App;
