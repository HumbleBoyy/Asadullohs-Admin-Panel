import React from 'react'
import { signInWithGoogle } from '../../firebase'

const Login = () => {
  return (
    <>
      <div className='Login_wrapper'>
        <button onClick={signInWithGoogle} className='login_btn'>Login with Google</button>
      </div>
    </>
  )
}

export default Login
