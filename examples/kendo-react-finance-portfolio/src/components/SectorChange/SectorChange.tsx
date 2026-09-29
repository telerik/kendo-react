import * as React from 'react';
import { classNames } from '@progress/kendo-react-common';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { SECTOR, SectorContext } from '../../context/SectorContext';
import styles from './sector-change.module.scss';

export interface ChangeSectorProps {
    className?: string;
}

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
        <div className={classNames(styles.sectorField, props.className)}>
            <span className={styles.sectorLabel}>Sector</span>
            <DropDownList
                textField="name"
                style={{ width: 160 }}
                value={data.find(s => s.sector === sector)}
                onChange={handleChange}
                data={data}
                aria-label="Sector"
            />
        </div>
    )
}