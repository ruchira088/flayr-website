import React from "react"
import { Link } from "react-router-dom"
import Routes from "./Routes"

import "styles/menu-bar.scss"

const menuItems = React.Children.map(
    Routes().props.children,
    ({props: {label, path}}) => ({label, path})
)

const MenuItem = ({ label, path }) => (
    <div className="menu-item">
        <Link to={path} className="menu-label">{ label }</Link>
    </div>
)

export default () => (
    <div className="menu-bar">
        <div className="menu-title"> Flayr </div>
        <div className="menu-links">
            { menuItems.map((props, index) => <MenuItem key={index} {...props}/>) }
        </div>
    </div>
)