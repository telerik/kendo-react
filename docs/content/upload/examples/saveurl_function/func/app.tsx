import * as React from 'react';
import { Upload, UploadFileStatus, UploadFileInfo } from '@progress/kendo-react-upload';

const App = () => {
    const requestIntervalRef = React.useRef({});
    const progressRef = React.useRef({});

    const onSaveRequest = (files, _, onProgress) => {
        const uid = files[0].uid;

        progressRef.current[uid] = 0;

        // Simulate save request
        const saveRequestPromise = new Promise((resolve) => {
            requestIntervalRef.current[uid] = setInterval(() => {
                onProgress(uid, {
                    loaded: progressRef.current[uid],
                    total: 100,
                } as ProgressEvent);

                if (progressRef.current[uid] === 100) {
                    resolve({ uid: uid });

                    delete progressRef.current[uid];
                    clearInterval(requestIntervalRef.current[uid]);
                } else {
                    progressRef.current[uid] = progressRef.current[uid] + 1;
                }
            }, 40);
        });

        return saveRequestPromise;
    };

    const onCancel = (uid) => {
    // Simulate cancel custom request
        delete progressRef.current[uid];
        clearInterval(requestIntervalRef.current[uid]);
    };

    const onRemoveRequest = (files, _) => {
        const uid = files[0].uid;

        // Simulate remove request
        const removeRequestPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve({ uid: uid });
            }, 300);
        });

        return removeRequestPromise;
    };

    return (
    <div>
      <Upload
        batch={true}
        multiple={true}
        defaultFiles={[
          {
            name: 'Initial file',
            status: UploadFileStatus.Initial,
            progress: 0,
            uid: '324-324-324-32-432-4-32-432432-32',
            size: 500,
            extension: '.jpg',
          },
        ]}
        saveUrl={
          onSaveRequest as (
            files: UploadFileInfo[],
            options: { formData: FormData; requestOptions: any },
            onProgress: (uid: string, event: ProgressEvent<EventTarget>) => void
          ) => Promise<{ uid: string }>
        }
        removeUrl={
          onRemoveRequest as (
            files: UploadFileInfo[],
            options: { formData: FormData; requestOptions: any }
          ) => Promise<{ uid: string }>
        }
        onCancel={onCancel}
        withCredentials={false} // enable only for CORS
      />
    </div>
    );
};

export default App;
