import React from 'react'
import logo from "../../assets/images/logo.png"
import foot from "../../assets/images/foot.png"
import "./login.scss"

function Login() {
  return (
    <div className='login'>
        <div className="login__logo">
            <img src={logo} alt="" />
            <img src={foot} alt="" />
        </div>
        <form action="">
            <div className='login__input-1'>
                <label htmlFor="">Email Address*</label>
                <input required type="email" placeholder='Enter Your Email' />
            </div>
            <div className='login__input-2'>
                <label htmlFor="">Password*</label>
                <input required type="password" placeholder='Enter Your password' />
            </div>
            <div className="login__password">
                <div>
                    <input type="checkbox" />
                    <h2>Remember Me</h2>
                </div>
                <h3>Forgot Password?</h3>
            </div>
            <div className="login__end">
                <button className='login__button'>Login</button>
                <button className='signup'>Signup?</button>
            </div>
        </form>
    </div>
  )
}

export default Login