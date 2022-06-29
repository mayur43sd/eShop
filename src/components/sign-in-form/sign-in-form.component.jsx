import'./sign-in-form.styles.scss' ;
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { googleSignInStart ,emailSignInStart } from '../../store/user/user.actions';

const defaultFormFields = {
    email:'',
    password:'',
}




const SignInForm = () => {

    

    const [formFields , setFormFields] = useState(defaultFormFields);
    const {email ,password } = formFields ; 
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {name , value} = event.target ; 
        setFormFields({...formFields , [name]:value});
    }

    const removeFields = () => {
        setFormFields(defaultFormFields);
    }

    const logGoogleUser = () => {
        dispatch(googleSignInStart()) ;
    }

    const signInUser = async(event) => {
        event.preventDefault();
        try{
            dispatch(emailSignInStart(email ,password));
            removeFields();

        }catch(error)
        {
            if(error.code==='auth/wrong-password')
            alert("incorrect password")
           
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