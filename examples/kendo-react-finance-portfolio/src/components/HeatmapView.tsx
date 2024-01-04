import React from 'react';
import { dataService } from '../services';
import $ from 'jquery';
import '@progress/kendo-ui';
import { Tooltip } from '@progress/kendo-react-tooltip';

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
    const fetchData = React.useCallback(async () => {
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
        const TreeData: TreeDataItem[] = [
            {
                name: 'Market\u00a0Capitalization', isParentElement: true ,value: 1, items: [
                    { value: 1, name: 'Price\u00a0Up', isParentElement: true, items: prizeUpItems },
                    { value: 1, name: 'Price\u00a0Down', isParentElement: true, items: prizeDownItems }
                ]
            }
        ]
        const setData = (options: any) => {
            options.success(TreeData)
        }

        const renderItem = (props: any) => {
            const title = JSON.stringify(props.dataItem);
            return `<span title=${title}>${props.text}<br/>${props.dataItem.change}%</span>`;
        }

        $("#heatmap").kendoTreeMap({
            template: renderItem,
            dataSource: new kendo.data.HierarchicalDataSource({
                transport: {
                    read: setData
                },
                schema: {
                    model: {
                        children: "items"
                    }
                }
            }),
            valueField: "value",
            textField: "name",
            colors: [["#00AD51", "#00EF81"], ["#FF0000", "#FF8F8F"]]
        })
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

    React.useEffect(() => { fetchData() }, [fetchData]);
    
    return (
        <div>
            <Tooltip showCallout={false} content={toolTipTemplate}>
                <div id='heatmap' style={{ height: 600, marginBottom: 50 }}></div>
            </Tooltip>
        </div>
    )
}