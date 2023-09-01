import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Root/Context/AuthProvider';

const Header = () => {
    const {user, logout} = useContext(AuthContext)

    const handleLogout = () => {
        try {
          logout();
          // Handle successful logout
        } catch (error) {
          console.error('Logout error:', error);
          // Handle logout error
        }
      };

    return (
        <header className='bg-red-300'>
            <div className="navbar w-4/5 m-auto">

                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">FireAuth</a>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to='/home' className='text-lg mx-2'>Home</Link></li>
                    <li><Link to='/about' className='text-lg mx-2'>About</Link></li>
                    
                    {
                        user?.uid ?
                        <>
                            <li><Link to='/profile' className='text-lg mx-2'>{user?.displayName}</Link></li>
                            <li><Link to='/' onClick={handleLogout} className='text-lg mx-2'>Logout</Link></li>
                        </>
                         :
                        
                         <>
                            <li><Link to='/login' className='text-lg mx-2'>Login</Link></li>
                            <li><Link to='/registration' className='text-lg mx-2'>Registration</Link></li>
                         </>
                    }

                    </ul>
                </div>

            </div>
        </header>
    );
};

export default Header;