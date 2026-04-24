import * as React from 'react';

import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { checkIcon } from '@progress/kendo-svg-icons';

export const MusicCardComponent = () => {
    const [added, setAdded] = React.useState(false);

    const handleClick = () => {
        setAdded(!added);
    };
    return (
        <div className="k-card k-card-vertical">
            <img
                src="https://demos.telerik.com/kendo-ui/content/shared/images/photos/4.jpg"
                alt="KendoReact Buttons Grass image"
                className="k-card-media"
            />
            <div className="k-card-body">
                <FloatingActionButton
                    text={'Add to Queue'}
                    svgIcon={added ? checkIcon : undefined}
                    align={{ horizontal: 'end', vertical: 'top' }}
                    alignOffset={{ y: 175 }}
                    positionMode="absolute"
                    onClick={handleClick}
                />
                <h2 className="k-card-title">Summer Mix 2020</h2>
                <p className="k-card-subtitle">DJ Peril</p>
            </div>
        </div>
    );
};
