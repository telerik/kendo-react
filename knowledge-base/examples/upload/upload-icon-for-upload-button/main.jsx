import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Upload } from '@progress/kendo-react-upload';

const App = () => {
  return (
    <div>
      <Upload
        batch={false}
        selectMessageUI={() => <span>Upload</span>}
        multiple={true}
        defaultFiles={[]}
        withCredentials={false}
        saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
        removeUrl={
          'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
        }
      />
      <Upload
        batch={false}
        selectMessageUI={() => <span className="k-icon k-i-upload"></span>}
        multiple={true}
        defaultFiles={[]}
        withCredentials={false}
        saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
        removeUrl={
          'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
        }
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
