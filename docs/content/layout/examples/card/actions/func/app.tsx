import * as React from 'react';
import { Card, CardBody, CardActions } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', padding: '20px' }}>
            <div style={{ width: '45%' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>Actions Orientation</h3>
                <hr style={{ marginBottom: '20px' }} />

                <Card style={{ width: 280, borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <CardBody style={{ padding: '20px' }}>
                        <h4 style={{ marginBottom: '10px' }}>Subscription</h4>
                        <p style={{ color: '#555' }}>Your subscription is active until March 30, 2025.</p>
                    </CardBody>
                    <CardActions style={{ padding: '10px', justifyContent: 'space-between' }}>
                        <Button type="button" fillMode="solid" themeColor="primary" style={{ width: '48%' }}>
                            Upgrade Plan
                        </Button>
                        <Button type="button" fillMode="solid" themeColor="secondary" style={{ width: '48%' }}>
                            Cancel
                        </Button>
                    </CardActions>
                </Card>

                <Card
                    style={{
                        width: 280,
                        marginTop: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                >
                    <CardBody style={{ padding: '20px' }}>
                        <h4 style={{ marginBottom: '10px' }}>Account Security</h4>
                        <p style={{ color: '#555' }}>Enable two-factor authentication for enhanced security.</p>
                    </CardBody>
                    <CardActions orientation="vertical" style={{ padding: '10px', alignItems: 'center' }}>
                        <Button type="button" fillMode="solid" themeColor="primary" style={{ width: '90%' }}>
                            Enable 2FA
                        </Button>
                        <Button type="button" fillMode="solid" themeColor="secondary" style={{ width: '90%' }}>
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>

            <div style={{ width: '45%' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>Actions Layout</h3>
                <hr style={{ marginBottom: '20px' }} />

                <Card style={{ width: 320, borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <CardBody style={{ padding: '20px' }}>
                        <h4 style={{ marginBottom: '10px' }}>Order Confirmation</h4>
                        <p style={{ color: '#555' }}>Your order #12345 has been placed successfully.</p>
                    </CardBody>
                    <CardActions style={{ padding: '10px', justifyContent: 'center' }}>
                        <Button type="button" fillMode="solid" themeColor="primary">
                            Track Order
                        </Button>
                        <Button type="button" fillMode="solid" themeColor="secondary">
                            Support
                        </Button>
                    </CardActions>
                </Card>

                <Card
                    style={{
                        width: 320,
                        marginTop: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                >
                    <CardBody style={{ padding: '20px' }}>
                        <h4 style={{ marginBottom: '10px' }}>Event Invitation</h4>
                        <p style={{ color: '#555' }}>You are invited to our annual conference on June 15.</p>
                    </CardBody>
                    <CardActions layout="center" style={{ padding: '10px' }}>
                        <Button type="button" fillMode="solid" themeColor="primary">
                            RSVP
                        </Button>
                        <Button type="button" fillMode="solid" themeColor="secondary">
                            Details
                        </Button>
                    </CardActions>
                </Card>

                <Card
                    style={{
                        width: 320,
                        marginTop: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                >
                    <CardBody style={{ padding: '20px' }}>
                        <h4 style={{ marginBottom: '10px' }}>Payment Failed</h4>
                        <p style={{ color: '#555' }}>Your payment attempt for order #67890 was declined.</p>
                    </CardBody>
                    <CardActions layout="end" style={{ padding: '10px' }}>
                        <Button type="button" fillMode="solid" themeColor="error">
                            Retry
                        </Button>
                        <Button type="button" fillMode="solid" themeColor="secondary">
                            Change Method
                        </Button>
                    </CardActions>
                </Card>

                <Card
                    style={{
                        width: 320,
                        marginTop: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                >
                    <CardBody style={{ padding: '20px' }}>
                        <h4 style={{ marginBottom: '10px', color: 'red' }}>Delete Account</h4>
                        <p style={{ color: '#555' }}>This action is irreversible. Proceed with caution.</p>
                    </CardBody>
                    <CardActions layout="stretched" style={{ padding: '10px' }}>
                        <Button type="button" fillMode="solid" themeColor="error">
                            Delete
                        </Button>
                        <Button type="button" fillMode="solid" themeColor="secondary">
                            Cancel
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default App;
