import React from 'react'
import './SignUpScreen.css'

function SignUpScreen() {
  const register = (e) => {
    e.preventDefault();
  }

  const signIn = (e)=>{
    e.preventDefault(); 
  }

  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button onClick={signIn} type='submit'>Sign In</button>
        <h4><span className='signUpScreen__gray'>New to Netflix? </span>
          <span onClick={register} className='signUpScreen__link'>Sign Up now</span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen