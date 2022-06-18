import'./sign-in-form.styles.scss' ;
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { signInWithGooglePopup ,auth  } from "../../utils/firebase/firebase.utils";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const defaultFormFields = {
    email:'',
    password:'',
}




const SignInForm = () => {

    

    const [formFields , setFormFields] = useState(defaultFormFields);
    const {email ,password } = formFields ; 

    const handleChange = (event) => {
        const {name , value} = event.target ; 
        setFormFields({...formFields , [name]:value});
    }

    const removeFields = () => {
        setFormFields(defaultFormFields);
    }

    const logGoogleUser = async() => {
         await signInWithGooglePopup() ;
    }

    const signInUser = async(event) => {
        event.preventDefault();
        try{
             await signInWithEmailAndPassword(auth , email ,password)
            removeFields();

        }catch(error)
        {
            if(error.code==='auth/wrong-password')
            console.log("incorrect password")
           
           setFormFields({...formFields , isPasswordCorrect:false});
          

        }
        
    }

    return(<div className='sign-in-container'>
        <h1>Welcome to Sign In Page </h1>
        <form onSubmit={signInUser}>
        <FormInput label='Email' type={'email'} value={email} name='email' required onChange={handleChange} />
        <FormInput label='Password' type={'password'} value={password} name='password' required onChange={handleChange} />
        
        <div className='buttons-container'>
        <Button type='submit' >Sign In </Button>
        <Button type='button' onClick={logGoogleUser} buttonType='google' >Google Sign In</Button>
        </div>
        </form>
        </div>)
}

export default SignInForm;