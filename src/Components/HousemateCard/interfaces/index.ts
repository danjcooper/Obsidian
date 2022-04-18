import { housemateData } from '../../../Interfaces';

export interface props {
    housemateData: housemateData;
    handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
