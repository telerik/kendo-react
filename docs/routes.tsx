import { RouteObject } from 'react-router-dom';

const pages: Record<string, any> = import.meta.glob('/**/app.(j|t)sx', {
    import: 'default',
    eager: false
});

const routes = async () => {
    const result: RouteObject[] = [];

    for (const path of Object.keys(pages)) {
        const fileName = path.match(/(.*)\/app\.(j|t)sx$/)?.[0];
        if (!fileName) {
            continue;
        }

        const normalizedPathName = fileName.replace(/\/app.(j|t)sx/, '');
        result.push({
            path: normalizedPathName,
            lazy: async () => ({
                Component: await pages[path]()
            })
        });
    }

    return result;
};

export default routes;