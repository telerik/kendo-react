import * as React from 'react';
import { Card, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [currentLayout, setCurrentLayout] = React.useState<string>('k-card-list');

    const handleOnChange = (e: DropDownListChangeEvent) => {
        setCurrentLayout(e.value);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h3 style={{ marginBottom: '10px' }}>Change Order View</h3>
            <DropDownList
                data={['k-card-list', 'k-card-group', 'k-card-deck']}
                value={currentLayout}
                onChange={handleOnChange}
                style={{ marginBottom: '20px' }}
            />
            <hr />

            <div className={currentLayout}>
                <Card style={{ width: 250 }}>
                    <CardBody>
                        <CardTitle>Pending Order</CardTitle>
                        <p>Order #10423 is being processed.</p>
                        <p>
                            <strong>Estimated Delivery: Feb 25, 2025</strong>
                        </p>
                    </CardBody>
                    <CardActions>
                        <Button fillMode="solid" themeColor="primary">
                            View Details
                        </Button>
                        <Button fillMode="solid" themeColor="secondary">
                            Cancel
                        </Button>
                    </CardActions>
                </Card>

                <Card style={{ width: 250 }}>
                    <CardBody>
                        <CardTitle>Order History</CardTitle>
                        <p>You have 12 past orders.</p>
                        <p>
                            <strong>Last Order: Jan 15, 2025 (Delivered)</strong>
                        </p>
                    </CardBody>
                    <CardActions>
                        <Button fillMode="solid" themeColor="primary">
                            View Orders
                        </Button>
                        <Button fillMode="solid" themeColor="secondary">
                            Reorder
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default App;
