import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className='border mt-5 pb-5'>
            <Helmet>
                <title>About | Genius Car Services</title>
            </Helmet>
            <ol className='pt-5'>
            <li>This is the newer version of genesis automobiles</li>
            <li>This website can be a full professional site as it made</li>
            <li>But it is under construction now</li>
            <li>This is a full responsive site</li>
            </ol>
        </div>
    );
};

export default About;