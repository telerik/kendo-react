import * as React from 'react';
import { Upload } from '@progress/kendo-react-upload';

const saveUrl = 'https://demos.telerik.com/service/v2/odata/upload/save';
const removeUrl = 'https://demos.telerik.com/service/v2/odata/upload/remove';

function App() {
    const [files, setFiles] = React.useState([]);
    const [image, setImage] = React.useState();
    const onAdd = (event) => {
        const file = event.affectedFiles[0].getRawFile();
        setImage(file);
        setFiles(event.newState);
    };

    return (
        <>
            {image && <img src={URL.createObjectURL(image)} alt="alt" />}
            <Upload
                defaultFiles={[]}
                withCredentials={false}
                saveUrl={saveUrl}
                removeUrl={removeUrl}
                files={files}
                onAdd={onAdd}
            />
        </>
    );
}

export default App;
