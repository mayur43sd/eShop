import { CardElement ,useElements ,useStripe } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import "./payment-form.styles.scss"
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { getCurrentUser } from "../../store/user/user.selector";

const PaymentForm = () => {

    const amount = useSelector(selectCartTotal);
    const user = useSelector(getCurrentUser)

    const stripe = useStripe();
    const elements = useElements();
    const [ isProcessingPayment , setIsProcessingPayment] = useState(false)

    const paymentHandler = async(e) => {
        e.preventDefault();

        if(!stripe || !elements)
        return;
        
        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/create-payment-intent' , {
            method:'post',
            headers:{
                'Content-Type': 'application/json'
            },

            body:JSON.stringify({ amount:amount*100 })
        }).then(res => res.json());

        const client_secrete = response.paymentIntent.client_secret;
        

        const paymentResult = await stripe.confirmCardPayment(client_secrete , {
            payment_method:{
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user ? user.displayName : 'Guest'
                }
            }
        })
        setIsProcessingPayment(false);

        if(paymentResult.error){
        alert(paymentResult.error.message)
        }
        else if(paymentResult.paymentIntent.status==='succeeded')
        {
            alert('payment succeeded')
        }
    }

    return (<div className="payment-form-container">
    <form onSubmit={paymentHandler}>
    <h2>Credit card payment</h2>
    
        <CardElement />
        <Button disabled={isProcessingPayment} buttonType='inverted' > pay now</Button>
        </form>
        </div>)
}

export default PaymentForm