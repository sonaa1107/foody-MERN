import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FoodPartnerLogin = () => {
    const nav=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;

        const res=await axios.post("http://localhost:3000/api/auth/food-partner/login",{
            email,
            password
        },{
            withCredentials:true
        })
         .then((res)=>{
        nav('/create-food');
        }).catch((err)=>{
            console.log(err);
        })
        
    }
  return (
    <div className='auth-page-wrapper'>
        <div className='auth-card' role='region' aria-labelledby='food-partner-login-page'>
            <header>
            <h1 id="partner-login-title" className="auth-page">Partner login</h1>
            <p className="auth-subtitle">Access your dashboard and manage orders.</p>
            </header>
            <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="business@example.com" autoComplete="email" />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Password" autoComplete="current-password" />
          </div>
          <button className="auth-submit" type="submit">Sign In</button>
        </form>
        <div className="auth-alt-action">
          New partner? <a href="/food-partner/register">Create an account</a>
        </div>
        </div>
        
    </div>
  )
}

export default FoodPartnerLogin