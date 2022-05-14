import React from 'react';
import { props } from './interfaces';

const PaginationController = ({ offset, setOffset, isEndOfResults }: props) => {
    return (
        <>
            <button disabled={offset <= 0 ? true : false} onClick={() => setOffset(offset - 10)}>
                -
            </button>
            <button disabled={isEndOfResults} onClick={() => setOffset(offset + 10)}>
                +
            </button>
        </>
    );
};

export default PaginationController;
