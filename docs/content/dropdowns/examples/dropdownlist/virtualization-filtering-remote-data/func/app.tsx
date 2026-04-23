import * as React from 'react';
import {
    DropDownList,
    DropDownListChangeEvent,
    DropDownListFilterChangeEvent,
    DropDownListPageChangeEvent
} from '@progress/kendo-react-dropdowns';

interface Item {
    ContactName: string;
    CustomerID?: number | null;
}

const textField = 'ContactName';
const keyField = 'CustomerID';
const label = 'Select customer';
const emptyItem: Item = { [textField]: 'loading ...' };
const pageSize = 16;

const loadingData: Item[] = [];
while (loadingData.length < pageSize) {
    loadingData.push({ ...emptyItem });
}

const baseUrl = `https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/`;
const init = { method: 'GET', accept: 'application/json', headers: [] };

const App = () => {
    const dataCaching = React.useRef<Item[]>([]);
    const pendingRequest = React.useRef<any>(undefined);
    const requestStarted = React.useRef(false);

    const [data, setData] = React.useState<Item[]>([]);
    const [value, setValue] = React.useState(null);
    const [total, setTotal] = React.useState(0);
    const [filter, setFilter] = React.useState('');

    const skipRef = React.useRef(0);

    const resetCach = () => {
        dataCaching.current.length = 0;
    };

    const requestData = React.useCallback((skip: number, filter: string) => {
        if (requestStarted.current) {
            clearTimeout(pendingRequest.current);
            pendingRequest.current = setTimeout(() => {
                requestData(skip, filter);
            }, 50);
            return;
        }

        const url =
            baseUrl + `Customers?$filter=contains(ContactName,'${filter}')&$skip=${skip}&$top=${pageSize}&$count=true`;

        requestStarted.current = true;
        fetch(url, init)
            .then((response) => response.json())
            .then((json) => {
                const total = json['@odata.count'];
                const items: Item[] = [];
                json.value.forEach((element, index) => {
                    const { CustomerID, ContactName } = element;
                    const item: Item = { [keyField]: CustomerID, [textField]: ContactName };
                    items.push(item);
                    dataCaching.current[index + skip] = item;
                });

                if (skip === skipRef.current) {
                    setData(items);
                    setTotal(total);
                }
                requestStarted.current = false;
            });
    }, []);

    React.useEffect(() => {
        requestData(0, filter);
        return () => {
            resetCach();
        };
    }, [filter, requestData]);

    const onFilterChange = React.useCallback(
        (event: DropDownListFilterChangeEvent) => {
            const filter = event.filter.value;

            resetCach();
            requestData(0, filter);

            setData(loadingData);
            skipRef.current = 0;
            setFilter(filter);
        },
        [requestData]
    );

    const shouldRequestData = React.useCallback((skip) => {
        for (let i = 0; i < pageSize; i++) {
            if (!dataCaching.current[skip + i]) {
                return true;
            }
        }
        return false;
    }, []);

    const getCachedData = React.useCallback((skip) => {
        const data: Item[] = [];
        for (let i = 0; i < pageSize; i++) {
            data.push(dataCaching.current[i + skip] || { ...emptyItem });
        }
        return data;
    }, []);

    const pageChange = React.useCallback(
        (event: DropDownListPageChangeEvent) => {
            const newSkip = event.page.skip;

            if (shouldRequestData(newSkip)) {
                requestData(newSkip, filter);
            }

            const data = getCachedData(newSkip);

            setData(data);
            skipRef.current = newSkip;
        },
        [filter, getCachedData, requestData, shouldRequestData]
    );

    const onChange = React.useCallback((event: DropDownListChangeEvent) => {
        const value = event.target.value;
        if (value && value[textField] === emptyItem[textField]) {
            return;
        }
        setValue(value);
    }, []);

    return (
        <div>
            <DropDownList
                data={data}
                value={value}
                onChange={onChange}
                dataItemKey={keyField}
                textField={textField}
                label={label}
                filterable={true}
                onFilterChange={onFilterChange}
                virtual={{
                    pageSize: pageSize,
                    skip: skipRef.current,
                    total: total
                }}
                onPageChange={pageChange}
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default App;
