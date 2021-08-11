import React from 'react';
// import coverPic from '../../assets/cover/IMG-0500.jpg';
import coverPic2 from '../../assets/cover/image_67216385.JPG';


function About() {
    return (
        <section className="about">
            <div>
                <h1 className="title">About Me</h1>
                {/* <img src={coverPic} className="cover-pic" alt="Austin skyline at night from a paddleboard" /> */}
                <img src={coverPic2} className="cover-pic2" alt="Me on top of a boulder" />
            </div>
            <div className="short-bio">
                <p>
                    My name is Jose Molina and I am currently a 4th grade teacher living in Austin. I've done it for 6 years and love working with my students.
                    I've had my eye on being a web developer for a while now, and I have finally taken that leap of faith into this wild world.
                    It's been a lot to take in, but it is something I look forward to on a daily basis. It's scary, but exciting to jump into this 
                    new world, and I honestly can't wait.
                </p>
            </div>
        </section>
    )
}

export default About;