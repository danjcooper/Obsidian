import React from 'react';
import { props } from './interfaces';
import styles from './style.module.css';
import { NavHashLink } from 'react-router-hash-link';

const FaqNav = ({ questions }: props) => {
    return (
        <nav className={styles.nav}>
            {questions.map((category, index) => (
                <NavHashLink smooth to={`#${index}`} key={index}>
                    {category.categoryName}
                </NavHashLink>
            ))}
        </nav>
    );
};

export default FaqNav;
