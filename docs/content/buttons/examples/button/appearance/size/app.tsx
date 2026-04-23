import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';

import './styles.css';

const App = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <div>
        <Button type="button" size={'small'} themeColor={'primary'}>
          Primary Button
        </Button>
        <Button type="button" size={'medium'} themeColor={'primary'}>
          Primary Button
        </Button>
        <Button type="button" size={'large'} themeColor={'primary'}>
          Primary Button
        </Button>
      </div>
    </div>
  );
};

export default App;
