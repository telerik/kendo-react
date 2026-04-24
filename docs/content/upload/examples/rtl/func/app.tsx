import * as React from 'react';
import { Upload } from '@progress/kendo-react-upload';

const App = () => {
    return (
        <div className="k-rtl" dir="rtl">
            <Upload
                batch={false}
                multiple={true}
                defaultFiles={[]}
                withCredentials={false}
                saveUrl={'https://demos.telerik.com/service/v2/odata/upload/save'}
                removeUrl={'https://demos.telerik.com/service/v2/odata/upload/remove'}
                autoUpload={false}
            />
        </div>
    );
};

export default App;
