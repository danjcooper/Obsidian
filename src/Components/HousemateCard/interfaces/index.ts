import { HousemateCardPosition } from '../../../Enums';
import { housemateData } from '../../../Interfaces';

export interface props {
    housemateData: housemateData;
    handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    delayBeforeDisplay: number;
    position: HousemateCardPosition;
}
