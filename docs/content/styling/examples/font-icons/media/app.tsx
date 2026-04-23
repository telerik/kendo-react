import * as React from 'react';

const App = () => {
	return (
		<>
			<link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css" />
			<link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />
			<ul className="WebComponentsIcons">
				<li>
					<span className="k-icon k-font-icon k-i-play"></span> .k-i-play
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-pause"></span> .k-i-pause
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-stop"></span> .k-i-stop
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-rewind"></span> .k-i-rewind
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-forward"></span> .k-i-forward
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-volume-down"></span> .k-i-volume-down
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-volume-up"></span> .k-i-volume-up
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-volume-off"></span> .k-i-volume-off
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-hd"></span> .k-i-hd
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-subtitles"></span> .k-i-subtitles
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-playlist"></span> .k-i-playlist
				</li>
				<li>
					<span className="k-icon k-font-icon k-i-audio"></span> .k-i-audio
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
