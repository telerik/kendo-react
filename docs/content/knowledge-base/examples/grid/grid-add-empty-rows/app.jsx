import * as React from 'react';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

/* Generating example data */
const createRandomData = (count) => {
    const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven'],
        lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock'],
        cities = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London'],
        titles = ['Accountant', 'Vice President, Sales', 'Sales Representative', 'Technical Support'];
    return Array(count)
        .fill({})
        .map((_, idx) => ({
            id: idx + 1,
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            city: cities[Math.floor(Math.random() * cities.length)],
            title: titles[Math.floor(Math.random() * titles.length)]
        }));
};

//Component
const App = () => {
    const [data] = React.useState(createRandomData(5));
    const [skip, setSkip] = React.useState(0);
    const [gridHeight, setGridHeight] = React.useState(450);

    const pageChange = (event) => {
        setSkip(event.page.skip);
    };
    const cityFooterCell = (props) => {
        return <td {...props.tdProps}>Test</td>;
    };

    const getEmptyCells = (props) => {
        let content = [];
        for (let i = 0; i < props.children.length; i++) {
            content.push(<td key={props.dataIndex}>&nbsp;</td>);
        }
        return content;
    };
    const getEmptyRows = (props, rowsNeeded) => {
        let content = [];
        for (let i = 0; i < rowsNeeded; i++) {
            content.push(<tr {...props.trProps} key={props.trProps.key + '_'+ i}>{getEmptyCells(props)}</tr>);
        }
        return content;
    };

    const CustomRow = (props) => {
        //find the last TR element and add more rows along with it to fill the empty space in the scrollable container
        if (data.length < 20 && props.dataIndex == data.length - 1) {
            let rowsNeeded = Math.floor(gridHeight / props.rowHeight) - data.length - 1;
            return (
                <React.Fragment>
                    <tr {...props.trProps}>{props.children}</tr>
                    {getEmptyRows(props, rowsNeeded)}
                </React.Fragment>
            );
        }

        return <tr {...props.trProps}></tr>;
    };

    return (
        <Grid
            rows={{ data: CustomRow }}
            style={{
                height: gridHeight
            }}
            rowHeight={40}
            data={data.slice(skip, skip + 20)}
            pageSize={20}
            total={data.length}
            skip={skip}
            scrollable={'virtual'}
            onPageChange={pageChange}
        >
            <Column field="id" title="ID" width="150px" />
            <Column field="firstName" title="First Name" />
            <Column field="lastName" title="Last Name" />
            <Column field="city" title="City" width="120px" cells={{ footerCell: cityFooterCell }} />
            <Column field="title" title="Title" width="200px" />
        </Grid>
    );
};

export default App;
