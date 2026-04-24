import * as React from 'react';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import { userIcon, starIcon, trashIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const App = () => {
    return (
        <div>
            <ButtonGroup>
                <Button togglable={true} svgIcon={userIcon} themeColor={'primary'}>
                    Assign Task
                </Button>
                <Button togglable={true} svgIcon={starIcon} themeColor={'warning'}>
                    Mark as Important
                </Button>
                <Button togglable={true} svgIcon={trashIcon} themeColor={'error'}>
                    Delete Task
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default App;
