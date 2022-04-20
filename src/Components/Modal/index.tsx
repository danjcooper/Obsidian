import React, { Children, useState } from 'react';
import styles from './style.module.css';

const Modal = ({ children }: any) => {
    const [active, setActive] = useState<boolean>(false);

    const toggleModal = () => {
        setActive(prevState => !prevState);
    };

    return (
        <div>
            {active ? (
                <div className={active ? styles.active : styles.inactive}>
                    <p>I am some data</p>
                    {children}
                </div>
            ) : (
                <button onClick={toggleModal}>Open</button>
            )}
        </div>
    );
};

export default Modal;
