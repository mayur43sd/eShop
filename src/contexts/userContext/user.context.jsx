import { createContext, useState , useEffect } from "react";
import { onAuthChangedListner ,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


export const UserContext = createContext({});

export const UserProvider = ({children}) => {
   const [currentUser , setCurrentUser] = useState(null);
   const value = { currentUser , setCurrentUser}

   useEffect(() => {
const unsubscribe = onAuthChangedListner((user)=> {
if(user)
{
    createUserDocumentFromAuth(user);
}
    setCurrentUser(user);
});
    return unsubscribe
   } , [])

   return <UserContext.Provider value={value} >{children}</UserContext.Provider>

}

