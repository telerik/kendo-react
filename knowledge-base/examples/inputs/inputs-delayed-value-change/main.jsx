import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Input } from '@progress/kendo-react-inputs';
import { Hint } from '@progress/kendo-react-labels';

let delay = 1000;

const App = () => {
  const [value, setValue] = React.useState('');
  const [delayedValue, setDelayedValue] = React.useState('');
  const [lastEntry, setLastEntry] = React.useState();
  const [referenceTime, setReferenceTime] = React.useState(null);

  const handleChange = (e) => {
    setValue(e.value);
    setLastEntry(new Date());
    setTimeout(() => {
      setReferenceTime(new Date());
    }, delay);
  };

  React.useEffect(() => {
    if (lastEntry && referenceTime - lastEntry.getTime() > delay) {
      setDelayedValue(value);
      setLastEntry(null);
    }
  }, [value, referenceTime]);

  return (
    <div
      style={{
        position: 'absolute',
      }}
    >
      * The delayed value will be changed after a threshold (1 second in this
      example)
      <Input value={value} onChange={handleChange} />
      <Hint width="200" direction={'start'}>
        Instant value: {value}
      </Hint>
      <Hint direction={'start'}>Delayed value: {delayedValue}</Hint>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
