import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../Components';
import styles from './style.module.css';

const Homepage = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <div className='page'>
            <div className={styles.homepageContainer}>
                <header>
                    <h1 className={styles.logo}>
                        TERRACE
                        <br />
                        STATS
                    </h1>
                </header>

                <section className={styles.gameIntro}>
                    <h2 className={styles.subHeading}>Konbanwa!</h2>
                    <p>こんにちは</p>
                    <h3>Welcome to terrace house stats.</h3>
                    <h3>A game to test your Terrace House knowledge.</h3>
                    <Link className={styles.softLink} to='/about'>
                        About the game
                    </Link>
                </section>

                <Link className={styles.playButtonLink} to='/settings'>
                    <button className={styles.playButton} type='button'>
                        Play!
                    </button>
                </Link>

                <p onClick={() => setShowModal(true)}>How to play.</p>

                <Modal show={showModal} close={() => {}}>
                    // TODO - This will use an onboarding flow to show the user how to play the game.
                    <h1>This will show the onboarding flow</h1>
                    <button type='button' onClick={() => setShowModal(false)}>
                        Close
                    </button>
                </Modal>
            </div>
        </div>
    );
};

export default Homepage;
