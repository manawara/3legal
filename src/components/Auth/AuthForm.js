import React from 'react'
import { Form, useSearchParams, Link, useSubmit } from 'react-router-dom'
import Button from '../Button/Button'
import { InputUnderBottom } from '../Input/Input'
import { Checkbox } from '../Input/Input'
import styles from './Auth.module.scss'
const AuthForm = ({ method }) => {
  const [searchParams] = useSearchParams()
  const isLogin = searchParams.get('mode') === 'login'

  return (
    <Form method={method} className={styles.form}>
      <div className={styles['form-content']}>
        {!isLogin && <InputUnderBottom placeholder="Your name" type="text" name="name" id="name" />}
        <InputUnderBottom placeholder="Email address" type="email" name="email" id="email" required />
        <InputUnderBottom placeholder="Password" type="password" name="password" id="password" required />
        {!isLogin && (
          <Checkbox type="checkbox" name="policy" id="policy" required>
            <div>
              I agree with{' '}
              <Link to="/" target="_blank">
                <strong>Privacy Policy</strong>
              </Link>{' '}
              and{' '}
              <Link to="/" target="_blank">
                <strong>Terms of Use</strong>
              </Link>
            </div>
          </Checkbox>
        )}
      </div>

      <Button>{isLogin ? 'Sign In' : 'SignUp'}</Button>
    </Form>
  )
}

export default AuthForm
