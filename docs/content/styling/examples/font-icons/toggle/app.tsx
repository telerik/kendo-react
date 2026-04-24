import * as React from 'react';

const App = () => {
	return (
		<>
			<link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css" />
			<link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />
			<ul className="WebComponentsIcons">
				<li>
					<span className="k-icon k-font-icon k-i-heart-outline"></span> .k-i-heart-outline
					<br /> .k-i-fav-outline
					<br />
					.k-i-favorite-outline
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-heart"></span> .k-i-heart
					<br /> .k-i-fav
					<br /> .k-i-favorite
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-star-outline"></span> .k-i-star-outline
					<br /> .k-i-bookmark-outline
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-star"></span> .k-i-star
					<br /> .k-i-bookmark
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-checkbox"></span> .k-i-checkbox
					<br /> .k-i-shape-rect
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-checkbox-checked"></span> .k-i-checkbox-checked
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-tri-state-indeterminate"></span>{' '}
					.k-i-tri-state-indeterminate
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-tri-state-null"></span> .k-i-tri-state-null
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-circle"></span> .k-i-circle
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-radiobutton"></span> .k-i-radiobutton
					<br /> .k-i-shape-circle
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-radiobutton-checked"></span> .k-i-radiobutton-checked
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
