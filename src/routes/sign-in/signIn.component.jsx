
import { signInWithGooglePopup , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

         const logGoogleUser = async() => {
            const response = await signInWithGooglePopup() ;
            const {user} = response;
            const userref = createUserDocumentFromAuth(user)
            console.log(userref)
        }
    

    return(<div>
        <h1>this is sign in</h1>

        <button onClick={logGoogleUser}>Sign in with Google</button>
        
        </div>)
}

export default SignIn;