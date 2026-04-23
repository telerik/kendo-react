import * as React from 'react';

import { Button, ButtonGroup } from '@progress/kendo-react-buttons';

import './styles.css';

const App = () => {
    return (
        <div>
            <div>
                <ButtonGroup>
                    <Button togglable={true} themeColor={'primary'}>
                        Copy
                    </Button>
                    <Button togglable={true} themeColor={'primary'}>
                        Cut
                    </Button>
                    <Button togglable={true} themeColor={'primary'}>
                        Paste
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default App;
