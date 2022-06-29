import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.actions";

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confmpassword:''
}


const SignUpForm = () => {


    const [formFields , setFormFields] = useState(defaultFormFields);

    const {displayName , email , password ,confmpassword} = formFields ;

    const dispatch = useDispatch();


    const removeFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {

        const {name , value} = event.target;
        setFormFields({...formFields , [name]:value})
     }

     const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confmpassword)
        {
            alert("password dont match");
            return;
        }
        else
        {
            try{
                dispatch(signUpStart(email,password,displayName))
                removeFields();
    
            }catch(error){
                console.log(error)
            }
         
        }
    
    
    
    
    }




return(
    <div className="sign-up-container">
      <p>don't have an account</p>
       <h2>Sign up here</h2>
       <form onSubmit={handleSubmit}>
       
       <FormInput label='Display Name' type={'text'} required name="displayName" value={displayName} onChange={handleChange}/>
       
       <FormInput label='Email' type={'email'} required name="email" value={email} onChange={handleChange}/>
      
       <FormInput label='Password' type={'password'} required name="password" value={password} onChange={handleChange}/>
    
       <FormInput label='Confirm Password' type={'password'} required name="confmpassword" value={confmpassword} onChange={handleChange}/>
       <Button type="submit" buttonType='' >sign up</Button>
       </form>
    
    
    
    </div>)

}

export default SignUpForm ;