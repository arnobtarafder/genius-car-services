import React from 'react';
import { Helmet } from 'react-helmet-async';

const BrowserTitle = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title>{title} | Genius Car Services</title>
            </Helmet>
        </div>
    );
};

export default BrowserTitle;