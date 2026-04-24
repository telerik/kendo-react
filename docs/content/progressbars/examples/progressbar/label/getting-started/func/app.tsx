import * as React from 'react'

import { Checkbox } from '@progress/kendo-react-inputs';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { ProgressBar } from '@progress/kendo-react-progressbars';

const App = () => {
    const value = 50;
    const [visible, setVisible] = React.useState(true);

    const positions = ["start", "center", "end"];
    const [position, setPosition] = React.useState<"start" | "center" | "end">("start");

    const handleClick = (e) => {
        setVisible(e.target.checked);
    };

    const handleChange = (e: DropDownListChangeEvent) => {
        setPosition(e.target.value);
    }

    return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-sm">
          <DropDownList
            data={positions}
            value={position}
            onChange={handleChange}
            style={{ width: 180 }}
          />
        </div>
        <div className="col-sm">
          <strong>Result:</strong>
        </div>

      </div>
      <div className="row">
        <div className="col-sm">
          <Checkbox
            id="visibility"
            checked={visible}
            onClick={handleClick}
            label="Toggle the label visibility"
            labelPlacement="before"
          />
        </div>
        <div className="col-sm">
          <ProgressBar value={value} labelVisible={visible} labelPlacement={position} />
        </div>
      </div>
    </div>
    );
};

export default App;
