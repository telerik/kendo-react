import * as React from 'react';
import { TileLayout } from '@progress/kendo-react-layout';
import { ArcGauge } from '@progress/kendo-react-gauges';
import { DashboardChart } from '../components/dashboard/DashboardChart';
import { DashboardGrid } from '../components/dashboard/DashboardGrid'

const colors = [{ color: 'var(--kendo-color-secondary)' }];

const ArcGaugeComponent = () => {
  const [value] = React.useState(50);

  const arcOptions = {
    value: value,
    colors,
  };
  const arcCenterRenderer = (value) => {
    return (
    <h3 className="dashboard-gauge-value">
      {value}%
    </h3>
    );
  };
  return <div className="dashboard-gauge">
    <ArcGauge {...arcOptions} arcCenterRender={arcCenterRenderer} />
  </div>;
};

const tiles = [
  {
    defaultPosition: {
      col: 1,
      colSpan: 1,
      rowSpan: 1,
    },
    header: 'Tasks On Track',
    body: <div className="dashboard-card-content">
      <p className="dashboard-card-content-number dashboard-stat--success">22 <span className="status-label">on track</span></p>
      <div>
        <p className="footer">
        In Backlog: 43
        </p>
      </div>
    </div>,

  },
  {
    defaultPosition: {
      col: 2,
      colSpan: 1,
      rowSpan: 1,
    },
    header: 'Overdue Tasks',
    body: <div className="dashboard-card-content">
    <p className="dashboard-card-content-number dashboard-stat--error">7 <span className="status-label">overdue</span></p>
    <div>
    <p className="footer">
    From Yesterday: 16
    </p>
    </div>
  </div>,
  },
  {
    defaultPosition: {
      col: 3,
      colSpan: 1,
      rowSpan: 1,
    },
    header: 'Issues',
    body: <div className="dashboard-card-content">
    <p className="dashboard-card-content-number dashboard-stat--warning">47 <span className="status-label">open</span></p>
    <div>
    <p className="footer">
    Closed By Team 15
    </p>
    </div>
  </div>,
  },
  {
    defaultPosition: {
      col: 4,
      colSpan: 1,
      rowSpan: 1,
    },
    header: 'Used Space',
    body: <div className="gauge-div">
    <ArcGaugeComponent/>
    <p className="gauge-footer">
    Closed By Team 15
    </p>
  </div>,


  },
];

export  const Dashboard = () => {

  const handleReposition = (e) => {
    setData(e.value);
  };

  const [data, setData] = React.useState([
    {
      col: 1,
      colSpan: 3,
      rowSpan: 2,
    },
    {
      col: 1,
      colSpan: 2,
      rowSpan: 3,
    },
  ]);
  const secondSectionTiles = [
    {
      body: <DashboardChart/>,
    },
    {
      body: <DashboardGrid/>,
    },
  ];


  return (
    <div className="dashboard-page">
      <div className="greeting">
        <h1>Hello again, Jaxons!</h1>
        <p>Here's how your workspace is progressing.</p>
      </div>

    <TileLayout columns={4} items={tiles} rowHeight={230} />

    <TileLayout
      columns={2}
      rowHeight={'auto'}
      positions={data}
      gap={{
        rows: 10,
        columns: 10,
        }}
      className="dashboard-detail-tiles"
      items={secondSectionTiles}
      onReposition={handleReposition}
    />
    </div>
  );
};
