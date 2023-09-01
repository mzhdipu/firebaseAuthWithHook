import React from 'react';
import { Link } from 'react-router-dom';
import UseEmailPasswordRegistration from '../../../../Root/Firebase/UseEmailPasswordRegistration';
import UseGoogleAuth from '../../../../Root/Firebase/UseGoogleAuth';

const Registration = () => {
    // Registration with Email & Password
    const {handleRegSubmit} = UseEmailPasswordRegistration()   
    const {handleGoogleAuth} = UseGoogleAuth()

    return (
        <section>
            <div className='w-2/5 m-auto border-2 my-10 p-11 shadow-md rounded-md'>
                <h1 className='text-4xl my-8 font-bold'>Registration Now!</h1>

                <form action="" onSubmit={handleRegSubmit}>
                    <input type="text" name='name' placeholder='Your Name' className="input input-bordered w-full my-2" />
                    <input type="email" name='email' placeholder='Your Email' className="input input-bordered w-full my-2" />
                    <input type="password" name='password' placeholder='Enter Your Password' className="input input-bordered w-full my-2" />
                    <input type="password" name='confirmPassword' placeholder='Confirm Password' className="input input-bordered w-full my-2" />
                    <button type="submit" className="btn btn-neutral my-5">Registration</button>
                    <p>Already have an account? <Link to='/login'>Login Now</Link></p>
                </form>

                <div className="divider">OR</div>
                    <button onClick={handleGoogleAuth} className='w-full bg-red-600 py-2 font-bold rounded-md text-white'>Google Login</button>

            </div>
        </section>
    );
};

export default Registration;