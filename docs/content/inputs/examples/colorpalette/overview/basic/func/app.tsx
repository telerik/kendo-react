import * as React from 'react'

import { ColorPalette } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

import './styles.css';

const App = () => {
    const [value, setValue] = React.useState<string>('#a21616');

    const handleOnChange = (event) => {
        setValue(event.value);
    }

    return (
    <div className="example">
      <div className="img" style={{ backgroundColor: value }} />
      <div className="description">
        <h1>Comfy T-shirt with a cut-away neckline</h1>
        <p className="price">$19.99</p>
        <span>incl. VAT</span>

        <p className="selected-color">{colorNames[value]}</p>
        <ColorPalette
          palette={['#37399b', '#a81c85', '#0ab3cc', '#2f7d20', '#a21616']}
          value={value}
          onChange={handleOnChange}
          tileSize={40}
        />
        <Button type="button">Add to cart</Button>
      </div>
    </div >
    );
}

const colorNames = {
    '#37399b': 'Navy blue',
    '#a81c85': 'Violet',
    '#0ab3cc': 'Light blue',
    '#2f7d20': 'Forest green',
    '#a21616': 'Dark red'
}

export default App;
