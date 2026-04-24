import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import {
  plusIcon,
  chevronRightIcon,
  logoutIcon,
  userIcon,
} from '@progress/kendo-svg-icons';

import './styles.css';

const App = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <div>
        <Button
          type="button"
          themeColor={'primary'}
          startIcon={<SvgIcon icon={plusIcon} />}
        >
          Add to cart
        </Button>
        <Button
          type="button"
          themeColor={'success'}
          endIcon={<SvgIcon icon={chevronRightIcon} />}
        >
          Go to checkout
        </Button>
        <Button
          type="button"
          themeColor={'dark'}
          startIcon={<SvgIcon icon={logoutIcon} />}
          endIcon={<SvgIcon icon={userIcon} />}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default App;
