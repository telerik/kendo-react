import * as React from 'react';
import { Window, WindowMoveEvent, WindowActionsEvent } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import { minusIcon } from '@progress/kendo-svg-icons';

interface PositionInterface {
    left: number;
    top: number;
    width: number;
    height: number;
}

const MinimizeButton = (props) => {
    return (
        <Button
            svgIcon={minusIcon}
            fillMode="solid"
            onClick={(e) => {
                if (props.onClick) {
                    props.onClick(e);
                }
            }}
        />
    );
};

const App = () => {
    const [opened, setOpened] = React.useState<boolean>(true);
    const [position, setPosition] = React.useState<PositionInterface>({
        left: 300,
        top: 100,
        width: 200,
        height: 200
    });
    const [windowStage, setWindowStage] = React.useState<'MINIMIZED' | 'FULLSCREEN' | 'DEFAULT' | undefined>('DEFAULT');

    const handleMove = (event: WindowMoveEvent) => {
        setPosition({ ...position, left: event.left, top: event.top });
    };
    const handleResize = (event: WindowMoveEvent) => {
        setPosition({
            left: event.left,
            top: event.top,
            width: event.width,
            height: event.height
        });
    };
    const handleClose = (event: WindowActionsEvent) => {
        setOpened(false);
    };
    const handleShowWindow = () => {
        setOpened(!opened);
    };

    const handleSetWidth200 = () => {
        setPosition({ ...position, width: 200 });
    };
    const handleSetWidth500 = () => {
        setPosition({ ...position, width: 500 });
    };

    const onStageChange = (ev) => {
        setWindowStage(ev.stage);
    };
    return (
        <div>
            <Button onClick={handleShowWindow} id="open-window">
                Show/Hide
            </Button>
            <Button className="resize" onClick={handleSetWidth200}>
                Set width to 200
            </Button>
            <Button className="resize" onClick={handleSetWidth500}>
                Set width to 500
            </Button>
            {opened && (
                <Window
                    title={'Status'}
                    left={position.left}
                    top={position.top}
                    width={position.width}
                    height={position.height}
                    onMove={handleMove}
                    onResize={handleResize}
                    onClose={handleClose}
                    stage={windowStage}
                    onStageChange={onStageChange}
                    minimizeButton={MinimizeButton}
                >
                    Controlled mode
                </Window>
            )}
        </div>
    );
};
export default App;
