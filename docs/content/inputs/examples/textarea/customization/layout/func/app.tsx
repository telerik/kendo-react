import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import {
    InputPrefix,
    InputSuffix,
    InputSeparator,
    TextArea,
    TextAreaChangeEvent,
    TextAreaProps
} from '@progress/kendo-react-inputs';
import { searchIcon, letterSpaceIcon, accessibilityIcon, cancelIcon } from '@progress/kendo-svg-icons';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { SvgIcon } from '@progress/kendo-react-common';

const EMPTY_VALUE = '';

const App = () => {
    const [value, setValue] = React.useState<TextAreaProps['value']>('');
    const [layout, setLayout] = React.useState<string>('flow-horizontal, prefix/suffix - vertical');

    const handleDropDownChange = (e: DropDownListChangeEvent) => {
        setLayout(e.value);
    };

    const handleEventChange = React.useCallback((event: TextAreaChangeEvent) => {
        setValue(event.target.value);
    }, []);

    // Extract layout logic
    const isFlowVertical = layout.includes('flow-vertical');
    const isPrefixSuffixVertical = layout.includes('prefix/suffix - vertical');

    const renderPrefix = () => (
        <>
            <InputPrefix
                orientation={isPrefixSuffixVertical ? 'vertical' : 'horizontal'}
                className={isPrefixSuffixVertical ? '!k-align-items-start !k-justify-content-center' : ''}
            >
                <SvgIcon icon={letterSpaceIcon} />
                <SvgIcon icon={accessibilityIcon} />
            </InputPrefix>
            <InputSeparator orientation={isFlowVertical ? 'horizontal' : 'vertical'} />
        </>
    );

    const renderSuffix = () => (
        <>
            <InputSeparator orientation={isFlowVertical ? 'horizontal' : 'vertical'} />
            <InputSuffix
                orientation={isPrefixSuffixVertical ? 'vertical' : 'horizontal'}
                className={isPrefixSuffixVertical ? '!k-align-items-start !k-justify-content-center' : ''}
            >
                <SvgIcon icon={cancelIcon} />
                <Button disabled={value === EMPTY_VALUE} themeColor="primary" fillMode={'flat'} svgIcon={searchIcon}>
                    Send
                </Button>
            </InputSuffix>
        </>
    );

    return (
        <>
            <span>hello there</span>
            <p>Change the layout flow:</p>
            <DropDownList
                data={[
                    'flow-vertical, prefix/suffix - horizontal',
                    'flow-horizontal, prefix/suffix - horizontal',
                    'flow-vertical, prefix/suffix - vertical',
                    'flow-horizontal, prefix/suffix - vertical'
                ]}
                value={layout}
                onChange={handleDropDownChange}
            />
            <hr />
            <TextArea
                resizable={'none'}
                value={value}
                onChange={handleEventChange}
                placeholder="Type here ..."
                flow={isFlowVertical ? 'vertical' : 'horizontal'}
                prefix={renderPrefix}
                suffix={renderSuffix}
                style={{ width: 300 }}
            />
        </>
    );
};

export default App;
