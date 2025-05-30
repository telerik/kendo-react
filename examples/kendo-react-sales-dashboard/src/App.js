import React, {Component} from 'react';
import './App.css';

import GridContainer from './components/GridContainer'
import PanelBarContainer from './components/PanelBarContainer'
import { DonutChartContainer }  from './components/DonutChartContainer'
import { BarChartContainer } from './components/BarChartContainer';

import { Button } from '@progress/kendo-react-buttons'
import { savePDF } from '@progress/kendo-react-pdf';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Ripple } from '@progress/kendo-react-ripple';

import '@progress/kendo-theme-material/dist/all.css'
import { Input } from '@progress/kendo-react-inputs';

import { donutChartData, gridData, barChartData, barChartCategories } from './data/appData';

class App extends Component {
    app;
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    state = {
      showDialog: false,
      value: "Andrew Fuller",
      donutChartData:donutChartData,
      gridData: gridData,
      barChartData: barChartData,
      barChartCategories: barChartCategories
    }
    handlePDFExport = (e) =>{
      savePDF(this.app, { paperSize: 'auto' });
    }

    handleShare = () => {
      this.setState({
        showDialog: !this.state.showDialog
      })
    }

    handleDataChange = (value) => {
      let newData = this.randomizeData(value)
      this.setState({
        ...newData
      })
    }

    getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randomizeData = (value) => {
      let gridData = this.state.gridData.map(element =>{
        element.UnitPrice = this.getRandomInt(1,100)
        element.UnitsInStock = this.getRandomInt(1,100)
        element.PriceHistoru =  Array.from({length: 40}, () => Math.floor(Math.random() * 100));
        return element
      })
      let barChartData = this.state.barChartData.map(element =>{
        element.data =  this.isDayReport(value) ?[this.getRandomInt(1,10)] : [this.getRandomInt(1,10),this.getRandomInt(1,10)]
        return element
      })
      let barChartCategoriesUpdated = this.isDayReport(value) ? [value] : barChartCategories
      let donutChartData = this.state.donutChartData.map(element =>{
        element.share = this.getRandomInt(1,5) / 10
        return element
      })
      return {
        donutChartData:donutChartData,
        gridData: gridData,
        barChartData: barChartData,
        barChartCategories: barChartCategoriesUpdated,
        value: value
      }

    }

    isDayReport = (value) => {
      return this.days.includes(value)
    }

    render() {
        let headerText = this.state.value.replace('Sales','');
        return (
          <Ripple>
            <div className="app-container" ref={(app) => this.app = app}>
                <div className="row">
                  <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                    <h1>Sales | {headerText}</h1>
                </div>
                <div className="buttons-right mt-1">
                  <Button themeColor={'primary'} onClick={this.handleShare} className='mr-2'>Share</Button>
                  <Button onClick={this.handlePDFExport}>Export to PDF</Button>
                </div>
                </div>
                <div className="row">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <PanelBarContainer changeData={this.handleDataChange} activeItem={this.state.value}/>
                  </div>
                  <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                    <div className="row">
                      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <DonutChartContainer data={this.state.donutChartData}/>
                      </div>
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <div className="percentage-container">
                          <span className="percentage-number">{this.getRandomInt(80,99)}</span>
                          <span className="percentage-sign">%</span>
                          <p>CUSTOMER SATISFACTION</p>
                        </div>
                        <div className="percentage-container">
                          <span className="percentage-number">{this.getRandomInt(80,99)}</span>
                          <span className="percentage-sign">%</span>
                          <p>TARGET SALES</p>
                        </div>
                      </div>
                      <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                        <BarChartContainer data={this.state.barChartData} categories={this.state.barChartCategories}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <GridContainer data={this.state.gridData}/>
                      </div>
                    </div>
                  </div>
                </div>
                {this.state.showDialog && <Dialog title={"Share this report"} onClose={this.handleShare}>
                  <p>Please enter the email address/es of the recipient/s.</p>
                  <Input placeholder="example@progress.com"/>
                  <DialogActionsBar>
                    <Button themeColor={'primary'} onClick={this.handleShare}>Share</Button>
                    <Button onClick={this.handleShare}>Cancel</Button>
                  </DialogActionsBar>
                </Dialog>}
            </div>
          </Ripple>
        );
    }
}

export default App;
