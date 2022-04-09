enum SeasonCodes {
    'Boys & Girls Next Door' = 'B&GND',
    'Closing Door' = 'CD',
    'Boys & Girls in the City' = 'B&GITC',
    'Aloha State' = 'AS',
    'Opening New Doors"' = 'OND',
    'Tokyo 19/20' = 'T1920',
}

enum ActionTypes {
    INCREASE_SCORE = 'INCREASE_SCORE',
    UPDATE_USERNAME = 'UPDATE_USERNAME',
    REMOVE_LIFE = 'REMOVE_LIFE',
    UPDATE_HOUSEMATE_DATA = 'UPDATE_HOUSEMATE_DATA',
    UPDATE_SEASON_DATA = 'UPDATE_SEASON_DATA',
    UPDATE_QUERY_STRING = 'UPDATE_QUERY_STRING',
}

enum ErrorMessages {
    NO_USERNAME = 'A username has not be entered.',
    NO_SEASON_SELECTED = 'No seasons were selected.',
    INVALID_USERNAME = 'Username invalid or contains profanity.',
}

export { SeasonCodes, ActionTypes, ErrorMessages };
