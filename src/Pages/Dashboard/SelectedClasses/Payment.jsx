import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";



const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_PK}`);

const Payment = () => {
 
  

  return ( 
    <div className="border md:p-10 p-5 shadow  rounded">
      <h1 className="text-4xl font-bold my-8 ">Welcome to payment page</h1>
      <p className="text-2xl font-semibold text-center mb-4">
        
        Your Total Price :
      </p>
      <Elements stripe={stripePromise}>
        <CheckOutForm   />
      </Elements>
    </div>
  );
};

export default Payment;
