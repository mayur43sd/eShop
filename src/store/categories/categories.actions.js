import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./categories.types"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES , categoriesMap);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS ,categoriesMap);
export const fetchCategoriesFail = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL , error);


export const fetchCategoriesAsync = () => async(dispatch) => {
dispatch(fetchCategoriesStart())
    try{
        const categoryMap = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoryMap))

    }catch(error)
    {
        dispatch(fetchCategoriesFail(error))

    }
   

}