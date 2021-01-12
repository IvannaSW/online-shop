import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I8mE5BCSm4yDwbWCADi6pFt8CCZRj09zZPglrKJATzqtZKdB2hwFjHmU9JBpct0pDqqamxuvn9lOnyj0Bl4gGIu00qLbsDKIT";
  const onToken = (token) => alert("Your payment is successful");
  return (
    <StripeCheckout
      label="Pay Now"
      name="Online-Shop"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your prise is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
