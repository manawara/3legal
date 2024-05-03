import React from 'react'
import { Link, json, redirect, useActionData, useSearchParams } from 'react-router-dom'
import logo from '../../assets/chair_2.jpeg'
import styles from './AuthPage.module.scss'
import AuthForm from '../../components/Auth/AuthForm'
const SignUp = () => {
  const [searchParams] = useSearchParams()
  const isLogin = searchParams.get('mode') === 'login'
  const data = useActionData()

  return (
    <div className={styles.auth}>
      <div className={styles['auth-header']}>
        <span>3legant.</span>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles['auth-right']}>
        <h3>{isLogin ? 'Sign in' : 'Sign up'}</h3>
        <p>
          {isLogin ? `Don’t have an accout yet? ` : `Already have an account? `}
          {!isLogin && <Link to="/auth?mode=login">Sign in</Link>}
          {isLogin && <Link to="/auth?mode=signup">Sign Up</Link>}
        </p>
        <AuthForm method="post" />
        {data && data.message && data && (
          <p style={{ color: `${data.status >= 400 ? 'red' : 'green'}` }}>{data.message}</p>
        )}
      </div>
    </div>
  )
}

export default SignUp
export async function action({ params, request }) {
  try {
    const data = await request.formData()
    const reqUrl = new URL(request.url).searchParams
    const mode = reqUrl.get('mode')
    if (mode !== 'signup' && mode !== 'login') {
      throw json({ message: 'Not supported mode!' }, { status: 422 })
    }

    let url
    let authData = {}
    if (mode === 'login') {
      url = 'http://localhost:1337/api/auth/local'
      authData = {
        identifier: data.get('email'),
        password: data.get('password'),
      }
    } else {
      url = 'http://localhost:1337/api/auth/local/register/'
      authData = {
        name: data.get('name'),
        username: data.get('name'),
        email: data.get('email'),
        password: data.get('password'),
      }
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authData),
    })

    if (response.status === 422 || response.status === 401) {
      return
    }

    if (!response.ok) {
      throw json({ message: "You couldn't auth!" }, { status: 500 })
    }

    const reqData = await response.json()
    const token = reqData.jwt
    localStorage.setItem('token', token)
  } catch (e) {
    return { message: 'Auth failed!', status: 400 }
  }

  return { message: 'Auth successful!' }
}
