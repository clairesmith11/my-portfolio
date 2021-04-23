import React from 'react';
import SocialIcons from './socialIcons';

const Footer = () => {
    return (
        <footer className="footer d-flex flex-column align-items-center justify-content-center">
            <div className="text-center" style={{ width: '80%' }}>
                <p classname="text-light">&copy; 2021: All rights reserved. Created by Claire Smith using Gatsby.js.</p>
            </div>
            <SocialIcons color="color-light" />
        </footer>
    );
};

export default Footer;
