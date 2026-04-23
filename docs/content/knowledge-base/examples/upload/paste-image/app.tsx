import React, { useState, useCallback } from 'react';
import {
  Upload,
  UploadFileInfo,
  UploadOnAddEvent,
  UploadOnRemoveEvent,
  UploadOnProgressEvent,
  UploadOnStatusChangeEvent,
  UploadFileStatus
} from '@progress/kendo-react-upload';
import { guid } from '@progress/kendo-react-common';

const App = () => {
  const [files, setFiles] = useState<UploadFileInfo[]>([]);

  const onAdd = useCallback((e: UploadOnAddEvent) => {
    setFiles(e.newState);
  }, []);

  const onRemove = useCallback((e: UploadOnRemoveEvent) => {
    setFiles(e.newState);
  }, []);

  const onProgress = useCallback((e: UploadOnProgressEvent) => {
    setFiles(e.newState);
  }, []);

  const onStatusChange = useCallback((e: UploadOnStatusChangeEvent) => {
    setFiles(e.newState);
  }, []);

  const handlePaste = useCallback((e: React.ClipboardEvent<HTMLDivElement>) => {
    const fileList = e.clipboardData.files;
    if (fileList && fileList.length > 0) {
      const fileObject = fileList[0];
      const pasted: UploadFileInfo = {
        getRawFile: () => fileObject,
        name: fileObject.name,
        size: fileObject.size,
        uid: guid(),
        status: UploadFileStatus.Selected,
        progress: 0
      };
      setFiles(prev => [...prev.map(f => ({ ...f })), pasted]);
    } else {
      alert('No image data was found in your clipboard. Copy an image first or take a screenshot.');
    }
  }, []);

  return (
    <div onPaste={handlePaste}>
      <Upload
        autoUpload={false}
        batch={false}
        multiple={true}
        files={files}
        onAdd={onAdd}
        onRemove={onRemove}
        onProgress={onProgress}
        onStatusChange={onStatusChange}
        withCredentials={false}
        saveUrl="https://demos.telerik.com/service/v2/odata/upload/save"
        removeUrl="https://demos.telerik.com/service/v2/odata/upload/remove"
      />
      <div
        style={{
          marginTop: 5,
          padding: 10,
          fontStyle: 'italic',
          color: 'red',
          border: '1px solid red',
          height: 500
        }}
      >
        Paste Area
      </div>
    </div>
  );
};

export default App;
