import React from 'react';
import { dataService } from '../services';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import $ from 'jquery';
import '@progress/kendo-ui';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { getKendoColor } from '../styles/tokens';
import { DataState } from './DataState/DataState';
declare const window: any;

type HeatMapItemType = {
    name : string;
    value? : number;
    change? : string;
    isParentElement? : boolean;
}

type TooltipTemplateProps = {
    title: string,
    target: HTMLElement,
}

type TreeDataItem = {
    name: string;
    value: number;
    items: TreeDataItem[];
    isParentElement?: boolean;
}

export const HeatmapView = () => {
    const [treeData, setTreeData] = React.useState<any[]>([]);
    const [status, setStatus] = React.useState<'loading' | 'ready' | 'error'>('loading');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [retryKey, setRetryKey] = React.useState(0);
    const fetchData = React.useCallback(async () => {
        setStatus('loading');
        setErrorMessage('');
        try {
            const newData = await dataService.getAllSymbols();
        const prizeUpItemsCollection = newData.map((item: any) => {
            if (item.change_pct.indexOf('-') !== 0) {
                let newItem = { value: 0, name: '', change: '' }
                newItem.value = parseInt(item.market_cap);
                newItem.name = item.symbol;
                newItem.change = item.change_pct;
                return newItem
            }
            return null;
        })
        const prizeDownItemsCollection = newData.map((item: any) => {
            if (item.change_pct.indexOf('-') === 0) {
                let newItem = { value: 0, name: '', change: '' }
                newItem.value = parseInt(item.market_cap);
                newItem.name = item.symbol;
                newItem.change = item.change_pct;
                return newItem
            }
            return null;
        })
        const prizeUpItems = prizeUpItemsCollection.filter((item: any) => item)
        const prizeDownItems = prizeDownItemsCollection.filter((item: any) => item)
        const TreeData: any[] = [
            {
                name: 'Market\u00a0Capitalization', isParentElement: true ,value: 1, items: [
                    { value: 1, name: 'Price\u00a0Up', isParentElement: true, items: prizeUpItems },
                    { value: 1, name: 'Price\u00a0Down', isParentElement: true, items: prizeDownItems }
                ]
            }
        ]
            setTreeData(TreeData);
            setStatus('ready');
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'The market heatmap could not be loaded.');
        }
    }, []);
    const nFormatter = (num: number) => {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
    }

    const toolTipTemplate = (props: TooltipTemplateProps) => {
        
        const { title } = props;
        const item: HeatMapItemType = JSON.parse(title);
        return (
            item.isParentElement ? 
            <span>{item.name}</span>
            :
            <span>
                <span>Company: {item.name}</span>
                {item.change && <span><br />Change: {item.change!}%</span>}
                {item.value && <span><br />Market cap: {nFormatter(item.value!)}</span>}
            </span> 
        )   
    }

    React.useEffect(() => { fetchData() }, [fetchData, retryKey]);

    React.useEffect(() => {
        if (!treeData.length) return;
        const renderItem = (props: any) => {
            const title = JSON.stringify(props.dataItem);
            return `<span title=${title}>${props.text}<br/>${props.dataItem.change}%</span>`;
        };
        window.$("#heatmap").kendoTreeMap({
            template: renderItem,
            dataSource: new kendo.data.HierarchicalDataSource({ data: treeData }),
            valueField: "value",
            textField: "name",
            colors: [
                [getKendoColor('success'), getKendoColor('success-subtle')],
                [getKendoColor('error'), getKendoColor('error-subtle')]
            ]
        });
    }, [treeData]);
    
    return (
        <div>
            {status === 'loading' && <DataState kind="loading" title="Loading market heatmap" message="Aggregating the latest sector movements." />}
            {status === 'error' && (
                <DataState
                    kind="error"
                    title="Heatmap unavailable"
                    message={errorMessage}
                    actionLabel="Try again"
                    onAction={() => setRetryKey((key) => key + 1)}
                />
            )}
            {status === 'ready' && treeData[0]?.items.every((item: TreeDataItem) => !item.items?.length) && (
                <DataState kind="empty" title="No market movements" message="There is no market movement data to visualize right now." />
            )}
            {status === 'ready' && treeData[0]?.items.some((item: TreeDataItem) => Boolean(item.items?.length)) && (
                <Tooltip showCallout={false} content={toolTipTemplate}>
                    <div id='heatmap' style={{ height: 600, marginBottom: 50 }}></div>
                </Tooltip>
            )}
        </div>
    )
}