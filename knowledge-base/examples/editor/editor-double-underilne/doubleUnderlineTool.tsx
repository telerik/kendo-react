import * as React from 'react';
import { EditorUtils } from '@progress/kendo-react-editor';
import { Button } from '@progress/kendo-react-buttons';
import { equalIcon } from '@progress/kendo-svg-icons';

const DoubleUnderlineTool = (props) => {
  const { view } = props;
  const toolColor = '#000';
  const bgColors = view
    ? EditorUtils.getInlineStyles(view.state, {
        name: 'background-color',
        value: /^.+$/,
      })
    : [];
  const currentBgColor = new Set(bgColors).size === 1 ? bgColors[0] : '';

  const onClick = () => {
    EditorUtils.applyInlineStyle(view, {
      style: 'text-decoration-line',
      value: 'underline',
    });
    EditorUtils.applyInlineStyle(view, {
      style: 'text-decoration-style',
      value: 'double',
    });
  };

  return (
    <Button
      onClick={onClick}
      togglable={true}
      selected={currentBgColor === toolColor}
      svgIcon={equalIcon}
      style={{ color: toolColor }}
      onMouseDown={(e) => e.preventDefault()}
      onPointerDown={(e) => e.preventDefault()}
    />
  );
};

export default DoubleUnderlineTool;
