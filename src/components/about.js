import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "gatsby";
import Image from "gatsby-image";
import Bounce from 'react-reveal/Bounce';

import SocialIcons from './socialIcons';

const About = ({ data }) => {

  return (
    <Container id="about" className="full-height p-5">
      <Row>
        <Col md={7} className="d-flex flex-column justify-content-center">
          <div>
            <h4 className="mb-3"><code>Hello World!</code></h4>
            <p>I am a self-taught web developer from north central Indiana. My focus is the MERN full stack with additional training in vanilla JavaScript and jQuery, responsive web design with HTML and CSS as well as CSS libraries like Bootstrap, and the Wordpress content management system. </p>
            <p>I discovered my love for coding by accident in May 2020, and I have been writing code every day since. My training regimen consists of freeCodeCamp, from which I have earned three certifications (and I am nearly finished with my fourth), video courses from quality instructors like Brad Traversy and Max Schwarzmuller, and online research into Github repos and official docs.</p>
            <p>My path to web development has been a winding one: I earned my Bachelor's degree in Journalism in 2011 and worked as a small-town reporter for four years before moving into the banking industry. It wasn't until I logged my first <code>Hello World!</code> that I truly knew I had found my passion.</p>
            <Bounce left>
              <SocialIcons color="color-primary" />
            </Bounce>
            <Link to='/contact'><Button variant="secondary" className="mx-0 my-3">Contact me</Button></Link>
          </div>
        </Col>
        <Col md={5}>
          <Image fluid={data.headshot.childImageSharp.fluid} alt="Claire Smith" className="self-portrait rounded" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
