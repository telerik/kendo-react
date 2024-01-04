import * as React from 'react';
import { NavigationRow, Navigation } from '../components/Navigation';
import { HeatmapView } from '../components/HeatmapView';

export const HeatmapPage = () => {
    return (
        <>
            <div className="container my-3">
                <NavigationRow className="row justify-content-center">
                    <Navigation className="col-24 flex-grow-1 text-center" />
                </NavigationRow>
            </div>
            <div className="container">
                <HeatmapView />
            </div>
        </>
    )
}