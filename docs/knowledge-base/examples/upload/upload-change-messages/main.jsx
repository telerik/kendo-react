import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Upload } from '@progress/kendo-react-upload';
import { LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';
const App = () => {
  const [files, setFiles] = React.useState([]);

  const onAdd = (event) => {
    console.log('onAdd: ', event.affectedFiles);
    setFiles(event.newState);
  };

  const onRemove = (event) => {
    console.log('onRemove: ', event.affectedFiles);
    setFiles(event.newState);
  };

  const onProgress = (event) => {
    console.log('onProgress: ', event.affectedFiles);
    setFiles(event.newState);
  };

  const onStatusChange = (event) => {
    console.log('onStatusChange: ', event.affectedFiles);
    setFiles(event.newState);
  };

  //Use loadMessages to override the default messages that you want to change and add them to a new language 
  loadMessages(
    {
      upload: {
        dropFilesHere: 'Drop file here to upload',
        select: 'SELECT FILE',
      },
    },
    'myCustomMessages'
  );

  return (
    <LocalizationProvider language="myCustomMessages">
      <Upload
        batch={false}
        multiple={false}
        files={files}
        onAdd={onAdd}
        onRemove={onRemove}
        onProgress={onProgress}
        onStatusChange={onStatusChange}
        withCredentials={false}
        saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
        removeUrl={
          'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
        }
      />
    </LocalizationProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
