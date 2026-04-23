import * as React from 'react';
import { Card, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '20px' }}>
            <Card style={{ width: 250 }}>
                <CardBody>
                    <CardTitle>Default Card</CardTitle>
                    <p>This is a standard card with no specific type.</p>
                </CardBody>
                <CardActions>
                    <Button type="button" themeColor="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>

            <Card style={{ width: 250 }} type="primary">
                <CardBody>
                    <CardTitle>Primary Card</CardTitle>
                    <p>This card represents an important action or highlighted content.</p>
                </CardBody>
                <CardActions>
                    <Button type="button" themeColor="primary">
                        Get Started
                    </Button>
                </CardActions>
            </Card>

            <Card style={{ width: 250 }} type="info">
                <CardBody>
                    <CardTitle>Info Card</CardTitle>
                    <p>Use this card to display informational messages.</p>
                </CardBody>
                <CardActions>
                    <Button type="button" themeColor="info">
                        More Info
                    </Button>
                </CardActions>
            </Card>

            <Card style={{ width: 250 }} type="success">
                <CardBody>
                    <CardTitle>Success Card</CardTitle>
                    <p>Indicates a successful action or confirmation message.</p>
                </CardBody>
                <CardActions>
                    <Button type="button" themeColor="success">
                        View Details
                    </Button>
                </CardActions>
            </Card>

            <Card style={{ width: 250 }} type="warning">
                <CardBody>
                    <CardTitle>Warning Card</CardTitle>
                    <p>This card alerts the user about a potential issue.</p>
                </CardBody>
                <CardActions>
                    <Button type="button" themeColor="warning">
                        Take Action
                    </Button>
                </CardActions>
            </Card>

            <Card style={{ width: 250 }} type="error">
                <CardBody>
                    <CardTitle>Error Card</CardTitle>
                    <p>This card signifies an error or critical issue.</p>
                </CardBody>
                <CardActions>
                    <Button type="button" themeColor="error">
                        Fix Issue
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default App;
