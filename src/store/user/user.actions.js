import { USER_ACTION_TYPES } from "./user.types"
import { createAction } from "../../utils/reducer/reducer.utils"

export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER , user)
}

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(USER_ACTION_TYPES.SIGN_IN_WITH_GOOGLE_START);

export const emailSignInStart = (email,password) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START , {email,password})

export const signInSuccess = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS , user);

export const signInFail = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAIL , error);

export const signUpStart = (email ,password ,displayName) => createAction( USER_ACTION_TYPES.SIGN_UP_START , {email ,password ,displayName})

export const signUpFail = (error) => createAction(USER_ACTION_TYPES.SIGN_UP_FAIL , error)

export const signUpSuccess = (user , additionalinfo) => createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS , {user , additionalinfo})

export const signOutStart = () => createAction(USER_ACTION_TYPES.SIGN_OUT_START)

export const signOutSuccess = () => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)

export const signOutFail = (error) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAIL , error)