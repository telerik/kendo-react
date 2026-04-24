import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@progress/kendo-react-buttons';
import { Drawer, DrawerContent, DrawerSelectEvent } from '@progress/kendo-react-layout';
import * as svgIcons from '@progress/kendo-svg-icons';
import { leftNavigationItems, rightNavigationItems } from './data';

interface DrawerRouterContainerProps {
    children: React.ReactNode;
}

const DrawerRouterContainer = (props: DrawerRouterContainerProps) => {
    const navigate = useNavigate();
    const [leftExpanded, setLeftExpanded] = React.useState(false);
    const [rightExpanded, setRightExpanded] = React.useState(false);
    const [rightSelected, setRightSelected] = React.useState(
        rightNavigationItems.findIndex((x) => x.selected === true)
    );
    const [leftSelected, setLeftSelected] = React.useState(-1);

    const toggleLeft = () => {
        setLeftExpanded((prevState) => !prevState);
    };

    const toggleRight = () => {
        setRightExpanded((prevState) => !prevState);
    };

    const handleLeftSelect = (ev: DrawerSelectEvent) => {
        navigate(ev.itemTarget.props.route);
        setLeftSelected(ev.itemIndex);
        setLeftExpanded(false);
    };

    const handleRightSelect = (ev: DrawerSelectEvent) => {
        navigate(ev.itemTarget.props.route);
        setRightSelected(ev.itemIndex);
        setRightExpanded(false);
    };

    const getMainContentClass = (): string => {
        if (leftExpanded && rightExpanded) {
            return 'expanded-two-panels';
        } else if (leftExpanded || rightExpanded) {
            return 'expanded-one-panel';
        }

        return '';
    };

    return (
        <>
            <div className="custom-toolbar">
                <Button svgIcon={svgIcons.menuIcon} fillMode="flat" onClick={toggleLeft} />
                <span className="mail-box">Mail Box</span>
                <Button svgIcon={svgIcons.menuIcon} fillMode="flat" onClick={toggleRight} />
            </div>

            <div className={`page`}>
                <Drawer
                    expanded={leftExpanded}
                    className={'left'}
                    mode={'push'}
                    mini={true}
                    items={leftNavigationItems.map((item, index) => ({
                        ...item,
                        selected: index === leftSelected
                    }))}
                    onSelect={handleLeftSelect}
                />

                <DrawerContent className={`main-content ${getMainContentClass()}`}>
                    <div>{props.children}</div>
                </DrawerContent>

                <Drawer
                    expanded={rightExpanded}
                    className={'right'}
                    position={'end'}
                    mode={'push'}
                    mini={true}
                    items={rightNavigationItems.map((item, index) => ({
                        ...item,
                        selected: index === rightSelected
                    }))}
                    onSelect={handleRightSelect}
                />
            </div>
        </>
    );
};

export default DrawerRouterContainer;
