import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_PK}`);
import UseSelectedClasses from "../../../hook/UseSelectedAllClasses";
const Payment = () => {
 const [selectedItem] = UseSelectedClasses();
 const id = localStorage.getItem("id");
 const singleClass = selectedItem.find((item) => item._id === id);
  console.log(singleClass)
  const {price} = singleClass;
  console.log( "price",price)

  return ( 
    <div className="border md:p-10 p-5 shadow  rounded">
      <h1 className="text-4xl font-bold my-8 ">Welcome to payment page</h1>
      <p className="text-2xl font-semibold text-center mb-4">
        
        Your Total Price :
      </p>
      <Elements stripe={stripePromise}>
        <CheckOutForm singleClass={singleClass} price={price}  />
      </Elements>
    </div>
  );
};

export default Payment;
