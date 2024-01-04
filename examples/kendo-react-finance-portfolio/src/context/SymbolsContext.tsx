import * as React from 'react';
import { SECTOR } from './SectorContext';

export interface SymbolsContextType {
    symbols: any,
    onSymbolsChange?: any;
    onSelectedSymbolsChange?: any;
    onSymbolsRemove?: any;
    selectedSymbols?: any;
}

export const SymbolsContext = React.createContext<SymbolsContextType>({
    selectedSymbols: [],
    symbols: {
        [SECTOR.HEALTHCARE]: [],
        [SECTOR.TECHNOLOGY]: []
    }
})