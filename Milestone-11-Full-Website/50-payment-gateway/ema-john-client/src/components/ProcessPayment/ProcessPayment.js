import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ii6t5LB8gh0c8Eo6SW1Piaa1YI4WxZ4cKPvGyZczQCBGKtu4DdWG037DuyeB9o97yL0ihyMkER69l1cHYZu349c00vx4Bmrjc');

const ProcessPayment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm></SimpleCardForm>
            </Elements>

        </div>
    );
};

export default ProcessPayment;