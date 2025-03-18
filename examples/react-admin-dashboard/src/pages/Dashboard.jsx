import * as React from 'react';
import { TileLayout } from '@progress/kendo-react-layout';
import { ArcGauge } from '@progress/kendo-react-gauges';
import { DashboardChart } from '../components/dashboard/DashboardChart';
import { DashboardGrid } from '../components/dashboard/DashboardGrid'

const colors = [
  {
    color: '#0058e9',
  },
];

const ArcGaugeComponent = () => {
  const [value] = React.useState(50);

  const arcOptions = {
    value: value,
    colors,
  };
  const arcCenterRenderer = (value, color) => {
    return (
      <h3
        style={{
          color: color,
        }}
      >
        {value}%
      </h3>
    );
  };
  return <div style={{
    height: '150px',
  }}>
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
      <p className="dashboard-card-content-number green">22</p>
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
    <p className="dashboard-card-content-number red">7</p>
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
    <p className="dashboard-card-content-number orange">47</p>
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
    <div>
      <div className="greeting">
      Hello again, Jaxons!
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
      className='dasboard-class'
      items={secondSectionTiles}
      onReposition={handleReposition}
    />
    </div>
  );
};


