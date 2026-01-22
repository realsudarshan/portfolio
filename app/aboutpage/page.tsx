"use client"
import React from 'react';
import './About.css';

import AboutBox from '../../components/aboutbox';

const About = () => {
    const showResume = async () => {
        window?.open('/resume.pdf', '_blank');
    }


    return (
      <section style={{ display: 'flex',gap:'20px', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
         <div> 
            <h2 className="section__title">About Me </h2>
</div>
            {/* <div className="about__container grid"> */}
            <div>
            <img 
    src="/sudarshan.jpg" // Directly reference the image from the public folder
    alt="my img"
    style={{
        borderRadius: '50%', // Makes the image round
        width: '200px',       // Set the desired width
        height: '200px',      // Set the desired height
        objectFit: 'cover',  // Ensures the image covers the circle without distortion
    }} 
/>
</div>
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Sudarshan, and I'm based in Kathmandu,Nepal. I am currently studying at National collage of Engineering  at Lalitpur,Nepal.<br /><br />
                            Reflecting on my journey so far, I can honestly say it's been a beautiful ride and I hope to grow even further as Software Engineer. My current focus these days
                            is on expanidng my portfolio by building more projects that I can add on here, as well as being a great team player at my current role.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Postgres SQL</li>
                            <li>NextJS</li>
                        </ul>
                        <a href="/resume.pdf" download="Sudarshan_Resume.pdf">
                
            
                        <button className="btn" style={{
        backgroundColor: '#4CAF50', // Green background
        color: 'white', // White text color
        padding: '10px 20px', // Padding for a more clickable area
        fontSize: '16px', // Larger font size
        border: 'none', // Remove border
        borderRadius: '5px', // Rounded corners
        cursor: 'pointer', // Change cursor to pointer on hover
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for 3D effect
        transition: 'background-color 0.3s ease', // Smooth transition on hover
    }} onClick={showResume}>Donwload CV</button>
                    </a>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About