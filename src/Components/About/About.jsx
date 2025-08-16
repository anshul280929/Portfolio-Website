import React from 'react'
import './About.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import gmail from '../../assets/gmail.png'
import profile from '../../assets/about-image.png'

const About = () => {
  return (
    <div className='about'>
      <h1 className='about-title'>About me</h1>
      <div className="about-sections">
        
        {/* Left Section (Image + Social Icons) */}
        <div className="about-left">
          <img src={profile} alt="anshul" className="about-image" />
          <div className='socials'>
            <a href="https://github.com/anshul280929" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className='github' />
            </a>
            <a href="https://www.linkedin.com/in/anshul-bhaskar-940b5b1b0/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className='linkedin' />
            </a>
            <a href="mailto:anshulbhaskar50@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={gmail} alt="gmail" className='gmail' />
            </a>
          </div>
        </div>

        {/* Right Section (Heading + Paragraphs + New Sections) */}
        <div className="about-right">
          <h2>Hi, I'm Anshul Bhaskar</h2>
          <p className="about-para">
            I am a final year Computer Science student with a passion for building full stack applications.
            I have a keen interest in exploring AI/ML and Cloud Computing. 
          </p>
          <p className="about-para">
            I have worked on various projects that involve both front-end and back-end development.
            My journey in tech has been driven by a desire to create impactful solutions and continuously learn new technologies.
            I enjoy collaborating on projects that challenge my skills and allow me to grow as a developer.
            In my free time, I love contributing to open source projects and staying updated with the latest trends in the tech industry.
          </p>

          {/* Education + Interests Section */}
<div className="about-boxes">
  <div className="about-box">
    <h3>Education</h3>
    <p><strong>Dr. Ambedkar Institute of Technology, Bengaluru</strong></p>
    <p>Graduate - 2026</p>
    <p>CGPA - 8.39</p>
  </div>

  <div className="about-box">
    <h3>Interests</h3>
    <p>
      I love dancing, sketching, video editing, playing cricket and badminton.
    </p>
  </div>
</div>

        </div>

      </div>
    </div>
  )
}

export default About
