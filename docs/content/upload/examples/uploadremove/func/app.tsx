import * as React from 'react';
import { Upload, UploadOnBeforeUploadEvent, UploadOnBeforeRemoveEvent } from '@progress/kendo-react-upload';

const App = () => {
    const onBeforeUpload = (event: UploadOnBeforeUploadEvent) => {
        event.additionalData.description = 'File upload';
    };

    const onBeforeRemove = (event: UploadOnBeforeRemoveEvent) => {
        event.additionalData.description = 'File remove';
    };

    return (
        <Upload
            batch={false}
            multiple={true}
            defaultFiles={[]}
            onBeforeUpload={onBeforeUpload}
            onBeforeRemove={onBeforeRemove}
            withCredentials={false}
            saveUrl={'https://demos.telerik.com/service/v2/odata/upload/save'}
            removeUrl={'https://demos.telerik.com/service/v2/odata/upload/remove'}
        />
    );
};

export default App;
