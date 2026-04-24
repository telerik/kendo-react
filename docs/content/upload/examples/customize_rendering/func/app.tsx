import * as React from 'react';
import { Upload, UploadListItemProps } from '@progress/kendo-react-upload';

const CustomListItemUI = (props: UploadListItemProps) => {
    return (
        <ul>
            {props.files.map((file) => (
                <li key={file.name}>{file.name}</li>
            ))}
        </ul>
    );
};

const App = () => {
    return (
        <div>
            sometext
            <Upload
                batch={true}
                multiple={true}
                defaultFiles={[]}
                withCredentials={false}
                listItemUI={CustomListItemUI}
                saveUrl={'https://demos.telerik.com/service/v2/odata/upload/save'}
                removeUrl={'https://demos.telerik.com/service/v2/odata/upload/remove'}
            />
        </div>
    );
};

export default App;
