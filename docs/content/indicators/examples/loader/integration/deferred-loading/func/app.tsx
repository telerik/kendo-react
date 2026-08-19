import * as React from 'react';
import { Loader, Skeleton } from '@progress/kendo-react-indicators';
import { Button } from '@progress/kendo-react-buttons';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

const gridData = [
    { id: 1, name: 'Alice Chen', department: 'Engineering', role: 'Senior Developer', salary: 112000, active: true },
    { id: 2, name: 'Marcus Webb', department: 'Engineering', role: 'Tech Lead', salary: 135000, active: true },
    { id: 3, name: 'Sofia Reyes', department: 'Design', role: 'UX Designer', salary: 94000, active: true },
    { id: 4, name: 'James Okafor', department: 'Product', role: 'Product Manager', salary: 118000, active: true },
    { id: 5, name: 'Lena Müller', department: 'Engineering', role: 'QA Engineer', salary: 87000, active: false },
    { id: 6, name: 'Raj Patel', department: 'Data', role: 'Data Scientist', salary: 121000, active: true },
    { id: 7, name: 'Chloe Martin', department: 'Design', role: 'UI Designer', salary: 89000, active: true },
    { id: 8, name: 'Tyler Brooks', department: 'Product', role: 'Business Analyst', salary: 96000, active: false },
    { id: 9, name: 'Yuki Tanaka', department: 'Data', role: 'ML Engineer', salary: 130000, active: true },
    { id: 10, name: 'Elena Vasquez', department: 'Engineering', role: 'DevOps Engineer', salary: 115000, active: true }
];

const App = () => {
    const [loadGrid, setLoadGrid] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const load = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setLoadGrid(true);
        }, 1500);
    };

    const reset = () => {
        setLoadGrid(false);
        setLoading(false);
    };

    return (
        <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                <Button themeColor="primary" onClick={load} disabled={loadGrid || loading}>
                    Load Grid
                </Button>
                <Button onClick={reset} disabled={!loadGrid && !loading}>
                    Reset
                </Button>
            </div>
            <div style={{ minHeight: 300 }}>
                {loadGrid ? (
                    <Grid data={gridData} style={{ height: 300 }}>
                        <Column field="id" title="ID" width={60} />
                        <Column field="name" title="Name" />
                        <Column field="department" title="Department" />
                        <Column field="role" title="Role" />
                        <Column field="salary" title="Salary" format="{0:c0}" />
                        <Column field="active" title="Active" width={90} />
                    </Grid>
                ) : loading ? (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 300,
                            gap: 16
                        }}
                    >
                        <Loader type="infinite-spinner" themeColor="primary" size="large" />
                        <span style={{ fontSize: 14, color: 'var(--kendo-color-subtle)' }}>Loading Grid...</span>
                    </div>
                ) : (
                    <Skeleton shape="rectangle" animation={{ type: 'pulse' }} style={{ width: '100%', height: 300 }} />
                )}
            </div>
        </div>
    );
};

export default App;
