import * as React from 'react';

import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import { boldIcon, italicIcon, underlineIcon } from '@progress/kendo-svg-icons';

const App = () => {
  return (
    <div>
      <ButtonGroup>
        <Button togglable={true} svgIcon={boldIcon} />
        <Button togglable={true} svgIcon={italicIcon} />
        <Button togglable={true} svgIcon={underlineIcon} />
      </ButtonGroup>
    </div>
  );
};
export default App;
