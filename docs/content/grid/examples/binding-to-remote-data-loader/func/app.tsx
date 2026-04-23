import React, { useState, useEffect } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { createPortal } from 'react-dom';
import { Button } from '@progress/kendo-react-buttons';

const loadingPanelMarkup = (
    <div className="k-loading-mask">
        <span className="k-loading-text">Loading</span>
        <div className="k-loading-image" />
        <div className="k-loading-color" />
    </div>
);

const LoadingPanel = (props) => {
    const { gridRef } = props;
    const gridContent = gridRef.current && gridRef.current.querySelector('.k-grid-content');
    return gridContent ? createPortal(loadingPanelMarkup, gridContent) : loadingPanelMarkup;
};

const App = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [showLoading, setShowLoading] = React.useState(false);
    const gridRef = React.useRef(null);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        setShowLoading(true);
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((data) => {
                    setUsers(data);
                    setShowLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    setShowLoading(false);
                });
        }, 3000);
    };

    return (
        <>
            <Button onClick={loadData} style={{ marginBottom: 20 }}>
                Reload Data
            </Button>
            <div ref={gridRef}>
                {showLoading ? <LoadingPanel gridRef={gridRef} /> : null}

                <Grid style={{ height: '400px' }} data={users}>
                    <Column field="id" title="ID" width="40px" />
                    <Column field="name" title="Name" width="250px" />
                    <Column field="email" title="Email" />
                    <Column field="address.street" title="Address" />
                    <Column field="address.zipcode" title="Zipcode" />
                    <Column field="address.city" title="City" />
                </Grid>
            </div>
        </>
    );
};

export default App;
