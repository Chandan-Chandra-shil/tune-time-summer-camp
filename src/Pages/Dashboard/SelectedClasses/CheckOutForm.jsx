import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/UseAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import "./CheckOutForm.css"
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({singleClass,price}) => {
 
  const stripe = useStripe();
  const [cardError, setCardError] = useState();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transactionId,setTransactionId] = useState('')
  const elements = useElements();
  const {user} = useContext(AuthContext)
    const navigate = useNavigate() 
  useEffect(() => {
    
    if (price) {
      axiosSecure.post("/content-payment-intent", {price}).then((res) => {
       
        setClientSecret(res.data.clientSecret);
      });
   }
  },[price,axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    console.log("form card", card);
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name:user?.displayName || 'anonymous',
          email:user?.email || 'unknown'
        }
      }
    })
    if (confirmError) {
      console.log(confirmError)
    }
    console.log(paymentIntent)
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id)
      const transactionId = paymentIntent.id;
      // save payment information
      const payment = {
        email: user?.email,
        name: user?.displayName,
        price: singleClass.price,
        image: singleClass.image,
        className:singleClass.name,
        instructor_name:singleClass.instructor_name,
        status: 'enrolled',
        date: new Date(),
        transactionId: paymentIntent.id,
      };
       
      axiosSecure.post('/payments', payment)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            //display confirm
            navigate("/dash-board/selected-classes")
          }
      })
      }

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-warning btn-sm mt-6"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && (<p className="text-red ml-8 mt-4 text-red-600">{cardError}</p> )}
      {transactionId && (<p className="text-red ml-8 mt-4 text-green-600">Transaction complete with transactionId{transactionId}</p> )}
      
    </>
  );
};

export default CheckoutForm;
