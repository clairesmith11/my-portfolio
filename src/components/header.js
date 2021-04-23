import React from 'react';
import { Link } from 'gatsby';
import Pulse from 'react-reveal/Pulse';
import Bounce from 'react-reveal/Bounce';

const Header = () => {
    return (
        <div className="header margin-bottom-lg">
            <div className="full-height d-flex flex-column align-items-center justify-content-center">
                <Pulse>
                    <h1 className="main-headline">CLAIRE<span className="text-primary">SMITH</span></h1>
                </Pulse>
                <h3 className="sub-headline">FULLSTACK DEVELOPER</h3>
            </div>
            <Link to="#about">
                <div className="header__scroll-button">
                    &#8964;
                </div>
            </Link >
        </div>
    );
};

export default Header;
