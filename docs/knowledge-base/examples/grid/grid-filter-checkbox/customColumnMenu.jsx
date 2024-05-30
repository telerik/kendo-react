import * as React from 'react';
import {
  GridColumnMenuSort,
  GridColumnMenuItemGroup, GridColumnMenuItem, GridColumnMenuItemContent
} from '@progress/kendo-react-grid';

export class CustomColumnMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      columnsExpanded: true
    };
  }

  onToggleColumn = (item) => {
    let data = this.props.data
    data.map(dataItem => {
      if (dataItem.ProductID === item.ProductID) {
        dataItem.filterChecked ?
          dataItem.filterChecked = false :
          dataItem.filterChecked = true
      }
      return item
    })

    this.setState({
      data: data
    })
  }

  onReset = (event) => {
    event.preventDefault();
    this.props.onReset();
    if (this.props.onCloseMenu) {
      this.props.onCloseMenu();
    }
  }

  onSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    this.props.onColumnsSubmit(this.state.data);
    if (this.props.onCloseMenu) {
      this.props.onCloseMenu();
    }
  }

  render() {

    return (
      <div>
        <GridColumnMenuSort {...this.props} />
        <GridColumnMenuItemGroup>
          <GridColumnMenuItem
            title={'Products'}
            iconClass={'k-i-columns'}
            onClick={this.onMenuItemClick}
          />
          <GridColumnMenuItemContent show={this.state.columnsExpanded}>
            <div className={'k-column-list-wrapper'}>
              <form onSubmit={this.onSubmit} onReset={this.onReset}>
                <div className={'k-column-list'}>
                  {this.state.data.map((item, idx) =>
                    (
                      <div key={idx} className={'k-column-list-item'}>
                        <span>
                          <input
                            id={`column-visiblity-show-${idx}`}
                            className="k-checkbox"
                            type="checkbox"
                            readOnly={true}
                            checked={item.filterChecked}
                            onClick={() => { this.onToggleColumn(item); }}
                          />
                          <label
                            htmlFor={`column-visiblity-show-${idx}`}
                            className="k-checkbox-label"
                            style={{ userSelect: 'none' }}
                          >
                            {item[this.props.field]}
                          </label>
                        </span>
                      </div>
                    )
                  )}
                </div>
                <div className={'k-columnmenu-actions'}>
                  <button type={'reset'} className={'k-button'}>Reset</button>
                  <button className={'k-button k-primary'}>Save</button>
                </div>
              </form>
            </div>
          </GridColumnMenuItemContent>
        </GridColumnMenuItemGroup>
      </div>);
  }
}
