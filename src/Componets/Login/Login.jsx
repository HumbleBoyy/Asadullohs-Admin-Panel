import React from 'react'
import { loginWithGoogle } from '../../firebase'

const Login = () => {
  return (
    <>
       <div className="login_btn_wrapper">
          <button className='login_btn' onClick={loginWithGoogle}>LogIn with google</button>
       </div>
    </>
  )
}

export default Login
