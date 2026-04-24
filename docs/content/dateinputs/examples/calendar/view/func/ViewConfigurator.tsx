import * as React from 'react';

import { Label } from '@progress/kendo-react-labels';
import { ActiveView } from '@progress/kendo-react-dateinputs';

import { RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';

interface ViewConfiguratorProps {
    bottomView?: ActiveView;
    bottomViews?: Array<ActiveView>;
    onBottomViewChange?: (event: RadioButtonChangeEvent) => void;

    topView?: ActiveView;
    topViews?: Array<ActiveView>;
    onTopViewChange?: (event: RadioButtonChangeEvent) => void;

    children?: React.ReactNode;
}

export const ViewConfigurator = (props: ViewConfiguratorProps) => {
    const { bottomView, bottomViews, onBottomViewChange, topView, topViews, onTopViewChange } = {
        ...ViewConfigurator.defaultProps,
        ...props
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
                    gap: '5rem'
                }}
            >
                <div>
                    Bottom View
                    {bottomViews.map((view) => (
                        <>
                            <br />
                            <RadioButton
                                id={`bottom${view}`}
                                name="bottomView"
                                value={view}
                                defaultChecked={bottomView === view}
                                onChange={onBottomViewChange}
                            />
                            <Label editorId={`bottom${view}`} className="k-radio-label">
                                &nbsp;{view}
                            </Label>
                        </>
                    ))}
                </div>
                <div>
                    Top View
                    {topViews.map((view) => (
                        <>
                            <br />
                            <RadioButton
                                id={view}
                                name="topView"
                                value={view}
                                defaultChecked={topView === view}
                                onChange={onTopViewChange}
                            />
                            <Label editorId={view} className="k-radio-label">
                                &nbsp;{view}
                            </Label>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

ViewConfigurator.defaultProps = {
    bottomViews: ['month', 'year', 'decade', 'century'],
    topViews: ['month', 'year', 'decade', 'century']
};
