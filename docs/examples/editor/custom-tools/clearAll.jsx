
import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';

const removeAllMarks = ({ except = [] } = {}) => (state, dispatch) => {
  const { $cursor, from, to } = state.selection;
  const { schema } = state;
  const tr = state.tr;
  const excludedMarkTypes = except.map(mt => mt.name);
  if (!$cursor) {
    Object.keys(schema.marks)
      .map(m => schema.marks[m])
      .filter(mt => excludedMarkTypes.indexOf(mt.name) === -1)
      .forEach(mt => tr.removeMark(from, to, mt));
    dispatch(tr);
  }
};

const ClearAll = (props) => {
  const onClick = () => {
    const { view } = props;
    if (view) {
      removeAllMarks([view.state.schema.marks.link])(view.state, view.dispatch);
    }
  };

  return (
    <Button
      onClick={onClick}
      icon="clear-css"
      onMouseDown={e => e.preventDefault()}
      onPointerDown={e => e.preventDefault()}
    />
  );
};

export default ClearAll;

