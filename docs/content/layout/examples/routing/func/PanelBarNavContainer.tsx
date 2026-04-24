import * as React from 'react';
import { PanelBar, PanelBarItem, PanelBarSelectEventArguments } from '@progress/kendo-react-layout';
import { useNavigate } from 'react-router-dom';

const PanelBarNavContainer = (props: any) => {
    const navigate = useNavigate();

    const onSelect = (event: PanelBarSelectEventArguments) => {
        navigate(event.target.props.route);
    };

    return (
        <div
            style={{
                display: 'flex',
                width: '100%'
            }}
        >
            <div
                style={{
                    minWidth: '20%',
                    maxWidth: '20%'
                }}
            >
                <PanelBar selected={'0'} expandMode={'single'} onSelect={onSelect}>
                    <PanelBarItem id={'0'} title={'Home'} route="/" />
                    <PanelBarItem id={'1'} title={'Products'} route="/products" />
                    <PanelBarItem id={'2'} title={'About'} route="/about">
                        <PanelBarItem id={'2.1'} title={'Team'} route="/about/team" />
                    </PanelBarItem>
                </PanelBar>
            </div>
            <div
                style={{
                    paddingLeft: '10pt'
                }}
            >
                {props.children}
            </div>
        </div>
    );
};

export default PanelBarNavContainer;
