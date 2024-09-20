import React from 'react'
import { signInWithGoogle } from '../../firebase'

const Login = () => {
  return (
    <>
       <div className="login_btn_wrapper">
          <button className='login_btn' onClick={signInWithGoogle}>LogIn with google</button>
       </div>
    </>
  )
}

export default Login
