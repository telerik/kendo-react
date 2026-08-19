import * as React from 'react';
import { Upload } from '@progress/kendo-react-upload';

const saveUrl = 'https://demos.telerik.com/service/v2/odata/upload/save';
const removeUrl = 'https://demos.telerik.com/service/v2/odata/upload/remove';

const App = () => {
    return (
        <div className="example-wrapper-center">
            <Upload defaultFiles={[]} withCredentials={false} saveUrl={saveUrl} removeUrl={removeUrl} />
        </div>
    );
};

export default App;
