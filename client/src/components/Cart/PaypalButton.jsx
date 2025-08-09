import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PaypalButton({ amount, onSuccess, onError }) {
  return (
    <PayPalScriptProvider options={{ clientId: "AfINSqfi6v-piSKQvdxe7MLE0kaAYOS6xkZWDpYlrvyCpHcy0wABfgAtTJJLf_LU5uICoWryY7Nmun7W" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }]
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  )
}

export default PaypalButton
