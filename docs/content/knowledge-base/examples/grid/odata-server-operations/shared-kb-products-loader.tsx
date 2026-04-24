import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { toODataString } from '@progress/kendo-data-query';

type ProductsLoaderProps = {
    dataState: any;
    onDataReceived: (p: { data: any[]; total: number }) => void;
};

export const ProductsLoader = (props: ProductsLoaderProps) => {
    const baseUrl = 'https://demos.telerik.com/service/v2/odata/Products?$count=true&';
    const init = useMemo(() => ({ method: 'GET', accept: 'application/json', headers: {} }), []);
    const lastSuccess = useRef<string>('');
    const pendingKey = useRef<string>('');
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        const query = toODataString(props.dataState || {});
        if (pendingKey.current || query === lastSuccess.current) return;
        pendingKey.current = query;
        setIsPending(true);

        let alive = true;
        fetch(baseUrl + pendingKey.current, init)
            .then((r) => r.json())
            .then((json) => {
                if (!alive) return;
                lastSuccess.current = pendingKey.current;
                pendingKey.current = '';
                if (toODataString(props.dataState || {}) === lastSuccess.current) {
                    props.onDataReceived({ data: json.value, total: json['@odata.count'] });
                }
            })
            .finally(() => {
                if (alive) setIsPending(false);
            });

        return () => {
            alive = false;
        };
    }, [props.dataState, props.onDataReceived, init, baseUrl]);

    return isPending ? <LoadingPanel /> : null;
};

const LoadingPanel = () => {
    const loadingPanel = (
        <div className="k-loading-mask">
            <span className="k-loading-text">Loading</span>
            <div className="k-loading-image"></div>
            <div className="k-loading-color"></div>
        </div>
    );

    const host = typeof document !== 'undefined' ? document.querySelector('.k-grid-content') : null;
    return host ? createPortal(loadingPanel, host) : loadingPanel;
};
