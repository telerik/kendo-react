import * as React from 'react';

import { Skeleton } from '@progress/kendo-react-indicators';

import { Card, CardHeader, CardTitle, CardSubtitle, CardFooter, CardImage, Avatar } from '@progress/kendo-react-layout';

interface CardData {
    userAvatar: string;
    title: string;
    subtitle: string;
    thumbnailSrc: string;
    description: string;
}

const cardData: CardData = {
    userAvatar: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/indicators/skeleton/user-avatar.jpg',
    title: 'Tom Smith',
    subtitle: '5 hours ago',
    thumbnailSrc: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/indicators/skeleton/card-thumbnail.jpg',
    description: 'Having so much fun in Prague! #NaZdravi'
};
const App = () => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        // simulate an API call to get the content
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div className="example">
            <div className="example-wrap k-d-flex k-justify-content-around">
                {loading ? (
                    <Card style={{ minWidth: 350, width: 350, height: 'auto' }}>
                        <CardHeader className="k-hbox">
                            <Skeleton shape={'circle'} style={{ width: 45, height: 45, marginRight: 16 }} />
                            <div style={{ flex: '1 1 50%' }}>
                                <Skeleton shape={'text'} style={{ width: '100%' }} />
                                <Skeleton shape={'text'} style={{ width: '40%' }} />
                            </div>
                        </CardHeader>
                        <Skeleton shape={'rectangle'} style={{ width: '100%', height: 230 }} />
                        <CardFooter>
                            <Skeleton shape={'text'} style={{ width: '100%' }} />
                        </CardFooter>
                    </Card>
                ) : (
                    <Card style={{ minWidth: 350, width: 350, height: 'auto' }}>
                        <CardHeader className="k-hbox">
                            <Avatar type={'image'} rounded={'full'}>
                                <img alt="KendoReact Skeleton User Avatar" src={cardData.userAvatar} />
                            </Avatar>
                            <div style={{ flex: '1 1 50%' }}>
                                <CardTitle>{cardData.title}</CardTitle>
                                <CardSubtitle style={{ marginTop: 0 }}>{cardData.subtitle}</CardSubtitle>
                            </div>
                        </CardHeader>
                        <CardImage src={cardData.thumbnailSrc} />
                        <CardFooter>{cardData.description}</CardFooter>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default App;
