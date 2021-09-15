import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // stripe handle price with cent, but our app use dollar as default value
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JZtCuAVrdJ2OpdawjQa4kfMJP00IOTGa3wvl3LLriYm0Hnm4I07Lk0i6YBA5JrE8Ua2hAITAPUuVI6efeTLCEP500TH9lU0bY";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    //   stripe checkout github: https://github.com/azmenak/react-stripe-checkout
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
