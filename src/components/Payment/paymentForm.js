import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../Button-Component/ButtonComponent";
import { PaymentFromContainer, FormContainer } from "./paymentFormStyle";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    console.log(response);
    const {
      paymentIntent: { client_secret },
    } = response;

    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        console.log("pass");
        alert("Payment Successful");
      }
    }
  };
  return (
    <PaymentFromContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Container:</h2>
        <CardElement />
        <Button disabled={isProcessingPayment} buttonType="invert">
          Pay Now
        </Button>
      </FormContainer>
    </PaymentFromContainer>
  );
};

export default PaymentForm;
