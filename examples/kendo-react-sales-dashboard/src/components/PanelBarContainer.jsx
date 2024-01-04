import React from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { classNames } from '@progress/kendo-react-common';
class CustomPanelBarItem extends React.Component {
    imageUrl = (imageName) => {
        return window.baseUrl + "/images/k3-sample-app/" + imageName + '.png';
    }

    handleItemSelect = () => {
        this.props.onClick.call(undefined, { target: this });
    }
    render() {
        const className = classNames('teamMate', {
            'k-state-selected': this.props.selected === this.props.uniquePrivateKey
        });

        return (
            <div className={className} id={this.props.id} onClick={this.handleItemSelect}>
                <img src={this.imageUrl(this.props.smallName)} alt={this.props.title} />
                <span className="mate-info">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.subTitle}</p>
                </span>
            </div>
        )
    }
}
export default class PanelBarContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: '.0.0'
        }
    }
    handleItemSelect = (event) => {
        if (event.target.props.uniquePrivateKey.length > 2) {
            this.setState({ selected: event.target.props.uniquePrivateKey });
            this.props.changeData(event.target.props.title)
        }
    }

    render() {
        return (
            <PanelBar expandMode="single" onSelect={this.handleItemSelect} selected={this.state.selected}>
                <PanelBarItem expanded={true} title="Teammates">
                    <CustomPanelBarItem
                        onClick={this.handleItemSelect}
                        selected={this.state.selected}
                        title="Andrew Fuller"
                        subTitle="Team Lead"
                        smallName="andrew"
                        id="andrewFuller"
                        uniquePrivateKey='.0.0' />
                    <CustomPanelBarItem
                        onClick={this.handleItemSelect}
                        selected={this.state.selected}
                        title="Nancy Leverling"
                        subTitle="Sales Associate"
                        smallName="nancy"
                        id="nancyLeverling"
                        uniquePrivateKey='.0.1' />
                    <CustomPanelBarItem
                        onClick={this.handleItemSelect}
                        selected={this.state.selected}
                        title="Robert King"
                        subTitle="Business System Analyst"
                        smallName="robert"
                        id="robertKing"
                        uniquePrivateKey='.0.2' />
                    <CustomPanelBarItem
                        onClick={this.handleItemSelect}
                        selected={this.state.selected}
                        title="Laurence Lebihan"
                        subTitle="Accounting Manager"
                        smallName="laurence"
                        id="laurenceLebihan"
                        uniquePrivateKey='.0.3' />
                    <CustomPanelBarItem
                        onClick={this.handleItemSelect}
                        selected={this.state.selected}
                        title="Mary Saveley"
                        subTitle="Sales Agent"
                        smallName="mary"
                        sid="marySaveley"
                        uniquePrivateKey='.0.4' />
                    <CustomPanelBarItem
                        onClick={this.handleItemSelect}
                        selected={this.state.selected}
                        title="Hari Kumar"
                        subTitle="Sales Manager"
                        smallName="hari"
                        id="hariKumar"
                        uniquePrivateKey='.0.5' />
                </PanelBarItem>
                <PanelBarItem title={'Sales Reports'} >
                    <PanelBarItem title="Q1-sales" />
                    <PanelBarItem title="Q2-sales" />
                    <PanelBarItem title="Q3-sales" />
                    <PanelBarItem title="Q4-sales" />
                </PanelBarItem>
                <PanelBarItem title="Sales by Day">
                    <PanelBarItem title="Monday" />
                    <PanelBarItem title="Tuesday" />
                    <PanelBarItem title="Wednesday" />
                    <PanelBarItem title="Thursday" />
                    <PanelBarItem title="Friday" />
                </PanelBarItem>
            </PanelBar>
        );
    }
}