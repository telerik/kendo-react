import * as React from 'react';
import { FloatingActionButton } from '@progress/kendo-react-buttons';
import './styles.css';

import { plusIcon } from '@progress/kendo-svg-icons';

const App = () => {
  return (
    <div>
      <FloatingActionButton
        svgIcon={plusIcon}
        text={'Icon and Text'}
        className="static-fab"
      />
      <FloatingActionButton svgIcon={plusIcon} className="static-fab" />
      <FloatingActionButton text={'Text only'} className="static-fab" />
    </div>
  );
};

export default App;
