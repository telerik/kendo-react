import * as React from 'react';
import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';

const GridLayoutComponent = () => {
    return (
      <div>
        <div className="grid-layout-wrapper">
          <div className="grid-layout-page">
            <div className="grid-layout-content">
              <GridLayout
                rows={[{height: 90}, {height: 90}, {height: 90}, {height: 90}, {height: 90}]}
                cols={[{width: 90}, {width: 90}, {width: 90}]}
                gap={{rows: 5, cols: 5}}
              >
                <GridLayoutItem className="grid-box rect" col={1} row={1} colSpan={2}>Box</GridLayoutItem>
                <GridLayoutItem className="grid-box" col={3} row={1}>Box</GridLayoutItem>
                <GridLayoutItem className="grid-box" col={1} row={2}>Box</GridLayoutItem>
                <GridLayoutItem className="grid-box big" col={2} row={2} colSpan={2} rowSpan={2}>Box</GridLayoutItem>
                <GridLayoutItem className="grid-box rect" col={1} row={3} rowSpan={2}>Box</GridLayoutItem>
                <GridLayoutItem className="grid-box" col={2} row={4}>Box</GridLayoutItem>
                <GridLayoutItem className="grid-box" col={3} row={4}>Box</GridLayoutItem>
                <GridLayoutItem className="grid-box" col={1} row={5}>Box</GridLayoutItem>
                <GridLayoutItem className="grid-box" col={2} row={5}>Box</GridLayoutItem>
                <GridLayoutItem className="grid-box" col={3} row={5}>Box</GridLayoutItem>
              </GridLayout>
            </div>
          </div>
        </div>
      </div>
    );
};

export default GridLayoutComponent;
