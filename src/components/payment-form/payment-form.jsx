import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button from '../button/button';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    //create payment intent use AWS lambda function

  };

  return (
    <div className="payment-form-container">
      <div className="form-container">
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button type="button" buttonType="inverted">
          {' '}
          Pay Now{' '}
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;
('');
