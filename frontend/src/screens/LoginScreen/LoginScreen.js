import React from 'react'
import './LoginScreen.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'
import { Formik } from 'formik';

const LoginScreen = () => {
    const { loginUser } = useContext(AuthContext)
    const navigation = useNavigate()

    return (
        <div className='LoginContainer'>
            <div className='LoginContainer1'>
                <div className='LoginContainer2'>
                    <Formik
                        initialValues={{ username: '', password: ''}}
                        onSubmit={(values) => loginUser(values)}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <form className='LoginDiv' onSubmit={handleSubmit}>
                                <div className='LoginDivHeader'>
                                    <h1>Welcome back!</h1>
                                </div>
                                <div className='LoginInpDiv'>
                                    <p>Username</p>
                                    <input
                                        type="text"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                        placeholder='Username'
                                        className='LoginInp'
                                    />
                                    <p className='ShippingFormErrorP'>{errors.username && touched.username && errors.username}</p>
                                </div>
                                <div className='LoginInpDiv'>
                                    <p>Password</p>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder='Password'
                                        className='LoginInp'
                                    />
                                    <p className='ShippingFormErrorP'>{errors.password && touched.password && errors.password}</p>
                                </div>
                                <div className='LoginBtnDiv'>
                                    <button type='submit'>Login</button>
                                </div>
                                <div className='LoginDivInfo'>
                                    <p>Don't have account?</p>
                                    <Link to='/register' className='LoginDivInfoLink'>Register</Link>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen