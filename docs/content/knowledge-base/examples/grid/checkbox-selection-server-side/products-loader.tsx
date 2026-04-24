import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { toODataString } from '@progress/kendo-data-query';

type ProductsLoaderProps = {
    dataState: any;
    onDataRecieved: (p: { data: any[]; total: number }) => void;
};

export const ProductsLoader = (props: ProductsLoaderProps) => {
    const baseUrl = 'https://demos.telerik.com/service/v2/odata/Products?$count=true&';

    const init = useMemo(() => ({ method: 'GET', headers: { Accept: 'application/json' } }), []);

    const lastSuccess = useRef<string>('');
    const pendingKey = useRef<string>('');
    const [isPending, setIsPending] = useState<boolean>(false);
    const [host, setHost] = useState<Element | null>(null);

    useEffect(() => {
        setHost(typeof document !== 'undefined' ? document.querySelector('.k-grid-content') : null);
    }, []);

    useEffect(() => {
        const dataState = props.dataState || {};
        const query = toODataString(dataState);

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
                    props.onDataRecieved({
                        data: json.value,
                        total: json['@odata.count']
                    });
                }
            })
            .finally(() => {
                if (alive) setIsPending(false);
            });

        return () => {
            alive = false;
        };
    }, [props.dataState, props.onDataRecieved, baseUrl, init]);

    return isPending ? <LoadingPanel host={host} /> : null;
};

const LoadingPanel = ({ host }: { host: Element | null }) => {
    const loadingPanel = (
        <div className="k-loading-mask">
            <span className="k-loading-text">Loading</span>
            <div className="k-loading-image"></div>
            <div className="k-loading-color"></div>
        </div>
    );
    return host ? createPortal(loadingPanel, host) : loadingPanel;
};
