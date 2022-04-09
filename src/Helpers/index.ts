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

export { generateSeasonsString };
