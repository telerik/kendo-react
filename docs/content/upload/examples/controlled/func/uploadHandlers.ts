import { UploadFileInfo } from '@progress/kendo-react-upload';

export const progressRef: { [uid: string]: number } = {};
export const requestIntervalRef: { [uid: string]: number } = {};

export const onSaveRequest = (
    files: UploadFileInfo[],
    _options: { formData: FormData; requestOptions: any },
    onProgress: (uid: string, event: ProgressEvent<EventTarget>) => void
): Promise<{ uid: string }> => {
    const uid = files[0].uid;
    progressRef[uid] = 0;

    return new Promise<{ uid: string }>((resolve) => {
        let progress = 0;
        const interval = window.setInterval(() => {
            progress += 10;
            if (progress <= 100) {
                onProgress(uid, {
                    lengthComputable: true,
                    loaded: progress,
                    total: 100
                } as unknown as ProgressEvent);
            }
            if (progress >= 100) {
                clearInterval(interval);
                delete progressRef[uid];
                resolve({ uid });
            }
        }, 300);

        requestIntervalRef[uid] = interval;
    });
};

export const onRemoveRequest = (
    files: UploadFileInfo[],
    _options: { formData: FormData; requestOptions: any }
): Promise<{ uid: string }> => {
    const uid = files[0].uid;
    return new Promise<{ uid: string }>((resolve) => setTimeout(() => resolve({ uid }), 300));
};
