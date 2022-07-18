import React, { useState } from 'react';
import { Title } from '@atom/Title';
import { Option } from '@molecule/Option';
import { ScPaymentContainer, ScPayment } from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectPayment, setPayment } from '@store/payment';

const example = [
  {
    id: 'EW',
    title: 'e-Wallet',
    number: '1,500,000 left',
    value: 'e-Wallet',
  },
  {
    id: 'TF',
    title: 'Transfer',
    value: 'Bank transfer',
  },
  {
    id: 'VA',
    title: 'Virtual Account',
    value: 'Virtual Account Transfer',
  },
];

export const Payment = () => {
  const {
    data: { payment },
  } = useSelector(selectPayment);
  const dispatch = useDispatch();

  const handlePayment = (payload: any) => {
    dispatch(
      setPayment({
        paymentDescription: payload.value,
        payment: payload.title,
        id: payload.id,
      }),
    );
  };

  return (
    <ScPaymentContainer>
      <Title text="Payment" size="large" />
      <ScPayment>
        {example.map((data) => {
          return (
            <Option
              key={data.id}
              active={data.id === payment.id}
              title={data.title}
              number={data.number}
              onClick={() => handlePayment(data)}
            />
          );
        })}
      </ScPayment>
    </ScPaymentContainer>
  );
};
