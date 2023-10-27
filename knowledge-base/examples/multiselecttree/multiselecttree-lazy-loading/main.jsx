import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  MultiSelectTree,
  getMultiSelectTreeValue,
} from '@progress/kendo-react-dropdowns';
import {
  processMultiSelectTreeData,
  expandedState,
} from './multiselecttree-data-operations';
import { data } from './tree-data';
const dataItemKey = 'id';
const checkField = 'checkField';
const checkIndeterminateField = 'checkIndeterminateField';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';
const fields = {
  dataItemKey,
  checkField,
  checkIndeterminateField,
  expandField,
  subItemsField,
};
import './style.css';
const LoadingPanel = () => {
  const loadingPanel = (
    <div className="k-loading-mask">
      <span className="k-loading-text">Loading</span>
      <div className="k-loading-image" />
      <div className="k-loading-color" />
    </div>
  );
  const multiselecttree =
    document && document.querySelector('.k-multiselecttree');
  return multiselecttree
    ? ReactDOM.createPortal(loadingPanel, multiselecttree)
    : loadingPanel;
};
const App = () => {
  const [value, setValue] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);
  const onChange = (event) =>
    setValue(
      getMultiSelectTreeValue(data, {
        ...fields,
        ...event,
        value,
      })
    );
  const onExpandChange = React.useCallback(
    (event) => {
      setLoading(true);
      // simulate a server call
      setTimeout(() => {
        setExpanded(expandedState(event.item, dataItemKey, expanded));
        setLoading(false);
      }, 1000);
    },
    [expanded]
  );
  const treeData = React.useMemo(
    () =>
      processMultiSelectTreeData(data, {
        expanded,
        value,
        ...fields,
      }),
    [expanded, value]
  );
  return (
    <>
      <MultiSelectTree
        style={{
          width: '300px',
        }}
        data={treeData}
        value={value}
        onChange={onChange}
        placeholder="Please select ..."
        textField={textField}
        dataItemKey={dataItemKey}
        checkField={checkField}
        checkIndeterminateField={checkIndeterminateField}
        subItemsField={subItemsField}
        expandField={expandField}
        onExpandChange={onExpandChange}
        label={'Category'}
      />
      {loading && <LoadingPanel />}
    </>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
