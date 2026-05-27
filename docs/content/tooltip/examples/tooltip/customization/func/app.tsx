import * as React from 'react';
import { Tooltip, TooltipHandle } from '@progress/kendo-react-tooltip';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    const tooltip = React.useRef<TooltipHandle>(null);

    const handlePointerOver = (event: React.PointerEvent<HTMLElement>) => {
        tooltip.current?.handleMouseOver(event);
    };

    const handlePointerLeave = (event: React.PointerEvent<HTMLElement>) => {
        tooltip.current?.handleMouseLeave(event);
    };

    return (
        <div>
            <section aria-label="Tooltip host region" className="tooltip-host-container">
                <div
                    role="toolbar"
                    aria-label="Tooltip action targets"
                    className="tooltip-host-actions"
                    onPointerOver={handlePointerOver}
                    onPointerLeave={handlePointerLeave}
                >
                    <Button fillMode="link" title="Tooltip for the first action">
                        First action
                    </Button>
                    <Button themeColor="primary" title="Tooltip for the second action">
                        Action button
                    </Button>
                </div>
                <div className="tooltip-outside-action">
                    <Button title="There is no KendoReact Tooltip for the third action">Third action</Button>
                </div>
            </section>

            <Tooltip ref={tooltip} anchorElement="anchor" parentTitle position="bottom" openDelay={250} />
        </div>
    );
};

export default App;
