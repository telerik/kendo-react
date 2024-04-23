import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError() as { statusText: string; message: string };
    console.error(error);

    return (
        <div id="error-page">
            <h1>Error</h1>
            <p>
                <code>{error.statusText || error.message}</code>
            </p>
        </div>
    );
}