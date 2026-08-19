import * as React from 'react';
import {
    Upload,
    UploadOnAddEvent,
    UploadOnRemoveEvent,
    UploadOnProgressEvent,
    UploadOnStatusChangeEvent,
    UploadFileInfo
} from '@progress/kendo-react-upload';
import { EventLog } from '@docs-shared/EventLog';

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
                    setFilePreviews((prev) => ({
                        ...prev,
                        [file.uid]: ev.target.result
                    }));
                };
                if (file && file.getRawFile) {
                    reader.readAsDataURL(file.getRawFile());
                }
            });
    }, [affectedFiles]);

    const log = (message: string) => setEvents((prev) => [message, ...prev]);

    const onAdd = (event: UploadOnAddEvent) => {
        setFiles(event.newState);
        log(`File selected: ${event.affectedFiles[0].name}`);
        setAffectedFiles(event.affectedFiles);
    };

    const onRemove = (event: UploadOnRemoveEvent) => {
        let newFilePreviews = { ...filePreviews };
        event.affectedFiles.forEach((file) => {
            delete newFilePreviews[file.uid];
        });

        setFiles(event.newState);
        log(`File removed: ${event.affectedFiles[0].name}`);
        setFilePreviews(newFilePreviews);
    };

    const onProgress = (event: UploadOnProgressEvent) => {
        setFiles(event.newState);
        log(`On Progress: ${event.affectedFiles[0].progress} %`);
    };

    const onStatusChange = (event: UploadOnStatusChangeEvent) => {
        const file = event.affectedFiles[0];
        setFiles(event.newState);
        log(`File '${file.name}' status changed to: ${fileStatuses[file.status]}`);
    };

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
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
            {files.length ? (
                <div className={'img-preview'} style={{ marginTop: 20 }}>
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
        </EventLog>
    );
};

export default App;
