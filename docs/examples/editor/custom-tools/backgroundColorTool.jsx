
import * as React from 'react';
import { EditorUtils } from '@progress/kendo-react-editor';
import { ColorPicker } from '@progress/kendo-react-inputs';

const BackgroundColorTool = (props) => {
    const onChange = (event) => {
        const { view } = props;
        if (view) {
          EditorUtils.applyInlineStyle(view, { style: 'background-color', value: event.value });
        }
    };

    return (
        <ColorPicker
          view="palette"
          defaultValue={'black'}
          onChange={onChange}
          onMouseDown={e => e.preventDefault()}
          onPointerDown={e => e.preventDefault()}
        />
    );
};

export default BackgroundColorTool;