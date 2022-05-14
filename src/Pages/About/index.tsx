import React from 'react';
import { Faq, NavigationHeader } from '../../Components';
import styles from './style.module.css';

const About = () => {
    // TODO - Update questions to visible in JSON.
    return (
        <>
            <NavigationHeader />
            <section>
                <h2>Special Thanks to</h2>
                <p>Terrace house socials. For making it so easy to get instagram data.</p>
                <p>TerraceMouse & Goob for translating and subtitling the original (and best) season.</p>
            </section>
            <p>
                Here are few useful links.
                <br />
                <ul className={styles.linkList}>
                    <li>
                        <a href='https://github.com/iamdanielcooper/Obsidian/' target='_blank'>
                            Front End Repo
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/iamdanielcooper/terrace-house-game-server/' target='_blank'>
                            Back End Repo
                        </a>
                    </li>
                    <li>
                        <a href='http://www.iamdanielcooper.com/' target='_blank'>
                            My Website
                        </a>
                    </li>
                </ul>
            </p>
            <Faq />
        </>
    );
};

export default About;
