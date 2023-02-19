import * as React from 'react';
import { AutoComplete, DropDownList } from '@progress/kendo-react-dropdowns';
import products from './products.json';


export const CustomFilterUI = (props) => {
    const operators = props.firstFilterProps.operators
    const logic = props.logicData

    const productNames = products.map(item => {
        return item.ProductName
      })

    const [state, setState] = React.useState({
      first: operators[0],
      second: operators[1]
    })
    

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        const { firstFilterProps } = props;
        const { secondFilterProps } = props;
        
        if (name === "firstFilter") { 
          firstFilterProps.onChange({
            value,
            operator: state.first.operator,
            syntheticEvent: event.syntheticEvent
          })
        }
        if (name === "secondFilter") { 
          secondFilterProps.onChange({
            value,
            operator: state.second.operator,
            syntheticEvent: event.syntheticEvent
          })
        }

        if (name === "logic") {
          props.onLogicChange(event)
        }
    }

    return (
      <div>
        <DropDownList 
        data={operators}
        textField="text"
        value={state.first}
        onChange={(event) => setState({...state, first: event.target.value})}
        />
        <AutoComplete
        name="firstFilter" 
        data={[...productNames]}
        onChange={handleChange}
        />
        <DropDownList 
        name="logic"
        data={logic}
        textField="text"
        defaultValue={logic[0]}
        onChange={handleChange}
        />
        <DropDownList 
        data={operators}
        textField="text"
        value={state.second}
        onChange={(event) => setState({...state, second: event.target.value})}
        />
        <AutoComplete
        name="secondFilter"  
        data={[...productNames]}
        onChange={handleChange}
        />
      </div>
    );
}
