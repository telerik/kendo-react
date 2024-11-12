import * as React from 'react';

import { MaskedTextBox } from '@progress/kendo-react-inputs';

const CardNumber = () => {
  return (
    <MaskedTextBox
      width={200}
      mask="0000-0000-0000-0000"
      defaultValue="── ── ── ──"
    />
  );
};

export default CardNumber;
