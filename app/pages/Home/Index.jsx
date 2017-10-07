import React from "react"
import "styles/home-page.scss"
import backgroundImage from "assets/image-7.jpg"

const HeroSection = () => (
    <div className="hero-section">
        <img className="background-image" src={backgroundImage} alt="Hero image"/>
        <div className="hero-body">
            <div className="hero-caption">
                Mobile hair and makeup
            </div>
        </div>
    </div>
)


export default () => (
    <div className="home-page">
        <HeroSection/>
    </div>
)