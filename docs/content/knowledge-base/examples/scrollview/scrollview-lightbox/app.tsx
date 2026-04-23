import * as React from 'react';

import { ScrollView } from '@progress/kendo-react-scrollview';
import { Label } from '@progress/kendo-react-labels';
import { RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { Dialog } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import { ListView, ListViewItemProps } from '@progress/kendo-react-listview';

import './styles.css';

type Item = {
    title: string;
    position: number;
    url: string;
};

const items: Item[] = [
    { title: 'Balloons', position: 1, url: 'https://demos.telerik.com/blazor-ui/images/photos/1.jpg' },
    { title: 'Forest', position: 2, url: 'https://demos.telerik.com/blazor-ui/images/photos/2.jpg' },
    { title: 'Flower', position: 3, url: 'https://demos.telerik.com/blazor-ui/images/photos/3.jpg' },
    { title: 'Painting', position: 4, url: 'https://demos.telerik.com/blazor-ui/images/photos/4.jpg' },
    { title: 'Grass', position: 5, url: 'https://demos.telerik.com/blazor-ui/images/photos/5.jpg' }
];

const App = () => {
    const [arrows, setArrows] = React.useState<'enabled' | 'disabled'>('enabled');
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [activeIndex, setActiveIndex] = React.useState<number>(0);

    const handleChange = (e: RadioButtonChangeEvent) => setArrows(e.value as 'enabled' | 'disabled');

    const openAt = (index: number) => {
        setActiveIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => setIsOpen(false);

    const Thumb: React.FC<ListViewItemProps> = (props) => {
        const item = props.dataItem as Item;
        const index = props.index!;
        return (
            <div
                className="thumb"
                onClick={() => openAt(index)}
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openAt(index);
                    }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Open ${item.title} in lightbox`}
            >
                <img src={item.url} alt={item.title} draggable={false} />
                <div className="thumb-caption">{item.title}</div>
            </div>
        );
    };

    return (
        <div>
            <ScrollView style={{ width: 512, height: 384 }} arrows={arrows === 'enabled'}>
                {items.map((item, index) => (
                    <div className="image-with-text" key={index}>
                        <h2 className="demo-title">{item.title}</h2>
                        <img
                            src={item.url}
                            alt={`KendoReact ScrollView Photo ${item.position}`}
                            style={{ width: 512, height: 384, cursor: 'zoom-in' }}
                            draggable={false}
                            onClick={() => openAt(index)}
                            onKeyDown={(e: React.KeyboardEvent<HTMLImageElement>) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    openAt(index);
                                }
                            }}
                            tabIndex={0}
                        />
                    </div>
                ))}
            </ScrollView>

            <div className="thumbs-wrap">
                <ListView data={items} item={Thumb} />
            </div>

            {isOpen && (
                <Dialog onClose={closeLightbox}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div className="k-dialog-buttongroup k-actions k-actions-end" style={{ order: 2 }}>
                            <Button onClick={closeLightbox}>Close</Button>
                        </div>

                        <ScrollView
                            style={{ width: '90vw', height: '80vh' }}
                            arrows={true}
                            endless={true}
                            pageable={true}
                            pagerOverlay="dark"
                            activeView={activeIndex + 1}
                        >
                            {items.map((item, index) => (
                                <div key={index} className="lightbox-slide">
                                    <img
                                        src={item.url}
                                        alt={item.title}
                                        draggable={false}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain',
                                            userSelect: 'none'
                                        }}
                                    />
                                </div>
                            ))}
                        </ScrollView>
                    </div>
                </Dialog>
            )}
        </div>
    );
};

export default App;
