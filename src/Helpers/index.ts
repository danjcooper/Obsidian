import { GameQuestions } from '../Enums';
import { housemateData } from '../Interfaces';

const generateSeasonsString = (input: string[]): string => {
    let output: string = '';
    for (let i = 0; i < input.length; i++) {
        output += input[i];
        if (i === input.length - 1) {
            break;
        } else {
            output += '+';
        }
    }
    return output;
};

const getRandomFromArray = (arr: any[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

//TODO - Type this function
const generateRoundData = (housemateList: housemateData[]) => {
    // Set one housemate as the base housemate.
    const housemateOne = getRandomFromArray(housemateList);
    let housemateTwo = getRandomFromArray(housemateList);

    // If we get the same random housemate update that housemate until it's not the same.
    while (housemateOne.name === housemateTwo.name) {
        housemateTwo = getRandomFromArray(housemateList);
    }

    const op = {
        housemateOne: housemateOne,
        housemateTwo: housemateTwo,
    };

    return op;
};

export { generateSeasonsString, generateRoundData };
