import * as React from 'react';
import { Chip } from '@progress/kendo-react-buttons';
import {
  arrowRightIcon,
  calendarIcon,
  globeIcon,
} from '@progress/kendo-svg-icons';

import './styles.css';

const App = () => {
  return (
    <div>
      <div>
        <div>
          <Chip
            text={'Small Chip'}
            value={'small chip'}
            size={'small'}
            svgIcon={arrowRightIcon}
          />
          <Chip
            text={'Medium Chip'}
            value={'medium chip'}
            size={'medium'}
            svgIcon={calendarIcon}
          />
          <Chip
            text={'Large Chip'}
            value={'large chip'}
            size={'large'}
            svgIcon={globeIcon}
          />
        </div>
        <div>
          <Chip
            text={'Small Chip'}
            value={'small chip'}
            size={'small'}
            svgIcon={arrowRightIcon}
            fillMode={'outline'}
          />
          <Chip
            text={'Medium Chip'}
            value={'medium chip'}
            size={'medium'}
            svgIcon={calendarIcon}
            fillMode={'outline'}
          />
          <Chip
            text={'Large Chip'}
            value={'large chip'}
            size={'large'}
            svgIcon={globeIcon}
            fillMode={'outline'}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
