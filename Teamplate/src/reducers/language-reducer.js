
// config
import { I18n, ActionTypes, Consts, AsyncStorage } from '../configs/app-config'

// initialize state
const initialState = {
    language: Consts.LANGUAGE_DEFAULT
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_LANGUAGE:
            I18n.locale = action.language;
            //  AsyncStorage.setData(Consts.KEY_LANGUAGE, action.language);
            return { ...state, language: action.language };
        default:
            return state;
    }
};
