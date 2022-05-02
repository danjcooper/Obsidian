import React, { useState } from 'react';
import onboardingSteps from './onboardingSteps.json';
import styles from './style.module.css';

const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const incrementIndex = () => {
        setCurrentIndex(currentIndex + 1);
    };
    const decrementIndex = () => {
        setCurrentIndex(currentIndex - 1);
    };

    return (
        <section className={styles.onboardingInfo}>
            <img src={onboardingSteps[currentIndex].imageUrl} alt={onboardingSteps[currentIndex].altText} />
            <button
                className={`${styles.back} ${styles.navButton}`}
                disabled={currentIndex === 0}
                onClick={decrementIndex}
            >
                ᐊ
            </button>
            <button
                className={`${styles.forward} ${styles.navButton}`}
                disabled={currentIndex == onboardingSteps.length - 1}
                onClick={incrementIndex}
            >
                ᐅ
            </button>

            <p>{onboardingSteps[currentIndex].description}</p>
        </section>
    );
};

export default Onboarding;
