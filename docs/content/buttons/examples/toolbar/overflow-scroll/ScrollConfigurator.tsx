import * as React from 'react';
import { Label } from '@progress/kendo-react-labels';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

interface ScrollConfiguratorProps {
    scrollButtons?: 'auto' | 'visible' | 'hidden';
    scrollButtonsOptions?: Array<'auto' | 'visible' | 'hidden'>;
    onScrollButtonsChange?: (scrollButtons: 'auto' | 'visible' | 'hidden') => void;

    scrollButtonsPosition?: 'split' | 'start' | 'end';
    scrollButtonsPositionOptions?: Array<'split' | 'start' | 'end'>;
    onScrollButtonsPosition?: (scrollButtonsPosition: 'split' | 'start' | 'end') => void;

    buttonScrollSpeed?: number;
    buttonScrollSpeedOptions?: Array<number>;
    onButtonScrollSpeed?: (buttonScrollSpeed: number) => void;
}

export const ScrollConfigurator = (props: ScrollConfiguratorProps) => {
    const {
        scrollButtonsOptions = ['auto', 'visible', 'hidden'],
        onScrollButtonsChange = () => {
            /* noop */
        },

        scrollButtonsPositionOptions = ['split', 'start', 'end'],
        onScrollButtonsPosition = () => {
            /* noop */
        },

        buttonScrollSpeedOptions = [100, 300, 500],
        onButtonScrollSpeed = () => {
            /* noop */
        }
    } = {
        ...props
    };

    const handleScrollButtonsChange = (event: DropDownListChangeEvent) => {
        onScrollButtonsChange(event.value);
    };
    const handleScrollButtonsPosition = (event: DropDownListChangeEvent) => {
        onScrollButtonsPosition(event.value);
    };
    const handleButtonScrollSpeed = (event: DropDownListChangeEvent) => {
        onButtonScrollSpeed(event.value);
    };
    return (
        <div
            style={{
                margin: '-30px -30px 30px -30px'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <span
                    className="k-color-primary"
                    style={{
                        textTransform: 'uppercase',
                        padding: '4px 0'
                    }}
                >
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
                {props.scrollButtons !== undefined && (
                    <span
                        className="k-form-field"
                        style={{
                            flex: '1 1 0px'
                        }}
                    >
                        <Label>
                            SCROLL BUTTONS VISIBILITY
                            <div className="k-form-field-wrap">
                                <DropDownList
                                    data={scrollButtonsOptions}
                                    value={props.scrollButtons}
                                    onChange={handleScrollButtonsChange}
                                    style={{
                                        minWidth: 120
                                    }}
                                />
                            </div>
                        </Label>
                    </span>
                )}
                {props.scrollButtonsPosition !== undefined && (
                    <span
                        className="k-form-field"
                        style={{
                            flex: '1 1 0px'
                        }}
                    >
                        <Label>
                            SCROLL BUTTONS POSITION
                            <div className="k-form-field-wrap">
                                <DropDownList
                                    data={scrollButtonsPositionOptions}
                                    value={props.scrollButtonsPosition}
                                    onChange={handleScrollButtonsPosition}
                                    style={{
                                        minWidth: 120
                                    }}
                                />
                            </div>
                        </Label>
                    </span>
                )}
                {props.buttonScrollSpeed !== undefined && (
                    <span
                        className="k-form-field"
                        style={{
                            flex: '1 1 0px'
                        }}
                    >
                        <Label>
                            BUTTONS SCROLL SPEED
                            <div className="k-form-field-wrap">
                                <DropDownList
                                    data={buttonScrollSpeedOptions}
                                    value={props.buttonScrollSpeed}
                                    onChange={handleButtonScrollSpeed}
                                    style={{
                                        minWidth: 120
                                    }}
                                />
                            </div>
                        </Label>
                    </span>
                )}
            </div>
        </div>
    );
};
