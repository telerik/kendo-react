import * as React from 'react';

import { useLocalization } from '@progress/kendo-react-intl';

import kendoka from '../assets/kendoka.png';
import github from '../assets/github-icon.svg';
import { Button } from "@progress/kendo-react-buttons";

const Info = () => {
    const localizationService = useLocalization();
    return (
        <div id="Info" className="info-page main-content">
            <div className="content">
                    <div className="kendoka">
                        <img src={kendoka} alt={localizationService.toLanguageString('custom.kendokaIllustration')} />
                    </div>
                    <div className="section-1">
                        <h1>{localizationService.toLanguageString('custom.productName')}</h1>
                    <h2>{localizationService.toLanguageString('custom.masterReactUi')}</h2>
                        <div className="button-group">
                            <Button themeColor={"primary"} rounded={"small"} onClick={()=>{window.open("https://www.telerik.com/download-login-v2-kendo-react-ui")}}>{localizationService.toLanguageString('custom.startFreeTrial')}</Button>
                            <Button rounded={"small"} onClick={()=>{window.open("https://www.telerik.com/kendo-react-ui/#pricing")}}>{localizationService.toLanguageString('custom.buyNow')}</Button>
                        </div>

                        <a className="github-link" href="https://github.com/telerik/kendo-react/tree/master/examples/react-coffee-warehouse">
                            <img src={github} alt={localizationService.toLanguageString('custom.githubIcon')} />
                            <span className="github-text">
                                {localizationService.toLanguageString('custom.getSource')}
                            </span>
                        </a>
                    </div>
                    <div className="section-2">
                        <p>
                            {localizationService.toLanguageString('custom.demoInfo')}
                        </p>
                    </div>
                    <div className="section-3">
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/buttons/">{localizationService.toLanguageString('custom.buttons')}</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/buttons/button">{localizationService.toLanguageString('custom.button')}</a>
                                    </li>
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/buttons/buttongroup">{localizationService.toLanguageString('custom.buttonGroup')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/dataquery/">{localizationService.toLanguageString('custom.dataQuery')}</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/charts/">{localizationService.toLanguageString('custom.charts')}</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/charts/chart">{localizationService.toLanguageString('custom.chart')}</a>
                                    </li>
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/charts/series-types/bar">{localizationService.toLanguageString('custom.columnBar')}</a>
                                    </li>
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/charts/series-types/line">{localizationService.toLanguageString('custom.horizontalLine')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/datatools/">{localizationService.toLanguageString('custom.dataTools')}</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/datatools/pager">{localizationService.toLanguageString('custom.pager')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/dateinputs/">{localizationService.toLanguageString('custom.dateInputs')}</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker">{localizationService.toLanguageString('custom.dateRangePicker')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/dialogs/">{localizationService.toLanguageString('custom.dialogs')}</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/dialogs/dialog">{localizationService.toLanguageString('custom.dialog')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/drawing/">{localizationService.toLanguageString('custom.drawing')}</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/dropdowns/">{localizationService.toLanguageString('custom.dropdowns')}</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete">{localizationService.toLanguageString('custom.autoComplete')}</a>
                                    </li>
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist">{localizationService.toLanguageString('custom.dropDownList')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/editor/">{localizationService.toLanguageString('custom.editor')}</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/excelexport/">{localizationService.toLanguageString('custom.excelExport')}</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/form/">{localizationService.toLanguageString('custom.form')}</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/grid/">{localizationService.toLanguageString('custom.grid')}</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/inputs/">{localizationService.toLanguageString('custom.inputs')}</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/inputs/checkbox">{localizationService.toLanguageString('custom.checkbox')}</a>
                                    </li>
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/inputs/input">{localizationService.toLanguageString('custom.input')}</a>
                                    </li>
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/inputs/maskedtextbox">{localizationService.toLanguageString('custom.maskedTextBox')}</a>
                                    </li>
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/inputs/switch">{localizationService.toLanguageString('custom.switch')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/layout/">{localizationService.toLanguageString('custom.layout')}</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/layout/avatar">{localizationService.toLanguageString('custom.avatar')}</a>
                                    </li>
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/layout/card">{localizationService.toLanguageString('custom.card')}</a>
                                    </li>
                                    <li className="component-link">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/layout/drawer">{localizationService.toLanguageString('custom.drawer')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/scheduler/">{localizationService.toLanguageString('custom.scheduler')}</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/tooltip/">{localizationService.toLanguageString('custom.tooltip')}</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.telerik.com/kendo-react-ui/components/upload/">{localizationService.toLanguageString('custom.upload')}</a>
                                </h3>
                            </div>
                        </div>
                </div>
            </div>
            <div className="footer"/>
        </div>
    );
}

export default Info;
