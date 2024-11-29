import React, { useRef } from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Tooltip } from '@progress/kendo-react-tooltip';

const valueRender = (element, value) => {
    if (!value) {
        return element;
    }

    const children = [
        <span
            key={1}
            style={{
                display: 'inline-block',
                width: '18px',
                height: '18px',
                color: 'red'
            }}
        >
            <img src="./img/palete.png" alt="palete" />
        </span>,
        <span key={2}>&nbsp; {element.props.children}</span>
    ];

    return React.cloneElement(element, { ...element.props }, children);
}

const ThemeChooser = (props) => {
    let tooltip = useRef(null);
    const themes = [
        { id: 1, text: 'default', link: "https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css" },
        { id: 2, text: 'material', link: "https://unpkg.com/@progress/kendo-theme-material@latest/dist/all.css" },
        { id: 3, text: 'bootstrap', link: "https://unpkg.com/@progress/kendo-theme-bootstrap@latest/dist/all.css" }
    ]
    return (
        <>
            <Tooltip ref={tooltip} position="left" anchorElement='target'/>
            <div className="d-flex my-2" >
                <div className="ml-auto d-flex">
                    <div className='d-flex mr-1 mr-lg-3 change-theme'
                        onMouseOver={event => {tooltip && tooltip.current.handleMouseOver(event)}}
                        onMouseOut={event => tooltip && tooltip.current.handleMouseOut(event)}>
                        <span className="d-block my-auto" title='Тhis will re-render the KendoReact components with the chosen theme.'>Change theme</span>
                    </div>
                    <DropDownList defaultValue={themes.find(x => x.link === props.theme)}
                        textField={'text'} data={themes}
                        onChange={(e) => props.changeTheme(e.target.value.link)}
                        valueRender={valueRender}
                        className="d-flex my-auto p-1"
                    />
                </div>
            </div>
        </>
    )
}

export default ThemeChooser;