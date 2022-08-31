import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button from "../Button-Component/ButtonComponent";
import { FormContainer, PaymentFromContainer } from "./paymentFormStyle";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const response = await fetch("/.netlify/functions/createPaymentIntent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 100 }),
    }).then((res) => {
      return res.json();
    });
    console.log(response);
  };

  return (
    <PaymentFromContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button type="submit" buttonType="invert">
          Pay Now
        </Button>
      </FormContainer>
    </PaymentFromContainer>
  );
};

export default PaymentForm;
