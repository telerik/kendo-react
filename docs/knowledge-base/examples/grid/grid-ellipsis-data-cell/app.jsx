import * as React from 'react';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import './styles.css';

/* Generating example data */
const createRandomData = (count) => {
  const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven'],
    lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan'],
    cities = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond'],
    titles = [
      'Accountant',
      'Some very long title Some very long title Some very long title Some very long title Some very long title Some very long title, Sales',
      'Sales Representative',
      'Technical Support',
    ];
  return Array(count)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
      lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      title: titles[Math.floor(Math.random() * titles.length)],
    }));
};

//Grid
const App = () => {
  const [data] = React.useState(createRandomData(50));
  const [skip, setSkip] = React.useState(0);

  const pageChange = (event) => {
    setSkip(event.page.skip);
  };

  //Adding "ellipsis-cell" class name to each data cell
  const cellRender = (td, props) => {
    if (props.rowType == 'data') {
      return (
        <td {...td.props}>
          <div className={'ellipsis-cell'}>{td.props.children}</div>
        </td>
      );
    }
    return td;
  };
  return (
    <Grid
      cellRender={cellRender}
      style={{
        height: '440px',
      }}
      data={data.slice(skip, skip + 20)}
      pageSize={20}
      total={data.length}
      skip={skip}
      onPageChange={pageChange}
    >
      <Column field="id" title="ID" width="150px" />
      <Column field="firstName" title="First Name" />
      <Column field="lastName" title="Last Name" />
      <Column field="city" title="City" width="120px" />
      <Column field="title" title="Title" width="200px" />
    </Grid>
  );
};

export default App;
