import React, { useContext } from 'react'
import CheckoutTour from '../../components/CheckoutTour'
import { useNavigate } from 'react-router-dom'
import '../ShippingScreen/ShippingScreen.css'
import { Formik } from 'formik';
import CheckoutCartItem from '../../components/CheckoutCartItem';
import Footer from '../../components/Footer/Footer';
import useFetchGetAuth from '../../hooks/useFetchGetAuth';
import { AuthContext } from '../../contexts/AuthProvider';

const EditShippingInfoScreen = () => {
    const navigation = useNavigate()
    const { data, reload, setReload } = useFetchGetAuth('http://127.0.0.1:8000/api/shipping-address')
    const { accessToken } = useContext(AuthContext)

    const AddShippingInfo = (values) => {
        fetch(`http://127.0.0.1:8000/api/shipping-address/edit/${data['order'][0]['order']['id']}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + accessToken
          },
          body: JSON.stringify({
            name: values.firstName,
            lastName: values.lastName,
            address: values.address,
            city: values.city,
            zipcode: values.postalCode,
            order: data['order'][0]['order']['id']
          })
        })
        .then(res => res.json())
        .then((data) => {
            navigation('/payment')
        })
        .catch(err => {
          console.log(err.message)
        })
    }

    return (
        <>
            <div className='CartContainer'>
                <div className='CartContainer1'>
                    <div className='CartContainerLeft1'>
                        <CheckoutTour type={'shipping'}/>
                        <div className='CartHeader'>
                            <div className='CartHeader1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartHeaderIcon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <h1>Edit Shipping Info</h1>
                            </div>
                        </div>
                        <div className='CartContainerRight'>
                            {data && <Formik
                                initialValues={{ firstName: data['ShippingInfo']['name'], lastName: data['ShippingInfo']['lastName'], address: data['ShippingInfo']['address'], city: data['ShippingInfo']['city'], postalCode: data['ShippingInfo']['zipcode']}}
                                onSubmit={(values) => AddShippingInfo(values)}
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
                                        Edit Info
                                    </button>
                                </form>
                            )}
                            </Formik>}
                        </div>
                    </div>
                    <div className='CartContainerRightMain1'>
                        <h2 className='CartContainerRightMain1H2'>Order Summary</h2>
                        <div className='CartContainerRightMain1Cart'>
                            {data && data['Response'] != 'Your Shopping Cart is Empty' ? 
                                data && data['order'].map((item) => (
                                    <CheckoutCartItem reload={reload} setReload={setReload} key={item.product.id} orderItemId={item.id} shortDescription={item.product.shortDescription} quantity={item.quantity} productId={item.product.id} image={item.product.frontImg} title={item.product.title} imageAlt={item.product.frontImgAlt} normalPrice={item.product.normalPrice} discountPrice={item.product.discountPrice} slug={item.product.slug}/>
                                )) 
                            : <h1>Shopping Cart Is Empty</h1>}
                            <div className='CartContainerRightMainDiv'>
                                <h3>Subtotal</h3>
                                <p>${data && data['order'][0]['order']['order_total']}</p>
                            </div>
                            <div className='CartContainerRightMainDiv'>
                                <h3>Shipping</h3>
                                <p>FREE</p>
                            </div>
                            <div className='CartContainerRightMainDiv'>
                                <h3>Total</h3>
                                <p>${data && data['order'][0]['order']['order_total']}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {data && <Footer/>}
        </>
    )
}

export default EditShippingInfoScreen