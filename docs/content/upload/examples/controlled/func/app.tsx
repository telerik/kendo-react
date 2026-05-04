import React, { useState } from 'react';
import {
    Upload,
    UploadFileInfo,
    UploadOnAddEvent,
    UploadOnRemoveEvent,
    UploadOnProgressEvent,
    UploadOnStatusChangeEvent,
    UploadOnCancelEvent
} from '@progress/kendo-react-upload';

import { onSaveRequest, onRemoveRequest, requestIntervalRef, progressRef } from './uploadHandlers';

const App = () => {
    const [files, setFiles] = useState<UploadFileInfo[]>([]);
    const [errors, setErrors] = useState<string[]>([]);

    const onAdd = (event: UploadOnAddEvent) => {
        const valid: UploadFileInfo[] = [];
        const errs: string[] = [];

        event.affectedFiles.forEach((f) => {
            if (f.name.includes('2019')) {
                errs.push(`File "${f.name}" has an invalid name.`);
            } else if (files.length + valid.length < 2) {
                valid.push(f);
            } else if (!errs.includes('Cannot upload more than two files.')) {
                errs.push('Cannot upload more than two files.');
            }
        });

        setErrors(errs);

        if (valid.length) {
            setFiles((prev) => [...prev, ...valid]);

            const grouped: Record<string, UploadFileInfo[]> = {};
            valid.forEach((f) => {
                grouped[f.uid] = [f];
            });
            event.target.uploadFiles(grouped);
        }
    };

    const onCancel = (event: UploadOnCancelEvent) => {
        const uid = event.uid;
        clearInterval(requestIntervalRef[uid]);
        delete progressRef[uid];
    };

    const onRemove = (e: UploadOnRemoveEvent) => setFiles(e.newState);

    const onProgress = (e: UploadOnProgressEvent) => {
        setFiles((prev) => {
            if (JSON.stringify(prev) !== JSON.stringify(e.newState)) {
                return e.newState;
            }
            return prev;
        });
    };

    const onStatusChange = (e: UploadOnStatusChangeEvent) => {
        setFiles((prev) => {
            if (JSON.stringify(prev) !== JSON.stringify(e.newState)) {
                return e.newState;
            }
            return prev;
        });
    };

    return (
        <div>
            <Upload
                batch={false}
                multiple
                autoUpload={false}
                showActionButtons={false}
                files={files}
                saveUrl={onSaveRequest}
                removeUrl={onRemoveRequest}
                onCancel={onCancel}
                onAdd={onAdd}
                onRemove={onRemove}
                onProgress={onProgress}
                onStatusChange={onStatusChange}
                withCredentials={false}
            />

            {errors.length > 0 && (
                <ul style={{ color: 'red', marginTop: 10 }}>
                    {errors.map((e) => (
                        <li key={e}>{e}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default App;
