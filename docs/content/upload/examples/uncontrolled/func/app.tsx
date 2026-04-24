import * as React from 'react';
import { Upload, UploadFileStatus } from '@progress/kendo-react-upload';

const App = () => {
    return (
        <Upload
            batch={false}
            multiple={true}
            defaultFiles={[
                {
                    name: 'Picture1',
                    extension: '.jpg',
                    size: 4000,
                    progress: 0,
                    status: UploadFileStatus.Initial,
                    uid: 'uidPicture1'
                }
            ]}
            withCredentials={false}
            saveUrl={'https://demos.telerik.com/service/v2/odata/upload/save'}
            removeUrl={'https://demos.telerik.com/service/v2/odata/upload/remove'}
        />
    );
};

export default App;
