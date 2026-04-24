import { Card, CardHandle } from '@progress/kendo-react-layout';
import * as React from 'react';
import { createPortal } from 'react-dom';

export const DragHint = React.forwardRef<HTMLElement, any>((props, ref) => {
    const { portal, ...other } = props;
    const card = React.useRef<CardHandle>(null);
    React.useImperativeHandle(ref, () => card.current?.element!);

    const [portalElement, setPortalElement] = React.useState<HTMLElement | null>(null);

    const Component = (
        <Card
            ref={card}
            {...other}
            style={{
                position: 'absolute',
                pointerEvents: 'none',
                userSelect: 'none',
                padding: 16,
                overflow: 'visible',
                cursor: 'move',
                ...(props.style || {})
            }}
        >
            {props.children}
        </Card>
    );

    React.useEffect(() => {
        setPortalElement(props.portal?.current?.element);
    }, [props.portal]);

    return portalElement ? createPortal(Component, portalElement) : Component;
});
