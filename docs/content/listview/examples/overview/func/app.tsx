import * as React from 'react';
import { ListView, ListViewHeader, ListViewFooter, ListViewItemProps } from '@progress/kendo-react-listview';
import { Avatar } from '@progress/kendo-react-layout';

import contacts from './contacts.json';

const MyHeader = () => {
    return (
        <ListViewHeader style={{ color: 'rgb(160, 160, 160)', fontSize: 14 }} className='pl-3 pb-2 pt-2'>
            Contact list
        </ListViewHeader>
    );
}

const MyFooter = () => {
    let messages = 0
    contacts.map(i => {
        messages = messages + i.messages
    })
    return (
        <ListViewFooter style={{ color: 'rgb(160, 160, 160)', fontSize: 14 }} className='pl-3 pb-2 pt-2'>
            {messages} unread messages in total
        </ListViewFooter>
    );
}

const MyItemRender = (props: ListViewItemProps) => {
    let item = props.dataItem;
    return (
        <div className='k-listview-item row p-2 border-bottom align-middle' style={{ margin: 0 }}>
            <div className='col-2'>
                <Avatar type='img'>
                    <img src={`https://gist.github.com/simonssspirit/0db46d4292ea8e335eb18544718e2624/raw/2a595679acdb061105c80bd5eeeef58bb90aa5af/${item.image}-round-40x40.png`} alt="KendoReact ListView Contacts Avatar" />
                </Avatar>
            </div>
            <div className='col-6'>
                <h2 style={{ fontSize: 14, color: '#454545', marginBottom: 0 }} className="text-uppercase">{item.name}</h2>
                <div style={{ fontSize: 12, color: "#a0a0a0" }}>{item.email}</div>
            </div>
            <div className='col-4'>
                <div className='k-chip k-chip-md k-rounded-md k-chip-solid k-chip-solid-base'>
                    <div className='k-chip-content'>
                        {item.messages} new messages
                    </div>
                </div>
            </div>
        </div>
    );
}

const App = () => {
    return (
        <>
            <div>
                <ListView
                    data={contacts}
                    item={MyItemRender}
                    style={{ width: "100%" }}
                    header={MyHeader}
                    footer={MyFooter}
                />
            </div>

            <style>
                {`.k-listview-footer {
                    border-top-width: 0 !important;
                }`}
            </style>
        </>
    );
}

export default App;
