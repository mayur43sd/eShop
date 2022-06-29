import {all ,call ,put ,takeLatest} from 'redux-saga/effects'
import { USER_ACTION_TYPES } from '../user/user.types'
import { signInSuccess , signInFail, signUpFail , signUpSuccess, signOutSuccess, signOutFail } from './user.actions'
import { getCurrentUser , 
    createUserDocumentFromAuth , 
    signInUserWithEmailAndPassword , 
    createAuthUserWithEmailAndPassword ,
    signOutUser,
    signInWithGooglePopup} from '../../utils/firebase/firebase.utils'

export function* getUserWithGoogleSignIn() {
    const {user} = yield call(signInWithGooglePopup)
    try {
        console.log(user)
        yield call(getSnapshotFromUserAuth ,user)
    } catch (error) {
        yield put(signInFail(error))
    }
}

export function* getUserByEmailAndPassword(action) {

    const { email ,password} = action.payload;
    

    try {
        const {user} = yield call(signInUserWithEmailAndPassword , email ,password)
       
        yield call(getSnapshotFromUserAuth,user)
    } catch (error) {
       
        yield put(signInFail(error))
    }

}

export function* createUserWithSignUp({payload}){
   const {email,password,displayName} = payload;
   try {
       const {user} = yield call(createAuthUserWithEmailAndPassword ,email ,password)
       yield put(signUpSuccess(user , {displayName}))
   } catch (error) {
       yield put(signUpFail(error))
   }

}

export function* signOutUserStart(){
    try {
        yield call(signOutUser)
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFail(error))
    }
}

export function* signInAfterSignUp({payload}) {
    const {user , additionalinfo} = payload
    yield call(getSnapshotFromUserAuth,user,additionalinfo)
}

export function* getSnapshotFromUserAuth(userAuth , additionalinfo) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth , userAuth,additionalinfo);
       
        yield put(signInSuccess({id:userSnapshot.id , ...userSnapshot.data()}))
    } catch (error) {
        yield put(signInFail(error))
        
    }

}

export function* IsUserAuthenticated() {
    try{
        const userAuth = yield call(getCurrentUser);
        if(!userAuth)return;

        console.log(userAuth)

        yield call(getSnapshotFromUserAuth ,userAuth)


    }catch(error){
        yield call(signInFail(error))

    }
}

export function* onGoogleSignIN() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_WITH_GOOGLE_START , getUserWithGoogleSignIn)
  }
  
  export function* onEmailAndPasswordSignIn() {
      yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START ,getUserByEmailAndPassword)
  }

  export function* onSignUpStart(){
      yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START , createUserWithSignUp )
  }
  export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS , signInAfterSignUp )
}
export function* onCheckUserSession() {
   yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION , IsUserAuthenticated)
}

export function* onSignOutStart(){
   yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START , signOutUserStart)
}

export function* userSaga(){
    yield all([call(onCheckUserSession) , 
        call(onGoogleSignIN) , 
        call(onEmailAndPasswordSignIn) ,
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart)
    
    ])
        
}