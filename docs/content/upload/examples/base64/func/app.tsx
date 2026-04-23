import * as React from 'react';

import {
    Upload,
    UploadOnAddEvent,
    UploadOnRemoveEvent,
    UploadOnProgressEvent,
    UploadOnStatusChangeEvent,
    UploadFileInfo,
} from '@progress/kendo-react-upload';

const App = () => {
    const [files, setFiles] = React.useState<Array<UploadFileInfo>>([]);

    const onAdd = (event: UploadOnAddEvent) => {
        setFiles(event.newState);
    };

    const onRemove = (event: UploadOnRemoveEvent) => {
        setFiles(event.newState);
    };

    const onProgress = (event: UploadOnProgressEvent) => {
        setFiles(event.newState);
    };

    const onStatusChange = (event: UploadOnStatusChangeEvent) => {
        setFiles(event.newState);
    };

    function onSaveRequest(
        files: UploadFileInfo[],
        options: { formData: FormData; requestOptions: any },
        onProgress: (uid: string, event: ProgressEvent<EventTarget>) => void
    ): Promise<{ uid: string }> {
        const currentFile = files[0] as UploadFileInfo;
        const uid = currentFile.uid;

        return new Promise<{ uid: string }>((resolve, reject) => {
            if (
                currentFile.validationErrors &&
        currentFile.validationErrors.length > 0
            ) {
                reject({ uid: uid });
            } else {
                const reader = new FileReader();
                reader.onload = () => {
                    if (reader.result && typeof reader.result === 'string') {
                        // stripping the data-url declaration as per https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
                        const base64Result = reader.result.split(',')[1];
                        console.log('Base64Result:' + base64Result);
                        // update viewModel and resolve
                        resolve({ uid: uid });
                    } else {
                        reject({ uid: uid });
                    }
                };
                // onprogress is fired periodically as the FileReader reads data and the ProgressEvent can be passed directly to the Upload control, handy!
                reader.onprogress = (data) => {
                    onProgress(uid, data);
                };
                // if the read is not completed due to error or user intervention, reject
                reader.onabort = () => {
                    reject({ uid: uid });
                };
                reader.onerror = () => {
                    reject({ uid: uid });
                };

                reader.readAsDataURL(currentFile.getRawFile!());
            }
        });
    }

    function onRemoveRequest(
        files: UploadFileInfo[],
        options: { formData: FormData; requestOptions: any }
    ): Promise<{ uid: string }> {
        const currentFile = files[0] as UploadFileInfo;
        const uid = currentFile.uid;

        return new Promise<{ uid: string }>((resolve) => {
            resolve({ uid: uid });
        });
    }

    return (
    <Upload
      batch={false}
      multiple={false}
      files={files}
      onAdd={onAdd}
      onRemove={onRemove}
      onProgress={onProgress}
      onStatusChange={onStatusChange}
      withCredentials={false}
      saveUrl={onSaveRequest}
      removeUrl={onRemoveRequest}
    />
    );
};

export default App;
