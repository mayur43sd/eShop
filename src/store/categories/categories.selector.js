import {createSelector} from 'reselect';

const selectCategoriesReducer = (state) => state.categories ;

const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
)




export const getCategoriesMap =createSelector(
    [selectCategories] ,
    (categories) => categories.reduce((acc,docSnapshot) => { 
        const {title ,items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc
      } , {} )
) 

export const selectCategoriesIsLoading =  createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)