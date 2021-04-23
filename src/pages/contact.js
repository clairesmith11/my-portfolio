import * as React from "react";

import Layout from '../components/layout';
import ContactForm from '../components/contactForm';
import './index.scss';

const ContactPage = () => {
    return (
        <Layout>
            <h1 className="main-headline text-center padding-top-lg margin-bottom-md">CONTACT<span className="text-primary">ME</span></h1>
            <ContactForm />
        </Layout>
    );
};

export default ContactPage;