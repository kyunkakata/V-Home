import * as ActionTypes from '../actions/action-type';

const initialState = {
    actionType: '',
    signIn: {
        isLoading: false,
        data: null,
        message: ''
    },
    signUp: {
        isLoading: false,
        data: null,
        message: ''
    },
    login: {
        isLoading: false,
        data: null,
        message: ''
    }
};

export default (state = initialState, action) => {
    state.actionType = action.type;
    switch (action.type) {
        case ActionTypes.SIGN_IN_SUCCEED:
            console.log('11' + action.message);
            return {
                login: {
                    isLoading: false,
                    data: action.user,
                    message: action.message
                }
            };
        default:
            return state;
    }
}