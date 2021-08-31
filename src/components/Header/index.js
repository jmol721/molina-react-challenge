import React, { useState } from 'react';
import About from '../About/index';
import Navigation from '../Nav/index';
import ProjectsComponent from '../Project';
import ContactForm from '../Contact';
import Resume from '../Resume';

function Header() {

    const [navOptions] = useState([
        { id: 0, name: 'About Me' },
        { id: 1, name: 'Portfolio' },
        { id: 2, name: 'Contact' },
        { id: 3, name: 'Resume' }
    ]);
    const [currentNavSelected, setCurrentNavSelected] = useState(navOptions[0].id);

    return (
        <header>
            <Navigation
                navOptions={navOptions}
                setCurrentNavSelected={setCurrentNavSelected}
            />
            <main>
            {currentNavSelected === navOptions[0].id && <About/>}
            {currentNavSelected === navOptions[1].id && <ProjectsComponent/>}
            {currentNavSelected === navOptions[2].id && <ContactForm/>}
            {currentNavSelected === navOptions[3].id && <Resume/>}
            </main>
        </header>
    )
}

export default Header;