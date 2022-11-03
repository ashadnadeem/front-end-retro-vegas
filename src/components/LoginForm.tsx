import React from 'react';

export default function LoginForm() {
  return (
    <form>
      <div className='form-inner'>
        <h2>Sign in</h2>
        <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email"/>
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" id="password"/>
        </div>
      </div>
    </form>
  )
}
