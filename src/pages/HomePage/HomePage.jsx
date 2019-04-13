import React from 'react'
import './HomePage.scss'
import Img from 'react-image'

const HomePage = () => {
    return <div className="HomePage">
        <h1>Nick & Emily</h1>
        <p>May 8th, 2020 - New Orleans</p>
        <Img className="home-image" src={"https://i.imgur.com/Fynn9e2.jpg"} alt="nick and emily" />
        <h2>Our Story</h2>
    </div>
}

export default HomePage