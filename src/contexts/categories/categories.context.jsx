import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const CategoriesContext =  createContext({
    categoriesMap:[]
});
export const CategoryProvider = ({children}) => {

    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
            
        }
        getCategories();
    } , [])
   


    const [categoriesMap , setCategoriesMap] = useState([]);
    const value = {categoriesMap};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}

