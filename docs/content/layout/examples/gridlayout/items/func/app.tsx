import * as React from 'react';

import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';

import './styles.css';

const App = () => {
    return (
      <div>
        <div className="example-wrapper">
          <div className="page">
            <div className="content">
              <GridLayout
                rows={[{height: 90}, {height: 90}, {height: 90}, {height: 90}, {height: 90}]}
                cols={[{width: 90}, {width: 90}, {width: 90}]}
                gap={{rows: 5, cols: 5}}
              >
                <GridLayoutItem className="box rect" col={1} row={1} colSpan={2}>Box</GridLayoutItem>
                <GridLayoutItem className="box" col={3} row={1}>Box</GridLayoutItem>
                <GridLayoutItem className="box" col={1} row={2}>Box</GridLayoutItem>
                <GridLayoutItem className="box big" col={2} row={2} colSpan={2} rowSpan={2}>Box</GridLayoutItem>
                <GridLayoutItem className="box rect" col={1} row={3} rowSpan={2}>Box</GridLayoutItem>
                <GridLayoutItem className="box" col={2} row={4}>Box</GridLayoutItem>
                <GridLayoutItem className="box" col={3} row={4}>Box</GridLayoutItem>
                <GridLayoutItem className="box" col={1} row={5}>Box</GridLayoutItem>
                <GridLayoutItem className="box" col={2} row={5}>Box</GridLayoutItem>
                <GridLayoutItem className="box" col={3} row={5}>Box</GridLayoutItem>
              </GridLayout>
            </div>
          </div>
        </div>
      </div>
    );
};

export default App;
