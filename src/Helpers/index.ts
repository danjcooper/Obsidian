import { GameQuestions } from '../Enums';
import { housemateData, roundData } from '../Interfaces';

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

const generateRoundData = (housemateList: housemateData[]): roundData => {
    // get base Housemate. If we need to change a housemate later, it won't be this one.
    const housemateOne: housemateData = getRandomHousemate(housemateList);

    // Get the question, so we know if housemate 2 is suitable.
    var questionError = true;
    let question: string = '';

    while (questionError) {
        question = getRandomQuestion();

        let questionCheck = housemateList.map(i => getValueFromQuestion(i, question));

        if (!questionCheck.every(a => a === questionCheck[0])) {
            questionError = false;
        }
    }

    const housemateOneAnswerValue: number = getValueFromQuestion(housemateOne, question);

    // Filter the rest of the housemates so we won't get a draw.
    const filteredHousemates: housemateData[] = housemateList.filter(
        i => getValueFromQuestion(i, question) !== housemateOneAnswerValue
    );

    const housemateTwo: housemateData = getRandomHousemate(filteredHousemates);
    const housemateTwoAnswerValue: number = getValueFromQuestion(housemateTwo, question);

    const winner: number = housemateOneAnswerValue > housemateTwoAnswerValue ? housemateOne.id : housemateTwo.id;

    return {
        housemateOne: housemateOne,
        housemateTwo: housemateTwo,
        question: question,
        winner: winner,
    };
};

const getRandomQuestion = (): string => {
    const questions: string[] = Object.values(GameQuestions);
    const randomIndex: number = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
};

const getRandomHousemate = (housemateList: housemateData[]): housemateData => {
    return housemateList[Math.floor(Math.random() * housemateList.length)];
};

const getValueFromQuestion = (housemate: housemateData, question: string): number => {
    switch (question) {
        case GameQuestions.MORE_DATES:
            return housemate.totalDates;

        case GameQuestions.MORE_HOUSEMATES:
            return housemate.totalLivedWith;

        case GameQuestions.MORE_INSTAGRAM_FOLLOWERS:
            return housemate.instagramFollowers;

        case GameQuestions.MORE_TIME_IN_HOUSE:
            return housemate.totalWeeksInHouse;

        case GameQuestions.OLDER_NOW:
            return housemate.age;

        case GameQuestions.OLDER_WHEN_ENTERED:
            return housemate.ageWhenEntered;

        default:
            return 0;
    }
};

export { generateSeasonsString, generateRoundData };
