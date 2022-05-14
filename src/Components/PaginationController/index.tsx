import React from 'react';
import { props } from './interfaces';
import styles from './style.module.css';

const PaginationController = ({ offset, setOffset, isEndOfResults }: props) => {
    return (
        <section className={styles.paginationNavContainer}>
            <button
                className={styles.paginationNavButton}
                disabled={offset <= 0 ? true : false}
                onClick={() => setOffset(offset - 10)}
            >
                Previous
            </button>
            <button
                className={styles.paginationNavButton}
                disabled={isEndOfResults}
                onClick={() => setOffset(offset + 10)}
            >
                Next
            </button>
        </section>
    );
};

export default PaginationController;
