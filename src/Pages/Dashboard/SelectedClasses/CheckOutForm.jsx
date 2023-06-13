import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/UseAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";

const CheckoutForm = () => {
   const price = localStorage.getItem("price");
   console.log("from payment", price);
  const stripe = useStripe();
  const [cardError, setCardError] = useState();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret,setClientSecret] = useState('')
  const elements = useElements();
  const {user} = useContext(AuthContext)

  useEffect(() => {
    console.log("from checkOutForm",price)
    if (price) {
      axiosSecure.post("/content-payment-intent", { price }).then((res) => {
        console.log("client secret key ", res.data.clientSecret);
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
        <button className="btn btn-warning btn-sm mt-6" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      <p className="text-red ml-8 mt-4 text-red-600">{cardError}</p>
    </>
  );
};

export default CheckoutForm;
