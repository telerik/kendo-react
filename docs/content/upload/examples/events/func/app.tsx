import * as React from 'react';
import {
    Upload,
    UploadOnAddEvent,
    UploadOnRemoveEvent,
    UploadOnProgressEvent,
    UploadOnStatusChangeEvent,
    UploadFileInfo
} from '@progress/kendo-react-upload';

const fileStatuses = ['UploadFailed', 'Initial', 'Selected', 'Uploading', 'Uploaded', 'RemoveFailed', 'Removing'];

const App = () => {
    const [files, setFiles] = React.useState<Array<UploadFileInfo>>([]);
    const [events, setEvents] = React.useState<Array<any>>([]);
    const [filePreviews, setFilePreviews] = React.useState({});
    const [affectedFiles, setAffectedFiles] = React.useState<Array<UploadFileInfo>>([]);

    React.useEffect(() => {
        affectedFiles
            .filter((file: UploadFileInfo) => !file.validationErrors)
            .forEach((file: UploadFileInfo) => {
                const reader = new FileReader();

                reader.onloadend = (ev: any) => {
                    setFilePreviews({
                        ...filePreviews,
                        [file.uid]: ev.target.result
                    });
                };
                if (file && file.getRawFile) {
                    reader.readAsDataURL(file.getRawFile());
                }
            });
    }, [affectedFiles, filePreviews]);

    const onAdd = (event: UploadOnAddEvent) => {
        setFiles(event.newState);
        setEvents([...events, `File selected: ${event.affectedFiles[0].name}`]);
        setAffectedFiles(event.affectedFiles);
    };

    const onRemove = (event: UploadOnRemoveEvent) => {
        let newFilePreviews = { ...filePreviews };
        event.affectedFiles.forEach((file) => {
            delete newFilePreviews[file.uid];
        });

        setFiles(event.newState);
        setEvents([...events, `File removed: ${event.affectedFiles[0].name}`]);
        setFilePreviews(newFilePreviews);
    };

    const onProgress = (event: UploadOnProgressEvent) => {
        setFiles(event.newState);
        setEvents([...events, `On Progress: ${event.affectedFiles[0].progress} %`]);
    };

    const onStatusChange = (event: UploadOnStatusChangeEvent) => {
        const file = event.affectedFiles[0];
        setFiles(event.newState);
        setEvents([...events, `File '${file.name}' status changed to: ${fileStatuses[file.status]}`]);
    };

    return (
        <div>
            <Upload
                batch={false}
                multiple={true}
                files={files}
                onAdd={onAdd}
                onRemove={onRemove}
                onProgress={onProgress}
                onStatusChange={onStatusChange}
                withCredentials={false}
                saveUrl={'https://demos.telerik.com/service/v2/odata/upload/save'}
                removeUrl={'https://demos.telerik.com/service/v2/odata/upload/remove'}
            />
            <div className={'example-config'} style={{ marginTop: 20 }}>
                <ul className={'event-log'}>
                    {events.map((event, index) => (
                        <li key={index}>{event}</li>
                    ))}
                </ul>
            </div>
            {files.length ? (
                <div className={'img-preview example-config'}>
                    <h3>Preview selected images</h3>
                    {Object.keys(filePreviews).map((fileKey, index) => (
                        <img
                            src={filePreviews[fileKey]}
                            alt={'KendoReact Upload image preview'}
                            style={{ width: 200, margin: 10 }}
                            key={index}
                        />
                    ))}
                </div>
            ) : undefined}
        </div>
    );
};

export default App;
