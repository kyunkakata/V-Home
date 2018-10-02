import * as ActionTypes from './action-type';

export const changeLanguage = (language) => ({
    type: ActionTypes.CHANGE_LANGUAGE,
    language: language
});