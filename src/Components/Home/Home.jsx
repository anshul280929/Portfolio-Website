import React from 'react'
import './Home.css'

import profile from '../../assets/profile.jpg'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-left">
                
                <h1><span>I'm Anshul Bhaskar </span>Final Year Computer Science Student</h1>
                <p>
                    I am passionate about building full stack applications and exploring AI/ML and Cloud Computing.
                </p>    

                <div className="button">
                    <button className='connect'>Connect with me</button>
                    <button className="resume">My Resume</button>
                </div>

                
            </div>
            {/* Right: profile image */}
            <div className="home-right">
                <img src={profile} alt="Anshul" className="home-image" />
            </div>
        </div>
    )
}

export default Home
