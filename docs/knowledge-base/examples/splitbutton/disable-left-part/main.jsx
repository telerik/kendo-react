import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SplitButton } from '@progress/kendo-react-buttons';

const App = () => {
  const items = ['Item1', 'Item2', 'Item3'];
  return (
    <div>
      <SplitButton items={items} text="Right side is only enabled" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
