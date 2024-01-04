import * as React from 'react';
import { ButtonGroup, Button } from '@progress/kendo-react-buttons';
import { classNames } from '@progress/kendo-react-common';
import { useNavigate, useLocation } from 'react-router-dom';

export interface NavigationProps {
    className?: string;
}

export const Navigation: React.FunctionComponent<NavigationProps> = (props) => {
    const history = useNavigate();
    const location = useLocation();
    const handleStockClick = React.useCallback(() => { history('/stocks'); }, [history]);
    const handleHeatmapClick = React.useCallback(() => { history('/heatmap'); }, [history]);
    const handleVirtualizedClick = React.useCallback(() => { history('/virtualized'); }, [history]);

    return (
        <div className={classNames(props.className)}>
            <ButtonGroup>
                <Button togglable={true} selected={location.pathname.includes('/stocks') || location.pathname === '/'} onClick={handleStockClick}>Stock List</Button>
                <Button togglable={true} selected={location.pathname.includes('/heatmap')} onClick={handleHeatmapClick}>Heatmap View</Button>
                <Button togglable={true} selected={location.pathname.includes('/virtualized')} onClick={handleVirtualizedClick}>Virtualized</Button>
            </ButtonGroup>
        </div>
    )
}