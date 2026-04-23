import React from 'react';
import { CustomIntlProvider } from './CustomIntlProvider';
import { DateFormatter } from './DateFormatter';

const App = () => (
  <CustomIntlProvider locale="en">
    <DateFormatter date={new Date()} />
  </CustomIntlProvider>
);

export default App;
