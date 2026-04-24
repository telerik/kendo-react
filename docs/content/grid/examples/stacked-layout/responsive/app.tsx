import * as React from 'react';
import { Grid, GridColumn as Column, GridDataLayoutMode } from '@progress/kendo-react-grid';
import { employees } from './data';
import './styles.css';

const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = React.useState<boolean>(() => window.matchMedia(query).matches);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const handler = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);

    return matches;
};

const App = () => {
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isMobile = useMediaQuery('(max-width: 480px)');

    const dataLayoutMode: GridDataLayoutMode = isMobile || isTablet ? 'stacked' : 'columns';

    return (
        <div className="responsive-grid-container">
            <div className="layout-indicator">
                Current layout: <strong>{dataLayoutMode}</strong>
                <span className="hint">(Use the viewport size buttons above to see the layout change)</span>
            </div>
            <Grid
                data={employees}
                dataLayoutMode={dataLayoutMode}
                stackedLayoutSettings={{ cols: isMobile ? 1 : 3 }}
                style={{ height: '400px' }}
            >
                <Column field="fullName" title="Name" />
                <Column field="jobTitle" title="Title" />
                <Column field="country" title="Country" />
                <Column field="isOnline" title="Status" />
                <Column field="budget" title="Budget" format="{0:c}" />
            </Grid>
        </div>
    );
};

export default App;
