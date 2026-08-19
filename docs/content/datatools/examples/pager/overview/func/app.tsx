import * as React from 'react';
import './styles.css';
import { Pager, PageChangeEvent } from '@progress/kendo-react-data-tools';
import { destinations, Destination } from './destinations';

const PAGE_SIZE = 8;
const CONTENT_ID = 'content-1';

const App = () => {
    const [skip, setSkip] = React.useState(0);

    const pagedDestinations: Destination[] = destinations.slice(skip, skip + PAGE_SIZE);

    const handlePageChange = (event: PageChangeEvent) => {
        setSkip(event.skip);
    };

    return (
        <div className="wrapper">
            <span className="title">Top European Destinations</span>
            <div className="content-container" id={CONTENT_ID}>
                {pagedDestinations.map((destination) => (
                    <div key={destination.destinationId} className="destination">
                        <img
                            src={`https://demos.telerik.com/kendo-react-ui/assets/pager/destinations/${destination.destinationId}.png`}
                            alt={destination.destinationName}
                            width={160}
                            height={133}
                        />
                        <h3>{destination.destinationName}</h3>
                        <p>{destination.destinationText}</p>
                    </div>
                ))}
            </div>
            <Pager
                aria-controls={CONTENT_ID}
                style={{ width: '100%' }}
                skip={skip}
                take={PAGE_SIZE}
                total={destinations.length}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default App;
