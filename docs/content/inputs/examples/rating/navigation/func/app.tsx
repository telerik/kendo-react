import * as React from 'react';

import { Rating } from '@progress/kendo-react-inputs';

const App = () => {
    return (
      <Rating
        defaultValue={1.5}
        precision={'half'}
      />
    );
}

export default App;
