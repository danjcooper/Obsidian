import { Dispatch, SetStateAction } from 'react';

export interface props {
    offset: number;
    setOffset: (input: number) => void;
    isEndOfResults: boolean;
}
