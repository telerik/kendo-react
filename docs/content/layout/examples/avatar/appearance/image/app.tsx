import * as React from 'react';

import { Avatar } from '@progress/kendo-react-layout';

const firstContactImage = 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/RICSU.jpg';
const secondContactImage = 'https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg';
const thirdContactImage = 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/ANATR.jpg';

const images = [firstContactImage, secondContactImage, thirdContactImage];

const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={{ display: 'flex', gap: '10px' }}>
                {images.map((image, index) => {
                    return (
                        <span key={index}>
                            <Avatar type="image">
                                <img src={image} alt={`Contact ${index + 1}`} />
                            </Avatar>
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default App;
