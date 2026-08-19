import * as React from 'react';
import { ExternalDropZone, Upload, UploadHandle } from '@progress/kendo-react-upload';

const uploadRef = React.createRef<UploadHandle>();

const App = () => {
    return (
        <div>
            <ExternalDropZone uploadRef={uploadRef} />
            <div style={{ height: '50px' }} />
            <Upload
                ref={uploadRef}
                batch={false}
                multiple={true}
                defaultFiles={[]}
                withCredentials={false}
                saveUrl={'https://demos.telerik.com/service/v2/odata/upload/save'}
                removeUrl={'https://demos.telerik.com/service/v2/odata/upload/remove'}
            />
        </div>
    );
};

export default App;
