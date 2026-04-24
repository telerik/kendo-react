import * as React from 'react';

import { Icon } from '@progress/kendo-react-common';

const App = () => {
    return (
        <React.Fragment>
            <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />
            <div className="text-center social-icons">
                <div className="icon facebook">
                    <Icon name="facebook" />
                </div>
                <div className="icon twitter">
                    <Icon name="twitter" />
                </div>
                <div className="icon google">
                    <Icon name="google" />
                </div>
                <div className="icon linkedin">
                    <Icon name="linkedin" />
                </div>
                <div className="icon youtube">
                    <Icon name="youtube" />
                </div>
            </div>
            <style>{`
                .social-icons .icon,
                .social-icons .icon:before,
                .social-icons .icon .k-icon {
                  -webkit-transition: all 0.35s;
                  transition: all 0.35s;
                  -webkit-transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
                          transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
                }
                .social-icons .icon:before {
                  top: 90%;
                  left: -110%;
                }
                .social-icons .icon .k-icon {
                  -webkit-transform: scale(0.8);
                          transform: scale(0.8);
                }
                .social-icons .icon.facebook:before {
                  background-color: #3b5998;
                }
                .social-icons .icon.facebook .k-icon {
                  color: #3b5998;
                }
                .social-icons .icon.twitter:before {
                  background-color: #3cf;
                }
                .social-icons .icon.twitter .k-icon {
                  color: #3cf;
                }
                .social-icons .icon.google:before {
                  background-color: #dc4a38;
                }
                .social-icons .icon.google .k-icon {
                  color: #dc4a38;
                }
                .social-icons .icon.linkedin:before {
                  background-color: #0177b5;
                }
                .social-icons .icon.linkedin .k-icon {
                  color: #0177b5;
                }
                .social-icons .icon.youtube:before {
                  background-color: #ff0200;
                }
                .social-icons .icon.youtube .k-icon {
                  color: #ff0200;
                }
                .social-icons .icon:focus:before,
                .social-icons .icon:hover:before {
                  top: -10%;
                  left: -10%;
                }
                .social-icons .icon:focus .k-icon,
                .social-icons .icon:hover .k-icon {
                  color: #fff;
                  -webkit-transform: scale(1);
                          transform: scale(1);
                }
                .social-icons .icon {
                  display: inline-block;
                  background-color: #fff;
                  width: 90px;
                  height: 90px;
                  line-height: 90px;
                  margin: 0 10px;
                  text-align: center;
                  position: relative;
                  overflow: hidden;
                  border-radius: 28%;
                  box-shadow: 0 5px 15px -5px rgba(0,0,0,0.1);
                  opacity: 0.99;
                }
                .social-icons .icon:before {
                  content: '';
                  width: 120%;
                  height: 120%;
                  position: absolute;
                  -webkit-transform: rotate(45deg);
                          transform: rotate(45deg);
                }
                .social-icons .icon .k-icon {
                  font-size: 38px;
                  vertical-align: middle;
                }


            `}</style>
        </React.Fragment>
    );
};

export default App;
