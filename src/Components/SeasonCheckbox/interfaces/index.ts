import { seasonData } from '../../../Interfaces';

export interface props {
    data: seasonData;
    handleClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}
