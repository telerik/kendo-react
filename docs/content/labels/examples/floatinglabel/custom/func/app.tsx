import * as React from 'react';
import { FloatingLabel } from '@progress/kendo-react-labels';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
const App = () => {
    const [ddlState, setDdlState] = React.useState();
    const editorId = 'sizes-editor';
    const labelId = 'sizes-label'
    return (
      <FloatingLabel
        id={labelId}
        label={'Shirt Size:'}
        editorId={editorId}
        editorValue={ddlState}
        >
        <DropDownList
          style={{
            width: '150px',
          }}
          id={editorId}
          ariaLabelledBy={labelId}
          value={ddlState}
          data={sizes}
          onChange={(e: DropDownListChangeEvent) => setDdlState(e.value)}
            />
      </FloatingLabel>
    );
};

export default App;
