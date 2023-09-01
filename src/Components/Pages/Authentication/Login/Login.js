import React from 'react';
import { Link } from 'react-router-dom';
import UseEmailPasswordLogin from '../../../../Root/Firebase/UseEmailPasswordLogin';
import UseGoogleAuth from '../../../../Root/Firebase/UseGoogleAuth';

const Login = () => {
    const {handleLoginSubmit} = UseEmailPasswordLogin()
    const {handleGoogleAuth} = UseGoogleAuth()

    return (
        <section>
            <div className='w-2/5 m-auto border-2 my-10 p-11 shadow-md rounded-md'>
                <h1 className='text-4xl my-8 font-bold'>Login Now!</h1>

                <form action="" onSubmit={handleLoginSubmit}>
                    <input type="email" name='email' placeholder='Your Email' className="input input-bordered w-full my-2" />
                    <input type="password" name='password' placeholder='Enter Your Password' className="input input-bordered w-full my-2" />
                    <button type="submit" className="btn btn-neutral my-5">Login</button>
                    <p>Create an Account <Link to='/registration'>Registartion Now</Link></p>
                </form>

                <div className="divider">OR</div>
                    <button onClick={handleGoogleAuth} className='w-full bg-red-600 py-2 font-bold rounded-md text-white'>Google Login</button>

            </div>
        </section>
    );
};

export default Login;