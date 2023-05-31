import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ListBox,
  processListBoxDragAndDrop,
} from '@progress/kendo-react-listbox';
import products from './products.json';
import './styles.css';

const clearClue = () => {
  const clueEl = document.querySelector('.listbox-clue');
  if (clueEl) {
    clueEl.className = clueEl.className.replace(' listbox-clue', '');
  }
  const clueEl2 = document.querySelector('.listbox-clue-top');
  if (clueEl2) {
    clueEl2.className = clueEl2.className.replace(' listbox-clue-top', '');
  }
};
const App = () => {
  const [state, setState] = React.useState({
    notDiscontinued: products.filter((product) => !product.Discontinued),
    discontinued: products.filter((product) => product.Discontinued),
    draggedItem: {},
  });
  const handleDragStart = (e) => {
    setState({
      ...state,
      draggedItem: e.dataItem,
      targetID: e.target.props.id,
    });
  };
  const handleDrop = (e) => {
    clearClue();
    let result = processListBoxDragAndDrop(
      state.notDiscontinued,
      state.discontinued,
      state.draggedItem,
      e.dataItem,
      'ProductID'
    );
    setState({
      ...state,
      notDiscontinued: result.listBoxOneData,
      discontinued: result.listBoxTwoData,
    });
  };
  const handleDragOver = (e) => {
    clearClue();
    const target = e.syntheticEvent.currentTarget;
    let indexDrag = e.target.props.data.indexOf(state.draggedItem);
    let indexTarget = e.target.props.data.indexOf(e.dataItem);
    if (e.target.props.id == state.targetID && indexDrag > indexTarget) {
      target.className = target.className + ' listbox-clue-top';
    } else {
      target.className = target.className + ' listbox-clue';
    }
  };

  return (
    <div className="example">
      <div className="demo-section k-content wide">
        <div>
          <img
            src="https://demos.telerik.com/kendo-ui/content/web/listbox/arrow-left2right.png"
            alt="KendoReact ListBox Left Arrow Image"
            className="arrow"
          />
          <br />
          <ListBox
            id={'listBox1'}
            data={state.notDiscontinued}
            textField="ProductName"
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
          <ListBox
            id={'listBox2'}
            data={state.discontinued}
            textField="ProductName"
            style={{
              marginLeft: '12px',
            }}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          />
          <img
            src="https://demos.telerik.com/kendo-ui/content/web/listbox/arrow-right2left.png"
            alt="KendoReact ListBox Right Arrow Image"
            className="arrow"
          />
        </div>
      </div>
    </div>
  ); 
};
ReactDOM.render(
  <React.Fragment>
    <App />
    <style>
      {`.arrow {
                padding: 8px 0 5px 238px;
            }
            .example .demo-section {
                max-width: none;
                width: 640px;
            }

            .example .k-listbox {
                width: 275px;
                height: 310px;
            }`}
    </style>
  </React.Fragment>,
  document.querySelector('my-app')
);
