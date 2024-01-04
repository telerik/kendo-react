import React from 'react'
import MenuNavContainer from './MenuNavContainer.jsx'

export const Header = (props) => {
    return (
        <div className='container-fluid'>
            <div className="d-flex align-items-baseline border-bottom py-2">
                <div className="d-flex">
                    <div className='project-name d-flex'>
                        <span className="mx-0 my-auto logo">
                            {props.projectName}
                        </span>
                    </div>
                </div>
                <div className='d-flex ml-auto nav mx-5'>
                    <MenuNavContainer />
                </div>
            </div>
        </div>
    )
}