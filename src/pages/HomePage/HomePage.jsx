import React from 'react'
import './HomePage.scss'
import Img from 'react-image'

const HomePage = () => {
    return <div className="HomePage">
        <h1>Nick & Emily</h1>
        <p>May 8th, 2020 - New Orleans</p>
        <Img className="home-image" src={"https://i.imgur.com/Fynn9e2.jpg"} alt="nick and emily" />
        <h2>Our Story</h2>
        <div className='home-story'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa id. Dui id ornare arcu odio ut sem. Accumsan tortor posuere ac ut consequat semper viverra nam. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Tellus cras adipiscing enim eu turpis egestas. Vitae justo eget magna fermentum iaculis. Elit duis tristique sollicitudin nibh sit amet commodo. Senectus et netus et malesuada fames ac turpis. Potenti nullam ac tortor vitae purus. Purus ut faucibus pulvinar elementum integer enim neque. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Volutpat est velit egestas dui id ornare arcu odio. Magna eget est lorem ipsum dolor sit amet consectetur. Habitant morbi tristique senectus et netus. Magna fermentum iaculis eu non diam phasellus. Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </div>
    </div>
}

export default HomePage