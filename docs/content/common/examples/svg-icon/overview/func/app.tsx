import * as React from 'react';

import { SvgIcon } from '@progress/kendo-react-common';

import { facebookIcon, twitterIcon, googleIcon, linkedinIcon, youtubeIcon } from '@progress/kendo-svg-icons';

const App = () => {
    return (
        <React.Fragment>
            <div className="text-center social-icons">
                <div className="icon facebook">
                    <SvgIcon icon={facebookIcon} size="medium" />
                </div>
                <div className="icon twitter">
                    <SvgIcon icon={twitterIcon} size="medium" />
                </div>
                <div className="icon google">
                    <SvgIcon icon={googleIcon} size="medium" />
                </div>
                <div className="icon linkedin">
                    <SvgIcon icon={linkedinIcon} size="medium" />
                </div>
                <div className="icon youtube">
                    <SvgIcon icon={youtubeIcon} size="medium" />
                </div>
            </div>
            <style>{`
                .social-icons .icon,
                .social-icons .icon:before,
                .social-icons .icon .k-svg-icon {
                  -webkit-transition: all 0.35s;
                  transition: all 0.35s;
                  -webkit-transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
                          transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
                }
                .social-icons .icon:before {
                  top: 90%;
                  left: -110%;
                }
                .social-icons .icon .k-svg-icon {
                  -webkit-transform: scale(0.8);
                          transform: scale(0.8);
                }
                .social-icons .icon.facebook:before {
                  background-color: #3b5998;
                }
                .social-icons .icon.facebook .k-svg-icon {
                  color: #3b5998;
                }
                .social-icons .icon.twitter:before {
                  background-color: #3cf;
                }
                .social-icons .icon.twitter .k-svg-icon {
                  color: #3cf;
                }
                .social-icons .icon.google:before {
                  background-color: #dc4a38;
                }
                .social-icons .icon.google .k-svg-icon {
                  color: #dc4a38;
                }
                .social-icons .icon.linkedin:before {
                  background-color: #0177b5;
                }
                .social-icons .icon.linkedin .k-svg-icon {
                  color: #0177b5;
                }
                .social-icons .icon.youtube:before {
                  background-color: #ff0200;
                }
                .social-icons .icon.youtube .k-svg-icon {
                  color: #ff0200;
                }
                .social-icons .icon:focus:before,
                .social-icons .icon:hover:before {
                  top: -10%;
                  left: -10%;
                }
                .social-icons .icon:focus .k-svg-icon,
                .social-icons .icon:hover .k-svg-icon {
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
                .social-icons .icon .k-svg-icon {
                  font-size: 38px;
                  vertical-align: middle;
                }


            `}</style>
        </React.Fragment>
    );
};

export default App;
