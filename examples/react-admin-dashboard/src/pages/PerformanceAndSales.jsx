import * as React from 'react';
import { TileLayout } from '@progress/kendo-react-layout';
import { SalesRevenueChart } from '../components/sales-and-performance/SalesRevenueChart.jsx'
import { ConversionsChart } from '../components/sales-and-performance/ConversionsChart.jsx'
import { PerformanceChart}  from '../components/sales-and-performance/PerformanceChart.jsx'
import { TopFiveCitiesGlobal } from '../components/sales-and-performance/TopFiveCitiesGlobal.jsx';
import { CostBreakdownChart } from '../components/sales-and-performance/CostBreakdownChart.jsx';

export const PerformanceAndSales = () => {

   const [data, setData] = React.useState([
     {
       col: 1,
       colSpan: 6,
       rowSpan: 2,
     },
     {
       col: 1,
       colSpan: 4,
       rowSpan: 2,
     },
     {
       col: 1,
       colSpan: 3,
       rowSpan: 1,
     },
     {
       col: 5,
       colSpan: 2,
       rowSpan: 2,
     },
     {
       col: 4,
       colSpan: 3,
       rowSpan: 1,
     },
     {
       col: 3,
       colSpan: 4,
       rowSpan: 2,
     },
     {
       col: 1,
       colSpan: 2,
       rowSpan: 2,
     },
   ]);
   const tiles = [
     {
       header: 'Sales Revenue',
       body: <SalesRevenueChart/>,
     },
     {
       header: 'Performance',
       body: <PerformanceChart/>,
     },
 
     {
       header: 'Top 5 Cities',
       body: <TopFiveCitiesGlobal/>,
     },
 
     {
       header: 'Users',
       body: (
         <div>
           <ConversionsChart/>
         </div>
       ),
     },
     {
       header: 'Top 5 Cities Global',
       body: <TopFiveCitiesGlobal/>,
     },
     {
       header: 'Cost Breakdown',
       body: (
         <div>
         <CostBreakdownChart/>
         </div>
       ),
     },
     {
      header: 'Users',
      body: (
        <div>
          <ConversionsChart/>
        </div>
      ),
    },
   ];
   const handleReposition = (e) => {
     setData(e.value);
   };
   return (
     <TileLayout
       columns={6}
       rowHeight={'auto'}
       positions={data}
       gap={{
         rows: 10,
         columns: 10,
       }}
       items={tiles}
       onReposition={handleReposition}
     />
   );
 };