
import React from 'react'
import axios   from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

    const nav=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();

        const email=e.target.email.value;
        const password=e.target.password.value;

        const res=await axios.post("http://localhost:3000/api/auth/user/login",{
            email,
            password
        },{
            withCredentials:true
        })
        .then((res)=>{
        nav('/');
        }).catch((err)=>{
        console.log(err);
    })
    }
  return (
    <div className='auth-page-wrapper'>
        <div className='auth-card' role='region' aria-labelledby='user-login-page'>
            <header>
            <h1 id="user-login-page" className="auth-title">Welcome back</h1>
            <p className="auth-subtitle">Sign in to continue your food journey.</p>
            </header>
            <form className='auth-form' onSubmit={handleSubmit}>
                <div className='field-group'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name='email' placeholder='xyz@gmail.com' autoComplete="email"></input>
                </div>
                <div className='field-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name='password' placeholder='......' autoComplete="current-password"></input>
                </div>
                <button className='auth-submit' type='submit'> sign in</button>
            </form>
            <div className='auth-alt-action'>
                New here? <a href="/user/register">Create account</a>
            </div>
        </div>
    </div>
  )
}

export default UserLogin