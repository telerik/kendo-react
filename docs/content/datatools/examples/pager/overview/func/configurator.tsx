import * as React from 'react';

import { Label } from '@progress/kendo-react-labels';
import { Checkbox, NumericTextBox, RadioButton, TextBox } from '@progress/kendo-react-inputs';

export const DemoConfigurator = (props: any) => {
    const values = props.values;
    return (
        <div className="example-config row">
            <div className="col-md-6">
                <dl>
                    <dt>Pager type:</dt>
                    <dd>
                        <RadioButton
                            name="pager"
                            id="numeric"
                            value="numeric"
                            checked={values.type === 'numeric'}
                            onChange={(event) => props.onChange({ type: event.value })}
                        />
                        <Label
                            style={{ margin: '7px 3em 7px 3px', lineHeight: '1.2' }}
                            className="k-radio-label"
                            editorId="numeric"
                        >
                            Numeric&nbsp;
                        </Label>

                        <RadioButton
                            name="pager"
                            id="input"
                            value="input"
                            checked={values.type === 'input'}
                            onChange={(event) => props.onChange({ type: event.value })}
                        />
                        <Label
                            style={{ margin: '7px 3em 7px 3px', lineHeight: '1.2' }}
                            className="k-radio-label"
                            editorId="input"
                        >
                            Input&nbsp;
                        </Label>
                    </dd>
                </dl>
                <dl>
                    <dt>Max. number of buttons:</dt>
                    <dd>
                        <NumericTextBox
                            style={{ width: '200px' }}
                            value={values.buttonCount}
                            onChange={(event) => props.onChange({ buttonCount: Number(event.value) })}
                        />
                    </dd>
                </dl>
            </div>
            <div className="col-md-6 row">
                <div className="col-md-12">
                    <Checkbox
                        checked={values.info}
                        id="showInfo"
                        onChange={(event) => props.onChange({ info: event.target.value })}
                        label="Show info"
                    />
                </div>

                <div className="col-md-12">
                    <Checkbox
                        checked={values.pageSizes}
                        id="pageSize"
                        onChange={(event) => props.onChange({ pageSizes: event.target.value })}
                        label="Show page sizes"
                    />
                </div>
                <div className="col-md-12">
                    <Checkbox
                        checked={values.previousNext}
                        id="previousNext"
                        onChange={(event) => props.onChange({ previousNext: event.target.value })}
                        label="Show previous / next buttons"
                    />
                </div>
            </div>
        </div>
    );
};
