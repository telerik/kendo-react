import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';

const ButtonContainer = () => {
    const handleButtonClick = () => {
        console.log('click');
        alert('KendoReact Button was clicked.');
    };
    return <Button onClick={handleButtonClick}>My Button</Button>;
};
export default ButtonContainer;
