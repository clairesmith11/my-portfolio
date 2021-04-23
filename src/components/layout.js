import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from '../components/navigation';
import Footer from '../components/footer';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Claire Smith | Web Developer</title>
            </Helmet>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
