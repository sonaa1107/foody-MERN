import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'  

const UserRegister = () => {

    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
    e.preventDefault();

    const firstName=e.target.firstName.value;
    const lastName=e.target.lastName.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    
    const response=await axios.post("http://localhost:3000/api/auth/user/register",{
        name:firstName+" "+lastName,
        email,
        password
    },{
        withCredentials:true
    })
    .then((res)=>{
        navigate('/');
    }).catch((err)=>{
        console.log(err);
    })
}

  return (
    <div className='auth-page-wrapper'>
        <div className='auth-card' role='region' aria-labelledby='user-register-page'>
            <header>
                <h1 id='user-register-page' className='auth-title'>
                    Create your account
                </h1>
                <p className='auth-subtitle'> Join to explore and enjoy delicious meals</p>
            </header>
            <nav className='auth-alt-action' style={{marginTop:'-4px'}}>
                <strong style={{ fontWeight: 600 }}> Switch:</strong>
                <Link to='/user/register'>User</Link> •
                <Link to='/food-partner/register'>Food Partner</Link>
            </nav>
            <form className='auth-form' onSubmit={handleSubmit}>
                <div className='two-col'>
                    <div className='field-group'>
                        <label htmlFor="firstName"> First Name</label>
                        <input type="text" id='lirstName' name='firstName' placeholder='Kevin' autoComplete='given-name' />
                    </div>
                    <div className='field-group'>
                        <label htmlFor="lastName"> Last Name</label>
                        <input type="text" id='lastName' name='lastName' placeholder='Doe' autoComplete='family-name'/>
                    </div>
                </div>
                <div className='field-group'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name='email' placeholder='xyz@gmail.com' autoComplete='email'/>
                </div>
                <div className='field-group'>
                    <label htmlFor="password"> Password</label>
                    <input type="password" id='password' name='password' placeholder='......' autoComplete='new-password'/>
                </div>
                <button className='auth-submit' type='submit'>Sign Up</button>
            </form>
            <div className='auth-alt-action'>
                Already have an account? <Link to="/user/login"> Sign in</Link>
            </div>
        </div>
    </div>
  )
}

export default UserRegister