import {all ,call ,put , takeLatest } from 'redux-saga/effects'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { CATEGORIES_ACTION_TYPES } from './categories.types';
import { fetchCategoriesSuccess ,fetchCategoriesFail } from './categories.actions';


export function* fetchCategoriesAsync() {
    try{
        const categoryMap = yield call(getCategoriesAndDocuments)
        yield put(fetchCategoriesSuccess (categoryMap))

    }catch(error)
    {
        yield put(fetchCategoriesFail (error))
    }
}


export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START , fetchCategoriesAsync)
}

export function* categoriesSaga() {

    yield all([call(onFetchCategories)])
}

