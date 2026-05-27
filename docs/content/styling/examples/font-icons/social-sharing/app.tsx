import * as React from 'react';

const App = () => {
    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css" />
            <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons@5/dist/index.css" />
            <ul className="WebComponentsIcons">
                <li>
                    <span className="k-icon k-font-icon k-i-share"></span> .k-i-share
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-user"></span> .k-i-user
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-email"></span> .k-i-email
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-delicious"></span> .k-i-delicious
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-delicious"></span> .k-i-delicious
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-digg"></span> .k-i-digg
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-digg"></span> .k-i-digg
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-email"></span> .k-i-email
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-email-box"></span> .k-i-email-box
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-facebook"></span> .k-i-facebook
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-facebook"></span> .k-i-facebook
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-google"></span> .k-i-google
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-google"></span> .k-i-google
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-google-plus"></span> .k-i-google-plus
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-google-plus"></span> .k-i-google-plus
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-linkedin"></span> .k-i-linkedin
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-linkedin"></span> .k-i-linkedin
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-myspace"></span> .k-i-myspace
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-myspace"></span> .k-i-myspace
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-pinterest"></span> .k-i-pinterest
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-pinterest"></span> .k-i-pinterest
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-reddit"></span> .k-i-reddit
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-reddit"></span> .k-i-reddit
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-stumble-upon"></span> .k-i-stumble-upon
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-stumble-upon"></span> .k-i-stumble-upon
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-tell-a-friend"></span> .k-i-tell-a-friend
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-tell-a-friend"></span> .k-i-tell-a-friend
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-tumblr"></span> .k-i-tumblr
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-tumblr"></span> .k-i-tumblr
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-x-logo"></span> .k-i-x-logo
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-x-logo"></span> .k-i-x-logo
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-yammer"></span> .k-i-yammer
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-yammer"></span> .k-i-yammer
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-behance"></span> .k-i-behance
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-behance"></span> .k-i-behance
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-dribbble"></span> .k-i-dribbble
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-dribbble"></span> .k-i-dribbble
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-rss"></span> .k-i-rss
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-rss"></span> .k-i-rss
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-vimeo"></span> .k-i-vimeo
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-vimeo"></span> .k-i-vimeo
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-youtube"></span> .k-i-youtube
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-youtube"></span> .k-i-youtube
                </li>
            </ul>
            <style>
                {`
        .WebComponentsIcons {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .WebComponentsIcons::after {
            content: "";
            display: block;
            clear: both;
            height: 0;
            line-height: 0;
        }

        .WebComponentsIcons li {
            margin: 10px;
            padding: 10px;
            display: block;
            float: left;
            vertical-align: top;
            text-align: center;
            width: 160px;
            height: 92px;
            font-size: 12px;
            line-height: 1em;
            font-weight: 300;
            color: #999;
        }

        .WebComponentsIcons li:before {
            display: none;
        }

        .WebComponentsIcons .k-icon.k-font-icon {
            display: block;
            clear: both;
            margin: 0 auto 10px;
            color: #656565;
            font-size: 32px;
        }

        .obsolete-classes {
            width: 100%;
            max-width: 900px;
            text-align: left;
            border-collapse: collapse;
        }

        .obsolete-classes th,
        .obsolete-classes td {
            padding: 10px 0;
            border-bottom: 1px solid #ececec;
        }

        .obsolete-classes th {
            padding: 0 0 5px;
        }

        .old-class {
            color: #f31700;
        }

        .new-class {
            color: #5ec232;
        }

        .ref-icon {
            width: 60px;
        }`}
            </style>
        </>
    );
};

export default App;
