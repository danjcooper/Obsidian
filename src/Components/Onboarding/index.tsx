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
            <button disabled={currentIndex == onboardingSteps.length - 1} onClick={incrementIndex}>
                Next
            </button>
            <button disabled={currentIndex === 0} onClick={decrementIndex}>
                Previous
            </button>
            <p>{onboardingSteps[currentIndex].description}</p>
        </section>
    );
};

export default Onboarding;
