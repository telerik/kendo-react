import { createContext } from 'react';

const DataContext = createContext({
    enterEdit: () => {},
    remove: () => {},
    add: () => {},
    discard: () => {},
    update: () => {},
    cancel: () => {}
});

export default DataContext;