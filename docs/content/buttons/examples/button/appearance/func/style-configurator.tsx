import * as React from 'react';

import { Label } from '@progress/kendo-react-labels';
import { DropDownList, DropDownListChangeEvent, ListItemProps } from '@progress/kendo-react-dropdowns';

interface StyleConfiguratorProps {
    size?: 'small' | 'medium' | 'large';
    sizes?: Array<'small' | 'medium' | 'large'>;
    onSizeChange?: (size: 'small' | 'medium' | 'large') => void;

    themeColor?:
        | 'base'
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'info'
        | 'success'
        | 'warning'
        | 'dark'
        | 'light'
        | 'inverse';
    themeColors?: Array<
        'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'dark' | 'light' | 'inverse'
    >;
    onThemeColorChange?: (
        themeColor:
            | 'base'
            | 'primary'
            | 'secondary'
            | 'tertiary'
            | 'info'
            | 'success'
            | 'warning'
            | 'dark'
            | 'light'
            | 'inverse'
    ) => void;

    fillMode?: 'solid' | 'outline' | 'flat' | 'link' | 'clear';
    fillModes?: Array<'solid' | 'outline' | 'flat' | 'link' | 'clear'>;
    onFillModeChange?: (fillMode: 'solid' | 'outline' | 'flat' | 'link') => void;

    rounded?: 'small' | 'medium' | 'large' | 'full';
    roundedOptions?: Array<'small' | 'medium' | 'large' | 'full'>;
    onRoundedChange?: (rounded: 'small' | 'medium' | 'large' | 'full') => void;
}

export const StyleConfigurator = (props: StyleConfiguratorProps) => {
    const {
        sizes,
        onSizeChange,

        themeColors,
        onThemeColorChange,

        fillModes,
        onFillModeChange,

        roundedOptions,
        onRoundedChange
    } = { ...StyleConfigurator.defaultProps, ...props };

    const handleSizeChange = (event: DropDownListChangeEvent) => {
        onSizeChange(event.value);
    };

    const handleThemeColorChange = (event: DropDownListChangeEvent) => {
        onThemeColorChange(event.value);
    };

    const handleFillModeChange = (event: DropDownListChangeEvent) => {
        onFillModeChange(event.value);
    };

    const handleRoundedChange = (event: DropDownListChangeEvent) => {
        onRoundedChange(event.value);
    };

    return (
        <div style={{ margin: '-30px -30px 30px -30px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span className="k-color-primary" style={{ textTransform: 'uppercase', padding: '4px 0' }}>
                    Configurator
                </span>
            </div>
            <div
                className="example-config"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                }}
            >
                {props.size !== undefined && (
                    <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                        <Label>
                            Size
                            <div className="k-form-field-wrap">
                                <DropDownList
                                    data={sizes}
                                    value={props.size}
                                    onChange={handleSizeChange}
                                    style={{ minWidth: 120 }}
                                />
                            </div>
                        </Label>
                    </span>
                )}
                {props.themeColor !== undefined && (
                    <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                        <Label>
                            Theme Color
                            <div className="k-form-field-wrap">
                                <DropDownList
                                    data={themeColors}
                                    value={props.themeColor}
                                    onChange={handleThemeColorChange}
                                    itemRender={ColorItemRender}
                                    style={{ minWidth: 120 }}
                                />
                            </div>
                        </Label>
                    </span>
                )}
                {props.fillMode !== undefined && (
                    <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                        <Label>
                            Fill Mode
                            <div className="k-form-field-wrap">
                                <DropDownList
                                    data={fillModes}
                                    value={props.fillMode}
                                    onChange={handleFillModeChange}
                                    style={{ minWidth: 120 }}
                                />
                            </div>
                        </Label>
                    </span>
                )}
                {props.rounded !== undefined && (
                    <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                        <Label>
                            Border Radius
                            <div className="k-form-field-wrap">
                                <DropDownList
                                    data={roundedOptions}
                                    value={props.rounded}
                                    onChange={handleRoundedChange}
                                    style={{ minWidth: 120 }}
                                />
                            </div>
                        </Label>
                    </span>
                )}
            </div>
        </div>
    );
};

const ColorItemRender = (li: React.ReactElement<HTMLLIElement>, itemProps: ListItemProps) => {
    const itemChildren = (
        <React.Fragment>
            {li.props.children as any}{' '}
            <span
                style={{
                    width: 16,
                    height: 16,
                    background: 'currentColor',
                    display: 'inline-block'
                }}
                className={`k-color-${itemProps.dataItem}`}
            />
        </React.Fragment>
    );
    return React.cloneElement(
        li,
        {
            ...li.props,
            style: {
                ...li.props.style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }
        },
        itemChildren
    );
};

StyleConfigurator.defaultProps = {
    sizes: ['small', 'medium', 'large'],
    onSizeChange: () => {
        /* noop */
    },

    themeColors: [
        'base',
        'primary',
        'secondary',
        'tertiary',
        'info',
        'success',
        'warning',
        'error',
        'dark',
        'light',
        'inverse'
    ],
    onThemeColorChange: () => {
        /* noop */
    },

    fillModes: ['solid', 'outline', 'flat', 'link', 'clear'],
    onFillModeChange: () => {
        /* noop */
    },

    roundedOptions: ['small', 'medium', 'large', 'full'],
    onRoundedChange: () => {
        /* noop */
    }
};
