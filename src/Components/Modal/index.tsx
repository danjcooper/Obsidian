import React, { Children, useState } from 'react';
import styles from './style.module.css';

const Modal = ({ show, close, children }: any) => {
    return (
        <div>
            {show ? (
                <>
                    <div className={show ? styles.active : styles.inactive}>{children}</div>
                    <button onClick={close}>Open</button>
                </>
            ) : null}
        </div>
    );
};

export default Modal;
