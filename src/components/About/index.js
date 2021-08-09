import React from 'react';
// import coverPic from '../../assets/cover/coverPic.jpg';
// import pic1 from '../../assets/cover/pic1.jpg';


function About() {
    return (
        <section className="about">
            <div>
                <h1 className="title">Jose M</h1>
                {/* <img src={pic1} className="cover-pic" alt="Austin skyline at night from a paddleboard" /> */}
            </div>
            <div className="short-bio">
                <p>
                    My name is Jose Molina and I am currently a 4th grade teacher. I've done it for 6 years and love working with my students.
                    I've had my eye on being a web developer for a while now, and I have finally taken that leap of faith into this wild world.
                    It's been a lot to take in, but it is something I look forward to on a daily basis. It's scary, but exciting to jump into this 
                    new world, and I honestly can't wait.
                </p>
            </div>
        </section>
    )
}

export default About;