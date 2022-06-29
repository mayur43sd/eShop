import { USER_ACTION_TYPES } from "./user.types";

export const INITIAL_STATE = {
    currentUser:null,
    error:null
}

export const userReducer = (state = INITIAL_STATE , action = {}) => {

    const {type ,payload} = action;
    switch(type)
    {
        case USER_ACTION_TYPES.CHECK_USER_SESSION:
            return {
                ...state,
            };
            case USER_ACTION_TYPES.SIGN_IN_FAIL:
            return {
                ...state,
                error:payload
            };
            case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload
            };
            case USER_ACTION_TYPES.SIGN_UP_FAIL:
            return {
                ...state,
                error:payload
            };
            case USER_ACTION_TYPES.SIGN_OUT_FAIL:
            return {
                ...state,
                error:payload
            };
            case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state,
                 currentUser:null
            };
         default:
           return state;
    }
}


