import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const UseEmailPasswordRegistration = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext)

    const handleRegSubmit = (event) =>{
        event.preventDefault()
        const form = event.target 
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        

         // Login with Email Password 
         createUser(email, password)
         .then((result) =>{
             const user = result.user 

             updateUserProfile(name)
             .then(()=>{
                 form.reset()
             }).catch((error) => {

               });
               
         })
         .catch((error) => {
            const errorMessage = error.message;
          });
    }
    return {handleRegSubmit}
};

export default UseEmailPasswordRegistration; 