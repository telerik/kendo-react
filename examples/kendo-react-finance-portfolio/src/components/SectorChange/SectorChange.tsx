import * as React from 'react';
import { classNames } from '@progress/kendo-react-common';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { SECTOR, SectorContext } from '../../context/SectorContext';

export interface ChangeSectorProps {
    className?: string;
}


const customValueRender = (el: any, value: any) => (
    <el.type
        {...el.props}
        className={classNames(el.props.className, "text-left pl-0")}
    >
        {value
            ? (<>
                <span className="text-left">Sector: <strong>{value.name}</strong></span></>)
            : null}

    </el.type>)

export const ChangeSector = (props: ChangeSectorProps) => {
    const { sector, onSectorChange } = React.useContext(SectorContext);

    const data = React.useMemo(() => [
        { name: 'Healthcare', sector: SECTOR.HEALTHCARE },
        { name: "Technology", sector: SECTOR.TECHNOLOGY }
    ], [])

    const handleChange = React.useCallback(
        (event: any) => {
            if (onSectorChange) {
                onSectorChange.call(undefined, event.target.value.sector)
            }
        },
        [onSectorChange]
    )

    return (
        <div className={classNames(props.className)}>
            <DropDownList
                textField="name"
                style={{
                    border: 'none',
                    width: 'auto'
                }}
                fillMode={null}
                value={data.find(s => s.sector === sector)}
                onChange={handleChange}
                data={data}
                valueRender={customValueRender}
            />
        </div>
    )
}