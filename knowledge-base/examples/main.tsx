import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './_app';
import ErrorPage from './_error';
import routes from './routes';

const init = async () => {
    const allRoutes = await routes();
    console.log("allRoutes=", allRoutes);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Index routes={allRoutes} />,
            errorElement: <ErrorPage />
        },
        ...allRoutes
    ]);

    const root = ReactDOM.createRoot(
        document.querySelector('my-app') as HTMLElement
    );

    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    );
};

init();