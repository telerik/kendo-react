import '@progress/kendo-theme-default/dist/all.css'
import { useState, useEffect } from "react";
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { mapTree } from "@progress/kendo-react-treelist";
import { clone } from '@progress/kendo-react-common';
import { Button } from "@progress/kendo-react-buttons";
import MyCommandCell from './components/CommandCell';
import Axios from "axios";
import DataContext from './context/data-context';
import DropDownCell from './components/DropDownCell';
import { Map, MapLayers, MapShapeLayer } from '@progress/kendo-react-map';

function App() {
  const [data, setData] = useState([]);
  const [itemBeforeEdit, setItemBeforeEdit] = useState({})
  const [dataState, setDataState] = useState({ take: 8, skip: 0, group: [{field: 'ProductName'}] })
  const [total, setTotal] = useState(0);
  const [mapData, setMapData] = useState({})

  const shapeStyle = {
    fill: {
      color: 'green'
    }
  };

  const center = [40, 0];

 const MapContainer = () => {
  return <div> 
     <Map center={center}>
      <MapLayers>
        <MapShapeLayer data={mapData} style={shapeStyle} />
      </MapLayers>
    </Map>
  </div>
 }

 const getChartData = () => {
  Axios.get("http://localhost:4000/map", {

    }).then((response) => {

      setMapData(response.data.features)
    });
};

  useEffect(() => {
    getChartData()
    Axios.get("http://localhost:4000/products", {
      params: {
        dataState: dataState
      }
    }).then((response) => {
      let parsedDataNew = mapTree(response.data.data, 'items', (product) => {
        product.FirstOrderedOn = product.FirstOrderedOn !== null ? new Date(product.FirstOrderedOn) : null;
        return product
      })
      setTotal(response.data.total)
      setData([...parsedDataNew]);
    });
  }, [dataState])

  const addRecord = () => {
    let newRecord = { ProductID: undefined, FirstOrderedOn: new Date(), Category: null, inEdit: true, Discontinued: false, UnitsInStock: 1, ProductName: null }
    let newData = [...data];
    newData.unshift(newRecord);
    setData(newData)
  }

  const handleItemChange = (event) => {
    let newData = mapTree(data, 'items', item => {
      if (event.dataItem.ProductID === item.ProductID) {
        item[event.field] = event.value;
      }
      return item;
    })
    setData(newData);
  }

  const enterEdit = (dataItem) => {
    let newData = mapTree(data, "items", (item) => {
      dataItem.ProductID === item.ProductID ? item.inEdit = true : item.inEdit = false;
      return item;
    });

    setItemBeforeEdit(clone(dataItem));
    setData(newData);
  }

  const remove = (dataItem) => {
    Axios.delete(`http://localhost:4000/delete/${dataItem.ProductID}`, { data : {dataState: dataState}}).then(
      (response) => {
        let newData = mapTree(response.data.data,'items', item => {
          item.FirstOrderedOn = new Date(item.FirstOrderedOn);
          return item;
        })
        setData([...newData]);
        setTotal(response.data.total)
      }
    );
  }

  const add = (dataItem) => {
    Axios.post("http://localhost:4000/create", { item: dataItem, dataState: dataState }).then((response) => {
      let newData = mapTree(response.data.data,'items', item => {
        item.FirstOrderedOn = new Date(item.FirstOrderedOn);
        return item;
      })
      setData(newData);
      setTotal(response.data.total)
    });
  }

  const discard = () => {
    let hasGroup = dataState.group.length > 0 ? true : false
    let newData = []
    hasGroup ? newData = data.filter(item => item.value !== undefined) : newData = data.filter(item => item.ProductID !== undefined )
    setData(newData);
  }

  const update = (dataItem) => {
    Axios.put("http://localhost:4000/update", { item: dataItem, dataState: dataState }).then(
      (response) => {
        let newData = mapTree(response.data.data,'items', item => {
          item.FirstOrderedOn = new Date(item.FirstOrderedOn);
          return item;
        })
        setData(newData);
      }
    );
  }

  const cancel = () => {
    let newData = mapTree(data, 'items', item => {
      if (item.ProductID === itemBeforeEdit.ProductID) {
        item = itemBeforeEdit;
        item.inEdit = false;
      }
      return item;
    })
    setData(newData);
  }

  const handleDataStateChange = (event) => {
      setDataState(event.dataState)
  }
  return (
    <div className="App">
      <DataContext.Provider
        value={{
          enterEdit: enterEdit,
          remove: remove,
          add: add,
          discard: discard,
          update: update,
          cancel: cancel
        }}
      >
        <Grid
          style={{
            height: "520px",
          }}
          data={data}
          editField="inEdit"
          onItemChange={handleItemChange}
          onDataStateChange={handleDataStateChange}
          {...dataState}
          pageable
          sortable
          filterable
          groupable
          total={total}
        >
          <GridToolbar>
            <div>
              <Button
                title="Add new"
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"                onClick={addRecord}
              >
                Add new record
              </Button>

            </div>
          </GridToolbar>
          <GridColumn field="ProductID" title="Id"  editable={false} filterable={false} />
          <GridColumn field="ProductName" title="Name" />
          <GridColumn field="Category.CategoryName" title="Category" cell={DropDownCell} />
          <GridColumn field="FirstOrderedOn" title="First Ordered On" editor="date" filter='date' format={'{0:d}'} />
          <GridColumn
            field="UnitsInStock"
            title="Units"
            editor="numeric"
            filter="numeric"
          />
          <GridColumn field="Discontinued" title="Discontinued" editor="boolean" filter="boolean" />
          <GridColumn cell={MyCommandCell}  filterable={false} />
        </Grid>
         </DataContext.Provider>
         <div className="map-container">
         <MapContainer/>
         </div>
    </div>
  );
}

export default App;
