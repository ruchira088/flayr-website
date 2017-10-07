import React from "react"
import { Route } from "react-router-dom"

import Home from "pages/Home/Index"
import Gallery from "pages/Gallery/Index"
import AboutUs from "pages/AboutUs/Index"
import Terms from "pages/Terms/Index"
import ContactUs from "pages/ContactUs/Index"

export default () => (
    <div className="routes">
        <Route exact path="/" component={Home} label="Home"/>
        <Route path="/gallery" component={Gallery} label="Gallery"/>
        <Route path="/about-us" component={AboutUs} label="About"/>
        <Route path="/terms" component={Terms} label="Terms"/>
        <Route path="/contact-us" component={ContactUs} label="Contact"/>
    </div>
)