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
    const [pager, setPager] = React.useState<string>('enabled');

    const handleChange = (e) => {
        setPager(e.value);
    };

    return (
        <div>
            <div className="example-config">
                <div>
                    <RadioButton
                        name={'enabled'}
                        value={'enabled'}
                        id={'enabled'}
                        checked={pager === 'enabled'}
                        onChange={handleChange}
                    />
                    <Label className={'k-radio-label'} editorId={'enabled'}>
                        Enable pager
                    </Label>
                </div>
                <div>
                    <RadioButton
                        name={'disabled'}
                        value={'disabled'}
                        id={'disabled'}
                        checked={pager === 'disabled'}
                        onChange={handleChange}
                    />
                    <Label className={'k-radio-label'} editorId={'disabled'}>
                        Disable pager
                    </Label>
                </div>
            </div>
            <ScrollView style={{ width: 512, height: 384 }} pageable={pager === 'enabled' ? true : false}>
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
