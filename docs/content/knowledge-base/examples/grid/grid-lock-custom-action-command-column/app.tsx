import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

// 1. Your Custom Action Component
const ActionButtonComponent = (props) => {
    const itemID = props.dataItem.ID;

    const openEditModal = () => {
        // Your logic for fm.setEditContext and window.history.pushState
        console.log('Opening ID:', itemID);

        const url = new URL(window.location.href);
        url.searchParams.set('form', 'nomination');
        url.searchParams.set('id', String(itemID));
        window.history.pushState(null, '', url.toString());
    };

    return (
        <td {...props.tdProps}>
            <div style={{ padding: '1em 0.5em', display: 'flex', gap: '5px' }}>
                <button className="k-button k-button-md k-rounded-md k-button-solid-primary" onClick={openEditModal}>
                    Edit
                </button>
            </div>
        </td>
    );
};

// 2. Main Grid Page
const App = () => {
    const [data] = React.useState([
        { ID: 1, Company: 'Acme Corp', Contact: 'John Doe' },
        { ID: 2, Company: 'Globex', Contact: 'Jane Smith' }
    ]);

    return (
        <Grid data={data} style={{ height: '400px', width: '600px' }}>
            {/* The Action Column - Locked */}
            <GridColumn
                field="ID"
                title="Actions"
                width="120px"
                locked={true}
                cells={{ data: ActionButtonComponent }}
            />

            {/* The Company Column - Locked */}
            <GridColumn field="Company" title="Client Company" width="200px" locked={true} />

            {/* Other scrollable columns */}
            <GridColumn field="Contact" title="Contact Name" width="300px" />
            <GridColumn field="Contact" title="Notes" width="600px" />
        </Grid>
    );
};

export default App;
