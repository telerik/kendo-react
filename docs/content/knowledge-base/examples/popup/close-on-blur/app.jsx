import * as React from "react";
import { Popup } from "@progress/kendo-react-popup";
import { Button } from "@progress/kendo-react-buttons";

const AppComponent = () => {
    const [show, setShow] = React.useState(false);
    const contentRef = React.useRef();
    const blurTimeoutRef = React.useRef();
    const anchor = React.useRef(null);

    const onOpen = e => {
        contentRef.current.focus();
    };

    const onFocus = () => {
        // the user is still inside the content
        clearTimeout(blurTimeoutRef.current);
    };

    const onBlurTimeout = () => {
        // the user is now outside the popup
        setShow(false);
    };

    const onBlur = () => {
        clearTimeout(blurTimeoutRef.current);
        blurTimeoutRef.current = setTimeout(onBlurTimeout, 200);
    };

    const onClick = () => {
        setShow(!show);
    };

    return (
        <div>
            <Button
                type="button"
                onClick={onClick}
                ref={anchor}
            >
                {show ? "Hide" : "Show"}
            </Button>
            <Popup
                anchor={anchor.current}
                show={show}
                onOpen={onOpen}
                popupClass={"popup-content"}
            >
                <div
                    ref={contentRef}
                    tabindex={0}
                    onFocus={onFocus}
                    onBlur={onBlur}
                >
                    some content
                </div>
            </Popup>
        </div>
    );
};

export default AppComponent;
