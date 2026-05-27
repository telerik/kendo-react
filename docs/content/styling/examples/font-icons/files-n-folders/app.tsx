import * as React from 'react';

const App = () => {
    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css" />
            <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons@5/dist/index.css" />
            <ul className="WebComponentsIcons">
                <li>
                    <span className="k-icon k-font-icon k-i-folder"></span> .k-i-folder
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-folder-open"></span> .k-i-folder-open
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-folder-add"></span> .k-i-folder-add
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-folder-up"></span> .k-i-folder-up
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-folder-more"></span> .k-i-folder-more
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-aggregate-fields"></span> .k-i-aggregate-fields
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file"></span> .k-i-file
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-add"></span> .k-i-file-add
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-text"></span> .k-i-file-text
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-csv"></span> .k-i-file-csv
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-excel"></span> .k-i-file-excel
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-word"></span> .k-i-file-word
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-mdb"></span> .k-i-file-mdb
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-ppt"></span> .k-i-file-ppt
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-pdf"></span> .k-i-file-pdf
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-psd"></span> .k-i-file-psd
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-flash"></span> .k-i-file-flash
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-config"></span> .k-i-file-config
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-ascx"></span> .k-i-file-ascx
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-bac"></span> .k-i-file-bac
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-zip"></span> .k-i-file-zip
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-film"></span> .k-i-film
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-css3"></span> .k-i-css3
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-html5"></span> .k-i-html5
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-html"></span> .k-i-html
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-css"></span> .k-i-css
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-js"></span> .k-i-js
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-exe"></span> .k-i-exe
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-csproj"></span> .k-i-csproj
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-vbproj"></span> .k-i-vbproj
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-cs"></span> .k-i-cs
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-vb"></span> .k-i-vb
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-sln"></span> .k-i-sln
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-cloud"></span> .k-i-cloud
                </li>
                <li>
                    <span className="k-icon k-font-icon k-i-file-horizontal"></span> .k-i-file-horizontal
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
