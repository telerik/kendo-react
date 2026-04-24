import * as React from 'react';
import { ExternalDropZone, Upload } from '@progress/kendo-react-upload';

const uploadRef = React.createRef<Upload>();

const hint = <span>My custom hint</span>;
const note = <span>My custom note</span>;

const App = () => {
    return (
        <div>
            <ExternalDropZone
                uploadRef={uploadRef}
                customHint={hint}
                customNote={note}
                style={{ backgroundColor: 'antiquewhite' }}
            />
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
