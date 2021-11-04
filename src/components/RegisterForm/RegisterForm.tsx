import { useRef, useState } from 'react'
import './RegisterForm.scss'

const RegisterForm = () => {

  const password: React.MutableRefObject<any> = useRef(null)
  const password_repeat: React.MutableRefObject<any> = useRef(null)

  const [isPasswordLength, setIsPasswordLength] = useState(true)
  const [isPasswordMatch, setIsPasswordMatch] = useState(true)

  const validatePassword = () => {
    password.current.value && password_repeat.current.value && password.current.value.length >= 8
      ? setIsPasswordLength(true)
      : setIsPasswordLength(false)
    isPasswordLength &&
      (password.current.value && password_repeat.current.value) && password.current.value === password_repeat.current.value
      ? setIsPasswordMatch(true)
      : setIsPasswordMatch(false)
  }

  const submitForm = (event: any) => {
    event.preventDefault()
    if (isPasswordLength && isPasswordMatch) {
      console.log(event.target.name.value);
      console.log(event.target.lastname.value);
      console.log(event.target.password.value);
    }
  }

  return (
    <main className='register-wrapper'>
      <form className='register-form' onSubmit={submitForm}>
        <h2>Register Form</h2>
        <input
          type='text' name='name' id='name'
          placeholder={'Name'}
          autoComplete='name'
          required />
        <input
          type='text' name='lastname' id='lastname'
          placeholder={'Lastname'}
          autoComplete='family-name'
          required />
        <input
          type='email' name='email' id='email'
          placeholder={'Email'}
          autoComplete='email'
          required />
        <input
          type='password' name='password' id='password'
          placeholder={'Password'}
          autoComplete='new-password'
          ref={password}
          required />
        <input
          type='password' name='password_repeat' id='password_repeat'
          placeholder={'Confirm password'}
          autoComplete='new-password'
          ref={password_repeat}
          required />
        <div className='register-form__check'>
          <input type='checkbox' name='agree' id='agree' required />
          <label htmlFor='agree'> I agree to the Terms and Conditions and Privacy Policy</label>
        </div>
        <div className='errors'>
          {!isPasswordLength && <p> {'Your password must be at least 8 characters length'}</p>}
          {(isPasswordLength && !isPasswordMatch) && <p> {'Passwords did not match'} </p>}
        </div>
        <button type='submit' className='register-btn' onClick={validatePassword}>{'Register'}</button>
      </form>
    </main>
  )
}

export default RegisterForm
