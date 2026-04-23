import React, { useState, useCallback } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import { Fade } from '@progress/kendo-react-animation';
import products from './shared-kb-products';

type NotificationItem = { row: number; show: boolean };

const App = () => {
  const [data] = useState(products);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [selectedID, setSelectedID] = useState<number | null>(null);

  const hideNotification = useCallback((rowId: number) => {
    setNotifications((prev) => {
      const idx = prev.findIndex((n) => n.row === rowId && n.show === true);
      if (idx === -1) return prev;
      const next = [...prev];
      next[idx] = { ...next[idx], show: false };
      return next;
    });
  }, []);

  const closeNotification = useCallback((i: number) => {
    setNotifications((prev) => {
      const next = [...prev];
      if (next[i]) next[i] = { ...next[i], show: false };
      return next;
    });
  }, []);

  const onRowClick = useCallback(
    (e: any) => {
      setSelectedID(e.dataItem.ProductID);
      setNotifications((prev) => [...prev, { row: e.dataItem.ProductID, show: true }]);
      setTimeout(() => hideNotification(e.dataItem.ProductID), 4000);
    },
    [hideNotification]
  );

  return (
    <div>
      <Grid
        data={data.map((item: any) => ({ ...item, selected: item.ProductID === selectedID }))}
        selectedField="selected"
        onRowClick={onRowClick}
      >
        <Column field="ProductName" title="Product Name" width="300px" />
        <Column field="UnitsInStock" title="Units In Stock" />
        <Column field="UnitsOnOrder" title="Units On Order" />
        <Column field="ReorderLevel" title="Reorder Level" />
      </Grid>

      <NotificationGroup
        style={{
          right: 0,
          bottom: 0,
          alignItems: 'flex-start',
          flexWrap: 'wrap-reverse'
        }}
      >
        <Fade enter={true} exit={true}>
          {notifications.map((notification, i) =>
            notification.show ? (
              <Notification
                key={i}
                type={{ style: 'info', icon: true }}
                closable={true}
                onClose={() => closeNotification(i)}
              >
                Product Clicked:{' '}
                {(() => {
                  const item = data.find((d: any) => d.ProductID === notification.row);
                  return item ? item.ProductName : '';
                })()}
              </Notification>
            ) : null
          )}
        </Fade>
      </NotificationGroup>
    </div>
  );
};

export default App;
