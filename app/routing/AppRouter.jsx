import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import MenuBar from "./MenuBar"
import Routes from "./Routes"

import "styles/common.scss"

export default () => (
    <Router>
        <div className="router">
            <MenuBar/>
            <Routes/>
        </div>
    </Router>
)