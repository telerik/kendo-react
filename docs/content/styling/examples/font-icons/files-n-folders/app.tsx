import * as React from 'react';

const App = () => {
	return (
		<>
			<link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css" />
			<link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />
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
					<br /> .k-i-fields-more
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-aggregate-fields"></span> .k-i-aggregate-fields
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file"></span> .k-i-file
					<br /> .k-i-file-vertical
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-add"></span> .k-i-file-add
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-txt"></span> .k-i-file-txt
					<br /> .k-i-txt
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-csv"></span> .k-i-file-csv
					<br /> .k-i-csv
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-excel"></span> .k-i-file-excel
					<br /> .k-i-file-xls
					<br /> .k-i-excel
					<br /> .k-i-xls
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-word"></span> .k-i-file-word
					<br /> .k-i-file-doc
					<br /> .k-i-word
					<br /> .k-i-doc
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-mdb"></span> .k-i-file-mdb
					<br /> .k-i-mdb
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-ppt"></span> .k-i-file-ppt
					<br /> .k-i-ppt
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-pdf"></span> .k-i-file-pdf
					<br /> .k-i-pdf
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-psd"></span> .k-i-file-psd
					<br /> .k-i-psd
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-flash"></span> .k-i-file-flash
					<br /> .k-i-flash
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-config"></span> .k-i-file-config
					<br /> .k-i-config
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-ascx"></span> .k-i-file-ascx
					<br /> .k-i-ascx
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-bac"></span> .k-i-file-bac
					<br /> .k-i-bac
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-file-zip"></span> .k-i-file-zip
					<br /> .k-i-zip
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
					<br /> .k-i-source-code
					<br /> .k-i-view-source
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
