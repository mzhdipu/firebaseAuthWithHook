import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const UseEmailPasswordLogin = () => {
    const {signin} = useContext(AuthContext)

    const handleLoginSubmit = (event) =>{
        event.preventDefault()
        const form = event.target 
        const email = form.email.value
        const password = form.password.value

        signin(email, password)
            .then(result=>{
                const user = result.user 
                console.log(user)
            })
    }
    return {
        handleLoginSubmit
    }
};

export default UseEmailPasswordLogin;