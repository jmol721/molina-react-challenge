import React, { useState } from 'react';
import About from '../About/index';
import ProjectsComponent from '../Project';
import ContactForm from '../Contact';
import Resume from '../Resume';
import './Main.css';

function Main(props) {
    const { navOptions, currentNavSelected } = props;
    
    return (
        <main className='main'>
            {currentNavSelected === navOptions[0].id && <About/>}
            {currentNavSelected === navOptions[1].id && <ProjectsComponent/>}
            {currentNavSelected === navOptions[2].id && <ContactForm/>}
            {currentNavSelected === navOptions[3].id && <Resume/>}
        </main>
    )
}

export default Main;