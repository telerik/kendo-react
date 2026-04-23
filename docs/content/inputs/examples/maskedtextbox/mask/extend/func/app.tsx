import * as React from 'react'

import { MaskedTextBox } from '@progress/kendo-react-inputs';

const App = () => {
    const mask: string = "YYYY LLLL";
    const rules = {
        "L": /[a-zA-Z]/,
        "Y": /[\u0400-\u0481\u048A-\u04FF]/
    };

    return (
      <div>
        <div className="example-config">
          <p>{mask}</p>
          <ul>
            <li>Y - cyrillic only</li>
            <li>L - latin only</li>
          </ul>
        </div>
        <MaskedTextBox
          width={200}
          mask={mask}
          defaultValue="абвг abcd"
          rules={rules}
        />
      </div>
    )
}

export default App;
