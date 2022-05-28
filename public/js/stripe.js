/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51H5YhMGixzZhBFlb3MOFQjSQcqoWdUpOU6pPNGdaVj1QPJGZbOZ354qgGh7ytrZdXooyMz3On7y3ttB5ZznuQw1O00LsDBNI8V');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });

  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
