import React from 'react'
import CheckoutTour from '../../components/CheckoutTour'
import { useNavigate } from 'react-router-dom'
import './ShippingScreen.css'
import { Formik } from 'formik';
import CheckoutCartItem from '../../components/CheckoutCartItem';
import CartItem from '../../components/CartItem';

const ShippingScreen = () => {
    const navigation = useNavigate()

    return (
        <div className='CartContainer'>
            <div className='CartContainer1'>
                <div className='CartContainerLeft1'>
                    <CheckoutTour type={'shipping'}/>
                    <div className='CartHeader'>
                        <div className='CartHeader1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartHeaderIcon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <h1>Shipping Info</h1>
                        </div>
                    </div>
                    <div className='CartContainerRight'>
                        <Formik
                            initialValues={{ firstName: '', lastName: '', address: '', city: '', postalCode: '' }}
                            onSubmit={(values) => navigation('/payment')}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit} className='ShippingForm'>
                                <div className='ShippingFormDiv'>

                                    <div className='ShippingFormDivNext'>
                                        <label className='ShippingFormLabel'>First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                            placeholder='First Name'
                                            className='ShippingInp'
                                        />
                                        <p className='ShippingFormErrorP'>{errors.firstName && touched.firstName && errors.firstName}</p>
                                    </div>

                                    <div className='ShippingFormDivNext'>
                                        <label className='ShippingFormLabel'>Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                            placeholder='Last Name'
                                            className='ShippingInp'
                                        />
                                        <p className='ShippingFormErrorP'>{errors.lastName && touched.lastName && errors.lastName}</p>
                                    </div>
                                   
                                </div>

                                <div className='ShippingFormDivNext'>
                                    <label className='ShippingFormLabel'>Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}
                                        placeholder='Address'
                                        className='ShippingInp'
                                    />
                                    <p className='ShippingFormErrorP'>{errors.address && touched.address && errors.address}</p>
                                </div>
                                
                                <div className='ShippingFormDiv'>

                                    <div className='ShippingFormDivNext'>
                                        <label className='ShippingFormLabel'>City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.city}
                                            placeholder='City'
                                            className='ShippingInp'
                                        />
                                        <p className='ShippingFormErrorP'>{errors.city && touched.city && errors.city}</p>
                                    </div>

                                    <div className='ShippingFormDivNext'>
                                        <label className='ShippingFormLabel'>Postal Code</label>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.postalCode}
                                            placeholder='Postal Code'
                                            className='ShippingInp'
                                        />
                                        <p className='ShippingFormErrorP'>{errors.postalCode && touched.postalCode && errors.postalCode}</p>
                                    </div>
                                    
                                </div>
                                
                                <button type="submit" className='ShippingBtn'>
                                    Go To Payment
                                </button>
                            </form>
                        )}
                        </Formik>
                    </div>
                </div>
                <div className='CartContainerRightMain1'>
                    <h2 className='CartContainerRightMain1H2'>Order Summary</h2>
                    <div className='CartContainerRightMain1Cart'>
                        <CheckoutCartItem/>
                        <CheckoutCartItem/>
                        <div className='CartContainerRightMainDiv'>
                            <h3>Subtotal</h3>
                            <p>$67.98</p>
                        </div>
                        <div className='CartContainerRightMainDiv'>
                            <h3>Shipping</h3>
                            <p>FREE</p>
                        </div>
                        <div className='CartContainerRightMainDiv'>
                            <h3>Total</h3>
                            <p>$67.98</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShippingScreen