import { useMemo } from 'react';
import type { ReactNode } from 'react';
import { IconsContext } from '@progress/kendo-react-common';
import {
    globalCaretAltDownIcon,
    globalCaretAltLeftIcon,
    globalCaretAltRightIcon,
    globalCaretAltToLeftIcon,
    globalCaretAltToRightIcon,
    globalCaretAltUpIcon,
    globalFilterClearIcon,
    globalFilterIcon
} from '../icons/customIcons';

const globalKendoIconOverrides = {
    'caret-alt-right': globalCaretAltRightIcon,
    'caret-alt-left': globalCaretAltLeftIcon,
    'caret-alt-up': globalCaretAltUpIcon,
    'caret-alt-down': globalCaretAltDownIcon,
    'caret-alt-to-right': globalCaretAltToRightIcon,
    'caret-alt-to-left': globalCaretAltToLeftIcon,
    filter: globalFilterIcon,
    'filter-clear': globalFilterClearIcon
} as const;

export function IconsProvider({ children }: Readonly<{ children: ReactNode }>) {
    const value = useMemo(() => ({ type: 'svg' as const, icons: globalKendoIconOverrides }), []);

    return <IconsContext.Provider value={value}>{children}</IconsContext.Provider>;
}
