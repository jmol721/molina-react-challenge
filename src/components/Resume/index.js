import React from 'react';
import resume from '../../assets/resume/Resume.jpg';

function Resume() {
    return (
        <div>
            <h1>
                My Resume:
            </h1>
            <img src={resume} alt='Resume Screenshot' />
            <br />
            <a href={resume} download>Download a copy here!</a>
        </div>
    )
}

export default Resume;