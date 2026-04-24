import * as React from 'react';
import { ListView, ListViewHeader } from '@progress/kendo-react-listview';
import { Card, CardTitle, CardImage, CardSubtitle, CardActions } from '@progress/kendo-react-layout';
import { Pager, PageChangeEvent } from '@progress/kendo-react-data-tools';
import { Button } from '@progress/kendo-react-buttons';

import articles from './articles.json';

const myHeader = () => {
    return (
        <ListViewHeader style={{ color: 'rgb(160, 160, 160)', fontSize: 14 }} className='pl-4 pb-2 pt-2'>
            TRENDING ARTICLES THIS WEEK
        </ListViewHeader>
    );
}

const MyItemRender = props => {
    let item = props.dataItem;
    return (
        <div className='k-listview-item'>
            <Card
                className='d-flex justify-content-between'
                style={{ padding: '20px 24px', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.12)' }} orientation='horizontal'
            >
                <div className='k-vbox k-column'>
                    <div style={{ padding: '0 8px', marginRight: '3rem' }}>
                        <CardTitle style={{ fontSize: 18 }}>
                            {item.Title}
                        </CardTitle>
                        <CardSubtitle style={{ fontSize: 14, marginTop: 0 }}>
                            {item.Subtitle}
                        </CardSubtitle>
                        <CardSubtitle style={{ fontSize: 12 }}>
                            {item.Date}
                        </CardSubtitle>
                    </div>
                    <CardActions style={{ padding: 0 }}>
                        <Button type="button" fillMode='flat'>Save for later</Button>
                        <Button type="button" fillMode='flat'>Add to favorites</Button>
                    </CardActions>
                </div>
                <CardImage src={`https://gist.github.com/simonssspirit/0db46d4292ea8e335eb18544718e2624/raw/2241c020d6d494eaba0ef61862d92b19ef95cbf4/${item.Image}`} style={{ width: 220, height: 140, maxWidth: 220 }} />
            </Card>
        </div>
    )
}

const App = () => {
    const [page, setPage] = React.useState({
        skip: 0,
        take: 3
    });

    const handlePageChange = (e: PageChangeEvent) => {
        setPage({
            skip: e.skip,
            take: e.take
        });
    }

    const { skip, take } = page;

    return (
        <>
            <div>
                <ListView
                    data={articles.slice(skip, skip + take)}
                    item={MyItemRender}
                    style={{ width: "100%" }}
                    header={myHeader}
                />
                <Pager
                    className='k-listview-pager'
                    skip={skip}
                    take={take}
                    onPageChange={handlePageChange}
                    total={articles.length}
                />
            </div>

            <style>
                {`.k-card:last-of-type  {
                    border: none !important;
                }
                .k-pager-wrap {
                    border-top: none;
                }`}
            </style>
        </>
    );
}

export default App;
