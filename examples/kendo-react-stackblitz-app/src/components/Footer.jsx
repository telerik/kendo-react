import React from 'react';

const Footer = (props) => {
    return (
        <div className="container-fluid">
            <div className='d-flex justify-content-center align-items-center'>
                 <div>
                <div className='mb-2 links'>
                    <a href="https://www.telerik.com/purchase/license-agreement/progress-kendoreact?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-awareness-license-agreement">License Agreement</a>
                </div>
                <div className='copyright'>
                    Copyright © 2024 Software Corporation and/or its subsidiaries or affiliates. All Rights Reserved.
                </div>
                </div>
                <div className='d-flex ml-auto'>
                    <div className="social text-center">
                        <a href="https://www.facebook.com/KendoUI/"><img src="./img/facebook.png" alt="facebook" /></a>
                        <a href="https://twitter.com/kendoreact"><img src="./img/twitter.png" alt="twitter" /></a>
                        <a href="https://www.youtube.com/results?search_query=kendoreact"><img src="./img/youtube.png" alt="youtube" /></a>
                        <a href="https://www.linkedin.com/showcase/telerik/"><img src="./img/linkedin.png" alt="linkedin" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;