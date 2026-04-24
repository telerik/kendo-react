import * as React from 'react'

import { ColorPalette } from '@progress/kendo-react-inputs';

const App = () => {
    const colorPaletteRef = React.useRef<ColorPalette>(null);
    const value: string = 'rgba(237, 126, 50, 1)';

    React.useEffect(() => {
        if (colorPaletteRef.current) {
            colorPaletteRef.current.focus();
        }
    });

    return (
      <div className="example-wrapper">
        <ColorPalette
          ref={colorPaletteRef}
          defaultValue={value}
            />
        <p>(use <code>←↓↑→</code> to navigate, <code>enter</code> to select the value)</p>
      </div>
    )
}

export default App;
