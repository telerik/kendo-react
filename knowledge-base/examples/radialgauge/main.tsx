import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { RadialGauge } from '@progress/kendo-react-gauges';

const RadialGaugeComponent = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setValue(Math.ceil(Math.random() * 100));
    }, 1000);
  }, []);

  const radialOptions: any = {
    value: value,
    shape: 'arrow',
    scale: {
      minorUnit: 5,
      majorUnit: 20,
      max: 180,
      ranges: [
        { from: 80, to: 120, color: '#ffc700' },
        { from: 120, to: 150, color: '#ff7a00' },
        { from: 150, to: 180, color: '#c20000' },
      ],
    },
  };

  const styles = `
.gaugeVal {
    font-family: Arial, Verdana, Helvetica, sans-serif;
    font-size: 18px;
    position: relative;
    left: 0;
    right: 0;
    top: -40px;
    text-align: center;
    color: #f00;
}
`;

  return (
    <>
      <style>{styles}</style>
      <RadialGauge {...radialOptions} />
      <div id="val" class="gaugeVal">
        {value}{' '}
      </div>
    </>
  );
};

ReactDOM.render(<RadialGaugeComponent />, document.querySelector('my-app'));
