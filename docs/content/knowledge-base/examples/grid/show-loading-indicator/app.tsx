import React, { useEffect, useState } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

const loadingPanel = (
  <div className="k-loading-mask">
    <span className="k-loading-text">Loading</span>
    <div className="k-loading-image"></div>
    <div className="k-loading-color"></div>
  </div>
);

const App = () => {
  const [gridData, setGridData] = useState<any[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((r) => r.json())
      .then((json) => {
        if (mounted) setGridData(json);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      {gridData.length === 0 && loadingPanel}
      <Grid style={{ height: '400px' }} data={gridData}>
        <GridColumn field="id" />
        <GridColumn field="userId" />
        <GridColumn field="completed" />
        <GridColumn field="title" />
      </Grid>
    </div>
  );
};

export default App;
