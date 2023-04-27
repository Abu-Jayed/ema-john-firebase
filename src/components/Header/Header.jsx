import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
        .then(result =>{})
        .catch(err => console.log(err))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                {
                    user? <span className='ml-2 text-green-500'>{user.email} <button className='text-red-300' onClick={handleLogout}>Signout</button></span> : <></>
                }
                {/* {
                    user ? <span className='text-white'><p>{user.email}</p><button className='bg-gray-500' onClick={handleLogout}>signout</button></span> : <Link to='/login'>Login</Link>
                } */}
                
            </div>
        </nav>
    );
};

export default Header;