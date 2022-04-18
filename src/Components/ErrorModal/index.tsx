import React from 'react';
import { props } from './interfaces';

const ErrorModal = ({ message }: props) => {
    return <p>{message}</p>;
};

export default ErrorModal;
