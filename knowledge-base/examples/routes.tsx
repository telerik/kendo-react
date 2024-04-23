import { RouteObject } from 'react-router-dom';

const pages: Record<string, any> = import.meta.glob('/**/app.jsx', {
    //const pages: Record<string, any> = import.meta.glob('./editor/**/app.jsx', {
    import: 'default',
    eager: false
});

console.log("pages= ", pages);
const routes = async () => {
    const result: RouteObject[] = [];

    for (const path of Object.keys(pages)) {
        const fileName = path.match(/(.*)\/app\.jsx$/)?.[0];
        //const fileName = path.match(/editor\/(.*)\/app\.jsx$/)?.[0];
        //const fileName = path.match(/editor\/(.*)\.jsx$/)?.[0];
        // const fileName = path.match('editor/attach-events')?.[0];
        if (!fileName) {
            continue;
        }

        console.log("fileName= ", fileName);
        const normalizedPathName = fileName.replace(/\/app.jsx/, '');
        result.push({
            path: normalizedPathName,
            lazy: async () => ({
                Component: await pages[path]()
            })
        });
    }

    console.log("result= ", result);    
    return result;
};

export default routes;