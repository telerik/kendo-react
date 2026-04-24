import * as React from 'react';
import { Avatar } from '@progress/kendo-react-layout';

const firstContactImage = 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/RICSU.jpg';
const secondContactImage = 'https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg';

const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px'
            }}
        >
            <Avatar rounded="full" type="image">
                <img src={firstContactImage} alt="First Contact" />
            </Avatar>
            <Avatar rounded="full" type="image">
                <img src={secondContactImage} alt="Second Contact" />
            </Avatar>
        </div>
    );
};

export default App;
