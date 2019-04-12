import React from 'react'
import './HomePage.scss'
import Img from 'react-image'

const HomePage = () => {
    return <div className="HomePage">
        <h1>Nick & Emily</h1>
        <p>May 8th, 2020 - New Orleans</p>
        <Img src={"https://i.imgur.com/Fynn9e2.jpg"} alt="nick and emily" />
    </div>
}

export default HomePage