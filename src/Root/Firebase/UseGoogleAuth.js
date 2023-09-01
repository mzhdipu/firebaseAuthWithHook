import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const UseGoogleAuth = () => {
    const {signInWithGoogle} = useContext(AuthContext)

    const handleGoogleAuth = () =>{
        signInWithGoogle()
        .then(result => {
            const user = result.user 
            console.log(user)
        }).catch((error) => {
            // Handle error here
            console.error(error);
          });
    }
    return {handleGoogleAuth}
};

export default UseGoogleAuth;