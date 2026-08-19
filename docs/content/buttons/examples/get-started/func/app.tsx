import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';

const ButtonContainer = () => {
    const handleButtonClick = () => {
        console.log('click');
        alert('KendoReact Button was clicked.');
    };
    return (
        <div className="example-wrapper-center">
            <Button onClick={handleButtonClick}>My Button</Button>
        </div>
    );
};
export default ButtonContainer;
