import { Label } from '@progress/kendo-react-labels';
import * as React from 'react';

interface ChooserProps {
    value: string;
    label: string;
    options: string[];
    onChange: (args: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Chooser = (props: ChooserProps) => {
    return (
        <div className="col-xs-12 col-sm-12 example-col">
            <Label>
                {props.label}:
                <select style={{ width: 250, marginLeft: 10 }} value={props.value} onChange={props.onChange}>
                    {props.options.map((option, key) => (
                        <option key={key} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </Label>
        </div>
    );
};
