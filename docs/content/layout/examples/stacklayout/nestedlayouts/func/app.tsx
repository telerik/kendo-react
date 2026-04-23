import * as React from 'react';

import { StackLayout } from '@progress/kendo-react-layout';

import './styles.css';

const App = () => {
    return (
      <div>
        <div className="example-wrapper">
          <StackLayout orientation="vertical" align={{vertical: 'top'}}>
            <div className="box header">Header</div>
            <StackLayout orientation="horizontal" style={{height: 300}}>
              <div className="box nav">Navigation</div>
              <div className="box content">Content</div>
              <div className="box toc">TOC</div>
            </StackLayout>
            <div className="box footer">Footer</div>
          </StackLayout>
        </div>
      </div>
    );
};

export default App;
