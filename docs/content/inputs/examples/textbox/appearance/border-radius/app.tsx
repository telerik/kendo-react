import * as React from 'react';
import { TextBox, TextBoxChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [smallValue, setSmallValue] = React.useState('');
    const [mediumValue, setMediumValue] = React.useState('');
    const [largeValue, setLargeValue] = React.useState('');
    const [fullValue, setFullValue] = React.useState('');
    const [noneValue, setNoneValue] = React.useState('');

    const handleSmallChange = (event: TextBoxChangeEvent) => {
        setSmallValue(event.target.value as string);
    };

    const handleMediumChange = (event: TextBoxChangeEvent) => {
        setMediumValue(event.target.value as string);
    };

    const handleLargeChange = (event: TextBoxChangeEvent) => {
        setLargeValue(event.target.value as string);
    };

    const handleFullChange = (event: TextBoxChangeEvent) => {
        setFullValue(event.target.value as string);
    };

    const handleNoneChange = (event: TextBoxChangeEvent) => {
        setNoneValue(event.target.value as string);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    textAlign: 'center'
                }}
            >
                <div>
                    <TextBox
                        placeholder={'Small'}
                        value={smallValue}
                        onChange={handleSmallChange}
                        rounded={'small'}
                        size={'large'}
                    />
                </div>
                <div>
                    <TextBox
                        placeholder={'Medium'}
                        value={mediumValue}
                        onChange={handleMediumChange}
                        rounded={'medium'}
                        size={'large'}
                    />
                </div>
                <div>
                    <TextBox
                        placeholder={'Large'}
                        value={largeValue}
                        onChange={handleLargeChange}
                        rounded={'large'}
                        size={'large'}
                    />
                </div>
                <div>
                    <TextBox
                        placeholder={'Full'}
                        value={fullValue}
                        onChange={handleFullChange}
                        rounded={'full'}
                        size={'large'}
                    />
                </div>
                <div>
                    <TextBox
                        placeholder={'None'}
                        value={noneValue}
                        onChange={handleNoneChange}
                        rounded={'none'}
                        size={'large'}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
