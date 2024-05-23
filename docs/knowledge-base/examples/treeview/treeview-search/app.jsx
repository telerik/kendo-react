import * as React from 'react';
import { TreeView } from '@progress/kendo-react-treeview'
import '@progress/kendo-react-animation'

const treeData = [{
  text: 'Furniture', expanded: true, items: [
    { text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
}, {
  text: 'Decor', expanded: true, items: [
    { text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
}];

class App extends React.Component {

  handleSearch = () => {
    let value = document.querySelector('.k-textbox').value
    let newData = this.search(treeData, value)
    this.setState({ data: newData })
  }

  search = (items, term) => {
   return items.reduce((acc, item) => {
      if (this.contains(item.text, term)) {
        acc.push(item);
      } else if (item.items && item.items.length > 0) {
        let newItems = this.search(item.items, term);
        if (newItems && newItems.length > 0) {
          acc.push({ text: item.text, items: newItems, expanded: item.expanded });
        }
      }
      return acc;
    }, []);
  }

  contains = (text, term) => {
    return text.toLowerCase().indexOf(term.toLowerCase()) >= 0;
  }

  state = {
    data: treeData
  }

  render() {
    return (
      <div>
        <input className='k-textbox' onChange={this.handleSearch}/>
        <hr />
        <TreeView
          data={this.state.data}
          expandIcons={true}
        />
      </div>
    );
  }
}

export default App;

