import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import {
  Notification,
  NotificationGroup
} from "@progress/kendo-react-notification";
import { Fade } from "@progress/kendo-react-animation";

import products from "./products.json";

class App extends React.Component {
  state = {
    notifications: [],
    data: products,
    selectedID: null
  };

  hideNotification = dataItem => {
    const notificationIndex = this.state.notifications.findIndex(
      notification => notification.row == dataItem && notification.show == true
    );
    if (notificationIndex !== -1) {
      const notUpdated = this.state.notifications[notificationIndex];
      notUpdated.show = false;
      const newNotifications = [...this.state.notifications];
      newNotifications[notificationIndex] = notUpdated;
      this.setState({ notifications: newNotifications });
    }
  };

  closeNotification = i => {
    const notUpdated = this.state.notifications[i];
    notUpdated.show = false;
    const newNotifications = [...this.state.notifications];
    newNotifications[i] = notUpdated;
    this.setState({ notifications: newNotifications });
  };

  render() {
    const { notifications, selectedID } = this.state;

    return (
      <div>
        <Grid
          data={this.state.data.map(item => ({
            ...item,
            selected: item.ProductID === selectedID
          }))}
          selectedField="selected"
          onRowClick={e => {
            this.setState({
              selectedID: e.dataItem.ProductID,
              notifications: [
                ...notifications,
                { row: e.dataItem.ProductID, show: true }
              ]
            }),
              setTimeout(() => {
                this.hideNotification(e.dataItem.ProductID);
              }, 4000);
          }}
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
            alignItems: "flex-start",
            flexWrap: "wrap-reverse"
          }}
        >
          <Fade enter={true} exit={true}>
            {notifications.map((notification, i) => {
              return (
                notification.show && (
                  <Notification
                    key={i}
                    type={{ style: "info", icon: true }}
                    closable={true}
                    onClose={() => this.closeNotification(i)}
                  >
                    Product Clicked: {this.state.data.map(item => {
                      if (notification.row == item.ProductID) {
                        return item.ProductName
                      }
                    })}
                  </Notification>
                )
              );
            })}
          </Fade>{" "}
        </NotificationGroup>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("my-app"));
