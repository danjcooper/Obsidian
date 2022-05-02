import React from 'react';
import styles from './style.module.css';
import { props } from './interfaces';

const Modal = ({ show, close, children }: props) => {
    return show ? (
        <div>
            <div className={styles.active}>
                {children}
                <button className={styles.closeModalButton} onClick={close}>
                    ✖
                </button>
            </div>
        </div>
    ) : null;
};

export default Modal;
