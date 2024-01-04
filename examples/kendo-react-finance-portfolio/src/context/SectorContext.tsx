import * as React from 'react';

export enum SECTOR {
    HEALTHCARE,
    TECHNOLOGY,
}

export interface SectorContextType {
    sector: SECTOR,
    onSectorChange?: any
}

export const SectorContext = React.createContext<SectorContextType>({
    sector: SECTOR.TECHNOLOGY
});
