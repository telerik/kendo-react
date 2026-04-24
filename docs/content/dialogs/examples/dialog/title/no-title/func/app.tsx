import * as React from 'react';
import { Dialog } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <Dialog height={300}>
            <div style={{ textAlign: 'center', margin: '30px' }}>
                <h4>Enter your e-mail below to unlock.</h4>
                <p>
                    <Input placeholder="Your e-mail here" style={{ width: '300px' }} />
                </p>
                <p>
                    <Button type="button" themeColor={'primary'} style={{ width: '300px' }}>
                        GET MY $10 OFF
                    </Button>{' '}
                </p>
                <a href="#">No thanks!</a>
            </div>
        </Dialog>
    );
};
export default App;
