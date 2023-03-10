import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'

const CheckoutForm = ({orderId}) => {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.confirmPayment({
        elements,
            confirmParams: {
                return_url: `http://localhost:3000/confirm-order/${orderId}`,
            },
        });

        if (result.error) {
            console.log(result.error.message);
            alert(result.error.message)
        } else {}
    }

    return (
        <form onSubmit={handleSubmit} className='checkoutForm'>
            <PaymentElement/>
            <button className='CartContainerRightMainDivBtn' style={{marginTop: 20}}>Order & Pay</button>
        </form>
    )
}

export default CheckoutForm