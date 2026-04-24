import * as React from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { useNavigate, useLocation } from 'react-router-dom';

const CustomPanelBarItem = (props) => {
    return (
        <>
            <a style={{ textDecoration: 'inherit', color: 'inherit', cursor: 'unset' }} href={props.route}>
                {props.title}
            </a>
        </>
    );
};

const paths = [
    {
        path: '/panelbar-kb-open-in-new-window',
        index: '.0'
    },
    {
        path: '/panelbar-kb-open-in-new-window/products',
        index: '.1'
    },
    {
        path: '/panelbar-kb-open-in-new-window/about',
        index: '.2'
    },
    {
        path: '/panelbar-kb-open-in-new-window/about/team',
        index: '.2.0'
    }
];

const PanelBarNavContainer = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const onSelect = (event) => {
        navigate(event.target.props.route);
    };

    const setSelectedIndex = (pathName) => {
        let currentPath = paths.find((item) => item.path === pathName);
        return currentPath ? currentPath.index : '';
    };

    const selected = setSelectedIndex(location.pathname);

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
                <PanelBar selected={selected} expandMode={'single'} onSelect={onSelect}>
                    <PanelBarItem
                        title={<CustomPanelBarItem title="Home" route={paths[0].path} />}
                        route={paths[0].path}
                    />
                    <PanelBarItem
                        title={<CustomPanelBarItem title="Products" route={paths[1].path} />}
                        route={paths[1].path}
                    />
                    <PanelBarItem
                        title={<CustomPanelBarItem title="About" route={paths[2].path} />}
                        route={paths[2].path}
                    >
                        <PanelBarItem title={'Team'} route={paths[3].path} />
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
