import * as React from 'react';
import { Upload } from '@progress/kendo-react-upload';

const saveUrl = 'https://demos.telerik.com/service/v2/odata/upload/save';
const removeUrl = 'https://demos.telerik.com/service/v2/odata/upload/remove';

const App = () => {
    return <Upload defaultFiles={[]} withCredentials={false} saveUrl={saveUrl} removeUrl={removeUrl} />;
};

export default App;
