import React from 'react';
import { Chip } from '@progress/kendo-react-buttons';
import { bellIcon, starIcon } from '@progress/kendo-svg-icons';

import './styles.css';

const App = () => {
  return (
    <div>
      <div>
        <div>
          <Chip
            text={'Solid Mode'}
            value={'solid chip'}
            svgIcon={bellIcon}
            fillMode={'solid'}
          />
          <Chip
            text={'Outline Mode'}
            value={'outline chip'}
            svgIcon={starIcon}
            fillMode={'outline'}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
