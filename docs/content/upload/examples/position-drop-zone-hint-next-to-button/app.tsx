import * as React from 'react';
import { Upload } from '@progress/kendo-react-upload';
import './styles.css';

const App = () => {
  return (
    <Upload
      batch={false}
      multiple={true}
      defaultFiles={[]}
      withCredentials={false}
      saveUrl={'https://demos.telerik.com/kendo-ui/service/upload/save'}
      removeUrl={'https://demos.telerik.com/kendo-ui/service/upload/remove'}
    />
  );
};

export default App;
