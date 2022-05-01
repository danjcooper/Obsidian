import React from 'react';
import { Faq } from '../../Components';
import styles from './style.module.css';

const About = () => {
    // TODO - Update questions to visible in JSON.
    return (
        <>
            <p>
                Here are few useful links and special thanks.
                <br />
                <ul>
                    <li>The Repo.</li>
                    <li>The Api I build with all the terrace house data..</li>
                    <li>Contact details.</li>
                </ul>
            </p>
            <Faq />
        </>
    );
};

export default About;
