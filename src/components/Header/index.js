import React, { useState } from 'react';
import Navigation from '../Nav/index';


function Header(props) {
    const {navOptions, setCurrentNavSelected} = props;

    return (
        <div>
            <header>
                <Navigation
                    navOptions={navOptions}
                    setCurrentNavSelected={setCurrentNavSelected}
                />
            </header>
        </div>
    )
}

export default Header;