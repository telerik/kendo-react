import * as React from 'react';
import { Label } from '@progress/kendo-react-labels';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
const App = () => {
    const [ddlState, setDdlState] = React.useState();
    const ddlRef = React.useRef(null);
    const editorId = 'sizes-editor';
    const labelId = 'sizes-label'
    return (
      <div>
        <Label
          id={labelId}
          editorId={editorId}
          editorRef={ddlRef}
            >
          Shirt Size:&nbsp;
        </Label>
        <DropDownList
          ref={ddlRef}
          id={editorId}
          ariaLabelledBy={labelId}
          value={ddlState}
          data={sizes}
          onChange={(e: DropDownListChangeEvent) => setDdlState(e.target.value)}
            />
      </div>
    );
};

export default App;
