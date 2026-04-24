import * as React from 'react';

import { ScrollView } from '@progress/kendo-react-scrollview';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';
import { RadioButton } from '@progress/kendo-react-inputs';

const items: any[] = [
    { title: 'Balloons', position: 1, url: 'https://demos.telerik.com/blazor-ui/images/photos/1.jpg' },
    { title: 'Forest', position: 2, url: 'https://demos.telerik.com/blazor-ui/images/photos/2.jpg' },
    { title: 'Flower', position: 3, url: 'https://demos.telerik.com/blazor-ui/images/photos/3.jpg' },
    { title: 'Painting', position: 4, url: 'https://demos.telerik.com/blazor-ui/images/photos/4.jpg' },
    { title: 'Grass', position: 5, url: 'https://demos.telerik.com/blazor-ui/images/photos/5.jpg' }
];

const App = () => {
    const [pageOverlay, setPagerOverlay] = React.useState<'none' | 'light' | 'dark'>('none');

    const handleChange = (e) => {
        setPagerOverlay(e.value);
    };

    return (
        <div>
            <div className="example-config">
                <div>
                    <RadioButton
                        name={'pageOverlay'}
                        value={'none'}
                        id={'none'}
                        checked={pageOverlay === 'none'}
                        onChange={handleChange}
                    />
                    <Label className={'k-radio-label'} editorId={'none'}>
                        None
                    </Label>
                </div>
                <div>
                    <RadioButton
                        name={'pageOverlay'}
                        value={'light'}
                        id={'light'}
                        checked={pageOverlay === 'light'}
                        onChange={handleChange}
                    />
                    <Label className={'k-radio-label'} editorId={'light'}>
                        Light
                    </Label>
                </div>
                <div>
                    <RadioButton
                        name={'pageOverlay'}
                        value={'dark'}
                        id={'dark'}
                        checked={pageOverlay === 'dark'}
                        onChange={handleChange}
                    />
                    <Label className={'k-radio-label'} editorId={'dark'}>
                        Dark
                    </Label>
                </div>
            </div>
            <ScrollView style={{ width: 512, height: 384 }} pagerOverlay={pageOverlay}>
                {items.map((item, index) => {
                    return (
                        <div className="image-with-text" key={index}>
                            <h2 className="demo-title">{item.title}</h2>
                            <img
                                src={item.url}
                                alt={`KendoReact ScrollView Photo ${item.position}`}
                                style={{ width: 512, height: 384 }}
                                draggable={false}
                            />
                        </div>
                    );
                })}
            </ScrollView>
        </div>
    );
};

export default App;
