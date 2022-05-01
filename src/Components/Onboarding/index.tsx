import React, { useState } from 'react';
import onboardingSteps from './onboardingSteps.json';

const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateIndex = () => {
        setCurrentIndex(currentIndex == onboardingSteps.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <>
            <img src={onboardingSteps[currentIndex].imageUrl} alt={onboardingSteps[currentIndex].altText} />
            <p>{onboardingSteps[currentIndex].description}</p>
            <button onClick={updateIndex}>Next</button>
        </>
    );
};

export default Onboarding;
