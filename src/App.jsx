import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')


  const [message, setMessage] = useState('')
  const findErrors = () => {
    const errors = []

    if (!email || !password || !passwordConfirm) errors.push('All fields must be filled in')
    if([...email].filter(i => i === '@').length !==1 ) {
      errors.push('An email must have exactly one @ sign')
    }
    if(password.length < 8 ) errors.push('Password must be at least 8 characters or more')
    if(password !== passwordConfirm) errors.push('Password must match')

    return errors
  }

  const handleSubmit = e => {
    e.preventDefault()
    
    const errors = findErrors()
    setMessage(errors.length ? errors.join(', ') : 'User created')
  }
  return (
    <div className="App">
      <div className='form'>
      <form onSubmit={handleSubmit}>
        <h2> Sign up</h2>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' onChange={e => setEmail(e.target.value)}/>
       
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' onChange={e => setPassword(e.target.value)}/>

        <label htmlFor='PasswordConfirm'>Password Confirm</label>
        <input type='password' name='password-confirm' onChange={e => setPasswordConfirm(e.target.value)}/>
        
        <input className='btn' type='submit' value='Submit'/>
      </form>
    
      </div> 
      <h2>{message}</h2>
    </div>
  )
}

export default App