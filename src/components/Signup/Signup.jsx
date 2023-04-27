import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Signup = () => {
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')
  const {createUser} = useContext(AuthContext)


  const handleSignUp = event =>{
    setError('')
    event.preventDefault()

    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if(password !== confirm){
      setError('Password is not match')
      return
    }
    console.log(email,password,confirm);

    createUser(email,password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      setError('')
      setSuccess('account created successfully')
    })
    .catch(error => {
      setError(error.message)
      setSuccess('')
      console.log(error);
    })

  }
  return (
    <div className='shadow-orange-400 shadow-inner form-container'>
            <h2 className='form-title mt-2'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input className='bg-gray-50 ' type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input className='bg-gray-50 ' type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input className='bg-gray-50 ' type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit hover:cursor-pointer' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link className='text-green-800 font-semibold' to="/login">Login</Link></small></p>
            <p className='text-error'>{error}</p>
            <p className='text-green-600'>{success}</p>
        </div>
  );
};

export default Signup;