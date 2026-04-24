import * as React from 'react';

import { Label } from '@progress/kendo-react-labels';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { guid } from '@progress/kendo-react-common';

export const useLabelIds = () => {
    const labelIdRef = React.useRef(guid());
    const editorIdRef = React.useRef(guid());

    return [labelIdRef.current, editorIdRef.current];
};
interface StyleConfiguratorProps {
    size?: 'small' | 'medium' | 'large';
    sizes?: Array<'small' | 'medium' | 'large'>;
    onSizeChange?: (size: 'small' | 'medium' | 'large') => void;

    fillMode?: 'solid' | 'outline' | 'flat';
    fillModes?: Array<'solid' | 'outline' | 'flat'>;
    onFillModeChange?: (fillMode: 'solid' | 'outline' | 'flat') => void;

    rounded?: 'small' | 'medium' | 'large' | 'full';
    roundedOptions?: Array<'small' | 'medium' | 'large' | 'full'>;
    onRoundedChange?: (rounded: 'small' | 'medium' | 'large' | 'full') => void;
}

export const StyleConfigurator = (props: StyleConfiguratorProps) => {
    const {
        sizes,
        onSizeChange,

        fillModes,
        onFillModeChange,

        roundedOptions,
        onRoundedChange
    } = { ...StyleConfigurator.defaultProps, ...props };

    const handleSizeChange = (event: DropDownListChangeEvent) => {
        onSizeChange(event.value);
    };

    const handleFillModeChange = (event: DropDownListChangeEvent) => {
        onFillModeChange(event.value);
    };

    const handleRoundedChange = (event: DropDownListChangeEvent) => {
        onRoundedChange(event.value);
    };

    const sizeRef = React.useRef(null);
    const fillRef = React.useRef(null);
    const roundRef = React.useRef(null);

    const [sizeLabelId, sizeId] = useLabelIds();
    const [fillLabelId, fillId] = useLabelIds();
    const [roundLabelId, roundId] = useLabelIds();

    return (
        <div style={{ margin: '-30px -30px 30px -30px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span className="k-color-primary" style={{ textTransform: 'uppercase', padding: '4px 0' }}>
                    Configurator
                </span>
            </div>
            <div
                className="example-config"
                style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}
            >
                <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                    <Label id={sizeLabelId} editorId={sizeId} editorRef={sizeRef}>
                        Size
                    </Label>
                    <div className="k-form-field-wrap">
                        <DropDownList
                            data={sizes}
                            value={props.size}
                            onChange={handleSizeChange}
                            style={{ minWidth: 120 }}
                            id={sizeId}
                            ariaLabelledBy={sizeLabelId}
                            ref={sizeRef}
                        />
                    </div>
                </span>
                <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                    <Label id={fillLabelId} editorId={fillId} editorRef={fillRef}>
                        Fill Mode
                    </Label>
                    <div className="k-form-field-wrap">
                        <DropDownList
                            data={fillModes}
                            value={props.fillMode}
                            onChange={handleFillModeChange}
                            style={{ minWidth: 120 }}
                            id={fillId}
                            ariaLabelledBy={fillLabelId}
                            ref={fillRef}
                        />
                    </div>
                </span>
                <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                    <Label id={roundLabelId} editorId={roundId} editorRef={roundRef}>
                        Border Radius
                    </Label>
                    <div className="k-form-field-wrap">
                        <DropDownList
                            data={roundedOptions}
                            value={props.rounded}
                            onChange={handleRoundedChange}
                            style={{ minWidth: 120 }}
                            id={roundId}
                            ariaLabelledBy={roundLabelId}
                            ref={roundRef}
                        />
                    </div>
                </span>
            </div>
        </div>
    );
};

StyleConfigurator.defaultProps = {
    sizes: ['small', 'medium', 'large'],
    onSizeChange: () => {
        /* noop */
    },

    fillModes: ['solid', 'outline', 'flat'],
    onFillModeChange: () => {
        /* noop */
    },

    roundedOptions: ['small', 'medium', 'large', 'full'],
    onRoundedChange: () => {
        /* noop */
    }
};
