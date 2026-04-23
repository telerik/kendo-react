import * as React from 'react';

const App = () => {
	return (
		<>
			<link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css" />
			<link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />
			<ul className="WebComponentsIcons">
				<li>
					<span className="k-icon k-font-icon k-i-notification"></span> .k-i-notification
					<br /> .k-i-bell
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-information"></span> .k-i-information
					<br /> .k-i-info
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-question"></span> .k-i-question
					<br /> .k-i-help
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-warning"></span> .k-i-warning
					<br /> .k-i-exception
					<br /> .k-i-error
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
